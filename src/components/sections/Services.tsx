import { useTranslations } from 'next-intl';

const icons = [
  <svg key="0" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>,
  <svg key="1" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  <svg key="2" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  <svg key="3" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="1"/><path d="M8 21h8M12 17v4"/></svg>,
  <svg key="4" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg key="5" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
];

export default function Services() {
  const t = useTranslations('services');

  const items = Array.from({ length: 6 }, (_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    icon: icons[i],
  }));

  return (
    <section id="services" className="section bg-white">
      <div className="container">

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5">
            <p className="section-label mb-3">{t('label')}</p>
            <div className="rule" />
            <h2
              className="text-[2rem] md:text-[2.6rem] text-[#0B2D4E] leading-tight"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              {t('title')}
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-[15px] text-[#64748B] leading-relaxed max-w-lg">
              {t('description')}
            </p>
          </div>
        </div>

        {/* Cards grid — border-based like Deloitte */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DDE3EC]">
          {items.map((item, i) => (
            <div
              key={i}
              className="border-b border-r border-[#DDE3EC] p-8 group hover:bg-[#F7F8FA] transition-colors duration-200 cursor-default"
            >
              {/* Icon with blue tint on hover */}
              <div className="text-[#0B2D4E] group-hover:text-[#1464F4] transition-colors duration-200 mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-semibold text-[#0B2D4E] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-[#64748B] leading-relaxed">
                {item.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-3 h-[1.5px] bg-[#1464F4]" />
                <div className="w-1.5 h-[1.5px] bg-[#1464F4]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
