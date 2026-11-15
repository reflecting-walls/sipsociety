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
};

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
    sizes: [
      { id: 's', label: 'Small', oz: 8, price: 2.75, calories: 110 },
      { id: 'm', label: 'Medium', oz: 12, price: 3.5, calories: 165 },
      { id: 'l', label: 'Large', oz: 16, price: 4.25, calories: 220 },
    ],
    note: 'Contains no coffee. Oat milk available on request.',
  },
];

export const money = (n: number) => `$${n.toFixed(2)}`;

// Contact details used by the footer and the order email.
// (Phone, address and hours are still placeholders.)
export const contact = {
  email: 'order@sipsocietydrinks.com',
  phone: '(555) 010-2026',
  address: '123 Sweet Street, Your Town',
  hours: [
    ['Mon – Fri', '7:00 am – 6:00 pm'],
    ['Saturday', '8:00 am – 6:00 pm'],
    ['Sunday', '9:00 am – 4:00 pm'],
  ],
};

