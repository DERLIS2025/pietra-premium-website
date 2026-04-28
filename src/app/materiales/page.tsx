import type { Metadata } from 'next';
import { ProductCard } from '@/components/ProductCard';
import { highlightedMaterials } from '@/data/materials';

export const metadata: Metadata = {
  title: 'Materiales | Pietra Premium',
  description: 'Explorá materiales premium para tus superficies.',
};

export default function MaterialesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold">Materiales</h1>

      <p className="mt-2 text-pietra-black/70">
        Seleccioná un material y consultá por WhatsApp para recibir asesoría
        personalizada.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {highlightedMaterials.map((material) => (
          <ProductCard key={material.slug} material={material} />
        ))}
      </div>
    </main>
  );
}