import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bubble Shop',
  description: 'Shop that sells bubbles of different colors',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">Home</Link> <Link href="/products">Products</Link>{' '}
          <Link href="/contacts">Contacts</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
