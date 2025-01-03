# Installation

```bash
npm install
```

```bash
pnpm install
```

Make changes to the `next.config.js` file as follows:

```js
import nextra from 'nextra'

// const nextConfig = {
//     output: 'export',
//     images: {
//         unoptimized: true // mandatory, otherwise won't export
//     },
//     // Optional: Change the output directory `out` -> `dist`
//     distDir: "dist"
// }
const nextConfig = {};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

export default withNextra(nextConfig)
```

# Running the app

```bash
npm run dev
```

```bash
pnpm run dev
```

# Accessing the app

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.