export function createOrUpdateCart(
  productId: number,
  number: string,
  carts: { id: number; number: string }[],
) {
  const cartToUpdate = carts.find((cart) => cart.id === productId);

  if (cartToUpdate) {
    cartToUpdate.number = (
      parseInt(number) + parseInt(cartToUpdate.number)
    ).toString();
  } else {
    carts.push({
      id: productId,
      number,
    });
  }

  return carts;
}
