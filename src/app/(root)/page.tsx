import Categories from '@/components/home/Categories';
import FAQ from '@/components/home/FAQ';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import PopularItems from '@/components/home/PopularItems';
import Pricing from '@/components/home/Pricing';
import Testimonials from '@/components/home/Testimonials';

export default function page() {
  return (
    <div className="min-w-0">
      <Hero />
      <Features />
      <Categories />
      <PopularItems />
      <Pricing />
      <Testimonials />
      <FAQ />
    </div>
  );
}
