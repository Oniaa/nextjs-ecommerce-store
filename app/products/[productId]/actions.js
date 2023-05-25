'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createUpdateComment(productId, comment) {
  const productCartCookie = getCookie('comment');

  const cartProducts = !productCartCookie ? [] : parseJson(productCartCookie);

  const productToUpdate = cartProducts.find((cartProduct) => {
    return cartProduct.id === productId;
  });

  if (productToUpdate) {
    productToUpdate.comment = comment;
  } else {
    cartProducts.push({
      id: productId,
      comment,
    });
  }

  await cookies().set('comment', JSON.stringify(cartProducts));
}

export async function createOrUpdateCart(productId, number) {
  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const cartToUpdate = carts.find((cart) => {
    return cart.id === productId;
  });

  if (cartToUpdate) {
    cartToUpdate.number = number;
  } else {
    carts.push({
      id: productId,
      number,
    });
  }

  await cookies().set('cart', JSON.stringify(carts));
}
