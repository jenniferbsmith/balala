import { MetadataRoute } from 'next';
import seoConfig from '@/lib/seo-config.json';

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
          '/temp/',
          '/cache/'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [],
        crawlDelay: 0.5
      },
      {
        userAgent: 'Bingbot', 
        allow: '/',
        disallow: [],
        crawlDelay: 0.5
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: []
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        disallow: []
      }
    ],
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
    host: seoConfig.siteUrl
  };
}
