import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import style from './page.module.scss';

export const metadata = {
  title: 'Products Page',
  description: 'This is our Products Page',
};

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await getProducts();

  console.log(products);

  return (
    <main className={style.mainContainer}>
      <h1>All Bubbles</h1>
      <div className={style.productContainer}>
        {products.map((product) => {
          return (
            <div
              className={style.productContent}
              key={`product-div-${product.id}`}
            >
              <Image
                src={`/images/${product.name}.png`}
                width={200}
                height={200}
                alt="Bubbles"
              />

              <Link
                className={style.productText}
                href={`/products/${product.id}`}
                data-test-id={`product-${product.id}`}
              >
                <h2>{product.slug}</h2>
                <span>{product.price}$</span>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
