import { notFound } from 'next/dist/client/components/not-found';
import Image from 'next/image';
import { getProductById } from '../../../database/products';

export const dynamic = 'force-dynamic';

export default function SingleProductPage({ params }) {
  const singleProduct = getProductById();

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
    </main>
  );
}
