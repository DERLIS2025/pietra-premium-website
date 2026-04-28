import { whatsappLinks } from '@/lib/whatsapp';

export function TopBar() {
  return (
    <div className="bg-pietra-black text-xs text-pietra-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
        <a className="hover:text-pietra-sand" href={whatsappLinks.general}>WhatsApp directo</a>
        <p className="text-pietra-sand">Asunción, Paraguay · Instalación profesional</p>
        <a className="hover:text-pietra-sand" href="https://instagram.com" target="_blank">Instagram</a>
      </div>
    </div>
  );
}
