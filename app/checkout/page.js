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
    const totalPrice = parseInt(orderItem.price) * parseInt(cart.number);
    return {
      id: orderItem.id,
      name: orderItem.name,
      slug: orderItem.slug,
      price: orderItem.price,
      quantity: cart.number,
      totalPrice: totalPrice,
    };
  });

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
                    <div className={style.text}>
                      <span>{order.quantity}x</span>

                      <h3>{order.slug}</h3>
                    </div>
                    <div className={style.price}>
                      <span>{order.totalPrice} $ </span>
                    </div>
                  </div>
                );
              })}

              <br />
              <br />
              <div className={style.totalContainer}>
                <h3>Sub Total: {totalPrice}$</h3>
              </div>
              <br />
            </>
          )}
        </div>
      </section>
    </main>
  );
}
