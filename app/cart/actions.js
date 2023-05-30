'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function deleteItem(productId) {
  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const updatedCart = carts.filter((cart) => cart.id !== productId);

  await cookies().set('cart', JSON.stringify(updatedCart));
}

export async function increaseItem(productId, number) {
  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const cartToUpdate = carts.find((cart) => {
    return cart.id === productId;
  });

  if (cartToUpdate) {
    cartToUpdate.number = parseInt(cartToUpdate.number) + 1;
  } else {
    carts.push({
      id: productId,
      number,
    });
  }

  await cookies().set('cart', JSON.stringify(carts));
}

export async function decreaseItem(productId) {
  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const cartToUpdate = carts.find((cart) => {
    return cart.id === productId;
  });

  if (cartToUpdate && cartToUpdate.number > 0) {
    cartToUpdate.number = parseInt(cartToUpdate.number) - 1;
  }

  await cookies().set('cart', JSON.stringify(carts));
}
