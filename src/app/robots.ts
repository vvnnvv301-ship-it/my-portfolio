export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/_next/'],
        },
        sitemap: 'https://dilmurod-yusupov.vercel.app/sitemap.xml',
    }
}
