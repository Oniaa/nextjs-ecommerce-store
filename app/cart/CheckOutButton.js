'use client';

import { useRouter } from 'next/navigation';

export default function CheckOutButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/checkout')}>
      Check Out
    </button>
  );
}
