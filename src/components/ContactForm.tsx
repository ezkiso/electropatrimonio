"use client";

import { useActionState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitLead, type LeadState } from "@/app/actions";

// Las 3 categorías de servicio
const serviceOptions = [
  "Instalaciones de Alumbrado",
  "Calefacción y Fuerza Motriz",
  "Trabajos Permitidos (reparación, mantenimiento, documentación)",
];

const inputClass =
  "mt-1 w-full rounded-xl border border-brand-green/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/15";

// Muestra el primer error de un campo
function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;
  return <p className="mt-1 text-xs text-brand-red">{messages[0]}</p>;
}

export default function ContactForm() {
  // state = resultado de la acción; isPending = enviando (loading)
  const [state, formAction, isPending] = useActionState<LeadState | null, FormData>(submitLead, null);
  const errors = state?.errors;
  const values = state?.values;

  return (
    <section className="bg-brand-green-light py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Cotiza tu proyecto</h1>
          <p className="mt-4 text-brand-dark/70">Cuéntanos qué necesitas y te contactaremos a la brevedad.</p>
        </div>

        {/* Mensaje de éxito */}
        {state?.success ? (
          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-white p-6 shadow-soft">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-green" />
            <p className="text-sm font-medium">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="mt-10 space-y-5 rounded-2xl bg-white p-6 shadow-soft sm:p-8">
            {/* Error general */}
            {errors?._form && (
              <div className="flex items-start gap-2 rounded-xl bg-brand-red-light p-3 text-sm text-brand-red">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                {errors._form[0]}
              </div>
            )}

            <div>
              <label htmlFor="name" className="text-sm font-medium">Nombre</label>
              <input id="name" name="name" type="text" maxLength={120} required defaultValue={values?.name} className={inputClass} placeholder="Tu nombre" />
              <FieldError messages={errors?.name} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" maxLength={254} required defaultValue={values?.email} className={inputClass} placeholder="tu@correo.cl" />
                <FieldError messages={errors?.email} />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium">Teléfono</label>
                <input id="phone" name="phone" type="tel" maxLength={30} required defaultValue={values?.phone} className={inputClass} placeholder="+56 9 1234 5678" />
                <FieldError messages={errors?.phone} />
              </div>
            </div>

            <div>
              <label htmlFor="serviceType" className="text-sm font-medium">Tipo de Servicio</label>
              <select id="serviceType" name="serviceType" required defaultValue={values?.serviceType ?? ""} className={inputClass}>
                <option value="" disabled>Selecciona una opción</option>
                {serviceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <FieldError messages={errors?.serviceType} />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
              <textarea id="message" name="message" rows={5} minLength={10} maxLength={3000} required defaultValue={values?.message} className={inputClass} placeholder="Describe brevemente el trabajo que necesitas..." />
              <FieldError messages={errors?.message} />
            </div>

            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="website">Deja este campo vacío</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Enviar solicitud
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
