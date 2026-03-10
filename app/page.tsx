import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
