import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'Home Page',
  description: 'This is our Home Page',
};

export default function HomePage() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.backgroundContainer}>
        <section className={styles.sectionContainer}>
          <div className={styles.divContainer1}>
            <Link href="/products/1">
              <Image
                src="/images/blue.png"
                alt="Pink Bubble"
                width="400"
                height="400"
              />

              <div className={styles.textOverlay}>
                ENCHANTING
                <br /> BLUE BUBBLES
              </div>
            </Link>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <div className={styles.divContainer2}>
            <Link href="/products/4">
              <Image
                src="/images/rainbow.png"
                alt="Pink Bubble"
                width="400"
                height="400"
              />
              <div className={styles.textOverlay}>
                RADIANT
                <br /> RAINBOW BUBBLES
              </div>
            </Link>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <div className={styles.divContainer3}>
            <Link href="/products/9">
              <Image
                src="/images/turquoise.png"
                alt="Pink Bubble"
                width="400"
                height="400"
              />
              <div className={styles.textOverlay}>
                TURQUOISE <br /> TRANQUILITY BUBBLES
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
