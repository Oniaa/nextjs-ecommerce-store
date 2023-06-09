import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import ChangeItemQuantity from './ChangeItemQuantity';
import CheckOutButton from './CheckOutButton';
import DeleteItemFromCart from './DeleteButton';
import style from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Cart',
  description: 'This is your Cart Page',
};

export default async function CartPage() {
  const products = await getProducts();
  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const orders = carts.map((cart) => {
    const orderItem = products.find((product) => product.id === cart.id);
    const totalPrice = parseInt(orderItem.price) * parseInt(cart.number);
    return {
      id: orderItem.id,
      name: orderItem.name,
      price: orderItem.price,
      slug: orderItem.slug,
      short: orderItem.short,
      quantity: cart.number,
      totalPrice: totalPrice,
    };
  });

  const totalSum = carts.reduce((sum, item) => sum + parseInt(item.number), 0);

  const totalPrice = orders.reduce(
    (sum, item) => sum + parseInt(item.quantity) * parseInt(item.price),
    0,
  );

  return (
    <main className={style.mainContainer}>
      <h1>Your Cart</h1>
      <br />
      <br />
      <div className={style.backgroundContainer}>
        {orders.length > 0 && (
          <>
            {orders.map((order) => {
              return (
                <div
                  className={style.contentContainer}
                  key={`cart-div-${order.id}`}
                  data-test-id={`cart-div-${order.id}`}
                >
                  <Image
                    src={`/images/${order.name}.png`}
                    width={100}
                    height={100}
                    alt="Bubbles"
                  />
                  <div>
                    <Link href={`/products/${order.id}`}>
                      <h3>{order.slug}</h3>
                    </Link>
                    <p>{order.short} </p>
                  </div>

                  <h4>
                    {order.price} <span>$</span>
                  </h4>

                  <ChangeItemQuantity
                    productId={order.id}
                    productQuantity={order.quantity}
                  />
                  <h4>
                    {order.totalPrice} <span>$</span>
                  </h4>
                  <DeleteItemFromCart productId={order.id} />
                </div>
              );
            })}

            <div className={style.totalContainer}>
              <h3>
                Sub total: {totalSum} Items for{' '}
                <span data-test-id="cart-total">{totalPrice}</span>$
              </h3>
            </div>
            <br />
            <br />
            <CheckOutButton />
          </>
        )}
      </div>
    </main>
  );
}
