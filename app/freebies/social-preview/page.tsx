import Navbar from '~/components/Navbar';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import SocialPreview from './components/SocialPreview';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Preview | Test Your Website Links',
  description: 'See how your website looks when shared on Facebook, Twitter, LinkedIn and more. Optimize your social media presence.',
  openGraph: {
    url: 'https://eloho.dev/freebies/social-preview',
  },
  alternates: {
    canonical: 'https://eloho.dev/freebies/social-preview',
  },
};

export default function SocialPreviewPage() {
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

          <SocialPreview />
        </section>
      </main>
    </>
  );
}
