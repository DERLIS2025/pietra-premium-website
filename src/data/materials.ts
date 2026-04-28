export type Material = {
  name: string;
  slug: string;
  badge: string;
  image: string;
  benefits: string[];
};

export const highlightedMaterials: Material[] = [
  {
    name: 'Cuarzo Calacatta Supreme',
    slug: 'cuarzo-calacatta-supreme',
    badge: 'Top venta',
    image: '/materiales/cuarzo-calacatta.jpg',
    benefits: ['No poroso', 'Fácil limpieza', 'Look italiano'],
  },
  {
    name: 'Granito Negro Absoluto',
    slug: 'granito-negro-absoluto',
    badge: 'Alta demanda',
    image: '/materiales/granito-negro.jpg',
    benefits: ['Máxima dureza', 'Ideal quinchos', 'Durabilidad premium'],
  },
  {
    name: 'Mármol Travertino Ivory',
    slug: 'marmol-travertino-ivory',
    badge: 'Edición premium',
    image: '/materiales/travertino-ivory.jpg',
    benefits: ['Tono cálido', 'Acabado elegante', 'Diseño atemporal'],
  },
  {
    name: 'Neolith Estatuario',
    slug: 'neolith-estatuario',
    badge: 'Arquitectos eligen',
    image: '/materiales/neolith-estatuario.jpg',
    benefits: ['Ultra compacto', 'Resiste calor', 'Bajo mantenimiento'],
  },
];
