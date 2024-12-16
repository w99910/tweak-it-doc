import nextra from 'nextra'

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true // mandatory, otherwise won't export
    },
    // Optional: Change the output directory `out` -> `dist`
    distDir: "dist"
}

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

export default withNextra(nextConfig)