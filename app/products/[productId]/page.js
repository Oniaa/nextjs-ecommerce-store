import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import ProductCartForm from './ProductCartForm';

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }) {
  const product = await getProductById(Number(params.productId));

  if (!product) {
    notFound();
  }

  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const cartToUpdate = carts.find((cart) => {
    return cart.id === product.id;
  });

  return (
    <main>
      <h1>{product.name}</h1>
      <Image
        src={`/images/${product.name}.png`}
        width={200}
        height={200}
        alt="Bubble"
      />
      <br />
      <span>{product.price} </span>
      <br />
      <span>In Cart: </span>
      {cartToUpdate?.number}
      <ProductCartForm productId={product.id} />
    </main>
  );
}
