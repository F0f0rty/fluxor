import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/AdvantagesPortfolio';
import Services from '@/components/sections/Services';
import ContactForm from '@/components/sections/ContactForm';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Content slides over the fixed hero */}
        <div className="relative z-10">
          <About />
          <Portfolio />
          <Services />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
