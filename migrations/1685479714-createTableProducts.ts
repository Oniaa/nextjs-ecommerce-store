import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  price: number;
  slug: string;
  description: string;
  short: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(30) NOT NULL,
      price integer NOT NULL,
      slug varchar(100) NOT NULL,
      description varchar(10000) NOT NULL,
      short varchar(1000) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE products
  `;
}
