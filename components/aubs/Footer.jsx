import React, { useState } from 'react';
import { Instagram, ArrowRight, ArrowUp } from 'lucide-react';

const footerLinks = {
  Collections: ['Chaînes', 'Bagues', 'Bracelets', 'Pendentifs', 'Grillz sur mesure'],
  Maison: ['À propos', 'L\'atelier', 'Savoir-faire', 'Journal', 'Carrières'],
  Service: ['Guide des tailles', 'Livraison & retours', 'Garantie à vie', 'Certificats', 'FAQ'],
  Légal: ['Mentions légales', 'Confidentialité', 'CGV', 'Cookies'],
};

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-obsidian border-t border-border">
      {/* Newsletter */}
      <div className="px-4 md:px-[8vw] py-16 md:py-20 border-b border-border">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-light text-ivory mb-3">
              Rejoignez le <span className="italic gold-gradient">cercle AUBS</span>
            </h3>
            <p className="text-sm text-ivory/50 max-w-md">Avant-premières, pièces exclusives et invitations privées. Pas de bruit — uniquement l'essentiel.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center border-b border-gold/40 pb-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse e-mail"
              className="flex-1 bg-transparent text-ivory placeholder:text-ivory/30 text-sm outline-none py-2"
            />
            <button className="text-gold hover:text-ivory transition-colors" aria-label="S'inscrire">
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="px-4 md:px-[8vw] py-16">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-6">
          <div className="col-span-2 md:col-span-2">
            <span className="font-heading text-3xl font-semibold tracking-[0.3em] text-ivory block mb-4">AUBS</span>
            <p className="text-xs text-ivory/40 leading-relaxed max-w-xs mb-6">
              L'art du luxe joaillier. Grillz sur mesure, créations en or et diamant. Façonné pour ceux qui définissent les tendances.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-9 h-9 border border-border flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="text-[10px] tracking-luxe uppercase text-gold mb-4">{cat}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-xs text-ivory/50 hover:text-ivory transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-4 md:px-[8vw] py-6 border-t border-border">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-luxe uppercase text-ivory/30">© 2026 AUBS Jewellery — Tous droits réservés</p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] tracking-luxe uppercase text-ivory/30">Paiement sécurisé</span>
            <a href="#top" className="flex items-center gap-2 text-[10px] tracking-luxe uppercase text-ivory/50 hover:text-gold transition-colors">
              Retour en haut <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}