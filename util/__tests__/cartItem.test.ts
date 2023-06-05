import { expect, test } from '@jest/globals';
import getOrderedItems from '../orderedItem';

test('should get ordered items correctly', () => {
  const carts = [
    { id: 1, number: '2' },
    { id: 2, number: '3' },
  ];
  const products = [
    {
      id: 1,
      name: 'Pink',
      price: 24,
      slug: 'Pink Bubble',
      short: 'Short description 1',
    },
    {
      id: 2,
      name: 'Blue',
      price: 24,
      slug: 'Blue Bubble',
      short: 'Short description 2',
    },
  ];

  const orderedItems = getOrderedItems(carts, products);

  expect(orderedItems).toEqual([
    {
      id: 1,
      name: 'Pink',
      price: 24,
      slug: 'Pink Bubble',
      short: 'Short description 1',
      quantity: '2',
    },
    {
      id: 2,
      name: 'Blue',
      price: 24,
      slug: 'Blue Bubble',
      short: 'Short description 2',
      quantity: '3',
    },
  ]);
});
