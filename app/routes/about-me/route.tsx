import { Link, MetaFunction } from '@remix-run/react';
import { FaDownload } from 'react-icons/fa';
import ContactModal from '~/components/ContactModal';
import Cta from '~/components/Cta';
import Navbar from '~/components/Navbar';
import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { motion } from 'motion/react';

const workOperationData = [
  {
    title: 'We Talk First',
    content:
      'We talk via WhatsApp or email and I ask a few simple questions about your business and what you need. It’s a relaxed conversation where we figure things out together.',
  },
  {
    title: 'I Show You the Plan',
    content:
      'Before anything is built, I put together a rough design so you can see the direction. You give feedback and nothing moves forward until you are happy with it.',
  },
  {
    title: 'I Build and Show You as I Go',
    content:
      'I send screenshots and previews as I build so you always know what is happening. If something needs adjusting we catch it early.',
  },
  {
    title: 'You Launch With Confidence',
    content:
      'Once everything is tested and approved we go live. You get one week of free support after launch so you are never left hanging.',
  },
];

const benefit = [
  {
    heading: 'Clear Communication, No Surprises',
    text: 'I don’t hand you off to account managers. You speak directly with the person building your site. You always know what’s happening and why.',
  },

  {
    heading: 'Websites Built for Your Type of Business',
    text: 'I don’t guess. I take time to understand your work so your site reflects your reality, not a generic template.',
  },

  {
    heading: 'No Lock-Ins, Just Real Results',
    text: 'Unlike others who trap you with vague deliverables or hidden fees, I offer clear packages, flat pricing, and real outcomes like Google visibility, contact form protection, and mobile-first performance.',
  },

  {
    heading: 'No Buzzwords. Just Work That Works.',
    text: 'I won’t sell you on page speed scores or vanity metrics that don’t match your industry. I focus on what helps people find and trust you.',
  },
];

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Eloho Kennedy',
    },
    {
      name: 'description',
      content:
        'Learn how Eloho helps businesses build modern, trustworthy websites that attract more customers and grow online visibility—without tech overwhelm.',
    },
    {
      name: 'keywords',
      content:
        'web developer, web developer for small businesses, professional business website, about me, business website developer, frontend and backend developer, build website for business, Nigeria web developer, full-stack developer',
    },
  ];
};

function Benefit({ heading, text }: { heading: string; text: string }) {
  return (
    <li className="flex flex-col gap-2">
      <span className="font-bold mb-1 text-blue-600 uppercase tracking-wide text-sm">
        {heading}
      </span>
      <span className="leading-relaxed text-gray-400">{text}</span>
    </li>
  );
}

export default function Page() {
  return (
    <>
      <Navbar className="fixed left-0 right-0 top-0 w-full z-[100] bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5" />
      <main className="section-container bg-[#0a0a0a] min-h-screen">
        <section className="pt-40 pb-24 relative z-50 w-full px-6 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-7"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-blue-500/20 rounded-full bg-blue-500/5"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Available for new opportunities
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
                I&#39;m <span className="text-blue-600">Eloho</span> Kennedy.{' '}
                <br />
              </h1>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-12">
                I build websites that help small businesses look professional,
                get found online, and actually convert visitors into customers.
              </p>

              <div className="flex flex-wrap gap-5">
                <ContactModal
                  btnText="Let's build together"
                  className="rounded-full px-8 py-6 text-base bg-blue-600 hover:bg-blue-700 text-white border-none transition-all duration-300 font-semibold"
                />
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  reloadDocument={true}
                  to="/Eloho Kennedy's resume.pdf"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-full px-8 py-6 text-base border-white/10 hover:bg-white/5 text-white transition-all duration-300 gap-2 font-semibold',
                  )}
                >
                  <FaDownload className="text-sm" /> Download CV
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
              className="lg:col-span-5 relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] blur-3xl group-hover:bg-blue-600/10 transition duration-1000"></div>
                <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <img
                    className="size-[31rem] object-cover transition duration-1000 group-hover:scale-110 group-hover:rotate-2"
                    src="/Eloho's profile.png"
                    alt="Eloho Kennedy"
                  />
                </div>
                {/* Minimalist Tech Badges */}
                <div className="absolute -bottom-6 -right-6 p-6 bg-[#111] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl max-sm:hidden">
                  <div className="flex gap-4 items-center">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-[#111] bg-blue-600 flex items-center justify-center text-[10px] font-black text-white">
                        JS
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-[#111] bg-slate-800 flex items-center justify-center text-[10px] font-black text-white">
                        TS
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-[#111] bg-slate-700 flex items-center justify-center text-[10px] font-black text-white">
                        RE
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 font-bold tracking-widest uppercase">
                      Modern Tech Stack
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 border-y border-white/5 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
            >
              <div className="flex flex-col gap-2">
                <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">
                  10+
                </span>
                <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs">
                  Projects Completed
                </span>
                <p className="text-gray-500 text-sm mt-2 max-w-[200px] mx-auto">
                  From concept to launch, delivered with precision.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">
                  4YRS
                </span>
                <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs">
                  Experience
                </span>
                <p className="text-gray-500 text-sm mt-2 max-w-[200px] mx-auto">
                  Deeply rooted in modern web standards.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">
                  06
                </span>
                <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs">
                  Clients Served
                </span>
                <p className="text-gray-500 text-sm mt-2 max-w-[200px] mx-auto">
                  Trusted by businesses to build their online presence.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-32 max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-10">
              My Story
            </h2>
            <div className="text-2xl md:text-3xl text-white leading-[1.6] font-medium tracking-tight space-y-12">
              <p>
                I went self-taught in 2020, just curious and wanting to learn
                something new. Over time, I started noticing a pattern with
                small businesses:
                <span className="text-blue-500"> no website, a broken one</span>
                , or one that loads so slow customers leave before the page
                opens. That's when I decided this was the problem worth solving.
              </p>
              <p className="text-white/60">
                This doesn't mean I'm the cheap option. It means I cut out
                everything that slows agencies down, the account managers, the
                back and forth, the ticket queues, and give you a{' '}
                <span className="text-white">direct line</span> to the person
                actually building your product.
              </p>
              <p>
                The work speaks for itself. I've delivered over 10+ projects for
                small business owners who needed quality without the agency
                price tag. If you've been putting off getting a proper website
                because it felt too complicated or too expensive,
                <span className="text-blue-500">
                  {' '}
                  THIS IS WHERE THAT CHANGES.
                </span>
              </p>
            </div>
          </motion.div>
        </section>

        <section className="py-44 max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-32 tracking-tight text-center uppercase">
            My <span className="text-blue-600">Process</span>
          </h2>

          <div className="space-y-32">
            {workOperationData.map((data, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-8 md:gap-20 items-start group"
              >
                <div className="text-7xl md:text-9xl font-black text-white/5 tabular-nums leading-none transition-colors duration-500 group-hover:text-blue-600/10">
                  0{i + 1}
                </div>
                <div className="max-w-2xl pt-4">
                  <h3 className="text-xl font-bold text-blue-600 mb-6 uppercase tracking-[0.3em]">
                    {data.title}
                  </h3>
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">
                    {data.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Cta
          heading="Get a website that's fast, secure, and built to last"
          description="Tell me what you need, and I'll build it right - fast, secure, and reliable."
        >
          <ContactModal
            btnText="Let's Talk"
            className="bg-blue-600 hover:bg-blue-700 rounded-full px-10 py-7 text-lg"
          />
        </Cta>
      </main>
    </>
  );
}
