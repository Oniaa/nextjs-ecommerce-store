'use client';

import { useRouter } from 'next/navigation';
import { decreaseItem, increaseItem } from './actions';

export default function ChangeItemQuantity(props) {
  const router = useRouter();

  return (
    <form>
      <button
        formAction={async () => {
          router.refresh();
          await decreaseItem(props.productId);
        }}
      >
        -
      </button>
      <input
        data-test-id={`cart-product-quantity-${props.productId}`}
        type="number"
        value={props.productQuantity}
      />
      <button
        formAction={async () => {
          router.refresh();
          await increaseItem(props.productId);
        }}
      >
        +
      </button>
    </form>
  );
}
