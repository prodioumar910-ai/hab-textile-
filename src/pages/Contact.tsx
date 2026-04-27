import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_NUMBER } from '../lib/data';

export default function Contact() {
  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-earth-light text-ink py-32 px-6 border-b border-earth-dark/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-ink-dark font-bold mb-6"
          >
            Nous <span className="italic text-olive font-normal">Trouver</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-sans text-olive/80 max-w-xl mx-auto"
          >
            Passez à l'atelier ou contactez-nous directement.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif text-ink-dark font-bold mb-6">Informations de Contact</h2>
              <p className="text-olive/80 font-sans text-lg mb-8 leading-relaxed">
                Pour toute demande de création sur-mesure, de rendez-vous ou d'information, n'hésitez pas à nous joindre par téléphone ou via WhatsApp pour une réponse rapide.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-earth-light shadow-sm text-olive">
                    <Phone size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[10px] uppercase tracking-widest text-olive/60 mb-1">Téléphone</h4>
                    <p className="font-sans font-medium text-lg text-ink">+{WHATSAPP_NUMBER.replace(/(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-earth-light shadow-sm text-olive">
                    <Mail size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[10px] uppercase tracking-widest text-olive/60 mb-1">Email</h4>
                    <p className="font-sans font-medium text-lg text-ink">contact@habetextile.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-earth-light shadow-sm text-olive">
                    <Clock size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[10px] uppercase tracking-widest text-olive/60 mb-1">Horaires</h4>
                    <p className="font-sans font-medium text-lg text-ink">Lundi - Samedi : 09h00 à 19h00</p>
                    <p className="font-sans text-olive/80">Dimanche : Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Bonjour Habé Textile, j'aimerais prendre un rendez-vous.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest hover:opacity-90 shadow-md transition-opacity"
            >
              <MessageCircle size={24} />
              Nous écrire sur WhatsApp
            </a>
          </motion.div>

          {/* Location Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full rounded-[40px] overflow-hidden bg-white shadow-xl shadow-earth-dark/10 border border-earth-light"
          >
            <div className="p-8 pb-6 border-b border-earth-light">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-serif font-bold text-ink-dark flex items-center gap-2">
                  <MapPin className="text-olive" />
                  Notre Atelier
                </h3>
                <p className="text-lg font-sans font-medium text-ink">Yoro korobougou, près du dibisoni da</p>
                <p className="font-sans text-olive/80">Bamako, Mali</p>
              </div>
              <div className="mt-6 p-6 bg-earth-light/30 rounded-[20px] border border-earth-light/50">
                <p className="font-sans text-sm text-olive/90 leading-relaxed">
                  <strong className="text-olive font-bold uppercase tracking-widest text-[10px] block mb-2">Indications d'accès :</strong>
                  L'atelier est situé juste à côté du marché principal (dibisoni da). Garez-vous près de l'entrée ouest, vous verrez notre enseigne en bois.
                </p>
              </div>
            </div>
            
            {/* Map Frame placeholder/mock (since we don't have an exact Google maps place id, 
            we will just embed a map of Bamako to look realistic, or use a styled placeholder map image) */}
            <div className="flex-grow min-h-[400px] w-full bg-earth/10 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124610.16544490895!2d-8.080534298135891!3d12.612056086663523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM2JzQzLjQiTiA4wrAwMCcxNi42Ilc!5e0!3m2!1sfr!2sml!4v1655000000000!5m2!1sfr!2sml"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-90"
              ></iframe>
            </div>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}
