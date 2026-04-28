import { whatsappLinks } from '@/lib/whatsapp';

export function EcommerceHeader() {
  return (
    <header className="border-b border-pietra-sand/30 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 md:grid-cols-[180px_1fr_auto] md:items-center">
        <div>
          <p className="text-xl font-bold text-pietra-black">PIETRA</p>
          <p className="text-xs uppercase tracking-[0.2em] text-pietra-green">Premium Surfaces</p>
        </div>
        <input
          className="w-full rounded-full border border-pietra-sand/50 bg-pietra-ivory px-4 py-2 text-sm outline-none ring-pietra-green focus:ring"
          placeholder="Buscar materiales, estilos o ambientes..."
          type="text"
        />
        <div className="flex items-center gap-3 text-sm">
          <span>♡ Favoritos</span>
          <span>◉ Cuenta</span>
          <a className="rounded-full bg-pietra-green px-4 py-2 font-semibold text-white" href={whatsappLinks.quote}>
            Solicitar cotización
          </a>
        </div>
      </div>
    </header>
  );
}
