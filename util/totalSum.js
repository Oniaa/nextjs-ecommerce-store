export function calculateTotalSum(carts) {
  if (carts.length === 0) {
    return 0;
  }
  return carts.reduce((sum, item) => sum + parseInt(item.number.toString()), 0);
}
