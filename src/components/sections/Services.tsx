import { useTranslations } from 'next-intl';

const icons = [
  <svg key="0" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>,
  <svg key="1" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="2" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  <svg key="3" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
];

export default function Services() {
  const t = useTranslations('services');

  const items = Array.from({ length: 4 }, (_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    icon: icons[i],
  }));

  return (
    <section id="solutions" className="min-h-screen flex items-center px-4 sm:px-6 py-24 sm:py-32 bg-white/[0.01] border-t border-white/5 relative overflow-hidden text-white">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 tracking-tight text-white">
            {t('title')}
          </h2>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto font-light px-4 sm:px-0">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-white/30 hover:bg-white/10 transition-all group shadow-xl backdrop-blur-sm"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 text-white group-hover:bg-[#1e3a5f] group-hover:-translate-y-1 transition-all shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed text-base sm:text-lg font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
