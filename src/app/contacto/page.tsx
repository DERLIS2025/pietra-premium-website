import type { Metadata } from 'next';
import { whatsappLinks } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contacto | Pietra Premium',
  description: 'Contactá a Pietra para asesoría y cotización.',
};

export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold text-pietra-black">Contacto</h1>
      <p className="mt-2 max-w-2xl text-pietra-black/75">
        Contanos tu proyecto y te ayudamos a elegir el material ideal para cocina, baño o quincho.
      </p>

      <a
        className="mt-5 inline-block rounded-full bg-pietra-green px-5 py-3 font-semibold text-white"
        href={whatsappLinks.quote}
      >
        Solicitar cotización por WhatsApp
      </a>
    </main>
  );
}
