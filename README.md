# Sip Society website

A fast, static Astro site: Home, Menu and About.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # outputs the static site to dist/
```

`dist/` can be uploaded to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Where to edit

- **Menu, prices, calories, sizes, ingredients, contact info, hours:** `src/data/menu.ts` (one file, every page reads from it).
- **Drink pictures:** `public/images/drinks/*.svg` are placeholder illustrations. Drop in real photos (e.g. `hot-chocolate.webp`, square, ~800px) and update the `image` path in `menu.ts`.
- **Colors and fonts:** `src/styles/global.css` (`:root` variables).
- **Domain:** `site` in `astro.config.mjs`.

## Ordering

There is no payment backend yet. "Add to order" puts drinks in a cart that is saved in the browser. At checkout the customer enters their name, email, and optionally phone, pickup time and notes, and "Send order request" emails the order to `order@sipsocietydrinks.com` through [Web3Forms](https://web3forms.com) (free, no server needed). Replying to that email replies to the customer.

To turn it on: go to web3forms.com, enter `order@sipsocietydrinks.com`, copy the access key they email to that inbox, and paste it into `orderFormKey` in `src/data/menu.ts`. Until a key is set, the button falls back to opening the customer's own email app with the order filled in.

Swap this for Square, Toast or Stripe checkout later.

## Placeholders to replace

Drink names, descriptions, prices, calories, address, phone, email, hours, the testimonial and the About story are all placeholder copy.
