'use client';

import { motion } from 'motion/react';
import Navbar from '~/components/Navbar';
import Cta from '~/components/Cta';
import ContactModal from '~/components/ContactModal';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, MailSearch, Search, Share2 } from 'lucide-react';

const freebies = [
  {
    title: 'SSL & Security Checker',
    description:
      "Quickly analyze your website's SSL certificate, TLS version, and security headers to ensure your visitors are safe.",
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    link: '/freebies/ssl-checker',
    tag: 'Popular',
  },
  {
    title: 'Site Analyzer',
    description:
      'Get a quick SEO and technical audit of your website to see what is holding you back from ranking higher.',
    icon: <Search className="w-10 h-10 text-blue-500" />,
    link: '/freebies/site-analyzer',
    tag: 'New',
  },
  {
    title: 'Social Media Preview',
    description:
      'See how your website looks when shared on Facebook, Twitter, LinkedIn and more. Optimize your social media presence.',
    icon: <Share2 className="w-10 h-10 text-blue-500" />,
    link: '/freebies/social-preview',
    tag: 'New',
  },
];

export default function FreebiesPage() {
  return (
    <>
      <Navbar className="" />
      <main className="section-container bg-[#0a0a0a] min-h-screen">
        <section className="pt-40 pb-24 relative w-full px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
              Useful <span className="text-blue-600">Freebies</span> for your
              Business.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Tools and resources to help you understand your online presence
              better.
            </p>
          </motion.div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freebies.map((freebie, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (i + 1), duration: 0.8 }}
              >
                <Card className="bg-[#0d0d0d] border-white/5 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col group">
                  <CardHeader>
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {freebie.icon}
                    </div>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl font-bold text-white tracking-tight">
                        {freebie.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-400 text-base mt-2">
                      {freebie.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-6">
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full group/btn"
                    >
                      <Link
                        href={freebie.link}
                        className="flex items-center justify-center gap-2"
                      >
                        Try it now
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.li>
            ))}
          </ul>
        </section>

        <Cta
          heading="Need something more custom?"
          description="If these tools aren't enough, let's talk about building a bespoke solution for your business."
        >
          <ContactModal
            btnText="Get in Touch"
            className="bg-blue-600 hover:bg-blue-700 rounded-full px-10 py-7 text-lg"
          />
        </Cta>
      </main>
    </>
  );
}
