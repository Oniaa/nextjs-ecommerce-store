import Image from 'next/image';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import ChangeItemQuantity from './ChangeItemQuantity';
import CheckOutButton from './CheckOutButton';
import DeleteItemFromCart from './DeleteButton';
import style from './page.module.scss';

export default async function CartPage() {
  const products = await getProducts();
  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const orders = carts.map((cart) => {
    const orderItem = products.find((product) => product.id === cart.id);
    return {
      id: orderItem.id,
      name: orderItem.name,
      price: orderItem.price,
      quantity: cart.number,
    };
  });

  const totalSum = carts.reduce((sum, item) => sum + parseInt(item.number), 0);

  const totalPrice = orders.reduce(
    (sum, item) => sum + parseInt(item.quantity) * parseInt(item.price),
    0,
  );

  console.log(orders);

  return (
    <main className={style.mainContainer}>
      <h1>Your Cart</h1>
      <br />
      <br />
      {orders.length > 0 && (
        <>
          {orders.map((order) => {
            return (
              <div
                className={style.contentContainer}
                key={`cart-div-${order.id}`}
              >
                <Image
                  src={`/images/${order.name}.png`}
                  width={100}
                  height={100}
                  alt="Bubbles"
                />
                <div>
                  <h3>{order.name}</h3>
                  <span>{order.price} $</span>
                  <br />
                  <ChangeItemQuantity
                    productId={order.id}
                    productQuantity={order.quantity}
                  />
                  <DeleteItemFromCart productId={order.id} />
                </div>
              </div>
            );
          })}

          <br />
          <br />
          <div>
            <span>
              Total Quantity: {totalSum} Total Price: {totalPrice}$
            </span>
          </div>
          <br />
          <br />
          <CheckOutButton />
        </>
      )}
    </main>
  );
}
