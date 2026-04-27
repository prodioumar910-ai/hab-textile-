import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CREATIONS, CATEGORIES, getWhatsAppUrl } from '../lib/data';
import { FluidImage } from '../components/ui/FluidImage';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Toutes");

  const filteredCreations = activeCategory === "Toutes" 
    ? CREATIONS 
    : CREATIONS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-earth-light py-32 text-center px-6 border-b border-earth-dark/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-ink-dark mb-6 font-bold">Nouvelles Créations</h1>
          <p className="text-lg font-sans text-olive/80 max-w-xl mx-auto">Découvrez nos dernières pièces uniques, confectionnées avec passion dans notre atelier.</p>
        </motion.div>
      </section>

      {/* Filters & Grid */}
      <section className="max-w-screen-xl mx-auto px-6 py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-sans text-[10px] font-bold tracking-widest uppercase transition-all ${
                activeCategory === category 
                  ? 'bg-olive text-white shadow-md' 
                  : 'bg-white border border-earth-dark/30 text-olive/70 hover:border-olive hover:text-olive'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredCreations.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[40px] mb-6 bg-earth-light border-8 border-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <FluidImage 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <p className="text-warm-white font-serif italic text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-olive mb-2 block">{item.category}</span>
                    <h3 className="text-2xl font-serif text-ink-dark font-bold mb-4">{item.title}</h3>
                  </div>
                  
                  <a
                    href={getWhatsAppUrl(`Bonjour, je suis intéressé(e) par le modèle "${item.title}" (${item.id}) vu sur votre site.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest hover:opacity-90 shadow-md transition-opacity"
                  >
                    <MessageCircle size={18} />
                    Je veux ce modèle
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredCreations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl font-serif text-ink/60">Aucune création trouvée dans cette catégorie pour le moment.</p>
          </div>
        )}
      </section>
    </div>
  );
}
