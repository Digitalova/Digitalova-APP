'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import { getArticleBySlug } from '../articles-data';
import { useIsMobile, getScrollAnimationProps } from '@/lib/useReducedMotion';

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-BE', { day: 'numeric', month: 'long', year: 'numeric' });
};

export default function ArticlePage({ params }) {
  const isMobile = useIsMobile();
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            url: `https://digitalova.be/blog/${article.slug}`,
            image: article.image,
            author: {
              '@type': 'Organization',
              name: 'Digitalova',
              url: 'https://digitalova.be',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Digitalova',
              url: 'https://digitalova.be',
              logo: {
                '@type': 'ImageObject',
                url: 'https://digitalova.be/logo.png',
              },
            },
          }),
        }}
      />

      <div className="min-h-screen bg-[#070B16] pt-32 pb-20 relative overflow-hidden">
        <BackgroundBlobs />

        <div className="absolute inset-0 pointer-events-none opacity-[0.7]">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.22]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
        </div>

        <article className="container mx-auto px-4 relative z-10 max-w-3xl">
          <motion.div
            {...getScrollAnimationProps(isMobile, {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              delay: 0,
            })}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 hover:border-white/25 transition-all duration-300"
              title="Retour au blog Digitalova"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Retour au blog</span>
            </Link>
          </motion.div>

          <motion.header
            {...getScrollAnimationProps(isMobile, {
              initial: { opacity: 0, y: 18 },
              animate: { opacity: 1, y: 0 },
              delay: 0,
            })}
            className="mb-10"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-medium text-sm mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </span>
              {article.readingTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {article.readingTime} de lecture
                </span>
              )}
            </div>
          </motion.header>

          <motion.div
            {...getScrollAnimationProps(isMobile, {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              delay: 0,
            })}
            className="rounded-2xl overflow-hidden border border-white/10 bg-black/20 mb-10"
          >
            <img
              src={article.image}
              alt={article.imageAlt || article.title}
              title={article.imageTitle || article.title}
              className="w-full aspect-video object-cover"
              width="1200"
              height="630"
            />
          </motion.div>

          <motion.div
            {...getScrollAnimationProps(isMobile, {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              delay: 0,
            })}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-slate-300 prose-p:leading-relaxed
              prose-ul:text-slate-300 prose-li:marker:text-purple-400
              prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
            "
            dangerouslySetInnerHTML={{ __html: article.content.trim() }}
          />
        </article>
      </div>
    </>
  );
}
