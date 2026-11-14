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

There is no payment backend yet. "Add to order" puts drinks in a cart that is saved in the browser. "Send order request" opens an email to the address in `menu.ts` with the order filled in. Swap this for Square, Toast or Stripe checkout later.

## Placeholders to replace

Drink names, descriptions, prices, calories, address, phone, email, hours, the testimonial and the About story are all placeholder copy.
