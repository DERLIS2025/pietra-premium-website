import Link from 'next/link';

type Props = { name: string; image: string; href: string };

export function CategoryCard({ name, image, href }: Props) {
  return (
    <Link className="group relative overflow-hidden rounded-2xl" href={href}>
      <div
        className="h-56 w-full bg-gradient-to-br from-pietra-sand to-pietra-green transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `linear-gradient(rgba(26,26,26,0.2),rgba(26,26,26,0.45)),url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold">{name}</span>
    </Link>
  );
}
