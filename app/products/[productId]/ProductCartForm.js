'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createOrUpdateCart, createUpdateComment } from './actions';

export default function ProductCartForm(props) {
  const [comment, setComment] = useState('');
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  return (
    <form>
      <textarea
        value={comment}
        onChange={(event) => {
          setComment(event.currentTarget.value);
        }}
      />
      <button
        formAction={async () => {
          router.refresh();
          await createUpdateComment(props.productId, comment);
        }}
      >
        Add Comment
      </button>
      <div>
        <h1>Product Page</h1>
        <p>Quantity: </p>
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
      </div>
    </form>
  );
}
