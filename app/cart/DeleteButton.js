'use client';

import { useRouter } from 'next/navigation';
import { AiOutlineDelete } from 'react-icons/ai';
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
        <AiOutlineDelete />
      </button>
    </form>
  );
}
