import CheckOutForm from './CheckOutForm';
import style from './page.module.scss';

export default function CheckoutPage() {
  return (
    <main className={style.mainContainer}>
      <h1>Checkout Page</h1>
      <div>
        <CheckOutForm />
      </div>
      <div>
        <h2>Cart summary</h2>
      </div>
    </main>
  );
}
