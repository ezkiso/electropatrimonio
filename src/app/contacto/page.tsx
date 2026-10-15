import ContactForm from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contacto y cotizaciones",
  description:
    "Cuéntanos sobre tu proyecto eléctrico domiciliario y solicita una cotización a ELECTROPATRIMONIO.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <main className="border-t-4 border-brand-red pt-20">
      <ContactForm />
    </main>
  );
}
