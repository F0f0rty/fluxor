import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import AdvantagesPortfolio from '@/components/sections/AdvantagesPortfolio';
import Results from '@/components/sections/Results';
import Services from '@/components/sections/Services';
import ContactForm from '@/components/sections/ContactForm';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <AdvantagesPortfolio />
        <Results />
        <Services />

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
