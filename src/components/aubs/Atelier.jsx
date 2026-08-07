const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';

const process = [
  { num: 'I', title: 'La matière première', desc: "Or 18k, diamants certifiés GIA et pierres précieuses d'origine éthique, sélectionnés avec une exigence absolue." },
  { num: 'II', title: 'Le dessin', desc: "Chaque pièce naît d'un croquis, d'une vision. Nos designers traduisent l'émotion en lignes précises." },
  { num: 'III', title: 'La fonte', desc: "L'or est fondu, coulé, puis façonné par les mains de nos artisans joailliers." },
  { num: 'IV', title: 'Le sertissage', desc: "Chaque diamant est posé à la main, un par un, avec une précision micrométrique." },
  { num: 'V', title: 'La finition', desc: "Polissage, contrôle qualité et certification. La pièce reçoit son poinçon et son certificat." },
];

export default function Atelier() {
  return (
    <section id="atelier" className="relative bg-obsidian py-24 md:py-32 px-4 md:px-[8vw] border-t border-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 md:mb-28 items-center">
          <div>
            <p className="text-[11px] tracking-luxe uppercase text-gold mb-4">— L'atelier</p>
            <h2 className="font-heading text-5xl md:text-7xl font-light text-ivory leading-[0.9] mb-8">
              Le savoir-faire<br /><span className="italic gold-gradient">en héritage</span>
            </h2>
            <p className="text-sm md:text-base text-ivory/60 leading-relaxed mb-6 font-light max-w-lg">
              Chaque pièce AUBS est le fruit d'un savoir-faire transmis et perfectionné. De la sélection de la matière brute à la dernière couche de polissage, nos artisans insufflent une âme à chaque création.
            </p>
            <p className="text-sm text-ivory/40 leading-relaxed font-light max-w-lg">
              Nous ne fabriquons pas des bijoux. Nous façonnons des héritages.
            </p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <video src="https://media.base44.com/videos/public/6a726debefb664a4af6524e2/ff69d3b3f_anime_moi_cette_vido_La_pers.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
          </div>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 pt-12 border-t border-border">
          {process.map((step) => (
            <div key={step.num} className="group">
              <p className="font-heading text-4xl text-gold/30 group-hover:text-gold transition-colors mb-4">{step.num}</p>
              <div className="w-8 h-px bg-gold/40 mb-4 group-hover:w-full transition-all duration-500" />
              <h3 className="font-heading text-xl text-ivory mb-3">{step.title}</h3>
              <p className="text-xs text-ivory/40 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}