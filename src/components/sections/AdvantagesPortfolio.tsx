import { useTranslations } from 'next-intl';

const cardIcons = [
  <svg key="0" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>,
  <svg key="1" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
  </svg>,
  <svg key="2" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
  </svg>,
];

const cardColors = [
  'bg-blue-500/20 text-blue-300',
  'bg-indigo-500/20 text-indigo-300',
  'bg-sky-500/20 text-sky-300',
];

type CardData = { company: string; role: string; result: string; description: string };

export default function Portfolio() {
  const t = useTranslations('experience');

  const rawCards = t.raw('cards') as CardData[];
  const cards = rawCards.map((card, i) => ({
    ...card,
    icon: cardIcons[i % cardIcons.length],
    color: cardColors[i % cardColors.length],
  }));

  return (
    <section id="experience" className="min-h-screen flex items-center px-4 sm:px-6 py-24 sm:py-32 bg-transparent border-t border-white/5 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 tracking-tight text-white">
              {t('title')}
            </h2>
            <p className="text-white/70 text-lg sm:text-xl font-light leading-relaxed">
              {t('description')}
            </p>
          </div>
          <button className="flex items-center gap-2 px-5 sm:px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-all font-medium text-white w-full md:w-auto justify-center md:justify-start">
            {t('allCases')}
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:bg-white/[0.1] hover:border-white/[0.2] hover:-translate-y-1 hover:shadow-lg hover:shadow-white/[0.03] transition-all duration-300 overflow-hidden"
            >
              <div>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 ${card.color}`}>
                  {card.icon}
                </div>
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/50 mb-2 sm:mb-3">
                  {card.company}
                </h4>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white line-clamp-2">
                  {card.role}
                </h3>
                <p className="text-white/70 font-light mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  {card.description}
                </p>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                <span className="text-xs sm:text-sm font-medium text-white/50">{t('resultLabel')}:</span>
                <span className="text-base sm:text-lg font-bold text-blue-300">{card.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
