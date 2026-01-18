'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-slate-700 rounded-xl overflow-hidden bg-[#0F172A] hover:bg-slate-900 transition-colors duration-300 shadow-lg"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <h3 className="text-base font-semibold pr-4 text-slate-100">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>

      <div
        className={`px-6 text-slate-300 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        {answer}
      </div>
    </motion.div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      question: "Combien coûte la création d'un site web à Mons ?",
      answer:
        "Le prix varie selon la complexité ainsi que de vos besoins. Un site web vitrine démarre généralement vers 1200 €, tandis qu'un e-commerce ou une plateforme sur mesure se situe entre 2500 € et 10 000 €.",
    },
    {
      question: "Combien de temps faut-il pour créer un site web à Mons ?",
      answer:
        "Comptez 1 à 2 semaines pour un site vitrine classique, et 3 à 6 semaines pour un site e-commerce ou plus complexe.",
    },
    {
      question: "Pouvons-nous nous rencontrer si je suis de la région de Mons ?",
      answer:
        "Oui. Si vous êtes à Mons ou dans le Hainaut, un rendez-vous est possible. Sinon, tout peut se faire par visio ou téléphone.",
    },
    {
      question: "Mon site web sera-t-il bien référencé (SEO) ?",
      answer:
        "Oui. L’optimisation SEO est intégrée dès la conception : structure, vitesse, balisage sémantique.",
    },
    {
      question: "Proposez-vous de la maintenance après la mise en ligne ?",
      answer:
        "Oui. Des forfaits de maintenance mensuels ou des interventions à la demande sont disponibles.",
    },
    {
      question: "Quels types de sites web créez-vous chez Digitalova Mons ?",
      answer:
        "Sites vitrines, e-commerce, blogs et plateformes sur mesure, adaptés à votre image.",
    },
  ];

  const leftColumn = faqData.slice(0, 3);
  const rightColumn = faqData.slice(3, 6);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Décor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-300 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-pink-300 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase mb-4"
          >
            <HelpCircle size={14} />
            FAQ
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
          >
            Vos questions fréquentes
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="space-y-4">
            {leftColumn.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
          <div className="space-y-4">
            {rightColumn.map((faq, i) => (
              <FAQItem key={i + 3} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
