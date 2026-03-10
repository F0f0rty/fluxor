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
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="sticky top-0 w-full h-screen">
              <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vh] bg-[radial-gradient(circle_at_center,rgba(30,58,95,0.5)_0%,transparent_70%)] opacity-80 blur-3xl" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vh] bg-[radial-gradient(circle_at_center,rgba(30,58,95,0.4)_0%,transparent_70%)] opacity-80 blur-3xl" />
              <div className="absolute top-[30%] left-[20%] w-[50vw] h-[50vh] bg-[radial-gradient(circle_at_center,rgba(40,80,130,0.25)_0%,transparent_70%)] opacity-60 blur-3xl" />
            </div>
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
