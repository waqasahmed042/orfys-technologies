import React from 'react';
import {
  FaCheckCircle,
  FaArrowRight,
  FaCog,
  FaBolt,
  FaChartBar,
  FaShieldAlt,
  FaChevronDown,
  FaMicrochip,
  FaQuoteLeft
} from 'react-icons/fa';
import Header from '@/components/Header';
import Hero from '../hero';
import Footer from '@/components/Footer';

const WorkFlowAutomation: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-[var(--bg-primary)] mt-20 min-h-screen text-[var(--text-primary)] font-sans">

        {/* 1. HERO SECTION */}
        <Hero />

        {/* TECHNOLOGIES - Tool Logos & Stack */}
        <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-[var(--accent-primary)] font-medium text-sm mb-6">
              <FaMicrochip /> Tech-Agnostic Solutions
            </div>
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Native Integrations with the tools you already love.</h2>
            <p className="text-[var(--text-secondary)] mb-8 text-lg leading-relaxed">
              We don't force you into new software. We build bridges between your existing stack—CRM, ERP, Finance, and Communication tools.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Python & Node.js', 'Zapier/Make Expert', 'OpenAI / LLMs', 'AWS Step Functions'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold">
                  <FaCheckCircle className="text-[var(--accent-primary)]" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-3 gap-4 w-full">
            {/* Technology Placeholder Boxes */}
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-24 bg-white border border-[var(--border-default)] rounded-2xl shadow-sm flex items-center justify-center hover:border-[var(--accent-primary)] transition-colors grayscale hover:grayscale-0">
                <div className="bg-gray-100 h-8 w-20 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default WorkFlowAutomation;