import Link from 'next/link';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Materiales', href: '/materiales' },
  { label: 'Ambientes', href: '/ambientes' },
  { label: 'Trabajos realizados', href: '/trabajos-realizados' },
  { label: 'Contacto', href: '/contacto' },
];

export function FooterMarketplace() {
  return (
    <footer className="mt-14 border-t border-pietra-sand/35 bg-pietra-ivory pb-24 pt-10 text-pietra-black md:pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link className="flex items-center gap-3" href="/">
            <img
              alt="Logo Pietra"
              className="h-10 w-auto object-contain"
              src="/logo/logo-negro.jpeg"
            />
            <p className="text-xs uppercase tracking-[0.2em] text-pietra-green">
              Marmolería en Paraguay
            </p>
          </Link>

          <nav className="flex flex-wrap gap-2 text-sm">
            {links.map((item) => (
              <Link
                key={item.href}
                className="rounded-full border border-pietra-sand/50 bg-white px-3 py-1.5 transition hover:bg-pietra-green hover:text-white"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-6 text-sm text-pietra-black/70">
          Asesoría, fabricación e instalación profesional de mesadas y revestimientos para cocinas, baños y quinchos.
        </p>
      </div>
    </footer>
  );
}
