import { expect, test } from '@jest/globals';
import { calculateTotalSum } from '../totalSum';

test('should calculate the correct total sum', () => {
  const carts = [
    { id: 1, number: 2 },
    { id: 2, number: 3 },
  ];
  const totalSum = calculateTotalSum(carts);
  expect(totalSum).toBe(5);
});

test('should return 0 when the cart is empty', () => {
  const carts: { id: number; number: number }[] = [];
  const totalSum = calculateTotalSum(carts);
  expect(totalSum).toBe(0);
});
