import { motion } from 'motion/react';
import { PenTool, Scissors, Ruler, CheckCircle, Smartphone } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/data';
import { FluidImage } from '../components/ui/FluidImage';

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Choix du modèle & Tissu",
    icon: PenTool,
    desc: "Nous discutons de vos envies. Que vous ayez un croquis, une photo ou juste une idée, nous vous aidons à choisir le design parfait et le tissu (Bazin, Wax, etc.)."
  },
  {
    number: "02",
    title: "Prise de mesures",
    icon: Ruler,
    desc: "Rendez-vous à notre atelier pour une prise de mesures précise. C'est le secret d'une tenue parfaitement ajustée à votre morphologie."
  },
  {
    number: "03",
    title: "Essayage & Ajustements",
    icon: Scissors,
    desc: "Une fois la pièce confectionnée, vous venez pour un premier essayage. Nous apportons toutes les retouches nécessaires jusqu'à ce que le vêtement tombe parfaitement."
  },
  {
    number: "04",
    title: "Livraison de la tenue",
    icon: CheckCircle,
    desc: "Votre création sur-mesure est prête ! Repartez avec une tenue unique, reflétant votre style et notre savoir-faire."
  }
];

export default function Services() {
  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-earth-light text-ink py-32 px-6 border-b border-earth-dark/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-olive font-sans font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block"
          >
            Savoir-Faire
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-ink-dark font-bold mb-8"
          >
            L'Art du Sur-Mesure
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-sans text-olive/80 max-w-2xl mx-auto"
          >
            De l'esquisse à la dernière retouche, vivez l'expérience d'une création entièrement pensée pour vous.
          </motion.p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-ink-dark font-bold mb-8">Créativité sans limite.</h2>
            <div className="space-y-6 text-lg text-olive/80 font-sans leading-relaxed">
              <p>
                La force de Habé Textile réside dans notre <strong className="text-olive">compétence en design</strong>. Nous ne nous contentons pas de reproduire des modèles existants.
              </p>
              <p>
                Si vous avez une idée en tête, nous étudions ensemble sa faisabilité, dessinons un croquis et la modélisons. Notre équipe est capable d'innover et de concevoir des coupes inédites pour vous garantir un vêtement qui se démarque.
              </p>
            </div>
            
            <a
              href={getWhatsAppUrl("Bonjour, j'aimerais discuter d'un projet de création sur-mesure.")} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-olive text-white px-8 py-4 rounded-full mt-10 font-sans font-bold tracking-widest uppercase text-xs hover:bg-ink-dark transition-colors shadow-md"
            >
              <Smartphone size={20} />
              Parler d'un projet
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FluidImage src="https://images.unsplash.com/photo-1596484552431-2559599d1912?q=80&w=1000&auto=format&fit=crop" alt="Couture detail" className="rounded-2xl" />
            <FluidImage src="https://images.unsplash.com/photo-1588661642878-5a02e604f326?q=80&w=1000&auto=format&fit=crop" alt="Machine" className="rounded-2xl mt-12" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-earth/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-olive font-sans font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Processus</span>
            <h2 className="text-4xl md:text-5xl font-serif text-ink-dark font-bold">Comment ça marche ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[40px] shadow-sm relative group border border-earth-light/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute -top-6 -right-6 text-9xl font-serif text-black/[0.03] font-bold z-0 pointer-events-none group-hover:text-olive/[0.05] transition-colors duration-500">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-earth-light/50 text-olive rounded-full flex items-center justify-center mb-6 border border-earth-dark/20">
                    <step.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-ink-dark mb-4">{step.title}</h3>
                  <p className="text-olive/80 font-sans text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
