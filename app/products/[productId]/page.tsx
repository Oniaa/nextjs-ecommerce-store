import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import style from './page.module.scss';
import ProductCartForm from './ProductCartForm';

export const metadata = {
  title: 'Single Product Page',
  description: 'This is our Single Product Page',
};

export const dynamic = 'force-dynamic';

type Props = {
  params: { productId: string };
};

export default async function ProductPage(props: Props) {
  const product = await getProductById(Number(props.params.productId));

  if (!product) {
    notFound();
  }

  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const cartToUpdate = carts.find((cart: { id: number }) => {
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
          data-test-id="product-image"
        />
        <div className={style.infoContainer}>
          <h1>{product.slug}</h1>
          <br />
          <h4>
            <span data-test-id="product-price">{product.price} </span>
            <span> $</span>
          </h4>
          <br />
          <p>{product.description} </p>
          <br />
          <div>
            <span>Quantity: </span>
            {cartToUpdate?.number}
            <ProductCartForm productId={product.id} />
          </div>
        </div>
      </div>
    </main>
  );
}
