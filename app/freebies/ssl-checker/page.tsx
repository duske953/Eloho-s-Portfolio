// 'use client';

import Navbar from '~/components/Navbar';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import UrlSearchBar from './components/UrlSearchBar';

export default function SSLChecker() {
  return (
    <>
      <Navbar className="" />
      <main className="section-container bg-[#0a0a0a] min-h-screen">
        <section className="pt-40 pb-24 relative w-full px-6 max-w-4xl mx-auto">
          <Link
            href="/freebies"
            className="inline-flex items-center text-sm text-gray-500 hover:text-white transition-colors mb-12 group"
          >
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Freebies
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Is your website <span className="text-blue-600">Secure?</span>
          </h1>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Enter your website address below to see if your security is up to
            date and how it affects your customers&#39; trust.
          </p>
          <UrlSearchBar />
        </section>
      </main>
    </>
  );
}
