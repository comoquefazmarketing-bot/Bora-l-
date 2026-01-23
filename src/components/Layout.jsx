import React from 'react';
import Sidebar from './Sidebar';
import Calculator from '../services/Calculator';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Sidebar />
      <Calculator />
      <main className="relative min-h-screen">
        {children}
      </main>
    </div>
  );
}