import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { ProductCard } from '@/components/ProductCard';
import { ProjectCard } from '@/components/ProjectCard';
import { highlightedMaterials, getMaterialBySlug } from '@/data/materials';
import { projects } from '@/data/projects';
import { whatsappLinks } from '@/lib/whatsapp';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);

  if (!material) {
    return { title: 'Material no encontrado | Pietra Premium' };
  }

  return {
    title: `${material.name} | Pietra Premium`,
    description: material.description,
  };
}

export default async function MaterialDetailPage({ params }: Props) {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);

  if (!material) notFound();

  const relatedMaterials = highlightedMaterials.filter((item) => item.slug !== material.slug).slice(0, 3);
  const relatedProjects = projects.filter((project) => project.material.includes(material.category) || project.material.includes(material.name.split(' ')[0])).slice(0, 3);

  return (
    <main className="bg-pietra-ivory pb-20 md:pb-0">
      <section className="mx-auto max-w-7xl px-4 py-6">
        <nav className="text-sm text-pietra-black/70">
          <Link href="/">Inicio</Link> / <Link href="/materiales">Materiales</Link> / <span className="font-semibold text-pietra-black">{material.name}</span>
        </nav>

        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-3">
            <div
              className="h-80 rounded-2xl border border-pietra-sand/35 bg-gradient-to-br from-pietra-green to-pietra-sand"
              style={{ backgroundImage: `linear-gradient(130deg, rgba(26,26,26,0.3), rgba(26,26,26,0.08)), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 48%), url('${material.gallery[0]}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="grid grid-cols-3 gap-3">
              {material.gallery.slice(1).map((img) => (
                <div
                  key={img}
                  className="h-28 rounded-xl border border-pietra-sand/35 bg-gradient-to-br from-pietra-sand to-pietra-green"
                  style={{ backgroundImage: `linear-gradient(130deg, rgba(26,26,26,0.25), rgba(26,26,26,0.08)), radial-gradient(circle at 70% 20%, rgba(255,255,255,0.2), transparent 48%), url('${img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-pietra-sand/35 bg-white p-6">
            <span className="rounded-full bg-pietra-ivory px-3 py-1 text-xs font-semibold text-pietra-green">{material.badge}</span>
            <h1 className="mt-3 text-3xl font-bold text-pietra-black">{material.name}</h1>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-pietra-black/60">{material.category}</p>
            <p className="mt-4 text-pietra-black/80">{material.description}</p>
            <p className="mt-4 text-lg font-semibold text-pietra-green">Desde Gs. consultar</p>
            <ul className="mt-4 grid gap-2 text-sm text-pietra-black/80">
              {material.benefits.map((benefit) => (
                <li key={benefit}>• {benefit}</li>
              ))}
            </ul>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <a className="rounded-full bg-pietra-green px-4 py-3 text-center font-semibold text-white" href={whatsappLinks.materials(material.name)}>Consultar por WhatsApp</a>
              <a className="rounded-full border border-pietra-black px-4 py-3 text-center font-semibold" href={whatsappLinks.general}>Enviar medidas</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-4 max-w-7xl px-4">
        <div className="grid gap-4 rounded-2xl border border-pietra-sand/35 bg-white p-6 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Descripción y usos</h2>
            <p className="mt-2 text-sm text-pietra-black/75">Ideal para proyectos que buscan estética premium y funcionalidad técnica.</p>
            <h3 className="mt-4 font-semibold">Usos recomendados</h3>
            <ul className="mt-2 text-sm text-pietra-black/75">{material.uses.map((use) => <li key={use}>• {use}</li>)}</ul>
            <h3 className="mt-4 font-semibold">Mantenimiento</h3>
            <ul className="mt-2 text-sm text-pietra-black/75">{material.maintenance.map((step) => <li key={step}>• {step}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Especificaciones</h2>
            <div className="mt-3 divide-y divide-pietra-sand/30 rounded-xl border border-pietra-sand/35">
              {material.specs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between px-4 py-3 text-sm">
                  <span className="font-medium text-pietra-black/70">{spec.label}</span>
                  <span className="font-semibold text-pietra-black">{spec.value}</span>
                </div>
              ))}
            </div>
            <h3 className="mt-4 font-semibold">FAQ</h3>
            <div className="mt-2 space-y-2">
              {material.faq.map((item) => (
                <details key={item.q} className="rounded-xl border border-pietra-sand/35 bg-pietra-ivory p-3 text-sm">
                  <summary className="cursor-pointer font-semibold">{item.q}</summary>
                  <p className="mt-2 text-pietra-black/75">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4">
        <h2 className="text-2xl font-bold">Proyectos relacionados</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {(relatedProjects.length ? relatedProjects : projects.slice(0, 3)).map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Materiales relacionados</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {relatedMaterials.map((item) => (
            <ProductCard key={item.slug} material={item} />
          ))}
        </div>
      </section>

      <MobileStickyBar />
    </main>
  );
}
