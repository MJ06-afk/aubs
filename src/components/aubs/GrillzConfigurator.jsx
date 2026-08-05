const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const metals = [
  { id: 'or-jaune', label: 'Or jaune', color: '#D4AF37', price: 1200 },
  { id: 'or-blanc', label: 'Or blanc', color: '#E8E8E8', price: 1300 },
  { id: 'or-rose', label: 'Or rose', color: '#B76E79', price: 1300 },
  { id: 'argent', label: 'Argent', color: '#C0C0C0', price: 600 },
];

const stones = [
  { id: 'diamants', label: 'Diamants', price: 2400, desc: 'VS1 — Couleur F-G' },
  { id: 'moissanites', label: 'Moissanites', price: 900, desc: 'Brillance exceptionnelle' },
  { id: 'saphirs', label: 'Saphirs', price: 1500, desc: 'Bleu royal naturel' },
  { id: 'none', label: 'Sans pierres', price: 0, desc: 'Métal pur' },
];

const steps = [
  { num: '01', title: 'Choisissez le métal', desc: 'Or jaune, Or blanc, Or rose, Argent.' },
  { num: '02', title: 'Sélectionnez les pierres', desc: 'Diamants, Moissanites, Saphirs…' },
  { num: '03', title: 'Personnalisez', desc: 'Finition, motifs, gravures…' },
  { num: '04', title: 'Aperçu 3D', desc: 'Visualisez votre création.' },
  { num: '05', title: 'Fabrication', desc: 'Fait main dans notre atelier.' },
];

export default function GrillzConfigurator() {
  const [metal, setMetal] = useState(metals[0]);
  const [stone, setStone] = useState(stones[0]);
  const [teeth, setTeeth] = useState(6);
  const [finish, setFinish] = useState('poli');

  const basePrice = metal.price + stone.price;
  const totalPrice = basePrice + (teeth - 4) * 150;

  return (
    <section id="configurator" className="bg-obsidian py-24 md:py-32 px-4 md:px-[8vw] border-t border-border">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[11px] tracking-luxe uppercase text-gold mb-4">— Sur mesure</p>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-ivory leading-none mb-6">
            Grillz <span className="italic gold-gradient">sur mesure</span>
          </h2>
          <p className="text-sm md:text-base text-ivory/60 max-w-xl mx-auto leading-relaxed font-light">
            Créez un grillz unique, à votre image. Choisissez chaque détail et obtenez un aperçu réaliste avant fabrication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Visual side */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative aspect-square overflow-hidden bg-card border border-border">
              <Image
                src="https://media.db.com/images/public/6a726debefb664a4af6524e2/cfa490d23_generated_bf4e4832.png"
                alt="Configurateur de grillz AUBS"
                fittingType="fill"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
              {/* Floating spec tags */}
              <div className="absolute top-4 left-4 glass-panel px-3 py-1.5">
                <span className="font-mono-tech text-[10px] text-gold uppercase tracking-wide">{metal.label}</span>
              </div>
              <div className="absolute top-4 right-4 glass-panel px-3 py-1.5">
                <span className="font-mono-tech text-[10px] text-gold uppercase tracking-wide">{teeth} dents</span>
              </div>
              <div className="absolute bottom-6 left-4 right-4 glass-panel p-4 flex items-center justify-between">
                <div>
                  <p className="text-[9px] tracking-luxe uppercase text-ivory/50 mb-1">Estimation atelier</p>
                  <p className="font-heading text-2xl text-gold">{totalPrice.toLocaleString('fr-FR')} €</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] tracking-luxe uppercase text-ivory/50 mb-1">Délai</p>
                  <p className="font-mono-tech text-xs text-ivory">3-4 sem.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Selection suite */}
          <div className="space-y-10">
            {/* Metal selection */}
            <div>
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="font-mono-tech text-xs text-gold uppercase tracking-wide">01 — Métaux</h3>
                <span className="text-[10px] tracking-luxe uppercase text-ivory/40">{metal.label}</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {metals.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMetal(m)}
                    className={`group relative p-3 border transition-all duration-300 ${metal.id === m.id ? 'border-gold bg-gold/5' : 'border-border hover:border-ivory/30'}`}
                  >
                    <div className="w-full aspect-square mb-2" style={{ background: m.color, boxShadow: metal.id === m.id ? '0 0 12px rgba(197,160,89,0.3)' : 'none' }} />
                    <span className="text-[9px] tracking-luxe uppercase text-ivory/70 block leading-tight">{m.label}</span>
                    {metal.id === m.id && <Check className="absolute top-2 right-2 w-3 h-3 text-gold" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Stone selection */}
            <div>
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="font-mono-tech text-xs text-gold uppercase tracking-wide">02 — Pierres</h3>
                <span className="text-[10px] tracking-luxe uppercase text-ivory/40">{stone.label}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stones.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setStone(s)}
                    className={`p-4 border text-left transition-all duration-300 ${stone.id === s.id ? 'border-gold bg-gold/5' : 'border-border hover:border-ivory/30'}`}
                  >
                    <span className="text-xs tracking-luxe uppercase text-ivory block mb-1">{s.label}</span>
                    <span className="text-[10px] text-ivory/40">{s.desc}</span>
                    {s.price > 0 && <span className="font-mono-tech text-[10px] text-gold block mt-1">+{s.price} €</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Teeth count */}
            <div>
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="font-mono-tech text-xs text-gold uppercase tracking-wide">03 — Nombre de dents</h3>
                <span className="font-mono-tech text-sm text-gold">{teeth}</span>
              </div>
              <input
                type="range"
                min="4"
                max="12"
                value={teeth}
                onChange={(e) => setTeeth(Number(e.target.value))}
                className="w-full accent-[hsl(39,49%,56%)]"
              />
              <div className="flex justify-between mt-2 font-mono-tech text-[10px] text-ivory/30">
                <span>4</span><span>8</span><span>12</span>
              </div>
            </div>

            {/* Finish */}
            <div>
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="font-mono-tech text-xs text-gold uppercase tracking-wide">04 — Finition</h3>
              </div>
              <div className="flex gap-3">
                {['Poli', 'Mat', 'Sablé', 'Gravé'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFinish(f.toLowerCase())}
                    className={`px-5 py-2.5 text-[10px] tracking-luxe uppercase border transition-all ${finish === f.toLowerCase() ? 'border-gold text-gold bg-gold/5' : 'border-border text-ivory/60 hover:border-ivory/30'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-border">
              <button className="w-full group flex items-center justify-center gap-3 px-8 py-5 bg-gold text-obsidian text-[11px] tracking-luxe uppercase font-medium hover:bg-ivory transition-colors duration-400">
                Commencer la conception
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-[10px] text-ivory/30 mt-3 tracking-wide">Aperçu 3D disponible après conception · Empreinte dentaire offerte</p>
            </div>
          </div>
        </div>

        {/* Steps overview */}
        <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 pt-12 border-t border-border">
          {steps.map((step) => (
            <div key={step.num} className="group">
              <p className="font-mono-tech text-2xl text-gold/40 group-hover:text-gold transition-colors mb-3">{step.num}</p>
              <h4 className="font-heading text-lg text-ivory mb-2">{step.title}</h4>
              <p className="text-xs text-ivory/40 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}