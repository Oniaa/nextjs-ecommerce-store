import style from './page.module.scss';

export const metadata = {
  title: 'Thank you for your order',
  description: 'This is our Thank you Page',
};

export default function ThankYouPage() {
  return (
    <main className={style.mainContainer}>
      <h1>
        Thank you for your order!
        <br />
        And have fun with your purchase
      </h1>
    </main>
  );
}
