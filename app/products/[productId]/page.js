import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import ProductCartForm from './ProductCartForm';

export const dynamic = 'force-dynamic';

export default function SingleProductPage({ params }) {
  const singleProduct = getProductById(Number(params.productId));

  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <h1>{singleProduct.name}</h1>
      <Image
        src={`/images/${singleProduct.name}.png`}
        width={200}
        height={200}
      />
      <span>{singleProduct.price} </span>
      <ProductCartForm />
    </main>
  );
}
