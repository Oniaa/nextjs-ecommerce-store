'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { createOrUpdateCart } from './actions';
import style from './ProductCartForm.module.scss';

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
          className={style.quantitySelector}
          data-test-id="product-quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setQuantity(parseInt(event.currentTarget.value));
          }}
        />
        <br />
        <button
          className={style.addButton}
          data-test-id="product-add-to-cart"
          formAction={async () => {
            router.refresh();
            await createOrUpdateCart(props.productId, quantity.toString());
          }}
        >
          ADD TO CART
        </button>
      </div>
    </form>
  );
}
