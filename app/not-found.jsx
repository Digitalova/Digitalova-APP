import Link from 'next/link';
import { ArrowLeft, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackgroundBlobs from '@/components/BackgroundBlobs';

export default function NotFound() {
  return (
    <>
      <head>
        <title>Page introuvable | DIGITALOVA</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="La page que vous recherchez n'existe pas ou a été déplacée." />
      </head>
      <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#070B16]">
      <BackgroundBlobs />
      
      {/* Décor supplémentaire */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.7]">
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.22]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* 404 Illustration */}
          <div className="relative mb-8">
            <div className="text-[180px] md:text-[240px] font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/80 backdrop-blur-sm shadow-2xl flex items-center justify-center border border-slate-200">
                <Search className="w-12 h-12 md:w-16 md:h-16 text-slate-400" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Oups ! Page introuvable
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              La page que vous recherchez semble avoir disparu dans le cyberespace. 
              Elle a peut-être été déplacée, supprimée, ou n&apos;a jamais existé.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" title="Retour à l'accueil - Digitalova">
                <Button className="h-14 px-8 rounded-full font-extrabold bg-white hover:bg-slate-100 text-slate-900 shadow-xl transition-transform hover:scale-[1.02]">
                  <Home className="mr-2 w-5 h-5" />
                  Retour à l&apos;accueil
                </Button>
              </Link>
              
              <Link href="/contact" title="Nous contacter - Digitalova">
                <Button
                  variant="outline"
                  className="h-14 px-8 rounded-full font-extrabold bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 transition-transform hover:scale-[1.02]"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>

          {/* Liens utiles */}
          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm mb-4">Ou explorez nos pages populaires :</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link 
                href="/services" 
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-medium hover:bg-white/10 transition-all"
                title="Nos services - Digitalova"
              >
                Services
              </Link>
              <Link 
                href="/portfolio" 
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-medium hover:bg-white/10 transition-all"
                title="Notre portfolio - Digitalova"
              >
                Portfolio
              </Link>
              <Link 
                href="/methode" 
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-medium hover:bg-white/10 transition-all"
                title="Notre méthode - Digitalova"
              >
                Méthode
              </Link>
              <Link 
                href="/nous-suivre" 
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-medium hover:bg-white/10 transition-all"
                title="Nous suivre - Digitalova"
              >
                Nous suivre
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
