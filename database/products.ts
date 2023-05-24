import { cache } from 'react';
import { sql } from './connect';

/* export const products = [
  { id: 1, name: 'pink', price: 24 },
  { id: 2, name: 'blue', price: 24 },
  { id: 3, name: 'yellow', price: 24 },
  { id: 4, name: 'green', price: 24 },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
} */

type Product = {
  id: number;
  name: string;
  price: number;
};

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT * FROM products
 `;
  return products;
});

export const getAnimalById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
});
