import Link from 'next/link';
import { menuCategories } from '@/data/categories';

export function MegaMenu() {
  return (
    <nav className="border-b border-pietra-sand/30 bg-pietra-ivory">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 text-sm">
        {menuCategories.map((item) => (
          <Link
            key={item}
            className="whitespace-nowrap rounded-full border border-pietra-sand/50 px-3 py-1.5 transition hover:bg-pietra-green hover:text-white"
            href="#"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
