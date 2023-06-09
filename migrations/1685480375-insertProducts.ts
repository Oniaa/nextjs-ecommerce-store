import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    name: 'blue',
    price: 24,
    slug: 'Enchanting Blue Bubbles',
    description:
      'Dive into a world of tranquility with our Enchanting Blue Bubbles. These shimmering spheres will transport you to an oceanic paradise, where you can unwind and let your imagination soar. Add a touch of serenity to your bubble adventures!',
    short: 'Dive into tranquility with our Enchanting Blue Bubbles.',
  },
  {
    id: 2,
    name: 'green',
    price: 24,
    slug: 'Whimsical Green Bubbles',
    description:
      'Embark on a magical journey with our Whimsical Green Bubbles. These vibrant orbs exude a playful energy, filling the air with joy and wonder. Create a fantastical atmosphere and let your imagination take flight with every bubble you blow!',
    short: 'Embark on a magical journey with Whimsical Green Bubbles.',
  },
  {
    id: 3,
    name: 'grey',
    price: 24,
    slug: 'Mystical Grey Bubbles',
    description:
      'Unleash your inner mystery with our Mystical Grey Bubbles. These ethereal spheres cast an enigmatic spell, transforming any space into a realm of intrigue and fascination. Let the captivating hue of grey elevate your bubble-blowing experience!',
    short: 'Unleash your inner mystery with Mystical Grey Bubbles.',
  },
  {
    id: 4,
    name: 'rainbow',
    price: 24,
    slug: 'Radiant Rainbow Bubbles',
    description:
      'Immerse yourself in a dazzling display of colors with our Radiant Rainbow Bubbles. Each bubble bursts with a vibrant spectrum, painting the air with hues of joy and delight. Experience the magic of a rainbow every time you blow one of these enchanting bubbles!',
    short:
      'Experience a dazzling display of colors with Radiant Rainbow Bubbles.',
  },
  {
    id: 5,
    name: 'multicolor',
    price: 24,
    slug: 'Euphoric Multicolor Bubbles',
    description:
      'Elevate your bubble-blowing game with our Euphoric Multicolor Bubbles. These captivating orbs swirl with a kaleidoscope of shades, creating a mesmerizing visual spectacle. Let the burst of colors ignite your imagination and fill your world with happiness!',
    short: 'Elevate your bubble-blowing game with Euphoric Multicolor Bubbles.',
  },
  {
    id: 6,
    name: 'iridescent',
    price: 24,
    slug: 'Iridescent Dream Bubbles',
    description:
      'Step into a realm of enchantment with our Iridescent Dream Bubbles. These shimmering spheres shimmer with a captivating iridescence, reflecting a myriad of colors as they float through the air. Unleash your creativity and let the iridescent magic unfold!',
    short: 'Step into a realm of enchantment with Iridescent Dream Bubbles.',
  },
  {
    id: 7,
    name: 'pink',
    price: 24,
    slug: 'Pretty in Pink Bubbles',
    description:
      ' Embrace your inner princess with our Pretty in Pink Bubbles. These delicate orbs radiate a soft pink glow, infusing any occasion with elegance and charm. Create a whimsical ambiance and let the pink bubbles cast their spell of enchantment!',
    short: 'Embrace elegance and charm with Pretty in Pink Bubbles.',
  },
  {
    id: 8,
    name: 'yellow',
    price: 24,
    slug: 'Sunny Yellow Bubbles',
    description:
      'Add a touch of sunshine to your bubble adventures with our Sunny Yellow Bubbles. These cheerful spheres emit a warm glow, spreading happiness and positivity with every floating bubble. Let the bright yellow color brighten up your day!',
    short: 'Add a touch of sunshine with Sunny Yellow Bubbles.',
  },
  {
    id: 9,
    name: 'turquoise',
    price: 24,
    slug: 'Turquoise Tranquility Bubbles',
    description:
      'Experience a sense of calm and tranquility with our Turquoise Tranquility Bubbles. The soothing shade of turquoise imbues these bubbles with a serene energy, creating a peaceful atmosphere. Indulge in a moment of relaxation and let the turquoise bubbles transport you to a state of bliss!',
    short: 'Indulge in tranquility with Turquoise Tranquility Bubbles.',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
      (name, price, slug, description, short)
    VALUES
      (${product.name}, ${product.price}, ${product.slug}, ${product.description}, ${product.short})
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
