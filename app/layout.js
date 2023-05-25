import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
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

  console.log(carts);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className={style.navbar}>
            <span className={style.logo}>Bubble Store</span>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/contacts">Contacts</Link>
              </li>
              <li>
                <Link href="/cart"> Cart: {totalSum} </Link>
              </li>
            </ul>
          </nav>
          {children}
        </header>
        <CookieBanner />
      </body>
    </html>
  );
}
