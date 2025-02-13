import { describeRoute } from 'hono-openapi';
import { PRODUCTS, ProductSchema } from '../data/products.js';
import { resolver } from 'hono-openapi/zod';
import { z } from 'zod';

export function getDiscoveriesDoc() {
  return describeRoute({
    description: 'Get discovery product list',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': { schema: resolver(z.array(ProductSchema)) },
        },
      },
    },
  });
}

export function getDiscoveries() {
  return [pickOneProduct(), pickOneProduct(), pickOneProduct()];
}

function pickOneProduct() {
  return PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
}
