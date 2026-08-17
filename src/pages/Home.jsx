import React from 'react';
import Header from '@/components/aubs/Header';
import Hero from '@/components/aubs/Hero';
import CollectionsSignature from '@/components/aubs/CollectionsSignature';
import Nouveautes from '@/components/aubs/Nouveautes';
import Atelier from '@/components/aubs/Atelier';
import Certifications from '@/components/aubs/Certifications';
import Temoignages from '@/components/aubs/Temoignages';
import FAQ from '@/components/aubs/FAQ';
import Footer from '@/components/aubs/Footer';

export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Header />
      <main>
        <Hero />
        <CollectionsSignature />
        <Nouveautes />
        <Atelier />
        <Certifications />
        <Temoignages />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
