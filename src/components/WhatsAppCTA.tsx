import { whatsappLinks } from '@/lib/whatsapp';

export function WhatsAppCTA() {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <div className="rounded-2xl bg-pietra-green p-6 text-white">
        <h3 className="text-xl font-bold">¿Querés una propuesta para tu espacio?</h3>
        <p className="mt-2 text-white/90">Nuestro equipo responde por WhatsApp con recomendación de material y presupuesto orientativo.</p>
        <a className="mt-4 inline-block rounded-full bg-white px-5 py-2 font-semibold text-pietra-green" href={whatsappLinks.quote}>Consultar ahora</a>
      </div>
    </section>
  );
}
