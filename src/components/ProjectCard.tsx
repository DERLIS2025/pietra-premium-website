import { whatsappLinks } from '@/lib/whatsapp';

type Props = {
  name: string;
  environment: string;
  material: string;
  summary: string;
  image: string;
};

export function ProjectCard({
  name,
  environment,
  material,
  summary,
  image,
}: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-pietra-sand/35 bg-white">
      <div
        className="h-56 bg-gradient-to-br from-pietra-sand to-pietra-green"
        style={{
          backgroundImage: `linear-gradient(130deg, rgba(26,26,26,0.24), rgba(26,26,26,0.08)), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.24), transparent 45%), url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="space-y-2 p-4">
        <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
          <span className="rounded-full bg-pietra-ivory px-2 py-1 font-semibold text-pietra-black">
            {environment}
          </span>

          <span className="rounded-full bg-pietra-ivory px-2 py-1 font-semibold text-pietra-black">
            {material}
          </span>
        </div>

        <h3 className="text-base font-semibold text-pietra-black">{name}</h3>

        <p className="line-clamp-2 text-sm text-pietra-black/70">{summary}</p>

        <a
          className="inline-block rounded-full bg-pietra-green px-4 py-2 text-xs font-semibold text-white sm:text-sm"
          href={whatsappLinks.project(name)}
        >
          Consultar
        </a>
      </div>
    </article>
  );
}
