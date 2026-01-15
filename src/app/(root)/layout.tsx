import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_minmax(0,1fr)_auto] bg-neutral-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
