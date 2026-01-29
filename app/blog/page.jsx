'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import { articles } from './articles-data';
import { useIsMobile, getScrollAnimationProps } from '@/lib/useReducedMotion';

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-BE', { day: 'numeric', month: 'long', year: 'numeric' });
};

const BlogContent = () => {
  const [query, setQuery] = useState('');
  const isMobile = useIsMobile();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        (a.category && a.category.toLowerCase().includes(q))
    );
  }, [query]);

  const getCardAnimationProps = (index) => {
    if (isMobile) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: index * 0.05 },
      };
    }
    return {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    };
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            '@id': 'https://digitalova.be/blog#blog',
            name: 'Blog DIGITALOVA - Articles Web & conseils digitales  à Mons',
            description:
              'Articles et conseils web et marketing digital par DIGITALOVA à Mons. Astuces référencement local et visibilité en Belgique.',
            url: 'https://digitalova.be/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Digitalova',
              url: 'https://digitalova.be',
            },
            blogPost: articles.map((a) => ({
              '@type': 'BlogPosting',
              headline: a.title,
              description: a.excerpt,
              datePublished: a.date,
              url: `https://digitalova.be/blog/${a.slug}`,
            })),
          }),
        }}
      />

      <div className="pt-32 pb-20 min-h-screen relative overflow-hidden bg-[#070B16]">
        <BackgroundBlobs />

        <div className="absolute inset-0 pointer-events-none opacity-[0.7]">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.22]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            {...getScrollAnimationProps(isMobile, {
              initial: { opacity: 0, y: 18 },
              animate: { opacity: 1, y: 0 },
              delay: 0,
            })}
            className="text-center mb-14"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">DIGITALOVA</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Articles et conseils SEO, web et marketing digital pour booster votre visibilité locale à Mons et en Belgique.
            </p>
          </motion.div>

          {articles.length > 3 && (
            <motion.div
              {...getScrollAnimationProps(isMobile, {
                initial: { opacity: 0, y: 14 },
                animate: { opacity: 1, y: 0 },
                delay: 0,
              })}
              className="max-w-2xl mx-auto mb-12"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="search"
                  placeholder="Rechercher un article..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  aria-label="Rechercher un article"
                />
              </div>
            </motion.div>
          )}

          <div className="max-w-4xl mx-auto space-y-8">
            {filtered.length === 0 ? (
              <p className="text-slate-400 text-center py-12">Aucun article ne correspond à votre recherche.</p>
            ) : (
              filtered.map((article, index) => (
                <motion.article
                  key={article.slug}
                  {...getCardAnimationProps(index)}
                >
                  <Link
                    href={`/blog/${article.slug}`}
                    title={`Lire l'article : ${article.title}`}
                    className="block group rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-64 flex-shrink-0">
                        <div className="aspect-video md:aspect-square bg-black/20">
                          <img
                            src={article.image}
                            alt={article.imageAlt || article.title}
                            title={article.imageTitle || article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading={index < 2 ? 'eager' : 'lazy'}
                            width="400"
                            height="250"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-2">
                          <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-medium">
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(article.date)}
                          </span>
                          {article.readingTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {article.readingTime}
                            </span>
                          )}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                        <span className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
                          Lire l&apos;article <ArrowRight className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
