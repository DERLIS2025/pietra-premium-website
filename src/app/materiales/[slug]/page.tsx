import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} | Pietra Premium`,
    description: `Detalle del material ${slug}.`,
  };
}

export default async function MaterialDetailPage({ params }: Props) {
  const { slug } = await params;
  return <main className="p-6">Detalle del material: {slug}</main>;
}
