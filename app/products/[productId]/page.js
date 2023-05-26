import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import style from './page.module.scss';
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
    <main className={style.mainContainer}>
      <div className={style.contentContainer}>
        <Image
          src={`/images/${product.name}.png`}
          width={400}
          height={400}
          alt="Bubble"
        />
        <div className={style.infoContainer}>
          <h1>{product.name}</h1>
          <br />
          <h4>{product.price} $</h4>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit, sed do eiusmod tempor incididunt ut labore et dolore <br />
            magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
            exercitation ullamco laboris aliquip ex ea commodo consequat.
          </p>
          <br />
          <div>
            <span>In Cart: </span>
            {cartToUpdate?.number}
            <ProductCartForm productId={product.id} />
          </div>
        </div>
      </div>
    </main>
  );
}
