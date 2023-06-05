'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateCart(productId: number, number: string) {
  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const cartToUpdate = carts.find((cart: { id: number }) => {
    return cart.id === productId;
  });

  if (cartToUpdate) {
    cartToUpdate.number = parseInt(number) + parseInt(cartToUpdate.number);
  } else {
    carts.push({
      id: productId,
      number,
    });
  }

  await cookies().set('cart', JSON.stringify(carts));
}

export async function deleteCartItem(productId: number) {
  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const updatedCart = carts.filter(
    (cart: { id: number }) => cart.id !== productId,
  );

  await cookies().set('cart', JSON.stringify(updatedCart));
}
