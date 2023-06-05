'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { createOrUpdateCart, deleteCartItem } from './actions';

type Props = {
  productId: number;
};

export default function ProductCartForm(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  return (
    <form>
      <div>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setQuantity(parseInt(event.currentTarget.value));
          }}
        />
        <button
          formAction={async () => {
            router.refresh();
            await createOrUpdateCart(props.productId, quantity.toString());
          }}
        >
          Add to Cart
        </button>
        <button
          formAction={async () => {
            router.refresh();
            await deleteCartItem(props.productId);
          }}
        >
          Remove from Cart
        </button>
      </div>
    </form>
  );
}
