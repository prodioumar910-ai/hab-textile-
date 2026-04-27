import { Link } from 'react-router-dom';
import { Scissors, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-warm-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-olive flex items-center justify-center text-white">
              <Scissors size={16} />
            </div>
            <span className="font-serif text-2xl tracking-tight text-white">Habé Textile</span>
          </Link>
          <p className="text-white/60 font-serif italic text-lg leading-relaxed">
            L'élégance sur mesure, réinventée chaque jour. Votre atelier de couture de confiance.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-white/80 hover:text-white hover:underline underline-offset-4">Accueil</Link></li>
            <li><Link to="/creations" className="text-white/80 hover:text-white hover:underline underline-offset-4">Nouvelles Créations</Link></li>
            <li><Link to="/services" className="text-white/80 hover:text-white hover:underline underline-offset-4">Sur-Mesure & Services</Link></li>
            <li><Link to="/contact" className="text-white/80 hover:text-white hover:underline underline-offset-4">Contact & Localisation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6">Contact</h4>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-olive shrink-0" />
              <span>Yoro korobougou, près du dibisoni da<br />Bamako, Mali</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-olive shrink-0" />
              <span>+223 00 00 00 00</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-olive shrink-0" />
              <span>contact@habetextile.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6">Suivez-nous</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-ink transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-ink transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center mt-10">
        <p className="text-white/40 text-sm tracking-wider">
          © {new Date().getFullYear()} Habé Textile. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
