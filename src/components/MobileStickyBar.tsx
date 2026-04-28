import { whatsappLinks } from '@/lib/whatsapp';

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-pietra-sand/40 bg-white p-3 md:hidden">
      <a className="block rounded-full bg-pietra-green py-3 text-center font-semibold text-white" href={whatsappLinks.quote}>
        Consultar por WhatsApp
      </a>
    </div>
  );
}
