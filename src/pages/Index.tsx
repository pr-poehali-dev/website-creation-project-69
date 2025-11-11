import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Generator from '@/components/Generator';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Generator />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}