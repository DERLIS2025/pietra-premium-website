'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { menuCategories } from '@/data/categories';
import { whatsappLinks } from '@/lib/whatsapp';

export function EcommerceHeader() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [showSearchMobile, setShowSearchMobile] = useState(false);

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    const term = query.trim();

    if (!term) {
      router.push('/materiales');
      return;
    }

    router.push(`/materiales?search=${encodeURIComponent(term)}`);
    setShowSearchMobile(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-pietra-sand/40 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Link className="flex min-w-0 items-center gap-2" href="/">
            <img
              alt="Marmolería Pietra"
              className="h-9 w-auto object-contain"
              src="/logo/logo-negro.jpeg"
            />
            <div className="min-w-0">
              <p className="truncate text-lg font-extrabold leading-tight text-pietra-black">
                PIETRA
              </p>
              <p className="hidden text-[10px] uppercase tracking-[0.2em] text-pietra-green sm:block">
                Marmolería premium
              </p>
            </div>
          </Link>

          <form className="ml-2 hidden flex-1 md:block" onSubmit={submitSearch}>
            <div className="relative">
              <input
                className="w-full rounded-full border border-pietra-sand/60 bg-pietra-ivory px-4 py-2.5 pr-12 text-sm text-pietra-black outline-none ring-pietra-green focus:ring"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar material, color, ambiente..."
                type="search"
                value={query}
              />
              <button
                aria-label="Buscar"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-pietra-green px-3 py-1.5 text-xs font-semibold text-white"
                type="submit"
              >
                Buscar
              </button>
            </div>
          </form>

          <div className="ml-auto flex items-center gap-2 md:ml-2">
            <button
              aria-label="Abrir búsqueda"
              className="rounded-full border border-pietra-sand/60 px-3 py-2 text-xs font-semibold text-pietra-black md:hidden"
              onClick={() => setShowSearchMobile((prev) => !prev)}
              type="button"
            >
              Buscar
            </button>

            <a
              className="rounded-full bg-pietra-green px-3 py-2 text-xs font-semibold text-white md:px-4"
              href={whatsappLinks.quote}
            >
              Cotizar
            </a>
          </div>
        </div>

        {showSearchMobile ? (
          <form className="mt-2 md:hidden" onSubmit={submitSearch}>
            <div className="relative">
              <input
                className="w-full rounded-full border border-pietra-sand/60 bg-pietra-ivory px-4 py-2.5 pr-12 text-sm text-pietra-black outline-none ring-pietra-green focus:ring"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ej: granito negro, cocina..."
                type="search"
                value={query}
              />
              <button
                aria-label="Buscar"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-pietra-green px-3 py-1.5 text-xs font-semibold text-white"
                type="submit"
              >
                Ir
              </button>
            </div>
          </form>
        ) : null}
      </div>

      <nav className="border-t border-pietra-sand/30 bg-pietra-ivory/80">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2 text-xs sm:text-sm">
          {menuCategories.map((item) => (
            <Link
              key={item.name}
              className="whitespace-nowrap rounded-full border border-pietra-sand/55 bg-white px-3 py-1.5 font-medium text-pietra-black transition hover:bg-pietra-green hover:text-white"
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
