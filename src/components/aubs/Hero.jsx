const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const slides = [
  {
    image: 'https://media.db.com/images/public/6a726debefb664a4af6524e2/1486a573c_generated_84da0cda.png',
    overline: 'Bienvenue chez AUBS',
    title: "L'Art du Luxe.",
    titleLine2: 'Le Pouvoir du Détail.',
    body: "Des bijoux d'exception. Un savoir-faire unique. Conçus pour ceux qui ne suivent pas les tendances, mais qui les définissent.",
  },
  {
    image: 'https://media.db.com/images/public/6a726debefb664a4af6524e2/3fd518a2e_generated_50abdb06.png',
    overline: 'Grillz sur mesure',
    title: 'Façonné pour vous.',
    titleLine2: 'Aucun compromis.',
    body: "Chaque pièce est une déclaration. Chaque détail, une signature. L'or et le diamant sublimés par des artisans d'exception.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section id="top" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-obsidian">
      {/* Background image */}
      <Image
        src={slide.image}
        alt="AUBS Jewellery — grillz en or et diamants"
        fittingType="fill"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        key={current}
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end md:justify-center px-4 md:px-[8vw] pb-24 md:pb-0 max-w-[1600px] mx-auto">
        <div key={current} className="max-w-3xl">
          <p className="text-[11px] md:text-xs tracking-luxe uppercase text-gold mb-6 animate-staggered" style={{ animationFillMode: 'both' }}>
            {slide.overline}
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] text-ivory mb-8 animate-staggered" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            {slide.title}
            <br />
            <span className="italic font-medium gold-gradient">{slide.titleLine2}</span>
          </h1>
          <p className="text-sm md:text-base text-ivory/70 max-w-lg leading-relaxed mb-10 animate-staggered font-light" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            {slide.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-staggered" style={{ animationDelay: '0.45s', animationFillMode: 'both' }}>
            <a href="#collections" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-obsidian text-[11px] tracking-luxe uppercase font-medium hover:bg-ivory transition-colors duration-400">
              Découvrir les collections
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#configurator" className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold text-gold text-[11px] tracking-luxe uppercase font-medium hover:bg-gold hover:text-obsidian transition-all duration-400">
              Grillz sur mesure
            </a>
          </div>
        </div>
      </div>

      {/* Carousel pagination */}
      <div className="absolute bottom-8 right-4 md:right-[8vw] z-10 flex items-center gap-4">
        <span className="font-mono-tech text-sm text-gold">{String(current + 1).padStart(2, '0')}</span>
        <div className="w-12 h-px bg-ivory/30 relative">
          <div className="absolute inset-y-0 left-0 bg-gold transition-all duration-700" style={{ width: current === 0 ? '50%' : '100%' }} />
        </div>
        {slides.map((_, i) => (
          <span key={i} className={`font-mono-tech text-sm ${i === current ? 'text-gold' : 'text-ivory/30'}`}>
            {String(i + 1).padStart(2, '0')}
          </span>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-luxe uppercase text-ivory/50">Défiler</span>
        <ArrowDown className="w-4 h-4 text-gold animate-scroll-hint" />
      </div>
    </section>
  );
}