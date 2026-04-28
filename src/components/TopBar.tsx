import { whatsappLinks } from '@/lib/whatsapp';

export function TopBar() {
  return (
    <div className="bg-pietra-black text-xs text-pietra-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
        <p className="font-medium text-pietra-sand">Semana de asesoría premium · Cupos limitados</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-pietra-sand" href={whatsappLinks.general}>WhatsApp</a>
          <span className="text-pietra-ivory/60">Asunción + Gran Asunción</span>
          <a className="hover:text-pietra-sand" href="https://instagram.com" target="_blank">Instagram</a>
        </div>
      </div>
    </div>
  );
}
