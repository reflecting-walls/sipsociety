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
  // Illinois cottage food rules: every product is made, packaged and labeled in
  // our home kitchen. Bottled drinks are kept at 41°F or colder; warm drinks are
  // sold as shelf-stable mixes. No dairy, and no cut or puréed melon.
  {
    id: 'hot-chocolate',
    category: 'Cocoa Mix',
    name: 'Cozy Cloud Cocoa Mix',
    tagline: 'Velvety, not too sweet, with mini marshmallows',
    description:
      'Our signature dairy-free cocoa mix, made with real Dutch-process cocoa and packed in a jar with a cloud of mini marshmallows. Whisk a few spoonfuls into warm oat milk at home and it is ready to sip.',
    ingredients: ['Dutch-process cocoa', 'Cane sugar', 'Vanilla bean powder', 'Sea salt', 'Mini marshmallows'],
    allergens: [],
    badges: ['Dairy-free', 'Shelf-stable', 'Made with real cocoa'],
    image: '/images/drinks/hot-chocolate.svg',
    imageAlt: 'A pink mug of hot chocolate topped with marshmallows',
    seasons: ['winter', 'fall'],
    sizes: [
      { id: 's', label: 'Small jar', oz: 4, price: 6.0, calories: 190 },
      { id: 'm', label: 'Medium jar', oz: 8, price: 10.0, calories: 190 },
      { id: 'l', label: 'Large jar', oz: 12, price: 14.0, calories: 190 },
    ],
    note: 'Makes about 4, 8 or 12 cups. Calories are per 8 oz cup made with oat milk.',
  },
  {
    id: 'lemonade',
    category: 'Bottled Lemonade',
    name: 'Pink Sparkle Lemonade',
    tagline: 'Fresh-squeezed lemons with a swirl of strawberry',
    description:
      'Hand-squeezed lemonade, lightly sweetened and blushed pink with real strawberry purée. Bottled fresh in our kitchen and kept chilled. Pour it over ice with a lemon wheel.',
    ingredients: ['Fresh lemon juice', 'Filtered water', 'Cane sugar', 'Strawberry purée'],
    allergens: [],
    badges: ['Dairy-free', 'Caffeine-free', 'Bottled fresh'],
    image: '/images/drinks/lemonade.svg',
    imageAlt: 'A tall glass of pink lemonade with a lemon wheel and straw',
    seasons: ['spring', 'summer'],
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 3.0, calories: 90 },
      { id: 'm', label: 'Medium', oz: 12, price: 3.75, calories: 130 },
      { id: 'l', label: 'Large', oz: 16, price: 4.5, calories: 175 },
    ],
    note: 'Keep refrigerated.',
  },
  {
    id: 'smoothie',
    category: 'Bottled Smoothie',
    name: 'Berry Bliss Smoothie',
    tagline: 'Strawberry, banana and blueberry, blended thick',
    description:
      'A fruit-forward blend of strawberries, banana and blueberries, made thick and creamy with extra banana. No added sugar, just fruit. Bottled fresh and kept chilled, so give it a shake and sip.',
    ingredients: ['Strawberries', 'Banana', 'Blueberries', 'Apple juice'],
    allergens: [],
    badges: ['Dairy-free', 'No added sugar', 'Caffeine-free'],
    image: '/images/drinks/smoothie.svg',
    imageAlt: 'A berry smoothie in a clear cup with a strawberry and straw',
    seasons: ['spring', 'summer'],
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 4.5, calories: 140 },
      { id: 'm', label: 'Medium', oz: 12, price: 5.5, calories: 210 },
      { id: 'l', label: 'Large', oz: 16, price: 6.5, calories: 280 },
    ],
    note: 'Keep refrigerated. Shake before sipping.',
  },
  {
    id: 'coffee',
    category: 'Latte Mix',
    name: 'Little Latte Mix',
    tagline: 'All the coffee-shop fun, zero coffee',
    description:
      'A vanilla steamer mix for little latte lovers. Stir it into warm oat milk, froth it up and finish with the cocoa dusting packed on top. Made for sipping alongside a parent’s coffee.',
    ingredients: ['Cane sugar', 'Vanilla bean powder', 'Cocoa dusting'],
    allergens: [],
    badges: ['Dairy-free', 'Caffeine-free', 'Shelf-stable'],
    image: '/images/drinks/coffee.svg',
    imageAlt: 'A small cup of foamy babyccino with a cocoa heart on top',
    seasons: ['winter', 'fall'],
    sizes: [
      { id: 's', label: 'Small jar', oz: 4, price: 5.0, calories: 140 },
      { id: 'm', label: 'Medium jar', oz: 8, price: 8.5, calories: 140 },
      { id: 'l', label: 'Large jar', oz: 12, price: 12.0, calories: 140 },
    ],
    note: 'Contains no coffee. Makes about 6, 12 or 18 cups. Calories are per 8 oz cup made with oat milk.',
  },

  // ---- Seasonal specials ----
  {
    id: 'peppermint-cocoa',
    category: 'Winter Special',
    name: 'Peppermint Snowflake Cocoa Mix',
    tagline: 'Our cozy cocoa with a candy-cane twist',
    description:
      'Cozy Cloud Cocoa Mix with a touch of peppermint, mini marshmallows and crushed candy cane, packed in a holiday jar. Whisk into warm oat milk at home.',
    ingredients: ['Dutch-process cocoa', 'Cane sugar', 'Peppermint oil', 'Mini marshmallows', 'Crushed candy cane'],
    allergens: [],
    badges: ['Dairy-free', 'Shelf-stable', 'Holiday favorite'],
    image: '/images/drinks/peppermint-cocoa.svg',
    imageAlt: 'A mug of hot chocolate with red peppermint accents',
    seasons: ['winter'],
    seasonal: true,
    sizes: [
      { id: 's', label: 'Small jar', oz: 4, price: 6.5, calories: 210 },
      { id: 'm', label: 'Medium jar', oz: 8, price: 11.0, calories: 210 },
      { id: 'l', label: 'Large jar', oz: 12, price: 15.0, calories: 210 },
    ],
    note: 'Makes about 4, 8 or 12 cups. Calories are per 8 oz cup made with oat milk.',
  },
  {
    id: 'strawberry-milk',
    category: 'Spring Special',
    name: 'Strawberry Blossom Oat Milk',
    tagline: 'Cold, creamy and as pink as a petal',
    description:
      'Oat milk shaken with real strawberry purée and a whisper of vanilla, bottled fresh and kept chilled. A dairy-free springtime sip that tastes like strawberries and cream.',
    ingredients: ['Oat milk', 'Strawberry purée', 'Cane sugar', 'Pure vanilla'],
    allergens: [],
    badges: ['Dairy-free', 'Caffeine-free', 'Real fruit'],
    image: '/images/drinks/strawberry-milk.svg',
    imageAlt: 'A tall glass of pale pink strawberry oat milk with a strawberry and straw',
    seasons: ['spring'],
    seasonal: true,
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 3.25, calories: 150 },
      { id: 'm', label: 'Medium', oz: 12, price: 4.0, calories: 225 },
      { id: 'l', label: 'Large', oz: 16, price: 4.75, calories: 300 },
    ],
    note: 'Keep refrigerated. Shake before sipping.',
  },
  {
    id: 'hibiscus-cooler',
    category: 'Summer Special',
    name: 'Sunset Hibiscus Cooler',
    tagline: 'Ruby-red, tangy and caffeine-free',
    description:
      'Caffeine-free hibiscus tea brewed strong, sweetened lightly and brightened with fresh lime. Bottled chilled and made for pouring over ice on hot afternoons.',
    ingredients: ['Brewed hibiscus tea', 'Fresh lime juice', 'Cane sugar', 'Filtered water'],
    allergens: [],
    badges: ['Dairy-free', 'Caffeine-free', 'Bottled fresh'],
    image: '/images/drinks/hibiscus-cooler.svg',
    imageAlt: 'A tall glass of ruby-red hibiscus cooler with a lime wheel and straw',
    seasons: ['summer'],
    seasonal: true,
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 3.0, calories: 60 },
      { id: 'm', label: 'Medium', oz: 12, price: 3.75, calories: 90 },
      { id: 'l', label: 'Large', oz: 16, price: 4.5, calories: 120 },
    ],
    note: 'Keep refrigerated.',
  },
  {
    id: 'pumpkin-steamer',
    category: 'Fall Special',
    name: 'Pumpkin Patch Steamer Mix',
    tagline: 'Pumpkin spice, minus the coffee',
    description:
      'Maple sugar, warm cinnamon, nutmeg and ginger in a jar. Whisk it into warm oat milk at home for all the fall coffee-shop fun with zero caffeine and zero dairy.',
    ingredients: ['Maple sugar', 'Cane sugar', 'Cinnamon', 'Nutmeg', 'Ginger', 'Vanilla bean powder'],
    allergens: [],
    badges: ['Dairy-free', 'Caffeine-free', 'Shelf-stable'],
    image: '/images/drinks/pumpkin-steamer.svg',
    imageAlt: 'A small cup of orange pumpkin steamer with a heart in the foam',
    seasons: ['fall'],
    seasonal: true,
    sizes: [
      { id: 's', label: 'Small jar', oz: 4, price: 5.5, calories: 150 },
      { id: 'm', label: 'Medium jar', oz: 8, price: 9.5, calories: 150 },
      { id: 'l', label: 'Large jar', oz: 12, price: 13.0, calories: 150 },
    ],
    note: 'Contains no coffee. Makes about 6, 12 or 18 cups. Calories are per 8 oz cup made with oat milk.',
  },
  {
    id: 'apple-cider',
    category: 'Fall Special',
    name: 'Orchard Apple Cider',
    tagline: 'Spiced cider from local apples',
    description:
      'Pasteurized apple cider infused with cinnamon and a hint of orange peel, bottled chilled. Naturally sweet and dairy-free. Sip it cold or warm it up at home.',
    ingredients: ['Pasteurized apple cider', 'Cinnamon', 'Orange peel'],
    allergens: [],
    badges: ['Dairy-free', 'Caffeine-free', 'Bottled fresh'],
    image: '/images/drinks/apple-cider.svg',
    imageAlt: 'A mug of amber apple cider',
    seasons: ['fall'],
    seasonal: true,
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 3.0, calories: 110 },
      { id: 'm', label: 'Medium', oz: 12, price: 3.75, calories: 165 },
      { id: 'l', label: 'Large', oz: 16, price: 4.5, calories: 220 },
    ],
    note: 'Keep refrigerated.',
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

