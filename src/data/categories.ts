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
    caption: 'Islas, alzadas y mesadas de cocina en Asunción',
  },
  {
    name: 'Baños',
    image: '/categorias/bano-3.jpg',
    href: '/ambientes/banos',
    caption: 'Vanitorys y mármol para baños premium',
  },
  {
    name: 'Quinchos',
    image: '/categorias/quincho.jpg',
    href: '/ambientes/quinchos',
    caption: 'Mesadas resistentes para parrillas y barras sociales',
  },
  {
    name: 'Revestimientos',
    image: '/categorias/marmol.jpg',
    href: '/ambientes',
    caption: 'Revestimientos de mármol y granito para interiorismo',
  },
];

export const marketplaceCategories: VisualCategory[] = [
  {
    name: 'Granitos',
    href: '/materiales?categoria=granitos',
    image: '/categorias/granito.jpg',
    caption: 'Mesadas de granito en Paraguay para alto uso',
  },
  {
    name: 'Mármoles',
    href: '/materiales?categoria=marmoles',
    image: '/categorias/marmol.jpg',
    caption: 'Mesadas de mármol en Paraguay con estética premium',
  },
  {
    name: 'Cuarzos',
    href: '/materiales?categoria=cuarzos',
    image: '/materiales/cuarzo-gris.jpg',
    caption: 'Cuarzo para mesadas de cocina y baño',
  },
  {
    name: 'Neolith',
    href: '/materiales?categoria=neolith',
    image: '/materiales/neolith-calacatta.jpg',
    caption: 'Superficie ultracompacta para arquitectura premium',
  },
  {
    name: 'Piedra Traslúcida',
    href: '/materiales?categoria=traslucida',
    image: '/materiales/piedra-traslucida.jpg',
    caption: 'Diseños backlight para espacios comerciales y residenciales',
  },
  {
    name: 'Mesadas para cocina',
    href: '/ambientes/cocinas',
    image: '/categorias/cocina-6.jpg',
    caption: 'Proyectos funcionales y elegantes para cocinas modernas',
  },
  {
    name: 'Mesadas para baño',
    href: '/ambientes/banos',
    image: '/categorias/bano-3.jpg',
    caption: 'Vanitorys y cubiertas a medida para baños premium',
  },
  {
    name: 'Revestimientos',
    href: '/ambientes',
    image: '/categorias/granito.jpg',
    caption: 'Placas y detalles en piedra natural para arquitectura',
  },
  {
    name: 'Quinchos',
    href: '/ambientes/quinchos',
    image: '/categorias/quincho.jpg',
    caption: 'Mesadas para quinchos y parrillas de alto rendimiento',
  },
];