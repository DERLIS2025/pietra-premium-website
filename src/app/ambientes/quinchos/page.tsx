import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quinchos | Pietra Premium',
  description: 'Superficies resistentes para quinchos premium.',
};

export default function QuinchosPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold text-pietra-black">Quinchos</h1>
      <p className="mt-2 max-w-2xl text-pietra-black/75">
        Mesadas resistentes para parrilla, barra y zonas sociales en quinchos.
      </p>
      <Link className="mt-4 inline-block rounded-full bg-pietra-green px-4 py-2 font-semibold text-white" href="/materiales?search=quincho">
        Ver materiales para quincho
      </Link>
    </main>
  );
}
