# James Marcus — Portfolio

Single-page portfolio built with React, Vite, and Lucide icons. Content comes from `guide.md`.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to any static host.

## Add your project images

Place WebP images at these paths:

- `public/projects/baranie.webp`
- `public/projects/burma-academy.webp`
- `public/projects/ilbc.webp`

The site automatically displays each image when available and keeps a designed placeholder otherwise. Reload the page after adding images. Use landscape screenshots; 1600 × 1000 pixels or larger is recommended. Images use `object-fit: cover`, so edges may be cropped. Change this in `src/styles.css` if needed.

To use PNG or JPG, update each project's `image` path in the `projects` array in `src/main.jsx`. That array also contains project descriptions, links, tags, and image alt text.

## Content notes

- Contact, experience, and education information is in `src/main.jsx`.
- The date of birth in the guide is ambiguous and has been omitted from this professional portfolio.
- Google Fonts provides DM Sans and Space Grotesk; local system fonts are used as fallbacks.
- Project preview placeholders are intentional until you add your images.
