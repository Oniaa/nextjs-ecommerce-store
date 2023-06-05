'use client';

import { useRouter } from 'next/navigation';
import { deleteItem } from './actions';

export default function DeleteItemFromCart(props) {
  const router = useRouter();

  return (
    <form>
      <button
        data-test-id={`cart-product-remove-${props.productId}`}
        formAction={async () => {
          router.refresh();
          await deleteItem(props.productId);
        }}
      >
        Remove from Cart
      </button>
    </form>
  );
}
