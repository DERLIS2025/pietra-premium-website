import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marmolería Pietra Premium',
  description: 'Mesadas premium a medida en Paraguay.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
