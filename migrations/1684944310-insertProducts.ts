import { Sql } from 'postgres';

export const products = [
  { id: 1, name: 'pink', price: 24 },
  { id: 2, name: 'blue', price: 24 },
  { id: 3, name: 'yellow', price: 24 },
  { id: 4, name: 'green', price: 24 },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
      (name, price)
    VALUES
      (${product.name}, ${product.price})
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products WHERE id = ${product.id}
    `;
  }
}
