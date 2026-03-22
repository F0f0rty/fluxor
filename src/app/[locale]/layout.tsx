import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
});

const SITE_URL = 'https://fluxorconsulting.com';

const meta = {
  ru: {
    title: 'Fluxor Consulting — Стратегический консалтинг',
    description:
      'Fluxor Consulting — эксперт в трансформации бизнеса через комплексный консалтинг и цифровизацию. Стратегия, процессы, технологии.',
    ogDescription: 'Стратегический консалтинг. Измеримые результаты.',
    locale: 'ru_RU',
  },
  en: {
    title: 'Fluxor Consulting — Strategic Advisory',
    description:
      'Fluxor Consulting delivers senior-level expertise across strategy, finance, and operations. From strategy to implementation.',
    ogDescription: 'Strategic Advisory. Measurable Results.',
    locale: 'en_US',
  },
} as const;

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = meta[locale as keyof typeof meta] ?? meta.en;
  const url = `${SITE_URL}/${locale}`;

  return {
    title: t.title,
    description: t.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        ru: `${SITE_URL}/ru`,
        en: `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: 'Fluxor Consulting',
      description: t.ogDescription,
      url,
      siteName: 'Fluxor Consulting',
      locale: t.locale,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: 'Fluxor Consulting',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: [`${SITE_URL}/og.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'ru')) {
    notFound();
  }

  const messages = await getMessages();
  const t = meta[locale as keyof typeof meta] ?? meta.en;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fluxor Consulting',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: t.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      addressCountry: 'RU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@fluxorconsulting.com',
      contactType: 'customer service',
      availableLanguage: ['Russian', 'English'],
    },
  };

  return (
    <html lang={locale} className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster position="bottom-right" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
