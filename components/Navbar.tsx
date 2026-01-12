
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-turbo-orange p-1.5 rounded-md glow-orange group-hover:scale-110 transition-transform">
            <Zap className="text-white w-6 h-6 fill-current" />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter italic uppercase">
            FLASH<span className="text-turbo-orange">LAVACAR</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-turbo-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-turbo-orange text-white px-7 py-3 rounded-none font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:skew-x-[-12deg] active:scale-95 glow-orange"
          >
            RESERVAR AGORA
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-zinc-950 z-40 p-8 flex flex-col gap-8 items-center animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-black italic uppercase tracking-tighter hover:text-turbo-orange"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-turbo-orange text-white px-10 py-5 rounded-none font-black text-lg w-full text-center uppercase tracking-widest skew-x-[-12deg]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            RESERVAR AGORA
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
