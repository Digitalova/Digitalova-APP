// Legal.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Building2, Mail, Phone, MapPin, Server } from 'lucide-react';
import BackgroundBlobs from '@/components/BackgroundBlobs';

const Legal = () => {
  return (
    <>
      <Helmet>
        <html lang="fr-BE" />

        <title>Mentions Légales - Informations Juridiques | DIGITALOVA</title>
        <meta
          name="description"
          content="Consultez les mentions légales et informations juridiques de DIGITALOVA, votre freelance en création de sites web en Belgique."
        />

        <link rel="canonical" href="https://digitalova.be/mentions-legales" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="author" content="Digitalova - Agence Web Mons" />
        <meta name="publisher" content="Digitalova" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_BE" />
        <meta property="og:site_name" content="DIGITALOVA" />
        <meta property="og:url" content="https://digitalova.be/mentions-legales" />
        <meta property="og:title" content="Mentions Légales - Informations Juridiques | DIGITALOVA" />
        <meta
          property="og:description"
          content="Consultez les mentions légales, coordonnées, hébergement, propriété intellectuelle et protection des données (RGPD) de DIGITALOVA."
        />
        <meta
          property="og:image"
          content="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mentions Légales - Informations Juridiques | DIGITALOVA" />
        <meta
          name="twitter:description"
          content="Mentions légales et informations juridiques de DIGITALOVA : coordonnées, hébergeur, RGPD, cookies."
        />
        <meta
          name="twitter:image"
          content="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg"
        />

        <script type="application/ld+json">
          {JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': 'https://digitalova.be/mentions-legales#webpage',
              url: 'https://digitalova.be/mentions-legales',
              name: 'Mentions Légales - Informations Juridiques | DIGITALOVA',
              description:
                'Mentions légales de DIGITALOVA : coordonnées, hébergement, propriété intellectuelle, RGPD, cookies et droit applicable.',
              inLanguage: 'fr-BE',
              isPartOf: { '@id': 'https://digitalova.be/#website' },
              publisher: { '@id': 'https://digitalova.be/#organization' },
              about: { '@id': 'https://digitalova.be/#business' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              '@id': 'https://digitalova.be/mentions-legales#breadcrumbs',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://digitalova.be/' },
                { '@type': 'ListItem', position: 2, name: 'Mentions légales', item: 'https://digitalova.be/mentions-legales' },
              ],
            },
          ])}
        </script>
      </Helmet>

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

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-14 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 text-white tracking-tight">
              Mentions{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                Légales
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Informations légales et coordonnées de l'entreprise
            </p>
          </div>

          {/* ✅ Glass card style comme Portfolio */}
          <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-7 sm:p-9 md:p-12 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-purple-300" />
                <h2 className="text-2xl font-bold text-white">Informations sur l'Entreprise</h2>
              </div>
              <div className="space-y-3 text-slate-200/90 pl-9">
                <p>
                  <span className="font-semibold text-white">Nom de l'entité :</span> DIGITALOVA
                </p>
                <p>
                  <span className="font-semibold text-white">Statut juridique :</span> Indépendant en personne physique
                </p>
                <p>
                  <span className="font-semibold text-white">Numéro d'entreprise :</span> 1028.668.667
                </p>
                <p>
                  <span className="font-semibold text-white">N° TVA :</span> BE 1028.668.667
                </p>
              </div>
            </section>

            <div className="border-t border-white/10" />

            <section>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-purple-300" />
                <h2 className="text-2xl font-bold text-white">Coordonnées</h2>
              </div>
              <div className="space-y-3 text-slate-200/90 pl-9">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-300" />
                  <p>contact@digitalova.be</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-300" />
                  <p>+32 471 58 67 08</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-300" />
                  <p>Mons, Hainaut, Belgique</p>
                </div>
              </div>
            </section>

            <div className="border-t border-white/10" />

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-purple-300" />
                <h2 className="text-2xl font-bold text-white">Hébergement</h2>
              </div>
              <div className="space-y-3 text-slate-200/90 pl-9">
                <p>
                  <span className="font-semibold text-white">Hébergeur :</span> HOSTINGER INTERNATIONAL LTD
                </p>
                <p>
                  <span className="font-semibold text-white">Adresse :</span> Larnaca, Chypre (61 Lordou Vironos Street, 6023)
                </p>
                <p>
                  <span className="font-semibold text-white">Site web :</span> https://www.hostinger.com/
                </p>
              </div>
            </section>

            <div className="border-t border-white/10" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Propriété Intellectuelle</h2>
              <div className="space-y-4 text-slate-200/90">
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de DIGITALOVA, sauf mention contraire.
                </p>
                <p>
                  Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord écrit de DIGITALOVA.
                </p>
              </div>
            </section>

            <div className="border-t border-white/10" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Protection des Données Personnelles</h2>
              <div className="space-y-4 text-slate-200/90">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p>Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@digitalova.be</p>
                <p>
                  Les données collectées via le formulaire de contact sont utilisées uniquement dans le cadre de la relation commerciale et ne sont jamais transmises à des tiers.
                </p>
              </div>
            </section>

            <div className="border-t border-white/10" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Cookies</h2>
              <div className="space-y-4 text-slate-200/90">
                <p>Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking ou publicitaire n'est utilisé.</p>
                <p>Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.</p>
              </div>
            </section>

            <div className="border-t border-white/10" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Limitation de Responsabilité</h2>
              <div className="space-y-4 text-slate-200/90">
                <p>
                  DIGITALOVA s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, DIGITALOVA ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
                </p>
                <p>DIGITALOVA ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation de ce site.</p>
              </div>
            </section>

            <div className="border-t border-white/10" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Droit Applicable</h2>
              <div className="space-y-4 text-slate-200/90">
                <p>Les présentes mentions légales sont régies par le droit belge. En cas de litige, les tribunaux belges seront seuls compétents.</p>
              </div>
            </section>

            <div className="mt-8 pt-8 border-t border-white/10 text-center text-slate-300 text-sm">
              <p>Dernière mise à jour : 05 janvier 2026</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Legal;
