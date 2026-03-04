import React from 'react'
import Header from '@/components/Header';
import Hero from '../hero';
import Footer from '@/components/Footer';

const DataAnalytics: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-[var(--bg-primary)] mt-20 min-h-screen">

        {/* HERO SECTION */}
        <Hero />
      </main>

      <Footer />
    </>
  )
};

export default DataAnalytics;
