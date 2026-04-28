type MenuCategory = {
  name: string;
  href: string;
};

type VisualCategory = {
  name: string;
  href: string;
  image: string;
  caption?: string;
};

export const menuCategories: MenuCategory[] = [
  { name: 'Mesadas', href: '/materiales' },
  { name: 'Granitos', href: '/materiales?categoria=granitos' },
  { name: 'Mármoles', href: '/materiales?categoria=marmoles' },
  { name: 'Cuarzos', href: '/materiales?categoria=cuarzos' },
  { name: 'Neolith', href: '/materiales?categoria=neolith' },
  { name: 'Piedra Traslúcida', href: '/materiales?categoria=traslucida' },
  { name: 'Cocinas', href: '/ambientes/cocinas' },
  { name: 'Baños', href: '/ambientes/banos' },
  { name: 'Quinchos', href: '/ambientes/quinchos' },
  { name: 'Trabajos realizados', href: '/trabajos-realizados' },
];

export const environmentCategories: VisualCategory[] = [
  {
    name: 'Cocinas',
    image: '/ambientes/cocinas.jpg',
    href: '/ambientes/cocinas',
    caption: 'Islas, alzadas y mesadas integradas',
  },
  {
    name: 'Baños',
    image: '/ambientes/banos.jpg',
    href: '/ambientes/banos',
    caption: 'Vanitorys, nichos y revestimientos',
  },
  {
    name: 'Quinchos',
    image: '/ambientes/quinchos.jpg',
    href: '/ambientes/quinchos',
    caption: 'Superficies resistentes para exterior',
  },
  {
    name: 'Revestimientos',
    image: '/ambientes/revestimientos.jpg',
    href: '/ambientes',
    caption: 'Muros y detalles de alto impacto',
  },
];

export const marketplaceCategories: VisualCategory[] = [
  {
    name: 'Granitos',
    href: '/materiales?categoria=granitos',
    image: '/materiales/granitos.jpg',
    caption: 'Superficies resistentes para cocinas, quinchos y exteriores cubiertos',
  },
  {
    name: 'Mármoles',
    href: '/materiales?categoria=marmoles',
    image: '/materiales/marmoles.jpg',
    caption: 'Elegancia natural para baños, interiores y proyectos premium',
  },
  {
    name: 'Cuarzos',
    href: '/materiales?categoria=cuarzos',
    image: '/materiales/cuarzos.jpg',
    caption: 'Look moderno, baja porosidad y fácil mantenimiento',
  },
  {
    name: 'Neolith',
    href: '/materiales?categoria=neolith',
    image: '/materiales/neolith.jpg',
    caption: 'Superficie ultracompacta para alta exigencia técnica',
  },
  {
    name: 'Piedra Traslúcida',
    href: '/materiales?categoria=traslucida',
    image: '/materiales/traslucida.jpg',
    caption: 'Diseños iluminados para barras, detalles y ambientes exclusivos',
  },
  {
    name: 'Mesadas para cocina',
    href: '/ambientes/cocinas',
    image: '/ambientes/cocinas-mesadas.jpg',
    caption: 'Soluciones a medida para cocinas modernas y funcionales',
  },
  {
    name: 'Mesadas para baño',
    href: '/ambientes/banos',
    image: '/ambientes/banos-mesadas.jpg',
    caption: 'Vanitorys y superficies elegantes para baños premium',
  },
  {
    name: 'Revestimientos',
    href: '/ambientes',
    image: '/ambientes/revestimientos.jpg',
    caption: 'Muros, frentes y detalles arquitectónicos de alto impacto',
  },
  {
    name: 'Quinchos',
    href: '/ambientes/quinchos',
    image: '/ambientes/quinchos.jpg',
    caption: 'Mesadas resistentes para parrillas, barras y espacios sociales',
  },
];
