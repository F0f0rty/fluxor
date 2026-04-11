import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  return (
    <div className="min-h-screen bg-[#0c182a] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 sm:py-32">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-12"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          {t('back')}
        </Link>

        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 tracking-tight">{t('title')}</h1>
        <p className="text-white/40 text-sm mb-12">{t('updated')}</p>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{t('s1.title')}</h2>
            <p>{t('s1.text')}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{t('s2.title')}</h2>
            <p className="mb-3">{t('s2.text')}</p>
            <ul className="list-disc list-inside space-y-1">
              <li>{t('s2.i1')}</li>
              <li>{t('s2.i2')}</li>
              <li>{t('s2.i3')}</li>
              <li>{t('s2.i4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{t('s3.title')}</h2>
            <p className="mb-3">{t('s3.text')}</p>
            <ul className="list-disc list-inside space-y-1">
              <li>{t('s3.i1')}</li>
              <li>{t('s3.i2')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{t('s4.title')}</h2>
            <p>{t('s4.text')}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{t('s5.title')}</h2>
            <p>{t('s5.text')}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{t('s6.title')}</h2>
            <p className="mb-3">{t('s6.text')}</p>
            <ul className="list-disc list-inside space-y-1">
              <li>{t('s6.i1')}</li>
              <li>{t('s6.i2')}</li>
              <li>{t('s6.i3')}</li>
              <li>{t('s6.i4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{t('s7.title')}</h2>
            <p>{t('s7.text')}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">{t('s8.title')}</h2>
            <p className="whitespace-pre-line">{t('s8.text')}</p>
          </section>

        </div>
      </div>
    </div>
  );
}
