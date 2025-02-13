import { z } from 'zod';
import type { SupportedLanguage } from '../utils/lang.js';

export const TranslatedStringSchema = z.object({
  fr: z.string(),
  en: z.string(),
});

export const ProductSchema = z.object({
  label: TranslatedStringSchema,
  description: TranslatedStringSchema,
  img: z.string(),
  price: z.number(),
  quantity: z.number(),
  type: z.union([z.literal('pastry'), z.literal('bread')]),
});

export type TranslatedString = z.infer<typeof TranslatedStringSchema>;
export type Product = z.infer<typeof ProductSchema>;

export const PRODUCTS: Product[] = [
  {
    label: { fr: 'Pain aux raisins', en: 'Raisin Rolls' },
    description: {
      fr: 'Viennoiserie feuilletée garnie de crème pâtissière et de raisins secs',
      en: 'Flaky pastry filled with custard cream and raisins',
    },
    img: '/assets/products/pain-aux-raisins.jpeg',
    price: 1.5,
    quantity: 100,
    type: 'pastry',
  },
  {
    label: { fr: 'Baguette de campagne', en: 'Country Baguette' },
    description: {
      fr: 'Pain traditionnel au levain naturel à la mie alvéolée',
      en: 'Traditional sourdough bread with honeycomb crumb',
    },
    img: '/assets/products/baguette-de-campagne.jpeg',
    price: 1.2,
    quantity: 150,
    type: 'bread',
  },
  {
    label: { fr: 'Croissant au beurre', en: 'Butter Croissant' },
    description: {
      fr: 'Viennoiserie feuilletée pur beurre',
      en: 'Pure butter flaky pastry',
    },
    img: '/assets/products/croissant.jpeg',
    price: 1.1,
    quantity: 120,
    type: 'pastry',
  },
  {
    label: { fr: 'Éclair au chocolat', en: 'Chocolate Éclair' },
    description: {
      fr: 'Pâte à choux garnie de crème pâtissière au chocolat',
      en: 'Choux pastry filled with chocolate custard',
    },
    img: '/assets/products/eclair-chocolat.jpeg',
    price: 3.5,
    quantity: 50,
    type: 'pastry',
  },
  {
    label: { fr: 'Pain aux céréales', en: 'Multigrain Bread' },
    description: {
      fr: 'Pain aux graines variées (lin, tournesol, sésame)',
      en: 'Bread with various seeds (flax, sunflower, sesame)',
    },
    img: '/assets/products/pain-cereales.jpeg',
    price: 2.8,
    quantity: 75,
    type: 'bread',
  },
  {
    label: { fr: 'Tarte aux pommes', en: 'Apple Pie' },
    description: {
      fr: 'Tarte garnie de pommes caramélisées',
      en: 'Pie filled with caramelized apples',
    },
    img: '/assets/products/tarte-aux-pommes.jpeg',
    price: 15.9,
    quantity: 20,
    type: 'pastry',
  },
  {
    label: { fr: 'Pain au chocolat', en: 'Chocolate Croissant' },
    description: {
      fr: 'Viennoiserie feuilletée avec bâtons de chocolat',
      en: 'Flaky pastry with chocolate batons',
    },
    img: '/assets/products/pain-au-chocolat.jpeg',
    price: 1.2,
    quantity: 100,
    type: 'pastry',
  },
  {
    label: { fr: 'Flan pâtissier', en: 'Custard Tart' },
    description: {
      fr: 'Tarte à la crème pâtissière vanillée',
      en: 'Vanilla custard cream tart',
    },
    img: '/assets/products/flan.jpeg',
    price: 3.2,
    quantity: 40,
    type: 'pastry',
  },
  {
    label: { fr: 'Baguette tradition', en: 'Traditional Baguette' },
    description: {
      fr: 'Baguette à la farine label rouge',
      en: 'Premium flour French baguette',
    },
    img: '/assets/products/baguette-tradition.jpeg',
    price: 1.3,
    quantity: 200,
    type: 'bread',
  },
  {
    label: { fr: 'Millefeuille', en: 'Napoleon' },
    description: {
      fr: 'Pâte feuilletée et crème pâtissière vanille',
      en: 'Puff pastry with vanilla custard cream',
    },
    img: '/assets/products/millefeuille.jpeg',
    price: 4.2,
    quantity: 30,
    type: 'pastry',
  },
  {
    label: { fr: 'Pain complet', en: 'Whole Wheat Bread' },
    description: {
      fr: 'Pain à la farine complète',
      en: 'Whole wheat flour bread',
    },
    img: '/assets/products/pain-complet.jpeg',
    price: 2.5,
    quantity: 60,
    type: 'bread',
  },
  {
    label: { fr: 'Paris-Brest', en: 'Paris-Brest' },
    description: {
      fr: 'Pâte à choux et crème pralinée',
      en: 'Choux pastry with praline cream',
    },
    img: '/assets/products/paris-brest.jpeg',
    price: 4.5,
    quantity: 25,
    type: 'pastry',
  },
  {
    label: { fr: 'Brioche', en: 'Brioche' },
    description: {
      fr: 'Pain moelleux au beurre',
      en: 'Soft butter bread',
    },
    img: '/assets/products/brioche.jpeg',
    price: 3.8,
    quantity: 45,
    type: 'bread',
  },
  {
    label: { fr: 'Chausson aux pommes', en: 'Apple Turnover' },
    description: {
      fr: 'Feuilleté aux pommes caramélisées',
      en: 'Puff pastry with caramelized apples',
    },
    img: '/assets/logo.png',
    price: 2.2,
    quantity: 70,
    type: 'pastry',
  },
  {
    label: { fr: 'Saint-Honoré', en: 'Saint-Honoré' },
    description: {
      fr: 'Pâte feuilletée, choux et crème chantilly',
      en: 'Puff pastry, choux and whipped cream',
    },
    img: '/assets/logo.png',
    price: 5.5,
    quantity: 15,
    type: 'pastry',
  },
  {
    label: { fr: 'Pain de seigle', en: 'Rye Bread' },
    description: {
      fr: 'Pain à la farine de seigle',
      en: 'Rye flour bread',
    },
    img: '/assets/logo.png',
    price: 2.9,
    quantity: 40,
    type: 'bread',
  },
  {
    label: { fr: 'Religieuse au café', en: 'Coffee Religieuse' },
    description: {
      fr: 'Double choux garni de crème au café',
      en: 'Double choux filled with coffee cream',
    },
    img: '/assets/logo.png',
    price: 4.2,
    quantity: 30,
    type: 'pastry',
  },
  {
    label: { fr: 'Tarte au citron meringuée', en: 'Lemon Meringue Pie' },
    description: {
      fr: 'Tarte au citron recouverte de meringue',
      en: 'Lemon pie topped with meringue',
    },
    img: '/assets/logo.png',
    price: 4.8,
    quantity: 25,
    type: 'pastry',
  },
  {
    label: { fr: 'Pain aux noix', en: 'Walnut Bread' },
    description: {
      fr: 'Pain aux cerneaux de noix',
      en: 'Bread with walnut pieces',
    },
    img: '/assets/logo.png',
    price: 3.2,
    quantity: 35,
    type: 'bread',
  },
  {
    label: { fr: 'Opéra', en: 'Opera Cake' },
    description: {
      fr: 'Gâteau multicouche café-chocolat',
      en: 'Coffee and chocolate layered cake',
    },
    img: '/assets/logo.png',
    price: 4.9,
    quantity: 20,
    type: 'pastry',
  },
];

PRODUCTS.sort((a, b) => a.label.fr.localeCompare(b.label.fr));
