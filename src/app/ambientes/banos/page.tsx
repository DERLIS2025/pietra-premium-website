import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Baños | Pietra Premium',
  description: 'Mesadas y revestimientos premium para baños.',
};

export default function BanosPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold text-pietra-black">Baños</h1>
      <p className="mt-2 max-w-2xl text-pietra-black/75">
        Vanitorys, nichos y revestimientos de mármol, cuarzo y granito para baños premium.
      </p>
      <Link className="mt-4 inline-block rounded-full bg-pietra-green px-4 py-2 font-semibold text-white" href="/materiales?search=baño">
        Ver materiales para baño
      </Link>
    </main>
  );
}
