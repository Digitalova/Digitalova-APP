'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, Users, Database, AlertCircle, CheckCircle } from 'lucide-react';
import BackgroundBlobs from '@/components/BackgroundBlobs';

const RGPD = () => {
  return (
    <>
      {/* JSON-LD pour les données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://digitalova.be/rgpd#webpage',
            url: 'https://digitalova.be/rgpd',
            name: 'RGPD - Politique de Protection des Données | DIGITALOVA',
            description:
              'Politique RGPD de DIGITALOVA : données collectées, finalités, base légale, conservation, cookies, sécurité et droits des utilisateurs.',
            inLanguage: 'fr-BE',
            isPartOf: { '@id': 'https://digitalova.be/#website' },
            publisher: { '@id': 'https://digitalova.be/#organization' },
            about: { '@id': 'https://digitalova.be/#business' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            '@id': 'https://digitalova.be/rgpd#breadcrumbs',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://digitalova.be/' },
              { '@type': 'ListItem', position: 2, name: 'RGPD', item: 'https://digitalova.be/rgpd' },
            ],
          },
        ]) }}
      />

      {/* ✅ BG EXACT Portfolio */}
      <div className="pt-28 pb-24 min-h-screen relative overflow-hidden bg-[#070B16]">
        <BackgroundBlobs />

        <div className="absolute inset-0 pointer-events-none opacity-[0.7]">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.22]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-14 md:mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded-full backdrop-blur">
                <Shield className="w-12 h-12 text-purple-300" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 text-white tracking-tight">
              Politique{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                RGPD
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Votre vie privée est notre priorité. Découvrez comment nous protégeons vos données personnelles conformément au RGPD.
            </p>
          </div>

          <div className="space-y-8">
            {/* ✅ SECTION CARD (glass style comme Portfolio) */}
            <section className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-7 sm:p-9 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-7 h-7 text-purple-300" />
                <h2 className="text-3xl font-bold text-white">Introduction</h2>
              </div>
              <div className="space-y-4 text-slate-200/90 leading-relaxed">
                <p>
                  DIGITALOVA (n° d'entreprise BE 1028.668.667) s'engage à protéger et respecter votre vie privée. Cette politique décrit comment nous collectons, utilisons, stockons et protégeons vos données personnelles conformément au RGPD.
                </p>
                <p>
                  En utilisant notre site web ou nos services, vous acceptez les pratiques décrites dans cette politique de confidentialité.
                </p>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-7 sm:p-9 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-7 h-7 text-purple-300" />
                <h2 className="text-3xl font-bold text-white">Données Collectées</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Données d'identification
                  </h3>
                  <ul className="list-disc list-inside text-slate-200/90 space-y-2 ml-7">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Nom de l'entreprise (le cas échéant)</li>
                    <li>Numéro d'entreprise (si applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Données de navigation
                  </h3>
                  <ul className="list-disc list-inside text-slate-200/90 space-y-2 ml-7">
                    <li>Adresse IP</li>
                    <li>Type et version du navigateur</li>
                    <li>Système d'exploitation</li>
                    <li>Pages visitées et durée de visite</li>
                    <li>Données de référencement (source de visite)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Données de communication
                  </h3>
                  <ul className="list-disc list-inside text-slate-200/90 space-y-2 ml-7">
                    <li>Contenu des messages envoyés via le formulaire de contact</li>
                    <li>Correspondance par email</li>
                    <li>Historique des échanges commerciaux</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-7 sm:p-9 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-7 h-7 text-purple-300" />
                <h2 className="text-3xl font-bold text-white">Finalités du Traitement</h2>
              </div>

              <div className="space-y-4 text-slate-200/90 leading-relaxed">
                <p className="font-semibold text-white">Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>

                <div className="space-y-3 ml-4">
                  {[
                    ['Gestion des demandes de contact', "Répondre à vos questions et demandes d'informations via notre formulaire de contact."],
                    ['Gestion de la relation client', 'Assurer le suivi de nos prestations et projets en cours.'],
                    ['Amélioration de nos services', "Analyser l'utilisation de notre site pour améliorer l'expérience utilisateur."],
                    ['Communications marketing', 'Vous envoyer des informations sur nos services (uniquement avec votre consentement préalable).'],
                    ['Obligations légales', 'Respecter nos obligations comptables et fiscales.'],
                  ].map(([t, d]) => (
                    <div key={t} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <span className="font-semibold text-white">{t} :</span> {d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-7 sm:p-9 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-7 h-7 text-purple-300" />
                <h2 className="text-3xl font-bold text-white">Base Légale du Traitement</h2>
              </div>

              <div className="space-y-4 text-slate-200/90 leading-relaxed">
                <p>Conformément au RGPD, le traitement de vos données personnelles repose sur les bases légales suivantes :</p>

                <div className="space-y-3 ml-4">
                  {[
                    ['Consentement (Article 6.1.a)', "Pour l'envoi de communications marketing."],
                    ["Exécution d'un contrat (Article 6.1.b)", 'Pour la gestion de nos prestations de services.'],
                    ['Intérêt légitime (Article 6.1.f)', "Pour l'amélioration de nos services et la sécurité de notre site."],
                    ['Obligation légale (Article 6.1.c)', 'Pour le respect de nos obligations fiscales et comptables.'],
                  ].map(([t, d]) => (
                    <div key={t} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <span className="font-semibold text-white">{t} :</span> {d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-7 sm:p-9 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-7 h-7 text-purple-300" />
                <h2 className="text-3xl font-bold text-white">Destinataires des Données</h2>
              </div>

              <div className="space-y-4 text-slate-200/90 leading-relaxed">
                <p>Vos données personnelles sont strictement confidentielles et ne sont partagées qu'avec les destinataires suivants :</p>

                <div className="space-y-3 ml-4">
                  {[
                    ['Personnel autorisé de DIGITALOVA', 'Accès limité au strict nécessaire pour la gestion de votre demande.'],
                    ['Prestataires techniques', 'Hébergeur web (Hostinger), service de messagerie (sous-traitants conformes RGPD).'],
                    ['Autorités compétentes', 'Sur demande légale ou judiciaire uniquement.'],
                  ].map(([t, d]) => (
                    <div key={t} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <span className="font-semibold text-white">{t} :</span> {d}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 font-semibold text-white">
                  Vos données ne sont jamais vendues, louées ou échangées avec des tiers à des fins commerciales.
                </p>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-7 sm:p-9 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-7 h-7 text-purple-300" />
                <h2 className="text-3xl font-bold text-white">Durée de Conservation</h2>
              </div>

              <div className="space-y-4 text-slate-200/90 leading-relaxed">
                <p>Les données personnelles sont conservées pour les durées suivantes :</p>

                <div className="space-y-3 ml-4">
                  {[
                    ['Demandes de contact', '3 ans à compter du dernier contact.'],
                    ['Données clients', 'Pendant la durée de la relation contractuelle + 10 ans (obligations comptables).'],
                    ['Données de navigation', 'Maximum 13 mois.'],
                    ['Consentement marketing', '3 ans à compter du dernier contact ou retrait du consentement.'],
                  ].map(([t, d]) => (
                    <div key={t} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <span className="font-semibold text-white">{t} :</span> {d}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-4">
                  À l'expiration de ces délais, vos données sont supprimées de manière sécurisée ou anonymisées.
                </p>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-7 sm:p-9 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-7 h-7 text-purple-300" />
                <h2 className="text-3xl font-bold text-white">Vos Droits</h2>
              </div>

              <div className="space-y-4 text-slate-200/90 leading-relaxed">
                <p className="font-semibold text-white">Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :</p>

                <div className="space-y-4 ml-4">
                  {[
                    ["Droit d'accès (Article 15)", 'Obtenir une copie de vos données personnelles et des informations sur leur traitement.'],
                    ['Droit de rectification (Article 16)', 'Corriger ou compléter vos données inexactes ou incomplètes.'],
                    ["Droit à l'effacement (Article 17)", 'Demander la suppression de vos données dans certaines conditions.'],
                    ['Droit à la limitation (Article 18)', 'Limiter le traitement de vos données dans certaines situations.'],
                    ['Droit à la portabilité (Article 20)', 'Recevoir vos données dans un format structuré et les transférer à un autre responsable.'],
                    ["Droit d'opposition (Article 21)", 'Vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière.'],
                    ['Droit de retirer votre consentement', 'Retirer à tout moment votre consentement au traitement de vos données.'],
                  ].map(([t, d]) => (
                    <div key={t} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">{t} :</p>
                        <p>{d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="font-semibold text-white mb-2">Pour exercer vos droits :</p>
                  <p>
                    Contactez-nous à l'adresse :{' '}
                    <a
                      href="mailto:contact@digitalova.be"
                      className="text-purple-200 hover:text-purple-100 font-semibold"
                    >
                      contact@digitalova.be
                    </a>
                  </p>
                  <p className="text-sm mt-2 text-slate-300">
                    Nous nous engageons à répondre dans un délai maximum d'un mois suivant la réception de votre demande.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-7 sm:p-9 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-7 h-7 text-purple-300" />
                <h2 className="text-3xl font-bold text-white">Sécurité des Données</h2>
              </div>

              <div className="space-y-4 text-slate-200/90 leading-relaxed">
                <p>
                  DIGITALOVA met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles et les protéger contre tout accès non autorisé.
                </p>

                <p className="font-semibold text-white">Ces mesures incluent notamment :</p>
                <div className="space-y-3 ml-4">
                  {[
                    'Chiffrement SSL/TLS pour toutes les communications',
                    'Hébergement sécurisé chez un prestataire certifié',
                    'Accès aux données strictement limité et contrôlé',
                    'Sauvegardes régulières et sécurisées',
                    'Protection contre les cyberattaques (pare-feu, antivirus)',
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0" />
                      <p>{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-7 sm:p-9 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-7 h-7 text-purple-300" />
                <h2 className="text-3xl font-bold text-white">Cookies</h2>
              </div>

              <div className="space-y-4 text-slate-200/90 leading-relaxed">
                <p>
                  Notre site utilise des cookies strictement nécessaires au fonctionnement technique du site et à l'amélioration de votre expérience utilisateur.
                </p>

                <p className="font-semibold text-white">Types de cookies utilisés :</p>
                <div className="space-y-3 ml-4">
                  {[
                    ['Cookies techniques', 'Nécessaires au bon fonctionnement du site (navigation, sécurité).'],
                    ['Cookies analytiques', "Google Analytics pour mesurer l'audience et améliorer nos services (données anonymisées)."],
                  ].map(([t, d]) => (
                    <div key={t} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <span className="font-semibold text-white">{t} :</span> {d}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-4">
                  Vous pouvez à tout moment gérer vos préférences de cookies via le widget de consentement présent sur notre site ou configurer votre navigateur pour refuser les cookies.
                </p>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-7 sm:p-9 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-7 h-7 text-purple-300" />
                <h2 className="text-3xl font-bold text-white">Réclamation</h2>
              </div>

              <div className="space-y-4 text-slate-200/90 leading-relaxed">
                <p>
                  Si vous estimez que le traitement de vos données personnelles ne respecte pas le RGPD, vous avez le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente :
                </p>

                <div className="mt-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="font-semibold text-white">Autorité de Protection des Données (APD) - Belgique</p>
                  <p className="mt-2">Rue de la Presse, 35</p>
                  <p>1000 Bruxelles</p>
                  <p className="mt-2">
                    Email :{' '}
                    <a href="mailto:contact@apd-gba.be" className="text-purple-200 hover:text-purple-100">
                      contact@apd-gba.be
                    </a>
                  </p>
                  <p>
                    Site web :{' '}
                    <a
                      href="https://www.autoriteprotectiondonnees.be"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-200 hover:text-purple-100"
                    >
                      www.autoriteprotectiondonnees.be
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-7 sm:p-9 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-7 h-7 text-purple-300" />
                <h2 className="text-3xl font-bold text-white">Modifications de la Politique</h2>
              </div>

              <div className="space-y-4 text-slate-200/90 leading-relaxed">
                <p>
                  DIGITALOVA se réserve le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé de la manière dont nous protégeons vos données.
                </p>
              </div>
            </section>

            <div className="text-center mt-12 p-8 bg-white/5 rounded-[28px] border border-white/10">
              <p className="text-slate-300 mb-4">Pour toute question concernant cette politique RGPD :</p>
              <a
                href="mailto:contact@digitalova.be"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-extrabold hover:bg-slate-100 shadow-xl transition"
              >
                <Lock className="w-5 h-5" />
                Contactez-nous
              </a>
              <p className="text-sm text-slate-400 mt-6">Dernière mise à jour : 05 janvier 2026</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RGPD;
