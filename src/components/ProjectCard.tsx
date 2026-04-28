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
        className="h-52 bg-gradient-to-br from-pietra-sand to-pietra-green"
        style={{
          backgroundImage: `linear-gradient(130deg, rgba(26,26,26,0.3), rgba(26,26,26,0.1)), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2), transparent 45%), url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="p-4">
        <div className="mb-2 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-pietra-ivory px-2 py-1 font-semibold">
            {environment}
          </span>

          <span className="rounded-full bg-pietra-ivory px-2 py-1 font-semibold">
            {material}
          </span>
        </div>

        <h3 className="font-semibold text-pietra-black">{name}</h3>

        <p className="mt-1 text-sm text-pietra-black/70">{summary}</p>

        <a
          className="mt-3 inline-block rounded-full bg-pietra-green px-4 py-2 text-sm font-semibold text-white"
          href={whatsappLinks.project(name)}
        >
          Quiero algo similar
        </a>
      </div>
    </article>
  );
}