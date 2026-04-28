import { CategoryCard } from '@/components/CategoryCard';
import { EcommerceHeader } from '@/components/EcommerceHeader';
import { FooterMarketplace } from '@/components/FooterMarketplace';
import { HeroPromo } from '@/components/HeroPromo';
import { HowItWorks } from '@/components/HowItWorks';
import { MegaMenu } from '@/components/MegaMenu';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { NewsletterBlock } from '@/components/NewsletterBlock';
import { ProductCarousel } from '@/components/ProductCarousel';
import { ProjectCard } from '@/components/ProjectCard';
import { PromoBanner } from '@/components/PromoBanner';
import { Testimonials } from '@/components/Testimonials';
import { TopBar } from '@/components/TopBar';
import { TrustBadges } from '@/components/TrustBadges';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { environmentCategories, marketplaceCategories } from '@/data/categories';
import { highlightedMaterials } from '@/data/materials';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Marmolería Pietra | eCommerce consultivo premium en Paraguay',
  description: 'Mesadas y revestimientos premium con atención comercial vía WhatsApp.',
};

export default function HomePage() {
  return (
    <main className="pb-20 md:pb-0">
      <TopBar />
      <EcommerceHeader />
      <MegaMenu />

      <section className="mx-auto mt-4 max-w-7xl px-4">
        <div className="grid gap-2 overflow-x-auto pb-1 md:grid-cols-3">
          {['Envío de medidas por WhatsApp', 'Recomendación de material sin costo', 'Instalación profesional garantizada'].map((text) => (
            <div key={text} className="whitespace-nowrap rounded-full border border-pietra-sand/35 bg-white px-4 py-2 text-sm font-medium text-pietra-black">{text}</div>
          ))}
        </div>
      </section>

      <HeroPromo />
      <TrustBadges />

      <section className="mx-auto mt-12 max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-pietra-black">Comprar por ambiente</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {environmentCategories.map((item) => (
            <CategoryCard key={item.name} href={item.href} image={item.image} name={item.name} caption={item.caption} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-pietra-black">Explorá por material</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {marketplaceCategories.map((item) => (
            <CategoryCard key={item.name} href={item.href} image={item.image} name={item.name} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-pietra-black">Materiales destacados</h2>
            <p className="text-pietra-black/75">Fichas comerciales diseñadas para cotización rápida.</p>
          </div>
        </div>
        <ProductCarousel />
      </section>

      <PromoBanner />

      <section className="mx-auto mt-12 max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-pietra-black">Más elegidos por arquitectos y propietarios</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {highlightedMaterials.map((material) => (
            <article key={material.slug} className="rounded-2xl border border-pietra-sand/35 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-pietra-green">{material.category}</p>
              <h3 className="mt-1 font-semibold">{material.name}</h3>
              <p className="mt-2 text-sm text-pietra-black/70">{material.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-pietra-black">Trabajos realizados</h2>
        <p className="mt-2 text-pietra-black/70">Casos reales con resolución técnica y estética premium.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>

      <HowItWorks />
      <Testimonials />
      <NewsletterBlock />
      <WhatsAppCTA />
      <FooterMarketplace />
      <MobileStickyBar />
    </main>
  );
}
