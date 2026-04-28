import { whatsappLinks } from '@/lib/whatsapp';

type Props = { name: string; environment: string; material: string; image: string };

export function ProjectCard({ name, environment, material, image }: Props) {
  return (
    <article className="rounded-2xl border border-pietra-sand/40 bg-white p-3">
      <div
        className="h-52 rounded-xl bg-gradient-to-br from-pietra-sand to-pietra-green"
        style={{ backgroundImage: `linear-gradient(rgba(26,26,26,0.1),rgba(26,26,26,0.3)),url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <h3 className="mt-3 font-semibold text-pietra-black">{name}</h3>
      <p className="text-sm text-pietra-black/70">{environment} · {material}</p>
      <a className="mt-3 inline-block rounded-full bg-pietra-green px-4 py-2 text-sm font-semibold text-white" href={whatsappLinks.project(name)}>
        Quiero algo similar
      </a>
    </article>
  );
}
