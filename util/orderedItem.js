export default function getOrderedItems(carts, products) {
  const orders = carts.map((cart) => {
    const orderItem = products.find((product) => product.id === cart.id);
    return {
      id: orderItem.id,
      name: orderItem.name,
      price: orderItem.price,
      slug: orderItem.slug,
      short: orderItem.short,
      quantity: cart.number,
    };
  });

  return orders;
}
