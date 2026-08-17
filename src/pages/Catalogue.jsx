import React, { useState, useMemo, useEffect } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import Header from '@/components/aubs/Header';
import Footer from '@/components/aubs/Footer';
import { Image } from '@/components/ui/image';

const CDN = 'https://media.base44.com/images/public/6a726debefb664a4af6524e2';

// ─────────────────────────────────────────────────────────────
// CATALOGUE — modifiez librement cette liste.
// Pour ajouter un produit, dupliquez une ligne et changez les valeurs.
// prix = nombre entier, sans espace ni symbole (sert au tri et au filtre).
// ─────────────────────────────────────────────────────────────
const produits = [
  { id: 1,  nom: 'Grillz Open Face',        cat: 'Grillz',      metal: 'Or jaune', pierre: 'Diamants',   prix: 4200, image: `${CDN}/3fd518a2e_generated_50abdb06.png`, tag: 'Sur mesure' },
  { id: 2,  nom: 'Grillz Bottom 6 dents',   cat: 'Grillz',      metal: 'Or blanc', pierre: 'Sans pierre', prix: 3100, image: `${CDN}/cfa490d23_generated_bf4e4832.png`, tag: null },
  { id: 3,  nom: 'Chaîne Cuban 18k',        cat: 'Chaînes',     metal: 'Or jaune', pierre: 'Sans pierre', prix: 6800, image: `${CDN}/193367a85_generated_5511d36c.png`, tag: 'Iconique' },
  { id: 4,  nom: 'Chaîne Figaro',           cat: 'Chaînes',     metal: 'Argent',   pierre: 'Sans pierre', prix: 1200, image: `${CDN}/193367a85_generated_5511d36c.png`, tag: null },
  { id: 5,  nom: 'Bague Solitaire',         cat: 'Bagues',      metal: 'Or blanc', pierre: 'Diamants',   prix: 3500, image: `${CDN}/eca0c50cc_generated_2caa8d7b.png`, tag: 'Nouveau' },
  { id: 6,  nom: 'Bague Éternité pavée',    cat: 'Bagues',      metal: 'Or rose',  pierre: 'Diamants',   prix: 4900, image: `${CDN}/eca0c50cc_generated_2caa8d7b.png`, tag: null },
  { id: 7,  nom: 'Bracelet Jonc pavé',      cat: 'Bracelets',   metal: 'Or jaune', pierre: 'Diamants',   prix: 5200, image: `${CDN}/8d8dab01e_generated_4b27f740.png`, tag: 'Édition limitée' },
  { id: 8,  nom: 'Bracelet Tennis',         cat: 'Bracelets',   metal: 'Or blanc', pierre: 'Diamants',   prix: 7400, image: `${CDN}/8d8dab01e_generated_4b27f740.png`, tag: null },
  { id: 9,  nom: 'Pendentif Croix',         cat: 'Pendentifs',  metal: 'Or jaune', pierre: 'Diamants',   prix: 2800, image: `${CDN}/8210d1095_generated_360323e2.png`, tag: null },
  { id: 10, nom: 'Pendentif Initiale',      cat: 'Pendentifs',  metal: 'Or rose',  pierre: 'Sans pierre', prix: 1600, image: `${CDN}/8210d1095_generated_360323e2.png`, tag: 'Personnalisable' },
  { id: 11, nom: 'Parure Soleil d\'Or',     cat: 'Parures',     metal: 'Or jaune', pierre: 'Saphirs',    prix: 9800, image: `${CDN}/1486a573c_generated_84da0cda.png`, tag: 'Signature' },
  { id: 12, nom: 'Chaîne de cheville',      cat: 'Bracelets',   metal: 'Argent',   pierre: 'Sans pierre', prix: 890,  image: `${CDN}/8d8dab01e_generated_4b27f740.png`, tag: null },
];

const CATEGORIES = ['Grillz', 'Chaînes', 'Bagues', 'Bracelets', 'Pendentifs', 'Parures'];
const METAUX = ['Or jaune', 'Or blanc', 'Or rose', 'Argent'];
const PIERRES = ['Diamants', 'Saphirs', 'Sans pierre'];

const euro = (n) => n.toLocaleString('fr-FR') + ' €';

function GroupeFiltre({ titre, options, selection, onToggle }) {
  return (
    <div className="border-t border-border pt-6 mt-6 first:border-0 first:pt-0 first:mt-0">
      <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">{titre}</p>
      <div className="space-y-2.5">
        {options.map((opt) => {
          const actif = selection.includes(opt);
          return (
            <button
              key={opt}
              onClick={() => onToggle(opt)}
              className="flex items-center gap-3 w-full text-left group"
            >
              <span
                className={`w-3.5 h-3.5 border flex-shrink-0 transition-colors ${
                  actif ? 'bg-gold border-gold' : 'border-ivory/25 group-hover:border-gold/60'
                }`}
              />
              <span
                className={`text-[12px] tracking-wide transition-colors ${
                  actif ? 'text-ivory' : 'text-ivory/55 group-hover:text-ivory/85'
                }`}
              >
                {opt}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Catalogue() {
  const [cats, setCats] = useState([]);
  const [metaux, setMetaux] = useState([]);
  const [pierres, setPierres] = useState([]);
  const [prixMax, setPrixMax] = useState(10000);
  const [tri, setTri] = useState('recommande');
  const [panneauOuvert, setPanneauOuvert] = useState(false);

  useEffect(() => {
    document.title = 'Catalogue — Bijoux or et diamant | AUBS Jewellery Cotonou';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        "Découvrez le catalogue AUBS Jewellery : grillz, chaînes, bagues, bracelets et pendentifs en or et diamant. Atelier de joaillerie à Cotonou, Bénin."
      );
  }, []);

  const bascule = (setter) => (valeur) =>
    setter((prev) => (prev.includes(valeur) ? prev.filter((v) => v !== valeur) : [...prev, valeur]));

  const reinitialiser = () => {
    setCats([]);
    setMetaux([]);
    setPierres([]);
    setPrixMax(10000);
  };

  const nbFiltres = cats.length + metaux.length + pierres.length + (prixMax < 10000 ? 1 : 0);

  const resultats = useMemo(() => {
    let liste = produits.filter(
      (p) =>
        (cats.length === 0 || cats.includes(p.cat)) &&
        (metaux.length === 0 || metaux.includes(p.metal)) &&
        (pierres.length === 0 || pierres.includes(p.pierre)) &&
        p.prix <= prixMax
    );
    if (tri === 'prix-croissant') liste = [...liste].sort((a, b) => a.prix - b.prix);
    if (tri === 'prix-decroissant') liste = [...liste].sort((a, b) => b.prix - a.prix);
    if (tri === 'nom') liste = [...liste].sort((a, b) => a.nom.localeCompare(b.nom));
    return liste;
  }, [cats, metaux, pierres, prixMax, tri]);

  const panneau = (
    <div className="space-y-0">
      <GroupeFiltre titre="Catégorie" options={CATEGORIES} selection={cats} onToggle={bascule(setCats)} />
      <GroupeFiltre titre="Métal" options={METAUX} selection={metaux} onToggle={bascule(setMetaux)} />
      <GroupeFiltre titre="Pierre" options={PIERRES} selection={pierres} onToggle={bascule(setPierres)} />

      <div className="border-t border-border pt-6 mt-6">
        <div className="flex items-baseline justify-between mb-4">
          <p className="text-[10px] tracking-luxe uppercase text-gold">Budget maximum</p>
          <span className="text-[12px] text-ivory tabular-nums">{euro(prixMax)}</span>
        </div>
        <input
          type="range"
          min="500"
          max="10000"
          step="100"
          value={prixMax}
          onChange={(e) => setPrixMax(Number(e.target.value))}
          className="w-full accent-gold cursor-pointer"
          aria-label="Budget maximum"
        />
        <div className="flex justify-between mt-2 text-[10px] text-ivory/35 tabular-nums">
          <span>500 €</span>
          <span>10 000 €</span>
        </div>
      </div>

      {nbFiltres > 0 && (
        <button
          onClick={reinitialiser}
          className="mt-8 w-full py-3 border border-ivory/20 text-[10px] tracking-luxe uppercase text-ivory/70 hover:border-gold hover:text-gold transition-colors"
        >
          Réinitialiser les filtres
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-obsidian min-h-screen">
      <Header />

      <main className="pt-32 pb-24 px-4 md:px-[8vw]">
        <div className="max-w-[1600px] mx-auto">
          {/* En-tête */}
          <div className="mb-12">
            <p className="text-[11px] tracking-luxe uppercase text-gold mb-4">— Catalogue</p>
            <h1 className="font-heading text-4xl md:text-6xl font-light text-ivory leading-none">
              Collection <span className="italic gold-gradient">d'Excellence</span>
            </h1>
          </div>

          {/* Barre : compteur + tri + bouton filtres mobile */}
          <div className="flex items-center justify-between gap-4 pb-6 mb-8 border-b border-border">
            <p className="text-[11px] tracking-luxe uppercase text-ivory/50">
              {resultats.length} {resultats.length > 1 ? 'pièces' : 'pièce'}
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setPanneauOuvert(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-ivory/20 text-[10px] tracking-luxe uppercase text-ivory/80"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filtres{nbFiltres > 0 && ` (${nbFiltres})`}
              </button>

              <select
                value={tri}
                onChange={(e) => setTri(e.target.value)}
                aria-label="Trier les résultats"
                className="bg-transparent border border-ivory/20 px-4 py-2.5 text-[10px] tracking-luxe uppercase text-ivory/80 focus:border-gold outline-none cursor-pointer"
              >
                <option value="recommande" className="bg-obsidian">Recommandé</option>
                <option value="prix-croissant" className="bg-obsidian">Prix croissant</option>
                <option value="prix-decroissant" className="bg-obsidian">Prix décroissant</option>
                <option value="nom" className="bg-obsidian">Nom A–Z</option>
              </select>
            </div>
          </div>

          <div className="flex gap-10">
            {/* Colonne filtres — bureau */}
            <aside className="hidden lg:block w-[240px] flex-shrink-0">
              <div className="sticky top-28">{panneau}</div>
            </aside>

            {/* Grille produits */}
            <div className="flex-1">
              {resultats.length === 0 ? (
                <div className="py-32 text-center">
                  <p className="font-heading text-2xl text-ivory/70 mb-3">Aucune pièce ne correspond</p>
                  <p className="text-[12px] text-ivory/40 mb-8">Élargissez vos critères de recherche.</p>
                  <button
                    onClick={reinitialiser}
                    className="px-8 py-3 bg-gold text-obsidian text-[10px] tracking-luxe uppercase"
                  >
                    Réinitialiser
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {resultats.map((p) => (
                    <article key={p.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden bg-card aspect-[3/4] mb-4">
                        <Image
                          src={p.image}
                          alt={p.nom}
                          fittingType="fill"
                          className="absolute inset-0 w-full h-full object-cover img-zoom"
                        />
                        {p.tag && (
                          <div className="absolute top-3 left-3 glass-panel px-2.5 py-1">
                            <span className="text-[9px] tracking-luxe uppercase text-gold">{p.tag}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/20 transition-all duration-500" />
                      </div>
                      <p className="text-[9px] tracking-luxe uppercase text-ivory/35 mb-1.5">
                        {p.cat} · {p.metal}
                      </p>
                      <h2 className="font-heading text-lg text-ivory mb-1.5 leading-tight">{p.nom}</h2>
                      <p className="text-[12px] text-gold tabular-nums">{euro(p.prix)}</p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Panneau filtres — mobile */}
      {panneauOuvert && (
        <div className="lg:hidden fixed inset-0 z-[60] flex">
          <div className="flex-1 bg-obsidian/80" onClick={() => setPanneauOuvert(false)} />
          <div className="w-[85%] max-w-[340px] bg-obsidian border-l border-border overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[11px] tracking-luxe uppercase text-ivory">Filtres</span>
              <button onClick={() => setPanneauOuvert(false)} aria-label="Fermer les filtres">
                <X className="w-5 h-5 text-ivory/60" />
              </button>
            </div>
            {panneau}
            <button
              onClick={() => setPanneauOuvert(false)}
              className="mt-8 w-full py-3.5 bg-gold text-obsidian text-[10px] tracking-luxe uppercase"
            >
              Voir {resultats.length} {resultats.length > 1 ? 'pièces' : 'pièce'}
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
