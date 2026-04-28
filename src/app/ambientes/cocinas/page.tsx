import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cocinas | Pietra Premium',
  description: 'Mesadas premium para cocinas en Paraguay.',
};

export default function CocinasPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold text-pietra-black">Cocinas</h1>
      <p className="mt-2 max-w-2xl text-pietra-black/75">
        Mesadas de granito, mármol, cuarzo y neolith para cocinas funcionales y elegantes.
      </p>
      <Link className="mt-4 inline-block rounded-full bg-pietra-green px-4 py-2 font-semibold text-white" href="/materiales?search=cocina">
        Ver materiales para cocina
      </Link>
    </main>
  );
}
