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
      className="border border-slate-700 rounded-xl overflow-hidden bg-[#0F172A] shadow-lg transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-xl hover:border-purple-500/20"
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
      question: "Combien coûte la création d'un site internet à Mons ?",
      answer:
        "Le prix varie selon la complexité, la qualité du service ainsi que de vos besoins. Un site internet d'une seule page démarre généralement vers 1200 €, pour un site vitrine de 3 à 6 pages coutera entre 2500 € et 10 000 € tandis qu'un e-commerce ou une plateforme sur mesure se situe généralement entre 5000 € et 30 000 €.",
    },
    {
      question: "Combien de temps faut-il pour créer un site web avec Digitalova ?",
      answer:
        "Comptez 1 à 2 semaines pour un site vitrine classique, et 2 à 6 semaines pour un site e-commerce ou plus complexe. Chaque projet nécessite une étude préalable pour définir les besoins et les objectifs du client. En fonction de la complexité du projet, le délai peut être plus long pour garrantir une livraison qui correspond entièrement à vos besoins.",
    },
    {
      question: "Pouvons-nous nous rencontrer si je suis de la région de Mons ?",
      answer:
        "Oui. Si vous êtes à Mons ou en Wallonie, un rendez-vous est possible. Sinon, tout peut se faire à distance via un call ou un email pour optimiser le temps de délivrance du projet.",
    },
    {
      question: "Mon site web sera-t-il bien référencé (SEO) ?",
      answer:
        "Oui. L’optimisation SEO de base est intégrée dès la conception du site internet, même avec l'offre la plus basse que Digitalova propose : structure, vitesse, balisage sémantique.",
    },
    {
      question: "Proposez-vous de la maintenance après la mise en ligne ?",
      answer:
        "Oui. Des forfaits de maintenance mensuels ou des interventions à la demande sont disponibles. Vous avez le choix d'obtenir le code source de votre site internet pour le gérer vous-même ou de laisser Digitalova le gérer pour vous. Je garranti des modifications ou des ajouts de contenu sur votre site internet dans les 24h suivant votre demande pour des modifications mineures. Pour des modifications majeures, un devis sera établi, la modification pourra tout de même être effectuée dans les 24h en fonction votre demande et si les délais le permettent.",
    },
    {
      question: "Comment se déroule la collaboration avec l'agence Digitalova ?",
      answer:
        "Je suis une méthode rigoureuse : analyse de vos besoins, stratégie marketing, design, conception, et enfin mise en ligne. Nous vous accompagnons à chaque étape pour que le site internet devienne un véritable levier de chiffre d'affaires. C'est mon seul objectif !",
    },
    {
      question: "Où est située l'agence Digitalova en Belgique ?",
      answer:
        "Digitalova est une agence web qui est basée à Quiévrain dans le Hainaut et qui travaille avec des clients de la région de Mons. Je privilégie la proximité avec les entrepreneurs de la région pour offrir un accompagnement personnalisé et réactif. J'accompagne également des clients à distance dans toute la Belgique pour ceux qui ne sont pas dans la région de Mons mais qui souhaitent un site internet avec mes compétences et mon implication.(l'adresse correspond au siège social de l'agence et ne permet pas l'accueil du public.)",
    },
    {
      question: "Proposez-vous un programme de parrainage ou de partenariat ?",
      answer:
        "Oui, ma volonté est de récompenser l'apport d'affaires. Si vous recommandez l'agence Digitalova auprès d'une entreprise qui concrétise un projet de site internet avec moi, vous recevez une commission pour chaque contrat signé (17% pour les 2 premiers clients apportés). C'est ma manière de remercier ceux qui soutiennent la croissance de l'agence. Le programme est consultable sur la page partenaires de ce site.",
    },
  ];

  const half = Math.ceil(faqData.length / 2);
const leftColumn = faqData.slice(0, half);
const rightColumn = faqData.slice(half);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs font-bold uppercase mb-4"
          >
            <HelpCircle size={14} />
            FAQ
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
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
