import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Scissors } from 'lucide-react';

const LINKS = [
  { name: 'Accueil', path: '/' },
  { name: 'Créations', path: '/creations' },
  { name: 'Sur-Mesure', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-warm-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group z-50">
          <div className="w-10 h-10 rounded-full bg-olive flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <span className="font-bold text-xl font-sans">H</span>
          </div>
          <span className="font-sans text-2xl font-bold tracking-tighter uppercase text-ink">Habé Textile</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-sans text-[10px] tracking-widest uppercase font-bold transition-colors ${
                location.pathname === link.path ? 'text-olive border-b-[3px] border-olive pb-1' : 'text-olive/70 hover:text-olive hover:border-b-[3px] hover:border-transparent pb-1'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/22300000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-olive text-white rounded-full font-sans font-bold uppercase tracking-widest text-[10px] hover:opacity-90 transition-opacity"
          >
            Prendre RDV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-ink"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-warm-white flex flex-col items-center justify-center gap-8 z-40"
          >
            {LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-serif ${
                  location.pathname === link.path ? 'text-olive italic' : 'text-ink'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/22300000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-olive text-white px-8 py-3 rounded-full text-sm tracking-wider uppercase"
            >
              Prendre RDV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
