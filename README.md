# Yahan Chen Portfolio

This repository powers [AndreaChen0301.github.io](https://AndreaChen0301.github.io).

## Edit the website

You can make small updates entirely in GitHub:

1. Open `app/page.tsx`.
2. Click the pencil icon.
3. Update the relevant text, date, link, project, or statistic.
4. Click **Commit changes**. GitHub will rebuild and publish the website automatically.

## Replace a graph

The project graphs are stored in `public/project-visuals`:

- `steam-hpc-pipeline.jpg`
- `steam-word-clouds.jpg`
- `counseling-language.jpg`
- `counseling-medical-terms.jpg`
- `data-for-good-map.jpg`

To update a graph without changing code, upload a new image with the same filename and replace the old file. Commit the change and GitHub Pages will republish automatically.

To add a new graph instead, upload it to `public/project-visuals`, then add its path to the appropriate project's `images` list in `app/page.tsx`.

## Edit locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run build` before publishing major changes.

## Main files

- `app/page.tsx` — all portfolio content and links
- `app/globals.css` — layout, colors, and responsive design
- `public/project-visuals` — project graphs and illustrations
- `public/og.png` — social preview image
