# ElectroPatrimonio - Guía de Instalación

## Requisitos
- Node.js 18.18+ (recomendado 20)
- npm o pnpm

## Pasos
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Configurar variables de entorno:
   ```bash
   cp .env.example .env
   ```
   Edita `.env` y completa:
   - `DATABASE_URL`: déjalo como está para SQLite local.
   - `RESEND_API_KEY`: tu API key de https://resend.com
   - `CONTACT_EMAIL`: correo donde recibirás las solicitudes.
3. Inicializar la base de datos:
   ```bash
   npx prisma db push
   ```
4. Correr en desarrollo:
   ```bash
   npm run dev
   ```
5. Abrir http://localhost:3000

## Notas importantes
- **Logo:** reemplaza `public/logo.png` por el logo real (cuadrado, mínimo 256x256 px).
- **WhatsApp:** cambia `https://wa.me/56900000000` en `src/components/Navbar.tsx` por el número real (formato 569XXXXXXXX).
- **Correos Resend:** sin dominio verificado, Resend solo permite enviar al correo de tu propia cuenta. Para producción, verifica tu dominio y cambia el `from` en `src/app/actions.ts`.
- Si `RESEND_API_KEY` no está configurada, el formulario igual guarda la solicitud en la base de datos y omite el correo.
- Para ver las solicitudes guardadas: `npx prisma studio`.
- SQLite es solo para desarrollo; en producción usa PostgreSQL (cambia `provider` en `prisma/schema.prisma`).

## Estructura
```
electropatrimonio/
├── prisma/schema.prisma      # Modelo Lead
├── public/logo.png           # Logo (placeholder)
└── src/
    ├── app/
    │   ├── layout.tsx        # Layout + SEO + tipografía
    │   ├── page.tsx          # Landing
    │   ├── globals.css
    │   └── actions.ts        # Server Action submitLead
    └── components/           # Navbar, Hero, Services, WhyUs, About, ContactForm, Footer
```
