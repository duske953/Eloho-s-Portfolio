'use client';

/* eslint-disable react/no-unescaped-entities */
import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'motion/react';
import { cn } from '~/lib/utils';
import { IoAlertCircleOutline } from 'react-icons/io5';

export default function PainPoints() {
  const points = [
    'Your website loads too slowly, causing visitors to leave before they even see your content.',
    'Your website is hard to use on phones or tablets, so you lose mobile customers.',
    'Updating content or fixing issues feels complicated and time-consuming.',
    'You worry about security risks and protecting your customer data.',
    'There’s no reliable support when something breaks or needs changing.',
  ];

  return (
    <section className="py-32 pb-10 relative px-8 max-sm:px-3 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="secondary-heading text-center mb-28">
          Why Your Website Isn’t <br className="max-sm:hidden" />
          <span className="text-blue-600">Working As Well</span> As It Could
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-24 max-md:grid-cols-1 max-md:gap-y-16">
          {points.map((point, i) => (
            <PainPointCard
              key={i}
              point={point}
              className={cn(
                i % 2 === 0 
                  ? "md:-rotate-[8deg] -rotate-2 md:mt-10" 
                  : "md:rotate-[8deg] md:translate-y-40 rotate-2"
              )}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-48 mb-10 text-center"
        >
          <p className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
            Does any of this <br className="max-sm:hidden" />
            <span className="text-blue-600">sound familiar?</span>
          </p>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
        </motion.div>

        <div className="mt-20 flex flex-col items-center gap-6">
          <p className="text-2xl font-bold text-center text-neutral-400">
            Here's what I do and how I can help{' '}
            <span className="text-blue-600 uppercase">you</span>
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaArrowDown className="text-4xl text-blue-600 web-services-intro" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PainPointCard({
  point,
  className,
}: {
  point: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'group flex flex-col gap-4 p-8 rounded-3xl bg-zinc-950/50 border border-white/5 hover:border-red-500/20 transition-all duration-300',
        className,
      )}
    >
      <IoAlertCircleOutline className="text-3xl text-red-500/50 group-hover:text-red-500 transition-colors" />
      <p className="text-xl leading-relaxed text-neutral-400 group-hover:text-neutral-200 transition-colors max-md:text-lg">
        {point}
      </p>
    </motion.div>
  );
}
