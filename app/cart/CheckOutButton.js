'use client';

import { useRouter } from 'next/navigation';

export default function CheckOutButton() {
  const router = useRouter();

  return (
    <button
      data-test-id="cart-checkout"
      type="button"
      onClick={() => router.push('/checkout')}
    >
      Proceed to Check Out
    </button>
  );
}
