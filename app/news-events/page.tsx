"use client";

import React from "react";
import {
  NewsEventsHero,
  FeaturedArticle,
  NewsGrid,
  EventsList,
  CtaSection,
} from "@/app/components";
import { NEWS_ARTICLES } from "@/app/constants/newsEvents";

export default function NewsEventsPage() {
  const featuredArticle =
    NEWS_ARTICLES.find((a) => a.featured) || NEWS_ARTICLES[0];
  const standardArticles = NEWS_ARTICLES.filter(
    (a) => a.id !== featuredArticle.id,
  );

  return (
    <main className="flex flex-col bg-white min-h-screen pt-20 sm:pt-24 md:pt-28">
      <NewsEventsHero
        badge="DIVISION BULLETIN & ANNOUNCEMENTS"
        title="LATEST NEWS & SCIENTIFIC EVENTS"
        subtitle="Discover our latest peer-reviewed publications, field campaign milestones, precision agriculture breakthroughs, and upcoming technical workshops."
      />

      {/* ── 2. Main Content Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 space-y-16 sm:space-y-20">
        {/* Featured Spotlight Article */}
        <section aria-label="Spotlight Feature">
          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-950 uppercase tracking-tight">
              Featured Research Spotlight
            </h2>
          </div>
          <FeaturedArticle article={featuredArticle} />
        </section>

        {/* Filterable Articles Grid */}
        <section aria-label="Announcements and Press Releases">
          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-950 uppercase tracking-tight">
              Recent Announcements &amp; Reports
            </h2>
          </div>
          <NewsGrid articles={NEWS_ARTICLES} />
        </section>

        {/* Upcoming Events & Workshops Timeline */}
        <section id="events" aria-label="Workshops and Events">
          <EventsList />
        </section>
      </div>

      {/* ── 3. Bottom CTA Section ── */}
      <CtaSection
        badge="MEDIA & INQUIRIES"
        title="NEED EXPERT SCIENTIFIC COMMENTARY OR WORKSHOP ACCESS?"
        buttonText="CONTACT PRESS OFFICE"
        href="/contact"
      />
    </main>
  );
}
