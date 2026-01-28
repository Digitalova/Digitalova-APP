'use client';

import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

/**
 * Bloc emplacement légal DIGITALOVA : adresse + lien vers la fiche Google (pas d'iframe pour éviter les blocages).
 */
const LEGAL_ADDRESS = {
  street: 'Place de la Gare 1',
  postalCode: '7380',
  locality: 'Quiévrain',
  country: 'Belgique',
  full: 'Place de la Gare 1, 7380 Quiévrain, Belgique',
  googleMapsFicheUrl: 'https://maps.app.goo.gl/B6X61NEAdCrzCvKe8',
};

const AgencyMap = ({ variant = 'contact', className = '' }) => {
  const isFooter = variant === 'footer';

  return (
    <div className={className}>
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 shadow-lg">
        <div className="p-3 md:p-4 border-b border-white/10 bg-white/5">
          <h3 className="font-bold text-white flex items-center gap-2">
            <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" aria-hidden />
            Emplacement légal – DIGITALOVA
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            {LEGAL_ADDRESS.street}, {LEGAL_ADDRESS.postalCode} {LEGAL_ADDRESS.locality}, {LEGAL_ADDRESS.country}
          </p>
          <a
            href={LEGAL_ADDRESS.googleMapsFicheUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-purple-300 hover:text-purple-200 underline mt-2 inline-block"
            title="Ouvrir la fiche établissement DIGITALOVA sur Google Maps"
          >
            Voir la fiche Google (carte, avis, horaires) →
          </a>
        </div>
        <a
          href={LEGAL_ADDRESS.googleMapsFicheUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full bg-slate-800/80 hover:bg-slate-700/80 transition-colors flex flex-col items-center justify-center gap-2 text-slate-300 hover:text-white border-t border-white/10 ${isFooter ? 'h-32 sm:h-36 py-4' : 'h-48 sm:h-56 md:h-64 py-6'}`}
          title="Ouvrir la carte et la fiche Google Maps"
        >
          <span className="rounded-full bg-white/10 p-3">
            <MapPin className="w-8 h-8 text-purple-400" aria-hidden />
          </span>
          <span className="text-sm font-medium flex items-center gap-1.5">
            Voir la carte sur Google Maps
            <ExternalLink className="w-4 h-4 opacity-80" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default AgencyMap;
export { LEGAL_ADDRESS };
