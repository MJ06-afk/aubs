import React, { useState } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  { name: 'Karim B.', role: 'Artiste & collectionneur', text: 'Un grillz qui dépasse tout ce que j\'imaginais. La précision du sertissage, la qualité de l\'or — c\'est de l\'art portatif. AUBS a compris ma vision.' },
  { name: 'Léa M.', role: 'Cliente depuis 2023', text: 'Ma chaîne en or 18k est d\'une finesse incroyable. Le certificat, l\'emballage, le suivi — tout respire le luxe véritable. Je reviendrai.' },
  { name: 'Thomas R.', role: 'Entrepreneur', text: 'Le configurateur m\'a permis de visualiser mon grillz avant de commander. Le résultat final est identique à l\'aperçu. Savoir-faire d\'exception.' },
];

export default function Temoignages() {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="bg-obsidian py-24 md:py-32 px-4 md:px-[8vw] border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[11px] tracking-luxe uppercase text-gold mb-4">— Témoignages</p>
        <Quote className="w-8 h-8 text-gold/40 mx-auto mb-8" />
        <blockquote key={active} className="animate-fade-in">
          <p className="font-heading text-2xl md:text-4xl font-light text-ivory leading-snug mb-8 italic">
            « {t.text} »
          </p>
          <footer>
            <p className="text-sm tracking-luxe uppercase text-gold mb-1">{t.name}</p>
            <p className="text-[11px] text-ivory/40">{t.role}</p>
          </footer>
        </blockquote>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button onClick={prev} className="text-ivory/40 hover:text-gold transition-colors" aria-label="Précédent">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`h-px transition-all duration-300 ${i === active ? 'w-10 bg-gold' : 'w-5 bg-ivory/20'}`} />
            ))}
          </div>
          <button onClick={next} className="text-ivory/40 hover:text-gold transition-colors" aria-label="Suivant">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}