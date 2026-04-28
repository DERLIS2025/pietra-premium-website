import Link from 'next/link';
import type { Material } from '@/data/materials';
import { whatsappLinks } from '@/lib/whatsapp';

type Props = {
  material: Material;
};

export function ProductCard({ material }: Props) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-pietra-sand/35 bg-white p-3 transition duration-300 hover:-translate-y-0.5 hover:shadow-premium sm:p-4">
      <div
        className="h-40 rounded-xl bg-gradient-to-br from-pietra-green to-pietra-sand sm:h-44"
        style={{
          backgroundImage: `linear-gradient(130deg, rgba(26,26,26,0.28), rgba(26,26,26,0.06)), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.24), transparent 48%), url('${material.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-pietra-ivory px-2.5 py-1 text-[11px] font-semibold text-pietra-green">
          {material.badge}
        </span>

        <span className="text-[11px] font-semibold uppercase tracking-wide text-pietra-black/60">
          {material.category}
        </span>
      </div>

      <h3 className="mt-2 line-clamp-2 text-base font-semibold text-pietra-black">
        {material.name}
      </h3>

      <p className="mt-1 text-sm font-semibold text-pietra-green">
        Desde Gs. consultar
      </p>

      <ul className="mt-2 grid gap-1 text-xs text-pietra-black/75 sm:text-sm">
        {material.benefits.slice(0, 2).map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

      <div className="mt-4 grid gap-1.5">
        <a
          className="rounded-full bg-pietra-green px-4 py-2 text-center text-sm font-semibold text-white"
          href={whatsappLinks.materials(material.name)}
        >
          Consultar
        </a>

        <Link
          className="text-center text-sm font-semibold text-pietra-black underline-offset-4 hover:underline"
          href={`/materiales/${material.slug}`}
        >
          Ver detalles
        </Link>
      </div>
    </article>
  );
}
