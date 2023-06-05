import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'Home Page',
  description: 'This is our Home Page',
};

export default function HomePage() {
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.backgroundContainer}>
          <section className={styles.sectionContainer}>
            <div className={styles.divContainer1}>
              <Link href="/products/1">
                <Image
                  src="/images/pink.png"
                  alt="Pink Bubble"
                  width="400"
                  height="400"
                />

                <div className={styles.textOverlay}>
                  PINK <br /> BUBBLE
                </div>
              </Link>
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <div className={styles.divContainer2}>
              <Link href="/products/2">
                <Image
                  src="/images/blue.png"
                  alt="Pink Bubble"
                  width="400"
                  height="400"
                />
                <div className={styles.textOverlay}>
                  BLUE <br /> BUBBLE
                </div>
              </Link>
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <div className={styles.divContainer3}>
              <Link href="/products/3">
                <Image
                  src="/images/yellow.png"
                  alt="Pink Bubble"
                  width="400"
                  height="400"
                />
                <div className={styles.textOverlay}>
                  YELLOW <br /> BUBBLE
                </div>
              </Link>
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <div className={styles.divContainer4}>
              <Link href="/products/4">
                <Image
                  src="/images/green.png"
                  alt="Pink Bubble"
                  width="400"
                  height="400"
                />
                <div className={styles.textOverlay}>
                  GREEN <br /> BUBBLE
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <span>More Info later</span>
      </footer>
    </>
  );
}
