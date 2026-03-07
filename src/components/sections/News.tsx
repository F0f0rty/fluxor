import { useTranslations, useLocale } from 'next-intl';
import { getAllNews } from '@/lib/news';

export default function News() {
  const t = useTranslations('news');
  const locale = useLocale();
  const posts = getAllNews().slice(0, 3);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <section id="news" className="section bg-[#F7F8FA]">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-3">{t('label')}</p>
            <div className="rule" />
            <h2
              className="text-[2rem] md:text-[2.6rem] text-[#0B2D4E] leading-tight"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              {t('title')}
            </h2>
          </div>
        </div>

        {/* Cards */}
        {posts.length === 0 ? (
          <p className="text-[#64748B] text-sm">{t('noNews')}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#DDE3EC]">
            {posts.map((post, idx) => {
              const title = locale === 'ru' && post.titleRu ? post.titleRu : post.title;
              const excerpt = locale === 'ru' && post.excerptRu ? post.excerptRu : post.excerpt;
              const category = locale === 'ru' && post.categoryRu ? post.categoryRu : post.category;

              return (
                <article
                  key={post.slug}
                  className={`group bg-white flex flex-col cursor-pointer hover:bg-[#F7F8FA] transition-colors duration-200 ${
                    idx < posts.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#DDE3EC]' : ''
                  }`}
                >
                  {/* Category bar */}
                  <div className="h-[3px] bg-[#1464F4]" />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] font-semibold text-[#1464F4] uppercase tracking-[0.15em]">
                        {category}
                      </span>
                      <span className="w-1 h-1 bg-[#DDE3EC] rounded-full" />
                      <time className="text-[11px] text-[#64748B]">{formatDate(post.date)}</time>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-[1.05rem] text-[#0B2D4E] leading-snug mb-3 flex-1 group-hover:text-[#1464F4] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
                    >
                      {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[13px] text-[#64748B] leading-relaxed mb-6">{excerpt}</p>

                    {/* Read more */}
                    <div className="flex items-center gap-2 mt-auto">
                      <div className="w-4 h-[1.5px] bg-[#0B2D4E] group-hover:w-6 transition-all duration-200" />
                      <span className="text-[11px] font-semibold text-[#0B2D4E] uppercase tracking-[0.12em]">
                        {t('readMore')}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
