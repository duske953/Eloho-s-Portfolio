import { motion } from 'motion/react';
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
          heading="Make your site easy to use"
          content="I build the parts of your website that people see and interact with.
              I make sure everything is easy to use and looks good on any screen."
          src="/landing-page.png"
        />
        <WebServicesContent
          service="backend development"
          heading="Handle what happens in the background"
          content="I also handle the behind-the-scenes work that keeps your website running smoothly and securely."
          src="/backend.png"
          className="order-3 max-lg:-order-1"
        />

        <WebServicesContent
          service="web maintenance"
          heading=" Fix Issues and Keep Things Running"
          content="Already have a site? I help with bugs, updates, and small changes
              so your site keeps doing what it’s meant to do."
          src="/bug-fix.png"
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
}: {
  src: string;
  service: string;
  className?: string;
  heading: string;
  content: string;
}) {
  return (
    <motion.div
      className="flex gap-12 items-center rounded-md max-lg:flex-col max-sm:gap-3 shadow-sm shadow-cyan-300 p-6 relative"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, mass: 0.5, damping: 10 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -200px 0px' }}
    >
      <span className="absolute top-2 right-1 bg-blue-600 p-2 rounded-full font-semibold px-3 text-xs uppercase">
        {service}
      </span>
      <img
        src={src}
        alt={heading}
        className={cn(
          'size-[35rem] rounded-full object-contain max-md:size-full',
          className
        )}
      />
      <div className="relative">
        <p className="text-4xl font-bold mb-5 text-blue-500 max-md:text-2xl max-md:leading-relaxed leading-relaxed">
          {heading}
        </p>
        <span className="text-2xl max-md:text-sm leading-relaxed text-gray-300">
          {content}
        </span>
      </div>
    </motion.div>
  );
}
