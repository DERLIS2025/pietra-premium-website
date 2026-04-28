import Link from 'next/link';
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-pietra-black">
              Materiales que elevan tu proyecto
            </h2>
            <p className="text-sm text-pietra-black/70">
              Elegí el material ideal para transformar tu espacio con asesoría profesional y trabajos a medida.
            </p>
          </div>

          <Link
            className="rounded-full border border-pietra-sand/60 bg-white px-4 py-2 text-sm font-semibold text-pietra-black"
            href="/materiales"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredMaterials.map((material, index) => (
            <div className={index >= 6 ? 'hidden md:block' : ''} key={material.slug}>
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

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div className={index >= 4 ? 'hidden md:block' : ''} key={project.name}>
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
