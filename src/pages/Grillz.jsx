import React, { useEffect } from 'react';
import Header from '@/components/aubs/Header';
import GrillzConfigurator from '@/components/aubs/GrillzConfigurator';
import Certifications from '@/components/aubs/Certifications';
import Temoignages from '@/components/aubs/Temoignages';
import FAQ from '@/components/aubs/FAQ';
import Footer from '@/components/aubs/Footer';

export default function Grillz() {
  useEffect(() => {
    document.title = 'Grillz sur mesure à Cotonou — Or et diamant | AUBS Jewellery';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        "Création de grillz sur mesure au Bénin : empreinte dentaire, or 18k, diamants. Atelier de joaillerie à Cotonou. Devis et délais sur demande."
      );
  }, []);

  return (
    <div className="bg-obsidian min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
          <p className="text-gold text-[11px] tracking-luxe uppercase mb-6">— Sur mesure</p>
          <h1 className="font-heading text-4xl md:text-6xl text-ivory mb-8">
            Grillz sur mesure
          </h1>
          <div className="space-y-5 text-ivory/70 leading-relaxed">
            <p>
              Chaque grillz AUBS est façonné à partir d'une empreinte dentaire
              individuelle, dans notre atelier de Cotonou. Aucune pièce n'est
              standardisée : la forme, l'épaisseur et le sertissage sont ajustés
              à votre dentition.
            </p>
            <p>
              Nous travaillons l'or 18 carats, jaune, blanc ou rose, ainsi que
              l'argent massif. Les diamants sont sertis à la main, pierre par
              pierre.
            </p>
            <p>
              Comptez trois à quatre semaines entre la prise d'empreinte et la
              livraison. Un essayage intermédiaire est proposé pour les pièces
              comportant plus de six dents.
            </p>
          </div>
        </section>
        <GrillzConfigurator />
        <Certifications />
        <Temoignages />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
