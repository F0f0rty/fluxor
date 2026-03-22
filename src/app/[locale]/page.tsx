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
        {/* Dark wrapper with ambient gradient blobs */}
        <div className="relative z-10 bg-[#0c182a]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex flex-col justify-around">
            <div className="w-[70vw] h-[70vw] max-h-[800px] max-w-[800px] self-end bg-[radial-gradient(circle_at_center,rgba(30,58,95,0.5)_0%,transparent_70%)] opacity-80 blur-3xl translate-x-1/4" />
            <div className="w-[80vw] h-[80vw] max-h-[1000px] max-w-[1000px] self-start bg-[radial-gradient(circle_at_center,rgba(40,80,130,0.3)_0%,transparent_70%)] opacity-60 blur-3xl -translate-x-1/4" />
            <div className="w-[60vw] h-[60vw] max-h-[700px] max-w-[700px] self-center bg-[radial-gradient(circle_at_center,rgba(30,58,95,0.6)_0%,transparent_70%)] opacity-70 blur-3xl" />
          </div>
          <div className="relative z-10">
            <About />
            <Portfolio />
            <Services />
            <ContactForm />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
