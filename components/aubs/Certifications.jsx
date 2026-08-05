import React from 'react';
import { Gem, Hammer, Shield, Award, Lock } from 'lucide-react';

const features = [
  { icon: Gem, title: 'Matériaux d\'exception', desc: 'Or 18k, diamants & pierres précieuses.' },
  { icon: Hammer, title: 'Fabrication artisanale', desc: 'Fait main par des artisans experts.' },
  { icon: Shield, title: 'Garantie à vie', desc: 'Entretien et réparation à vie.' },
  { icon: Award, title: 'Certifiés & authentiques', desc: 'Certificats GIA fournis avec chaque pièce.' },
  { icon: Lock, title: 'Paiement sécurisé', desc: 'Transactions 100% sécurisées et cryptées.' },
];

export default function Certifications() {
  return (
    <section className="bg-[hsl(50_33%_96.5%)] py-16 md:py-20 px-4 md:px-[8vw]">
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 mb-4 flex items-center justify-center border border-[hsl(0_0%_16.5%)] rounded-full group-hover:bg-obsidian group-hover:border-obsidian transition-all duration-400">
              <f.icon className="w-5 h-5 text-[hsl(0_0%_2.7%)] group-hover:text-gold transition-colors" />
            </div>
            <h3 className="font-heading text-base md:text-lg text-[hsl(0_0%_2.7%)] mb-2 font-medium">{f.title}</h3>
            <p className="text-[11px] text-[hsl(0_0%_30%)] leading-relaxed max-w-[160px]">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}