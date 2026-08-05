import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Comment se déroule la création d\'un grillz sur mesure ?', a: 'Après votre conception en ligne, nous vous envoyons un kit d\'empreinte dentaire. Une fois l\'empreinte reçue, nos artisans façonnent votre grillz en 3 à 4 semaines. Un aperçu 3D vous est envoyé pour validation avant fabrication.' },
  { q: 'Quels matériaux utilisez-vous ?', a: 'Nous utilisons exclusivement de l\'or 18k (jaune, blanc, rose), de l\'argent 925, et des diamants ou pierres précieuses certifiés. Chaque pièce est accompagnée d\'un certificat d\'authenticité GIA.' },
  { q: 'Quels sont les délais de fabrication ?', a: 'Les grillz sur mesure nécessitent 3 à 4 semaines. Les pièces de collection sont expédiées sous 48 à 72h. Un suivi personnalisé vous est communiqué à chaque étape.' },
  { q: 'Proposez-vous une garantie ?', a: 'Oui, toutes nos pièces bénéficient d\'une garantie à vie incluant l\'entretien, le nettoyage et les réparations. Nous prenons soin de vos bijoux aussi longtemps que vous les portez.' },
  { q: 'Comment fonctionne la livraison et les retours ?', a: 'La livraison est offerte et sécurisée, assurée à hauteur de la valeur de votre commande. Les retours sont acceptés sous 14 jours pour les pièces de collection (les grillz sur mesure étant personnalisés ne sont pas éligibles).' },
  { q: 'Les paiements sont-ils sécurisés ?', a: 'Toutes les transactions sont cryptées et 100% sécurisées. Nous acceptons les cartes bancaires, Apple Pay, Google Pay et proposons un paiement en 3 ou 4 fois sans frais dès 500 €.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-obsidian py-24 md:py-32 px-4 md:px-[8vw] border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-luxe uppercase text-gold mb-4">— Questions fréquentes</p>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-ivory leading-none">
            Tout ce que vous devez <span className="italic gold-gradient">savoir</span>
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
              >
                <span className={`font-heading text-lg md:text-xl pr-4 transition-colors ${open === i ? 'text-gold' : 'text-ivory group-hover:text-gold'}`}>
                  {item.q}
                </span>
                <span className="flex-shrink-0 text-gold">
                  {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${open === i ? 'max-h-60 pb-6' : 'max-h-0'}`}>
                <p className="text-sm text-ivory/50 leading-relaxed max-w-2xl">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}