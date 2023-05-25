'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createOrUpdateCart, deleteCartItem } from './actions';

export default function ProductCartForm(props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  return (
    <form>
      <div>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(event) => {
            setQuantity(event.currentTarget.value);
          }}
        />
        <button
          formAction={async () => {
            router.refresh();
            await createOrUpdateCart(props.productId, quantity);
          }}
        >
          Add to Cart
        </button>
        <button
          formAction={async () => {
            router.refresh();
            await deleteCartItem(props.productId, quantity);
          }}
        >
          Remove from Cart
        </button>
      </div>
    </form>
  );
}
