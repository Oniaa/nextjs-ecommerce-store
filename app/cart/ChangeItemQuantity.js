'use client';

import { useRouter } from 'next/navigation';
import { decreaseItem, increaseItem } from './actions';
import style from './ChangeItemQuantity.module.scss';

export default function ChangeItemQuantity(props) {
  const router = useRouter();

  return (
    <form className={style.formContainer}>
      <button
        className={style.quantityButton}
        formAction={async () => {
          router.refresh();
          await decreaseItem(props.productId);
        }}
      >
        -
      </button>
      <input
        className={style.quantityInput}
        data-test-id={`cart-product-quantity-${props.productId}`}
        type="number"
        value={props.productQuantity}
      />
      <button
        className={style.quantityButton}
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
