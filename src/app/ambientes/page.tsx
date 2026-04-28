import type { Metadata } from 'next';
import { CategoryCard } from '@/components/CategoryCard';
import { environmentCategories } from '@/data/categories';

export const metadata: Metadata = {
  title: 'Ambientes | Pietra Premium',
  description: 'Soluciones premium por ambiente para cocinas, baños y quinchos.',
};

export default function AmbientesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold text-pietra-black">Ambientes</h1>
      <p className="mt-2 text-pietra-black/75">
        Elegí tu ambiente y descubrí materiales recomendados para cada tipo de uso.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {environmentCategories.map((item) => (
          <CategoryCard
            key={item.name}
            caption={item.caption}
            href={item.href}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </main>
  );
}
