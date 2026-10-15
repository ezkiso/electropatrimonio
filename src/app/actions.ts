"use server";

import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

// Instancia única de Prisma (evita abrir múltiples conexiones en desarrollo)
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Esquema de validación del formulario
const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre (mínimo 2 caracteres).")
    .max(120, "El nombre no puede superar los 120 caracteres."),
  email: z
    .string()
    .trim()
    .max(254, "El correo no puede superar los 254 caracteres.")
    .email("Ingresa un correo válido."),
  phone: z
    .string()
    .trim()
    .min(8, "Ingresa un teléfono válido.")
    .max(30, "El teléfono no puede superar los 30 caracteres.")
    .regex(/^[+\d\s()-]+$/, "El teléfono solo puede contener números, +, espacios y guiones."),
  serviceType: z.enum([
    "Instalaciones de Alumbrado",
    "Calefacción y Fuerza Motriz",
    "Trabajos Permitidos (reparación, mantenimiento, documentación)",
  ], { message: "Selecciona un tipo de servicio válido." }),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres).")
    .max(3000, "El mensaje no puede superar los 3000 caracteres."),
});

// Escapa HTML para evitar inyección en el correo
function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Estado que devuelve la acción (consumido por useActionState)
export type LeadState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[] | undefined>;
  values?: Record<string, string>;
};

export async function submitLead(
  _prevState: LeadState | null,
  formData: FormData
): Promise<LeadState> {
  if (String(formData.get("website") ?? "").trim()) {
    return {
      success: false,
      errors: { _form: ["No pudimos procesar tu solicitud."] },
    };
  }

  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    serviceType: String(formData.get("serviceType") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  // 1) Validar con Zod
  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      values: raw, // se devuelven para no perder lo escrito
    };
  }
  const data = parsed.data;

  // 2) Guardar el Lead en la base de datos
  try {
    await prisma.lead.create({ data });
  } catch (error) {
    console.error("Error guardando el lead:", error);
    return {
      success: false,
      errors: { _form: ["No pudimos guardar tu solicitud. Intenta nuevamente."] },
      values: raw,
    };
  }

  // 3) Enviar correo con Resend (si falla, el lead ya quedó guardado)
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  if (apiKey && to && !apiKey.includes("tu_api_key")) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "ElectroPatrimonio <onboarding@resend.dev>", // cambia por tu dominio verificado
        to,
        replyTo: data.email,
        subject: `Nueva solicitud: ${data.serviceType}`,
        html: `
          <h2>Nueva solicitud desde la web</h2>
          <p><strong>Nombre:</strong> ${esc(data.name)}</p>
          <p><strong>Email:</strong> ${esc(data.email)}</p>
          <p><strong>Teléfono:</strong> ${esc(data.phone)}</p>
          <p><strong>Servicio:</strong> ${esc(data.serviceType)}</p>
          <p><strong>Mensaje:</strong><br/>${esc(data.message).replace(/\n/g, "<br/>")}</p>
        `,
      });
    } catch (error) {
      console.error("Error enviando correo con Resend:", error);
    }
  } else {
    console.warn("RESEND_API_KEY / CONTACT_EMAIL no configurados: se omite el correo.");
  }

  return {
    success: true,
    message: "¡Gracias! Recibimos tu solicitud y te contactaremos a la brevedad.",
  };
}
