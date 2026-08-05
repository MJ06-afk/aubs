const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const products = [
  { name: 'Grillz Open Face — Or jaune', cat: 'Grillz', price: '4 200 €', image: 'https://media.db.com/images/public/6a726debefb664a4af6524e2/3fd518a2e_generated_50abdb06.png', tag: 'Nouveau' },
  { name: 'Chaîne Cuban — Or 18k', cat: 'Chaînes', price: '6 800 €', image: 'https://media.db.com/images/public/6a726debefb664a4af6524e2/193367a85_generated_5511d36c.png', tag: 'Iconique' },
  { name: 'Bague Solitaire — Diamant', cat: 'Bagues', price: '3 500 €', image: 'https://media.db.com/images/public/6a726debefb664a4af6524e2/eca0c50cc_generated_2caa8d7b.png', tag: 'Nouveau' },
  { name: 'Bracelet Jonc — Pavé', cat: 'Bracelets', price: '5 200 €', image: 'https://media.db.com/images/public/6a726debefb664a4af6524e2/8d8dab01e_generated_4b27f740.png', tag: 'Édition limitée' },
];

export default function Nouveautes() {
  return (
    <section id="nouveautes" className="bg-obsidian py-24 md:py-32 px-4 md:px-[8vw] border-t border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[11px] tracking-luxe uppercase text-gold mb-4">— Nouveautés</p>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-ivory leading-none">
              Pièces <span className="italic gold-gradient">récentes</span>
            </h2>
          </div>
          <a href="#collections" className="hidden md:flex items-center gap-2 text-[11px] tracking-luxe uppercase text-ivory/60 hover:text-gold transition-colors group">
            Voir tout <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-card aspect-[3/4] mb-4">
                <Image src={p.image} alt={p.name} fittingType="fill" className="absolute inset-0 w-full h-full object-cover img-zoom" />
                <div className="absolute top-3 left-3 glass-panel px-2.5 py-1">
                  <span className="text-[9px] tracking-luxe uppercase text-gold">{p.tag}</span>
                </div>
                <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/20 transition-all duration-500" />
                <button className="absolute bottom-4 left-4 right-4 py-3 bg-gold/90 text-obsidian text-[10px] tracking-luxe uppercase opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  Ajouter au panier
                </button>
              </div>
              <p className="text-[10px] tracking-luxe uppercase text-ivory/40 mb-1">{p.cat}</p>
              <h3 className="font-heading text-lg text-ivory mb-1 group-hover:text-gold transition-colors">{p.name}</h3>
              <p className="font-mono-tech text-sm text-gold">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}