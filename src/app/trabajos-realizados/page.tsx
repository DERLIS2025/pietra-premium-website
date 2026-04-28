import type { Metadata } from 'next';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Trabajos realizados | Pietra Premium',
  description:
    'Conocé trabajos realizados en cocinas, baños y quinchos con materiales premium de marmolería en Paraguay.',
};

export default function TrabajosRealizadosPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold text-pietra-black">Trabajos realizados</h1>
      <p className="mt-2 max-w-3xl text-pietra-black/75">
        Proyectos reales de mesadas de granito, mármol, cuarzo y neolith en
        cocinas, baños y quinchos. Consultá por WhatsApp para una propuesta a medida.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </main>
  );
}
