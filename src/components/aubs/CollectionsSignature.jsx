const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const collections = [
  { name: 'Chaînes', image: 'https://media.base44.com/images/public/6a726debefb664a4af6524e2/193367a85_generated_5511d36c.png', desc: 'Maillons d\'exception' },
  { name: 'Bagues', image: 'https://media.base44.com/images/public/6a726debefb664a4af6524e2/eca0c50cc_generated_2caa8d7b.png', desc: 'Pavé & solitaires' },
  { name: 'Bracelets', image: 'https://media.base44.com/images/public/6a726debefb664a4af6524e2/8d8dab01e_generated_4b27f740.png', desc: 'Joncs & gourmettes' },
  { name: 'Pendentifs', image: 'https://media.base44.com/images/public/6a726debefb664a4af6524e2/8210d1095_generated_360323e2.png', desc: 'Symboles & créations' },
  { name: 'Grillz', image: 'https://media.base44.com/images/public/6a726debefb664a4af6524e2/3fd518a2e_generated_50abdb06.png', desc: 'Sur mesure' },
];

export default function CollectionsSignature() {
  return (
    <section id="collections" className="bg-obsidian py-24 md:py-32 px-4 md:px-[8vw]">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div>
            <p className="text-[11px] tracking-luxe uppercase text-gold mb-4">— Collections</p>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-ivory leading-none">
              Collections <span className="italic gold-gradient">Signature</span>
            </h2>
          </div>
          <a href="#collections" className="hidden md:flex items-center gap-2 text-[11px] tracking-luxe uppercase text-ivory/60 hover:text-gold transition-colors group">
            Voir toutes les collections
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
          {collections.map((item, i) => (
            <a key={i} href="#collections" className={`group relative overflow-hidden bg-card aspect-[3/4] ${i === 0 ? 'col-span-2 md:col-span-1' : ''}`}>
              <Image
                src={item.image}
                alt={`Collection ${item.name} — AUBS Jewellery`}
                fittingType="fill"
                className="absolute inset-0 w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <p className="text-[9px] tracking-luxe uppercase text-gold mb-1 hover-reveal">{item.desc}</p>
                <h3 className="font-heading text-xl md:text-2xl font-light text-ivory mb-2">{item.name}</h3>
                <span className="text-[10px] tracking-luxe uppercase text-ivory/60 flex items-center gap-1.5 hover-reveal">
                  Découvrir <ArrowRight className="w-3 h-3" />
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-px bg-gold/0 group-hover:bg-gold/40 transition-all duration-700" />
            </a>
          ))}
        </div>

        <a href="#collections" className="md:hidden mt-8 flex items-center gap-2 text-[11px] tracking-luxe uppercase text-ivory/60 justify-center">
          Voir toutes les collections <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}