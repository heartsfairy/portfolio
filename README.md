# Toolkit Portfolio

A working portfolio rendered with the included TypeScript UI Toolkit package. Project filters use toolkit drawables and event attachment; case studies use native, accessible disclosure elements that expand in place without reordering the grid.

Layout and component structure are compiled with Tailwind CSS 4 and DaisyUI 5 through Vite. The custom stylesheet is limited to the portfolio palette, spectrum artwork, project accents, and disclosure-state details.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production build uses relative asset and résumé paths, so the contents of `dist/` can be hosted from a repository subdirectory.
