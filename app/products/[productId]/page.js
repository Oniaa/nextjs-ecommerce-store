import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import ProductCartForm from './ProductCartForm';

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }) {
  const product = await getProductById(Number(params.productId));

  if (!product) {
    notFound();
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <Image
        src={`/images/${product.name}.png`}
        width={200}
        height={200}
        alt="Bubble"
      />
      <span>{product.price} </span>
      <ProductCartForm productId={product.id} />
    </main>
  );
}
