/* @author Felipe Makarios | Creator - Bora Lá */
import React from 'react';
import Hero from '../components/Hero';
import BlogSection from '../components/BlogSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#D1D5DB] overflow-x-hidden">
      <Hero />
      <div className="relative z-10">
        <BlogSection />
      </div>
      {/* Outras seções aqui */}
    </main>
  );
}