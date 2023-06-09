'use client';

import { useRouter } from 'next/navigation';
import style from './CheckOutButton.module.scss';

export default function CheckOutButton() {
  const router = useRouter();

  return (
    <button
      className={style.checkOutButton}
      data-test-id="cart-checkout"
      type="button"
      onClick={() => router.push('/checkout')}
    >
      CHECKOUT
    </button>
  );
}
