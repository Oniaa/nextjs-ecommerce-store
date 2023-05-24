import Image from 'next/image';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.backgroundContainer}>
        <section className={styles.sectionContainer}>
          <div className={styles.divContainer1}>
            <Image
              src="/images/pink.png"
              alt="Pink Bubble"
              width="400"
              height="400"
            />
            <div className={styles.textOverlay}>
              PINK <br /> BUBBLE
            </div>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <div className={styles.divContainer2}>
            <Image
              src="/images/blue.png"
              alt="Pink Bubble"
              width="400"
              height="400"
            />
            <div className={styles.textOverlay}>
              BLUE <br /> BUBBLE
            </div>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <div className={styles.divContainer3}>
            <Image
              src="/images/yellow.png"
              alt="Pink Bubble"
              width="400"
              height="400"
            />
            <div className={styles.textOverlay}>
              YELLOW <br /> BUBBLE
            </div>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <div className={styles.divContainer4}>
            <Image
              src="/images/green.png"
              alt="Pink Bubble"
              width="400"
              height="400"
            />
            <div className={styles.textOverlay}>
              GREEN <br /> BUBBLE
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
