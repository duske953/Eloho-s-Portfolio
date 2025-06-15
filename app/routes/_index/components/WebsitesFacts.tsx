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
        <h2 className="text-center text-gray-300 text-5xl font-bold mb-14 leading-normal max-sm:text-3xl">
          Why <span className="text-blue-600 italic">Good Websites</span> Make a
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
            className="relative col-span-2 py-3 max-lg:col-span-1"
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
              headline="94% judge your site by its look and feel."
              desc="Confusing design drives people away before they learn about your business."
              source="— Northumbria University study"
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
              headline="94% of first impressions are based on design"
              desc="Visitors leave if your site looks outdated or messy"
              source="— Behaviour & Information Technology Journal"
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
    <Card className="flex items-center py-4 cursor-pointer h-60 bg-transparent w-full">
      <CardHeader>
        <p className="text-4xl">{children}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p className="text-blue-400 font-bold text-xl text-start max-lg:text-lg">
          {headline}
        </p>
        <p className="text-blue-200 text-start leading-normal">{desc}</p>
        <span className="italic text-gray-500 text-start">{source}</span>
      </CardContent>
    </Card>
  );
}
