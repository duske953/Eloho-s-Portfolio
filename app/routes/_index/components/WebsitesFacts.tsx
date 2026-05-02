import { motion, Variants } from 'motion/react';
import { ReactNode } from 'react';
import { FaCheck, FaCompass, FaEye, FaStar, FaStopwatch } from 'react-icons/fa';
import { RiCellphoneFill } from 'react-icons/ri';
import { Card, CardContent, CardHeader } from '~/components/ui/card';

export default function WebsitesFacts() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.09 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', mass: 1.5, damping: 10 },
    },
  };

  return (
    <section className="py-10 px-6 max-sm:px-3">
      <div>
        <h2 className="secondary-heading text-center">
          Why <span className="text-blue-600">Good Websites</span> Make a
          Difference.
        </h2>

        <motion.ul
          className="grid grid-cols-3 gap-x-4 gap-y-12 max-lg:grid-cols-2 max-md:grid-cols-1"
          variants={container}
          initial="hidden"
          viewport={{ once: true, amount: 0.2, margin: '0px 0px -100px 0px' }}
          whileInView="show"
        >
          <motion.li
            variants={item}
            className="relative col-span-2 max-lg:col-span-1"
          >
            <FactsCard
              headline="Slow sites lose half their visitors."
              desc="If your website takes longer than 3 seconds to load, over 50% of people leave early."
              source="— Google research"
            >
              <FaStopwatch />
            </FactsCard>
          </motion.li>

          <motion.li variants={item} className="relative">
            <FactsCard
              headline="First impressions form in 0.05 seconds."
              desc="People decide if they like your site in just 50 milliseconds."
              source="— Behaviour & Information Technology Journal"
            >
              <FaEye />
            </FactsCard>
          </motion.li>

          <motion.li variants={item} className="relative">
            <FactsCard
              headline="85% expect a mobile-friendly site."
              desc="Most users leave if your site doesn’t work well on their phone."
              source="— Think With Google"
            >
              <RiCellphoneFill />
            </FactsCard>
          </motion.li>
          <motion.li
            variants={item}
            className="relative col-span-2 max-lg:col-span-1"
          >
            <FactsCard
              headline="70% of small business websites lack basic security features."
              desc="Without proper security, you're putting your business and customer data at risk."
              source="— Security.org"
            >
              <FaCompass />
            </FactsCard>
          </motion.li>

          <motion.li
            variants={item}
            className="relative col-span-2 max-lg:col-span-1"
          >
            <FactsCard
              headline="75% trust clean, professional sites more."
              desc="A neat website builds credibility. A sketchy one hurts your reputation."
              source="— Stanford Web Credibility Research"
            >
              <FaCheck />
            </FactsCard>
          </motion.li>

          <motion.li variants={item} className="relative max-lg:col-span-1">
            <FactsCard
              headline="Pages with broken links lose 88% of visitors permanently."
              desc="Technical errors send customers straight to your competitors."
              source="— Sweor"
            >
              <FaStar />
            </FactsCard>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

function FactsCard({
  headline,
  desc,
  source,
  children,
}: {
  headline: string;
  desc: string;
  source: string;
  children: ReactNode;
}) {
  return (
    <Card className="flex flex-col p-8 cursor-pointer h-full bg-zinc-950/50 border-white/5 hover:border-blue-500/20 transition-all duration-300 group">
      <div className="size-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {children}
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-white font-bold text-xl leading-tight group-hover:text-blue-400 transition-colors">
          {headline}
        </p>
        <p className="text-neutral-400 leading-relaxed text-base">
          {desc}
        </p>
        <span className="text-xs font-medium uppercase tracking-widest text-neutral-600 mt-2">
          {source}
        </span>
      </div>
    </Card>
  );
}
