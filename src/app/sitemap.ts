import type { MetadataRoute } from 'next';

const SITE_URL = 'https://fluxorconsulting.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/ru`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: `${SITE_URL}/ru`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: `${SITE_URL}/ru`,
          en: `${SITE_URL}/en`,
        },
      },
    },
  ];
}
