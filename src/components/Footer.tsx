import { Mail, Phone, ShieldCheck } from "lucide-react";
import LogoMark from "@/components/LogoMark";

// Íconos de redes como SVG propios (lucide-react ya no incluye íconos de marcas)
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t-4 border-brand-red bg-brand-dark py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark alt="" className="h-14 w-14 ring-2 ring-white" />
            <p className="text-lg font-bold">
              ELECTRO<span className="text-brand-orange">PATRIMONIO</span>
            </p>
          </div>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/80">
            <ShieldCheck className="h-4 w-4" />
            Cuadrilla Certificada SEC
          </p>
        </div>

        {/* Datos de contacto de ejemplo: reemplázalos por los reales */}
        <div className="space-y-2 text-sm text-white/80">
          <p className="font-semibold text-white">Contacto</p>
          <a
            href="mailto:electropatrimonio@outlook.com"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Mail className="h-4 w-4 shrink-0" />
            electropatrimonio@outlook.com
          </a>
          <a
            href="tel:+56933015465"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Phone className="h-4 w-4 shrink-0" />
            +56 9 3301 5465
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Síguenos</p>
          <div className="mt-3 flex gap-3">
            <a href="https://www.instagram.com/electropatrimonio/" aria-label="Instagram" className="rounded-full bg-white/10 p-2 transition hover:bg-brand-red">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/electropatrimonio/" aria-label="Facebook" className="rounded-full bg-white/10 p-2 transition hover:bg-brand-red">
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/15 px-4 pt-6 text-center text-xs text-white/60 sm:px-6">
        © {new Date().getFullYear()} ELECTROPATRIMONIO. Todos los derechos reservados.
      </div>
    </footer>
  );
}