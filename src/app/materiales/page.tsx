import type { Metadata } from 'next';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { highlightedMaterials } from '@/data/materials';
import { whatsappLinks } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Materiales | Pietra Premium',
  description: 'Explorá materiales premium para tus superficies.',
};

type Props = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const quickSearches = [
  'Cuarzo',
  'Granito',
  'Mármol',
  'Cocina',
  'Baño',
  'Quincho',
  'Piedra traslúcida',
];

const normalizeText = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

export default async function MaterialesPage({ searchParams }: Props) {
  const params = searchParams ? await searchParams : {};
  const rawSearch = Array.isArray(params.search)
    ? params.search[0] ?? ''
    : (params.search ?? '');

  const normalizedSearch = normalizeText(rawSearch.trim());

  const filteredMaterials = normalizedSearch
    ? highlightedMaterials.filter((material) => {
        const searchableContent = [
          material.name,
          material.category,
          material.description,
          ...material.benefits,
          ...material.uses,
        ]
          .join(' ')
          .toLowerCase();

        return normalizeText(searchableContent).includes(normalizedSearch);
      })
    : highlightedMaterials;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold">Materiales</h1>

      <p className="mt-2 text-pietra-black/70">
        Seleccioná un material y consultá por WhatsApp para recibir asesoría
        personalizada.
      </p>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {quickSearches.map((term) => (
          <Link
            className="whitespace-nowrap rounded-full border border-pietra-sand/60 bg-white px-3 py-1.5 text-xs font-semibold text-pietra-black sm:text-sm"
            href={`/materiales?search=${encodeURIComponent(term)}`}
            key={term}
          >
            {term}
          </Link>
        ))}
      </div>

      {rawSearch ? (
        <p className="mt-4 text-sm text-pietra-black/75">
          Resultados para: <span className="font-semibold">{rawSearch}</span>
        </p>
      ) : null}

      {filteredMaterials.length ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {filteredMaterials.map((material) => (
            <ProductCard key={material.slug} material={material} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-pietra-sand/35 bg-pietra-ivory p-6">
          <h2 className="text-xl font-semibold text-pietra-black">
            No encontramos materiales con ese término.
          </h2>
          <p className="mt-2 text-sm text-pietra-black/75">
            Probá con “granito”, “cuarzo” o “cocina”, o escribinos por WhatsApp y te guiamos.
          </p>
          <a
            className="mt-4 inline-block rounded-full bg-pietra-green px-4 py-2 text-sm font-semibold text-white"
            href={whatsappLinks.general}
          >
            Consultar por WhatsApp
          </a>
        </div>
      )}
    </main>
  );
}
