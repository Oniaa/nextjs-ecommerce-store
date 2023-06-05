import { expect, test } from '@jest/globals';
import { createOrUpdateCart } from '../cartUpdate';

test('should update quantity when cart item exists', () => {
  const productId = 1;
  const number = '3';
  const carts = [{ id: 1, number: '2' }];

  const updatedCarts = createOrUpdateCart(productId, number, carts);

  expect(updatedCarts).toEqual([{ id: 1, number: '5' }]);
});

test('should add new item when cart item does not exist', () => {
  const productId = 2;
  const number = '4';
  const carts = [{ id: 1, number: '2' }];

  const updatedCarts = createOrUpdateCart(productId, number, carts);

  expect(updatedCarts).toEqual([
    { id: 1, number: '2' },
    { id: 2, number: '4' },
  ]);
});
