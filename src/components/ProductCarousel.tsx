import { highlightedMaterials } from '@/data/materials';
import { ProductCard } from './ProductCard';

export function ProductCarousel() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {highlightedMaterials.map((material) => (
        <ProductCard key={material.slug} material={material} />
      ))}
    </div>
  );
}
