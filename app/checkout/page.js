import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import CheckOutForm from './CheckOutForm';
import style from './page.module.scss';

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
      <div>
        <CheckOutForm />
      </div>
      <div>
        <h2>Cart summary</h2>
        {orders.length > 0 && (
          <>
            {orders.map((order) => {
              return (
                <div
                  className={style.contentContainer}
                  key={`cart-div-${order.id}`}
                >
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <span>{order.quantity}x</span>
                        </td>
                        <td>
                          <h3>{order.name}</h3>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>{order.price} $</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
    </main>
  );
}
