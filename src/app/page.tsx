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
import { environmentCategories } from '@/data/categories';
import { highlightedMaterials } from '@/data/materials';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Marmolería Pietra | Superficies premium en Paraguay',
  description: 'eCommerce consultivo premium con atención por WhatsApp para cocinas, baños y quinchos.',
};

export default function HomePage() {
  return (
    <main className="pb-20 md:pb-0">
      <TopBar />
      <EcommerceHeader />
      <MegaMenu />
      <HeroPromo />
      <TrustBadges />

      <section className="mx-auto mt-12 max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-pietra-black">Comprar por ambiente</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {environmentCategories.map((item) => (
            <CategoryCard key={item.name} href={item.href} image={item.image} name={item.name} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-pietra-black">Materiales destacados</h2>
        <p className="mt-2 text-pietra-black/75">Selección curada para proyectos residenciales y corporativos de alto nivel.</p>
        <div className="mt-4">
          <ProductCarousel />
        </div>
      </section>

      <PromoBanner />

      <section className="mx-auto mt-12 max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-pietra-black">Más elegidos por arquitectos y propietarios</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {highlightedMaterials.slice(0, 3).map((material) => (
            <article key={material.slug} className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-pietra-black">{material.name}</h3>
              <p className="mt-1 text-sm text-pietra-black/70">{material.benefits.join(' · ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-pietra-black">Trabajos realizados</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
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
