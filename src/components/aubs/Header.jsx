import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';

const topBarLinks = [
'Assistance 7j/7'];

const navLinksLeft = [
{ label: 'Collections', href: '#collections' },
{ label: 'Grillz sur mesure', href: '/grillz-sur-mesure' },
{ label: 'Nouveautés', href: '#nouveautes' },
{ label: 'À propos', href: '#atelier' }];

const navLinksRight = [
{ label: 'Atelier', href: '#atelier' },
{ label: 'Journal', href: '#faq' }];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const allLinks = [...navLinksLeft, ...navLinksRight];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ?
        'bg-obsidian/95 backdrop-blur-md border-b border-border' :
        'bg-gradient-to-b from-black/60 to-transparent'}`
        }>
        
        {/* Top bar */}
        <div className={`border-b border-white/5 transition-all duration-500 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-9 opacity-100'}`}>
          

          
        </div>

        {/* Main nav */}
        <nav className="flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
          <button className="md:hidden text-ivory" onClick={() => setMobileOpen(true)} aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden md:flex items-center gap-7 flex-1 justify-start">
            {navLinksLeft.map((link) =>
            <a key={link.label} href={link.href} className="text-[11px] tracking-luxe uppercase text-ivory/80 hover:text-gold transition-colors duration-300 relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            )}
          </div>

          <a href="#top" className="flex-shrink-0 mx-auto md:mx-0">
            <span className="font-heading text-2xl md:text-3xl font-semibold tracking-[0.3em] text-ivory">AUBS</span>
          </a>

          <div className="hidden md:flex items-center gap-7 flex-1 justify-end">
            {navLinksRight.map((link) =>
            <a key={link.label} href={link.href} className="text-[11px] tracking-luxe uppercase text-ivory/80 hover:text-gold transition-colors duration-300 relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            )}
            <button aria-label="Rechercher" className="text-ivory/80 hover:text-gold transition-colors"><Search className="w-4 h-4" /></button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button aria-label="Rechercher" className="text-ivory/80"><Search className="w-5 h-5" /></button>
            <button aria-label="Panier" className="text-ivory/80 relative">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-50 bg-obsidian transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex items-center justify-between px-4 h-16 border-b border-border">
          <span className="font-heading text-2xl tracking-[0.3em] text-ivory">AUBS</span>
          <button onClick={() => setMobileOpen(false)} className="text-ivory"><X className="w-6 h-6" /></button>
        </div>
        <div className="flex flex-col px-6 pt-8">
          {allLinks.map((link, i) =>
          <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="font-heading text-3xl text-ivory py-4 border-b border-border/50 hover:text-gold transition-colors" style={{ animationDelay: `${i * 0.05}s` }}>
              {link.label}
            </a>
          )}
        </div>
      </div>
    </>);

}
