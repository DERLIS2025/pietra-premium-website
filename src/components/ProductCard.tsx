import Link from 'next/link';
import type { Material } from '@/data/materials';
import { whatsappLinks } from '@/lib/whatsapp';

type Props = { material: Material };

export function ProductCard({ material }: Props) {
  return (
    <article className="group rounded-2xl border border-pietra-sand/40 bg-white p-4 transition hover:-translate-y-1 hover:shadow-premium">
      <div
        className="h-44 rounded-xl bg-gradient-to-br from-pietra-green to-pietra-sand"
        style={{ backgroundImage: `linear-gradient(rgba(26,26,26,0.15),rgba(26,26,26,0.35)),url('${material.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <span className="mt-3 inline-block rounded-full bg-pietra-ivory px-3 py-1 text-xs font-semibold text-pietra-green">{material.badge}</span>
      <h3 className="mt-2 text-lg font-semibold text-pietra-black">{material.name}</h3>
      <p className="mt-1 text-sm font-semibold text-pietra-green">Desde Gs. consultar</p>
      <ul className="mt-3 space-y-1 text-sm text-pietra-black/75">
        {material.benefits.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        <a className="rounded-full bg-pietra-green px-4 py-2 text-sm font-semibold text-white" href={whatsappLinks.materials(material.name)}>
          Consultar por WhatsApp
        </a>
        <Link className="rounded-full border border-pietra-black px-4 py-2 text-sm font-semibold" href={`/materiales/${material.slug}`}>
          Ver detalles
        </Link>
      </div>
    </article>
  );
}
