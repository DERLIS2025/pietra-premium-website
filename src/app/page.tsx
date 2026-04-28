import Link from 'next/link';
import { BannerSlot } from '@/components/BannerSlot';
import { CategoryCard } from '@/components/CategoryCard';
import { HeroPromo } from '@/components/HeroPromo';
import { HowItWorks } from '@/components/HowItWorks';
import { NewsletterBlock } from '@/components/NewsletterBlock';
import { ProductCard } from '@/components/ProductCard';
import { ProjectCard } from '@/components/ProjectCard';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { environmentCategories } from '@/data/categories';
import { highlightedMaterials } from '@/data/materials';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Marmolería Pietra | eCommerce consultivo premium en Paraguay',
  description:
    'Mesadas y revestimientos premium con atención comercial vía WhatsApp.',
};

export default function HomePage() {
  const featuredMaterials = highlightedMaterials.slice(0, 8);
  const featuredProjects = projects.slice(0, 6);

  return (
    <main className="pb-20 md:pb-0">
      <HeroPromo />
      <BannerSlot />

      <section className="mx-auto mt-10 max-w-7xl px-4">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-pietra-black">
              Imaginá tu próximo espacio
            </h2>
            <p className="text-sm text-pietra-black/70">
              Soluciones reales para cocina, baño y quincho.
            </p>
          </div>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible md:px-0">
          {environmentCategories.map((item) => (
            <div
              className="w-[78%] shrink-0 snap-start sm:w-[55%] md:w-auto"
              key={item.name}
            >
              <CategoryCard
                caption={item.caption}
                href={item.href}
                image={item.image}
                name={item.name}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-pietra-black">
              Materiales que elevan tu proyecto
            </h2>
            <p className="text-sm text-pietra-black/70">
              Catálogo compacto para que compares rápido y consultes por
              WhatsApp.
            </p>
          </div>

          <Link
            className="rounded-full border border-pietra-sand/60 bg-white px-4 py-2 text-sm font-semibold text-pietra-black"
            href="/materiales"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
          {featuredMaterials.map((material, index) => (
            <div
              className={index >= 4 ? 'hidden md:block' : ''}
              key={material.slug}
            >
              <ProductCard material={material} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-pietra-black">
              Proyectos reales para inspirarte
            </h2>
            <p className="text-sm text-pietra-black/70">
              Obras terminadas en Asunción y Gran Asunción.
            </p>
          </div>

          <Link
            className="rounded-full border border-pietra-sand/60 bg-white px-4 py-2 text-sm font-semibold text-pietra-black"
            href="/trabajos-realizados"
          >
            Ver todos
          </Link>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              className="w-[85%] shrink-0 snap-start sm:w-[60%] md:w-auto"
              key={project.name}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      <HowItWorks />
      <NewsletterBlock />
      <WhatsAppCTA />
    </main>
  );
}