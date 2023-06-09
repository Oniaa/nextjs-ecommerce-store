import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import CheckOutForm from './CheckOutForm';
import style from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Checkout Page',
  description: 'This is your Checkout Page',
};

export default async function CheckoutPage() {
  const products = await getProducts();
  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const orders = carts.map((cart) => {
    const orderItem = products.find((product) => product.id === cart.id);
    return {
      id: orderItem.id,
      name: orderItem.name,
      slug: orderItem.slug,
      price: orderItem.price,
      quantity: cart.number,
    };
  });

  const totalSum = carts.reduce((sum, item) => sum + parseInt(item.number), 0);

  const totalPrice = orders.reduce(
    (sum, item) => sum + parseInt(item.quantity) * parseInt(item.price),
    0,
  );

  return (
    <main className={style.mainContainer}>
      <h1>Check Out</h1>
      <section className={style.section}>
        <div>
          <CheckOutForm />
        </div>
        <div className={style.orderSection}>
          <h2>Your Order</h2>
          {orders.length > 0 && (
            <>
              {orders.map((order) => {
                return (
                  <div
                    className={style.contentContainer}
                    key={`cart-div-${order.id}`}
                  >
                    <span>{order.quantity}x</span>

                    <h3>{order.slug}</h3>
                    <span> </span>

                    <span>{order.price} $</span>
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
            </>
          )}
        </div>
      </section>
    </main>
  );
}
