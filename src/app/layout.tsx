import type { Metadata } from 'next';
import { EcommerceHeader } from '@/components/EcommerceHeader';
import { FooterMarketplace } from '@/components/FooterMarketplace';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marmolería Pietra Premium',
  description: 'Mesadas premium a medida en Paraguay.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="bg-white text-pietra-black">
        <EcommerceHeader />
        {children}
        <FooterMarketplace />
        <MobileStickyBar />
      </body>
    </html>
  );
}
