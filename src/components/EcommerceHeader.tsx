import { whatsappLinks } from '@/lib/whatsapp';

export function EcommerceHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-pietra-sand/30 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 py-3 md:grid-cols-[190px_1fr_auto] md:items-center">
        <div>
          <p className="text-2xl font-extrabold tracking-tight text-pietra-black">PIETRA</p>
          <p className="text-[11px] uppercase tracking-[0.24em] text-pietra-green">Marmolería premium</p>
        </div>
        <div className="relative">
          <input
            className="w-full rounded-full border border-pietra-sand/60 bg-pietra-ivory px-5 py-3 pr-12 text-sm outline-none ring-pietra-green focus:ring"
            placeholder="Buscá por material, ambiente, color o estilo..."
            type="text"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-pietra-green">⌕</span>
        </div>
        <div className="flex items-center justify-between gap-3 text-sm md:justify-end">
          <button aria-label="Favoritos" className="rounded-full border border-pietra-sand/50 px-3 py-2">♡</button>
          <button aria-label="Cuenta" className="rounded-full border border-pietra-sand/50 px-3 py-2">👤</button>
          <a className="rounded-full bg-pietra-green px-4 py-2 font-semibold text-white" href={whatsappLinks.quote}>Solicitar cotización</a>
        </div>
      </div>
    </header>
  );
}
