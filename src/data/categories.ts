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
    image: '/categorias/cocina-6.jpg',
    href: '/ambientes/cocinas',
    caption: 'Islas, alzadas y mesadas integradas',
  },
  {
    name: 'Baños',
    image: '/categorias/bano-3.jpg',
    href: '/ambientes/banos',
    caption: 'Vanitorys, nichos y revestimientos',
  },
  {
    name: 'Quinchos',
    image: '/categorias/quincho.jpg',
    href: '/ambientes/quinchos',
    caption: 'Superficies resistentes para parrilla y exterior cubierto',
  },
  {
    name: 'Revestimientos',
    image: '/categorias/marmol.jpg',
    href: '/ambientes',
    caption: 'Muros, detalles y ambientes de alto impacto',
  },
];

export const marketplaceCategories: VisualCategory[] = [
  {
    name: 'Granitos',
    href: '/materiales?categoria=granitos',
    image: '/categorias/granito.jpg',
    caption: 'Resistencia para cocinas, quinchos y superficies de alto uso',
  },
  {
    name: 'Mármoles',
    href: '/materiales?categoria=marmoles',
    image: '/categorias/marmol.jpg',
    caption: 'Elegancia natural para baños, interiores y proyectos premium',
  },
  {
    name: 'Cuarzos',
    href: '/materiales?categoria=cuarzos',
    image: '/materiales/cuarzo-beige.jpg',
    caption: 'Superficies modernas, limpias y de bajo mantenimiento',
  },
  {
    name: 'Neolith',
    href: '/materiales?categoria=neolith',
    image: '/materiales/neolith-calacatta.jpg',
    caption: 'Superficie ultracompacta para alta exigencia técnica',
  },
  {
    name: 'Piedra Traslúcida',
    href: '/materiales?categoria=traslucida',
    image: '/materiales/piedra-traslucida.jpg',
    caption: 'Diseños iluminados para barras y ambientes exclusivos',
  },
  {
    name: 'Mesadas para cocina',
    href: '/ambientes/cocinas',
    image: '/categorias/cocina-6.jpg',
    caption: 'Soluciones a medida para cocinas modernas',
  },
  {
    name: 'Mesadas para baño',
    href: '/ambientes/banos',
    image: '/categorias/bano-3.jpg',
    caption: 'Vanitorys y superficies elegantes para baños premium',
  },
  {
    name: 'Quinchos',
    href: '/ambientes/quinchos',
    image: '/categorias/quincho.jpg',
    caption: 'Mesadas resistentes para parrillas y espacios sociales',
  },
];
