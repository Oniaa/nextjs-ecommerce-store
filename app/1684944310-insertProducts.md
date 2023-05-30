import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    name: 'blue',
    price: 24,
    productName: 'Enchanting Blue Bubbles',
    description:
      'Dive into a world of tranquility with our Enchanting Blue Bubbles. These shimmering spheres will transport you to an oceanic paradise, where you can unwind and let your imagination soar. Add a touch of serenity to your bubble adventures!',
    shortDescription: 'Dive into tranquility with our Enchanting Blue Bubbles.',
  },
  {
    id: 2,
    name: 'green',
    price: 24,
    productName: 'Whimsical Green Bubbles',
    description:
      'Embark on a magical journey with our Whimsical Green Bubbles. These vibrant orbs exude a playful energy, filling the air with joy and wonder. Create a fantastical atmosphere and let your imagination take flight with every bubble you blow!',
    shortDescription:
      'Embark on a magical journey with Whimsical Green Bubbles.',
  },
  {
    id: 3,
    name: 'grey',
    price: 24,
    productName: 'Mystical Grey Bubbles',
    description:
      'Unleash your inner mystery with our Mystical Grey Bubbles. These ethereal spheres cast an enigmatic spell, transforming any space into a realm of intrigue and fascination. Let the captivating hue of grey elevate your bubble-blowing experience!',
    shortDescription: 'Unleash your inner mystery with Mystical Grey Bubbles.',
  },
  {
    id: 4,
    name: 'rainbow',
    price: 24,
    productName: 'Radiant Rainbow Bubbles',
    description:
      'Immerse yourself in a dazzling display of colors with our Radiant Rainbow Bubbles. Each bubble bursts with a vibrant spectrum, painting the air with hues of joy and delight. Experience the magic of a rainbow every time you blow one of these enchanting bubbles!',
    shortDescription:
      'Experience a dazzling display of colors with Radiant Rainbow Bubbles.',
  },
  {
    id: 5,
    name: 'multicolor',
    price: 24,
    productName: 'Euphoric Multicolor Bubbles',
    description:
      'Elevate your bubble-blowing game with our Euphoric Multicolor Bubbles. These captivating orbs swirl with a kaleidoscope of shades, creating a mesmerizing visual spectacle. Let the burst of colors ignite your imagination and fill your world with happiness!',
    shortDescription:
      'Elevate your bubble-blowing game with Euphoric Multicolor Bubbles.',
  },
  {
    id: 6,
    name: 'iridescent',
    price: 24,
    productName: 'Iridescent Dream Bubbles',
    description:
      'Step into a realm of enchantment with our Iridescent Dream Bubbles. These shimmering spheres shimmer with a captivating iridescence, reflecting a myriad of colors as they float through the air. Unleash your creativity and let the iridescent magic unfold!',
    shortDescription:
      'Step into a realm of enchantment with Iridescent Dream Bubbles.',
  },
  {
    id: 7,
    name: 'pink',
    price: 24,
    productName: 'Pretty in Pink Bubbles',
    description:
      ' Embrace your inner princess with our Pretty in Pink Bubbles. These delicate orbs radiate a soft pink glow, infusing any occasion with elegance and charm. Create a whimsical ambiance and let the pink bubbles cast their spell of enchantment!',
    shortDescription: 'Embrace elegance and charm with Pretty in Pink Bubbles.',
  },
  {
    id: 8,
    name: 'yellow',
    price: 24,
    productName: 'Sunny Yellow Bubbles',
    description:
      'Add a touch of sunshine to your bubble adventures with our Sunny Yellow Bubbles. These cheerful spheres emit a warm glow, spreading happiness and positivity with every floating bubble. Let the bright yellow color brighten up your day!',
    shortDescription: 'Add a touch of sunshine with Sunny Yellow Bubbles.',
  },
  {
    id: 9,
    name: 'turquoise',
    price: 24,
    productName: 'Turquoise Tranquility Bubbles',
    description:
      'Experience a sense of calm and tranquility with our Turquoise Tranquility Bubbles. The soothing shade of turquoise imbues these bubbles with a serene energy, creating a peaceful atmosphere. Indulge in a moment of relaxation and let the turquoise bubbles transport you to a state of bliss!',
    shortDescription:
      'Indulge in tranquility with Turquoise Tranquility Bubbles.',
  },
  {
    id: 10,
    name: 'bluewater',
    price: 24,
    productName: 'Blue Water Bliss Bubbles',
    description:
      'Dive into a world of aquatic wonder with our Blue Water Bliss Bubbles. Inspired by the depths of the ocean, these bubbles encapsulate the serene beauty of marine life. Immerse yourself in the enchanting blue hue and let your imagination swim alongside the bubbles!',
    shortDescription: 'Dive into aquatic wonder with Blue Water Bliss Bubbles.',
  },
  {
    id: 11,
    name: 'greenwater',
    price: 24,
    productName: 'Green Water Magic Bubbles',
    description:
      ' Unleash the magic of nature with our Green Water Magic Bubbles. These bubbles capture the essence of lush forests and meandering streams, radiating a vibrant green glow. Let the refreshing green color transport you to a world where imagination meets the wonders of the natural world!',
    shortDescription:
      'Unleash the magic of nature with Gree Water Magic Bubbles.',
  },
  {
    id: 12,
    name: 'pinkwater',
    price: 24,
    productName: 'Pink Water Fantasy Bubbles',
    description:
      'Enter a realm of fantasy with our Pink Water Fantasy Bubbles. These whimsical orbs shimmer with a dreamy pink hue, creating an atmosphere of enchantment and wonder. Let your imagination soar as you blow bubbles that transport you to a world of fairy tales and magic!',
    shortDescription:
      'Enter a realm of fantasy with Pink Water Fantasy Bubbles.',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
      (name, price)
    VALUES
      (${product.name}, ${product.price})
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products WHERE id = ${product.id}
    `;
  }
}
