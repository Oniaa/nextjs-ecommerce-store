import Image from 'next/image';
import { products } from '../../database/products';

export default function ProductsPage() {
  return (
    <main>
      <h1>Bubbles</h1>
      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            {product.name}
            <Image
              scr={`/images/${product.name}.png`}
              width={200}
              height={200}
            />
          </div>
        );
      })}
    </main>
  );
}
