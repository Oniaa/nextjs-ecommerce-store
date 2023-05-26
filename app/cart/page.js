import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import DeleteItemFromCart from './DeleteButton';

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

  console.log(orders);

  return (
    <main>
      <h1>Cart Page</h1>
      {orders.length > 0 && (
        <div>
          {orders.map((order) => {
            return (
              <div key={`cart-div-${order.id}`}>
                <h2>{order.name}</h2>
                <span>{order.price} $</span>
                <br />
                <span>{order.quantity}</span>
                <DeleteItemFromCart productId={order.id} />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
