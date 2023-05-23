export const products = [
  { id: 1, name: 'pink', price: 24 },
  { id: 2, name: 'blue', price: 24 },
  { id: 3, name: 'yellow', price: 24 },
  { id: 4, name: 'green', price: 24 },
];

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
