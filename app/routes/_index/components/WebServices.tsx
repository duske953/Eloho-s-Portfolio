'use client';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import { motion } from 'motion/react';
import ContactModal from '~/components/ContactModal';
import { cn } from '~/lib/utils';

export default function WebServices() {
  return (
    <section
      id="services"
      className="px-8 pt-14 pb-24 relative z-10 max-lg:px-3"
    >
      <div className="grid grid-cols-1 gap-16 max-lg:gap-24">
        <WebServicesContent
          service="frontend development"
          heading="Make your site professional"
          content="I build the parts of your website your visitors see and interact with, making sure it's clear, fast, 
          and works on every screen. So your business looks professional, earns trust, and turns visits into action."
          src="/landing-page.png"
          ctaClsName="self-end"
        />
        <WebServicesContent
          service="backend development"
          heading="Handle what happens in the background"
          content="I manage the behind-the-scenes work that keeps your website reliable and secure. This means your site runs smoothly, 
          stays protected from problems, and gives your customers a trustworthy experience every time."
          src="/backend.png"
          className="order-3 max-lg:-order-1"
          ctaClsName="self-start"
        />

        <WebServicesContent
          service="web maintenance"
          heading=" Fix Issues and Keep Things Running"
          content="Already have a website? I keep it running smoothly by fixing issues, 
          updating it regularly, and making small improvements so your site stays secure and up to date."
          src="/bug-fix.png"
          ctaClsName="self-end"
        />
      </div>
    </section>
  );
}

function WebServicesContent({
  src,
  heading,
  content,
  service,
  className,
  ctaClsName,
}: {
  src: string;
  service: string;
  className?: string;
  heading: string;
  content: string;
  ctaClsName?: string;
}) {
  return (
    <motion.div
      className="flex gap-16 items-center rounded-[2.5rem] bg-zinc-950/50 border border-white/5 p-10 max-lg:flex-col max-lg:gap-10 max-sm:p-6 group hover:border-blue-500/20 transition-all duration-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -100px 0px' }}
    >
      <div
        className={cn(
          'relative shrink-0 overflow-hidden rounded-3xl bg-zinc-900/50 p-4 border border-white/5 group-hover:border-blue-500/30 transition-colors',
          className,
        )}
      >
        <img
          src={src}
          alt={heading}
          className="size-[28rem] object-contain max-md:size-full scale-100 group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
          {service}
        </span>
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="text-4xl font-bold mb-6 text-white max-md:text-2xl leading-tight">
          {heading}
        </h3>
        <p className="text-xl max-md:text-base leading-relaxed text-neutral-400 mb-10">
          {content}
        </p>
        <div className={cn('mt-auto', ctaClsName)}>
          <ContactModal
            className="rounded-full bg-blue-600 hover:bg-blue-700 border-none px-8 py-6 h-auto text-base font-semibold group/btn"
            btnText={
              <div className="flex items-center gap-2">
                <span>Let's talk about your project</span>
                <ArrowRightIcon className="size-5 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            }
          />
        </div>
      </div>
    </motion.div>
  );
}
