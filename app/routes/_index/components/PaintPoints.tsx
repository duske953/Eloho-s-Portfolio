/* eslint-disable react/no-unescaped-entities */
import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'motion/react';
import { DotBackground } from '~/components/ui/DotBackground';
import { cn } from '~/lib/utils';

export default function PainPoints() {
  return (
    <DotBackground>
      <section className="py-20 relative px-8 max-sm:px-3">
        <h2 className="secondary-heading text-center">
          Why Your Website Isn’t Working As Well As It Could
        </h2>

        <div className="max-w-3xl mx-auto px-4 py-8">
          <ul className="grid grid-cols-2 grid-rows-7 gap-y-20 max-sm:gap-y-10">
            <PainPointList
              point="Your website loads slowly or feels outdated, causing visitors to leave."
              className="-rotate-12"
            />
            <PainPointList
              point="It’s hard to use on phones or tablets, so you lose mobile customers."
              className="row-[-7] col-[2] rotate-12"
            />

            <PainPointList
              point="Updating content or fixing issues feels complicated and time-consuming."
              className="row-[3] rotate-12"
            />

            <PainPointList
              point="Visitors get confused and don’t take action because the site isn’t clear."
              className="row-[-5] col-[2] -rotate-12"
            />

            <PainPointList
              point="You worry about security risks and protecting your customer data."
              className="row-[-4] rotate-12"
            />

            <PainPointList
              point="There’s no reliable support when something breaks or needs changing."
              className="row-[-3] col-[2] -rotate-12"
            />
          </ul>
        </div>

        <div>
          <p className="secondary-heading relative z-10 text-center">
            Here's what i do and how I can{' '}
            <span className="text-blue-600">help</span> you
          </p>

          <FaArrowDown className="text-7xl absolute left-2/4 -translate-x-2/4 -bottom-0 web-services-intro max-sm:text-6xl max-sm:-bottom-24" />
        </div>
      </section>
    </DotBackground>
  );
}

function PainPointList({
  point,
  className,
}: {
  point: string;
  className?: string;
}) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -150px 0px' }}
      className={cn(
        className,
        'h-full max-sm:col-span-2 max-sm:rotate-0 border-blue-500 shadow-xl shadow-cyan-800 w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 border-2 p-4'
      )}
    >
      <p>{point}</p>
    </motion.li>
  );
}
