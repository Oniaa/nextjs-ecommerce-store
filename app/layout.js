import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';
import { CookieBanner } from './CookieBanner';
import style from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bubble Shop',
  description: 'Shop that sells bubbles of different colors',
};

export default function RootLayout({ children }) {
  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const totalSum = carts.reduce((sum, item) => sum + parseInt(item.number), 0);

  return (
    <html lang="en">
      <body className={inter.className}>
        <CookieBanner />
        <header>
          <nav className={style.navbar}>
            <ul className={style.leftNavbar}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products" data-test-id="products-link">
                  Products
                </Link>
              </li>
            </ul>
            <ul className={style.rightNavbar}>
              <li>
                <Link href="/contacts">Contacts</Link>
              </li>
              <li>
                <Link data-test-id="cart-link" href="/cart">
                  <AiOutlineShoppingCart size="1.5rem" />
                  <span data-test-id="cart-count">{totalSum}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <span className={style.logo}>Bubble Store</span>
        {children}
      </body>
    </html>
  );
}
