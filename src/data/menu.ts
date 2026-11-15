// PLACEHOLDER menu data. Swap in real names, prices, calories and photos here;
// every page reads from this one file.

export type Size = {
  id: string;
  label: string;
  oz: number;
  price: number; // USD
  calories: number;
};

export type Drink = {
  id: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  badges: string[];
  image: string;
  imageAlt: string;
  sizes: Size[];
  note?: string;
  /** Seasons this drink is on the menu. */
  seasons: SeasonId[];
  /** Seasonal special (not one of the four year-round signatures shown on Home). */
  seasonal?: boolean;
};

export type SeasonId = 'winter' | 'spring' | 'summer' | 'fall';

export type Season = {
  id: SeasonId;
  name: string;
  tagline: string;
  icon: string;
  /** Months (1-12) this season covers, northern hemisphere. */
  months: number[];
};

// In calendar order. The menu page opens on whichever season today falls in.
export const seasons: Season[] = [
  { id: 'winter', name: 'Winter', tagline: 'Warm mugs for snowy days', icon: '❄', months: [12, 1, 2] },
  { id: 'spring', name: 'Spring', tagline: 'Fresh, fruity and in bloom', icon: '❀', months: [3, 4, 5] },
  { id: 'summer', name: 'Summer', tagline: 'Icy sips for sunny afternoons', icon: '☀', months: [6, 7, 8] },
  { id: 'fall', name: 'Fall', tagline: 'Cozy spice and orchard flavors', icon: '❦', months: [9, 10, 11] },
];

export const seasonFor = (date: Date): SeasonId =>
  seasons.find((s) => s.months.includes(date.getMonth() + 1))!.id;

export const drinks: Drink[] = [
  {
    id: 'hot-chocolate',
    category: 'Hot Chocolate',
    name: 'Cozy Cloud Cocoa',
    tagline: 'Velvety, not too sweet, topped with mini marshmallows',
    description:
      'Our signature cocoa is whisked with steamed milk and real cocoa, then served warm (never scalding) so little hands can sip right away. Finished with a cloud of mini marshmallows.',
    ingredients: ['Steamed whole milk', 'Dutch-process cocoa', 'Cane sugar', 'Pure vanilla', 'Mini marshmallows'],
    allergens: ['Milk'],
    badges: ['Kid-safe temp', 'Made with real cocoa'],
    image: '/images/drinks/hot-chocolate.svg',
    imageAlt: 'A pink mug of hot chocolate topped with marshmallows',
    seasons: ['winter', 'fall'],
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 3.5, calories: 180 },
      { id: 'm', label: 'Medium', oz: 12, price: 4.25, calories: 260 },
      { id: 'l', label: 'Large', oz: 16, price: 4.95, calories: 340 },
    ],
  },
  {
    id: 'lemonade',
    category: 'Lemonade',
    name: 'Pink Sparkle Lemonade',
    tagline: 'Fresh-squeezed lemons with a swirl of strawberry',
    description:
      'Hand-squeezed lemonade, lightly sweetened and blushed pink with real strawberry purée. Bright, refreshing and served over ice with a lemon wheel.',
    ingredients: ['Fresh lemon juice', 'Filtered water', 'Cane sugar', 'Strawberry purée', 'Ice'],
    allergens: [],
    badges: ['Caffeine-free', 'Dairy-free'],
    image: '/images/drinks/lemonade.svg',
    imageAlt: 'A tall glass of pink lemonade with a lemon wheel and straw',
    seasons: ['spring', 'summer'],
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 3.0, calories: 90 },
      { id: 'm', label: 'Medium', oz: 12, price: 3.75, calories: 130 },
      { id: 'l', label: 'Large', oz: 16, price: 4.5, calories: 175 },
    ],
  },
  {
    id: 'smoothie',
    category: 'Smoothie',
    name: 'Berry Bliss Smoothie',
    tagline: 'Strawberry, banana and blueberry, blended thick',
    description:
      'A fruit-forward blend of strawberries, banana and blueberries with creamy yogurt. No added sugar, just fruit, so it tastes like a treat and works like a snack.',
    ingredients: ['Strawberries', 'Banana', 'Blueberries', 'Vanilla yogurt', 'Apple juice', 'Ice'],
    allergens: ['Milk'],
    badges: ['No added sugar', 'Caffeine-free'],
    image: '/images/drinks/smoothie.svg',
    imageAlt: 'A berry smoothie in a clear cup with a strawberry and straw',
    seasons: ['spring', 'summer'],
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 4.5, calories: 150 },
      { id: 'm', label: 'Medium', oz: 12, price: 5.5, calories: 220 },
      { id: 'l', label: 'Large', oz: 16, price: 6.5, calories: 295 },
    ],
  },
  {
    id: 'coffee',
    category: 'Coffee',
    name: 'Little Latte (Babyccino)',
    tagline: 'All the coffee-shop fun, zero coffee',
    description:
      'Just like a grown-up latte, minus the caffeine: steamed milk crowned with silky foam, a touch of vanilla and a dusting of cocoa. Made for sipping alongside a parent’s coffee.',
    ingredients: ['Steamed whole milk', 'Milk foam', 'Vanilla syrup', 'Cocoa dusting'],
    allergens: ['Milk'],
    badges: ['Caffeine-free', 'Kid-safe temp'],
    image: '/images/drinks/coffee.svg',
    imageAlt: 'A small cup of foamy babyccino with a cocoa heart on top',
    seasons: ['winter', 'fall'],
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 2.75, calories: 110 },
      { id: 'm', label: 'Medium', oz: 12, price: 3.5, calories: 165 },
      { id: 'l', label: 'Large', oz: 16, price: 4.25, calories: 220 },
    ],
    note: 'Contains no coffee. Oat milk available on request.',
  },
  // ---- Seasonal specials (new ideas, awaiting approval) ----
  {
    id: 'peppermint-cocoa',
    category: 'Winter Special',
    name: 'Peppermint Snowflake Cocoa',
    tagline: 'Our cozy cocoa with a candy-cane twist',
    description:
      'Cozy Cloud Cocoa with a gentle swirl of peppermint, topped with whipped cream and a sprinkle of crushed candy cane. Served warm, never scalding.',
    ingredients: ['Steamed whole milk', 'Dutch-process cocoa', 'Cane sugar', 'Peppermint syrup', 'Whipped cream', 'Crushed candy cane'],
    allergens: ['Milk'],
    badges: ['Kid-safe temp', 'Holiday favorite'],
    image: '/images/drinks/peppermint-cocoa.svg',
    imageAlt: 'A mug of hot chocolate with red peppermint accents',
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 3.75, calories: 200 },
      { id: 'm', label: 'Medium', oz: 12, price: 4.5, calories: 290 },
      { id: 'l', label: 'Large', oz: 16, price: 5.25, calories: 380 },
    ],
    seasons: ['winter'],
    seasonal: true,
  },
  {
    id: 'strawberry-milk',
    category: 'Spring Special',
    name: 'Strawberry Blossom Milk',
    tagline: 'Cold, creamy and as pink as a petal',
    description:
      'Chilled milk shaken with real strawberry purée and a whisper of vanilla, poured over ice. A springtime sip that tastes like strawberries and cream.',
    ingredients: ['Cold whole milk', 'Strawberry purée', 'Cane sugar', 'Pure vanilla', 'Ice'],
    allergens: ['Milk'],
    badges: ['Caffeine-free', 'Real fruit'],
    image: '/images/drinks/strawberry-milk.svg',
    imageAlt: 'A tall glass of pale pink strawberry milk with a strawberry and straw',
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 3.25, calories: 160 },
      { id: 'm', label: 'Medium', oz: 12, price: 4.0, calories: 235 },
      { id: 'l', label: 'Large', oz: 16, price: 4.75, calories: 310 },
    ],
    note: 'Oat milk available on request.',
    seasons: ['spring'],
    seasonal: true,
  },
  {
    id: 'watermelon-slush',
    category: 'Summer Special',
    name: 'Watermelon Wave Slush',
    tagline: 'Frosty blended watermelon with a squeeze of lime',
    description:
      'Fresh watermelon blended with ice and a splash of lime into a bright, frosty slush. Dairy-free, caffeine-free and made for hot afternoons.',
    ingredients: ['Fresh watermelon', 'Lime juice', 'Cane sugar', 'Ice'],
    allergens: [],
    badges: ['Caffeine-free', 'Dairy-free'],
    image: '/images/drinks/watermelon-slush.svg',
    imageAlt: 'A tall glass of red watermelon slush with a green garnish and straw',
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 3.25, calories: 70 },
      { id: 'm', label: 'Medium', oz: 12, price: 4.0, calories: 100 },
      { id: 'l', label: 'Large', oz: 16, price: 4.75, calories: 135 },
    ],
    seasons: ['summer'],
    seasonal: true,
  },
  {
    id: 'pumpkin-steamer',
    category: 'Fall Special',
    name: 'Pumpkin Patch Steamer',
    tagline: 'Pumpkin spice, minus the coffee',
    description:
      'Steamed milk blended with real pumpkin, a little maple and warm cinnamon and nutmeg, topped with silky foam. All the fall coffee-shop fun with zero caffeine.',
    ingredients: ['Steamed whole milk', 'Pumpkin purée', 'Maple syrup', 'Cinnamon', 'Nutmeg', 'Milk foam'],
    allergens: ['Milk'],
    badges: ['Caffeine-free', 'Kid-safe temp'],
    image: '/images/drinks/pumpkin-steamer.svg',
    imageAlt: 'A small cup of orange pumpkin steamer with a heart in the foam',
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 3.25, calories: 150 },
      { id: 'm', label: 'Medium', oz: 12, price: 4.0, calories: 220 },
      { id: 'l', label: 'Large', oz: 16, price: 4.75, calories: 290 },
    ],
    note: 'Contains no coffee. Oat milk available on request.',
    seasons: ['fall'],
    seasonal: true,
  },
  {
    id: 'apple-cider',
    category: 'Fall Special',
    name: 'Orchard Apple Cider',
    tagline: 'Warm spiced cider from local apples',
    description:
      'Fresh-pressed apple cider gently warmed with cinnamon and a hint of orange peel. Naturally sweet, dairy-free and served at a kid-safe temperature.',
    ingredients: ['Apple cider', 'Cinnamon stick', 'Orange peel'],
    allergens: [],
    badges: ['Caffeine-free', 'Dairy-free', 'Kid-safe temp'],
    image: '/images/drinks/apple-cider.svg',
    imageAlt: 'A mug of warm amber apple cider',
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 3.0, calories: 110 },
      { id: 'm', label: 'Medium', oz: 12, price: 3.75, calories: 165 },
      { id: 'l', label: 'Large', oz: 16, price: 4.5, calories: 220 },
    ],
    seasons: ['fall'],
    seasonal: true,
  },
];

export const money = (n: number) => `$${n.toFixed(2)}`;

// Contact details used by the footer and the order email.
// (Phone and address are still placeholders.)
export const contact = {
  email: 'order@sipsocietydrinks.com',
  phone: '(555) 010-2026',
  address: '123 Sweet Street, Your Town',
  hours: [
    ['Mon – Sat', '10:00 am – 2:00 pm'],
    ['Sunday', 'Closed'],
  ],
};

// Pickup window for each day, used by the order form's time picker.
// Index 0 is Sunday. Times are minutes after midnight: [open, close];
// [0, 0] means closed.
// Keep these in step with `contact.hours` above.
const h = (hr: number, min = 0) => hr * 60 + min;
export const pickupHours: [number, number][] = [
  [0, 0], // Sunday: closed
  [h(10), h(14)], // Monday
  [h(10), h(14)], // Tuesday
  [h(10), h(14)], // Wednesday
  [h(10), h(14)], // Thursday
  [h(10), h(14)], // Friday
  [h(10), h(14)], // Saturday
];

