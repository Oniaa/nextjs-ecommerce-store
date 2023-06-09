import style from './page.module.scss';

export const metadata = {
  title: 'Contacts Page',
  description: 'This is our Contacts Page',
};

export default function ContactsPage() {
  return (
    <main className={style.mainContainer}>
      <div className={style.contentContainer}>
        <h1>About Bubble Store</h1>
        <p>
          Welcome to Bubble Store, the enchanting world of bubbles where
          imagination takes flight!
          <br />
          Step into a realm where dreams come true and ordinary moments
          transform into extraordinary experiences.
          <br />
          <br />
          Our Story
          <br />
          Bubble Store was born from a desire to capture the magic of childhood
          and create a space where the impossible becomes possible. Our team of
          dream weavers and bubble enthusiasts embarked on a mission to bring
          joy, wonder, and endless possibilities to your fingertips.
          <br />
          <br />
          Our Vision
          <br />
          At Bubble Store, we believe in the power of imagination. We envision a
          world where everyday objects come alive with whimsy and delight,
          sparking curiosity and inspiring creativity. Through our vibrant
          bubbles, we aim to transport you to a realm where the ordinary becomes
          extraordinary.
          <br />
          <br />
          Our Bubble Collection Indulge in a kaleidoscope of colors with our
          captivating bubble collection. From serene blues and vibrant greens to
          shimmering iridescence, each bubble is meticulously crafted to ignite
          your senses and create a visual spectacle. Our bubbles are designed to
          evoke emotions, spark joy, and transform any space into a magical
          oasis.
        </p>
      </div>
    </main>
  );
}
