import Link from 'next/link';

type Props = { name: string; image: string; href: string; caption?: string };

export function CategoryCard({ name, image, href, caption }: Props) {
  return (
    <Link className="group relative overflow-hidden rounded-2xl border border-pietra-sand/30" href={href}>
      <div
        className="h-56 w-full bg-gradient-to-br from-pietra-sand via-pietra-green/80 to-pietra-black transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `linear-gradient(125deg, rgba(26,26,26,0.45), rgba(26,26,26,0.2)), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.16), transparent 50%), url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pietra-black to-transparent p-4 text-white">
        <span className="text-base font-semibold">{name}</span>
        {caption ? <p className="mt-1 text-xs text-white/85">{caption}</p> : null}
      </div>
    </Link>
  );
}
