import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Ruler, Scissors } from 'lucide-react';
import { FluidImage } from '../components/ui/FluidImage';
import { CREATIONS } from '../lib/data';

const REASSURANCE = [
  { icon: Star, title: "Créations uniques", desc: "Des modèles qui ne ressemblent qu'à vous" },
  { icon: Scissors, title: "Tissus de qualité", desc: "Bazin riche, Wax premium et soie" },
  { icon: Ruler, title: "Sur place", desc: "Prise de mesures précises à l'atelier" }
];

export default function Home() {
  const featured = CREATIONS.slice(0, 3);

  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <FluidImage 
            src="https://images.unsplash.com/photo-1596484552431-2559599d1912?q=80&w=2832&auto=format&fit=crop" 
            alt="Atelier couture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-warm-white/90"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-olive font-sans font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block drop-shadow-sm">Atelier de Haute Couture</span>
            <h1 className="text-5xl md:text-7xl font-serif text-ink-dark leading-[1.1] font-bold">
              L'élégance sur mesure, <br />
              <span className="italic text-olive font-normal">réinventée chaque jour</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-olive/80 font-sans max-w-2xl mx-auto leading-relaxed"
          >
            Habé Textile donne vie à vos idées. Découvrez nos collections exclusives ou venez concevoir la tenue parfaite dans notre atelier à Bamako.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8"
          >
            <Link
              to="/creations"
              className="inline-flex items-center gap-3 bg-olive text-white px-8 py-4 rounded-full font-sans font-bold tracking-widest uppercase text-xs hover:opacity-90 shadow-md transition-all duration-300"
            >
              Découvrir la collection
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reassurance Banner */}
      <section className="bg-earth-light py-16 text-ink border-y border-earth-dark/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-ink/10">
          {REASSURANCE.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="px-6 flex flex-col items-center pt-8 md:pt-0"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-olive border border-earth-light">
                <item.icon size={24} />
              </div>
              <h3 className="font-serif text-2xl mb-3 font-bold text-ink-dark">{item.title}</h3>
              <p className="text-olive/80 font-sans text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-olive font-sans font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">En Vedette</span>
            <h2 className="text-4xl md:text-5xl font-serif text-ink-dark font-bold">Modèles phares de la semaine</h2>
          </div>
          <Link to="/creations" className="hidden md:flex items-center gap-2 text-olive hover:text-ink transition-colors uppercase font-sans tracking-widest text-[10px] font-bold">
            Tout voir <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[80px] mb-6 bg-earth-light border-8 border-white shadow-xl transition-transform hover:scale-95 duration-500">
                <FluidImage 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-olive mb-2 block">{item.category}</span>
              <h3 className="text-2xl font-serif text-ink-dark font-bold mb-2">{item.title}</h3>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link to="/creations" className="inline-flex items-center gap-2 text-olive hover:text-ink transition-colors uppercase tracking-widest text-sm font-semibold">
            Voir toute la galerie <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-earth-light/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square md:aspect-[4/5] rounded-[80px] overflow-hidden border-8 border-white shadow-2xl relative"
          >
            <FluidImage 
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2940&auto=format&fit=crop" 
              alt="Artisan couturier au travail"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-olive font-sans font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Notre Atelier</span>
            <h2 className="text-4xl md:text-6xl font-serif text-ink-dark font-bold mb-8 leading-tight">Le savoir-faire authentique.</h2>
            <div className="space-y-6 text-lg text-olive/80 font-sans leading-relaxed">
              <p>
                Situé au cœur de Bamako, <strong className="text-ink font-sans font-medium">Habé Textile</strong> est bien plus qu'un simple atelier de couture. C'est un espace de création où chaque fil raconte une histoire et chaque coupe sublime votre silhouette.
              </p>
              <p>
                Nous marions les tissus traditionnels africains comme le Bazin riche et le Wax avec des designs contemporains. Que vous veniez avec une idée précise ou que vous ayez besoin de nos conseils, nous transformons votre vision en une tenue exceptionnelle.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-block mt-10 border-b border-ink pb-1 font-semibold tracking-wider uppercase text-sm hover:text-olive hover:border-olive transition-colors"
            >
              Découvrir nos services
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
