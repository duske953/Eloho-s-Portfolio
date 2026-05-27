import Navbar from '~/components/Navbar';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import AnaylzeSite from './components/AnalyzeSite';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Analyzer | Free SEO & Technical Audit',
  description: 'Get a quick SEO and technical audit of your website to see what is holding you back from ranking higher.',
  openGraph: {
    url: '/freebies/site-analyzer',
  },
};

export default function SiteAnalyzer() {
  return (
    <>
      <Navbar className="" />
      <main className="section-container bg-[#0a0a0a] min-h-screen">
        <section className="pt-40 pb-6 relative w-full px-6 max-w-4xl mx-auto">
          <Link
            href="/freebies"
            className="inline-flex items-center text-sm text-gray-500 hover:text-white transition-colors mb-12 group"
          >
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Freebies
          </Link>

          <AnaylzeSite />
        </section>

        {/* <Cta
          heading="Found any issues?"
          description="These technical problems could be costing your clients and affecting your business. Let's fix them together."
        >
          <ContactModal
            btnText="Fix these issues for me"
            className="bg-blue-600 hover:bg-blue-700 rounded-full px-10 py-7 text-lg"
          />
        </Cta> */}
      </main>
    </>
  );
}
