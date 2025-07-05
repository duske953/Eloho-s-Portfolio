import { motion, Variants } from 'motion/react';
import { useState } from 'react';
import { IoArrowDown } from 'react-icons/io5';
import { cn } from '~/lib/utils';

const faqsAnswers = [
  'Just send me a message through the contact form. I’ll reply within a day to discuss your goals and how we can move forward.',
  'It depends on the size and complexity of your website. A simple site might take a few days, while a larger one with more features could take a few weeks. Once I understand your needs, I’ll give you a clear timeline.',
  'There’s no one-size-fits-all price — it really comes down to how complex the site is. Once we talk through what you want, I’ll give you a clear and honest estimate.',
  "I'm not a designer, but I know how to make websites that look good. I pay attention to spacing, colors, and structure, and I take inspiration from well-designed sites to make sure yours is easy to use and pleasant to look at.",
  'I provide one week of free post-launch support to help you settle in. After that, ongoing help is available through a flexible maintenance plan.',
  'If your site was built with actual code, yes I can jump in and improve or add features. I don’t work with drag-and-drop platforms like Webflow or Wix.',
  'Nope. While I use tools like AI to speed things up, I don’t let them do the thinking for me. I write, debug, and understand every line. So when things break (and they do), I know how to fix them.',
];

export default function Faq() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
  };

  return (
    <section className="py-32 px-8 max-sm:px-3">
      <div className="max-w-3xl mx-auto">
        <div>
          <h2 className="secondary-heading text-center uppercase">
            Questions you may have
          </h2>
          <motion.ul
            className="flex flex-col gap-7"
            variants={container}
            initial="hidden"
            viewport={{ once: true, amount: 0.2, margin: '0px 0px -100px 0px' }}
            whileInView="show"
          >
            <FaqItem
              answer={faqsAnswers[0]}
              question="How do we get started?"
            />

            <FaqItem
              answer={faqsAnswers[1]}
              question="How long does it take to finish a website?"
            />

            <FaqItem
              answer={faqsAnswers[2]}
              question="How much does a website cost?"
            />

            <FaqItem answer={faqsAnswers[3]} question="Are you a designer?" />

            <FaqItem
              answer={faqsAnswers[4]}
              question="Do you offer ongoing support or help after the site is launched?"
            />

            <FaqItem
              answer={faqsAnswers[5]}
              question="Can you fix or improve my current website?"
            />

            <FaqItem answer={faqsAnswers[6]} question="Are you a vibe coder?" />
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [openFaq, setOpenFaq] = useState(false);

  const item: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, type: 'spring', mass: 1.5, damping: 10 },
    },
  };

  return (
    <motion.li
      variants={item}
      className="flex flex-col border-b border-gray-300 py-4 px-6 mb-4 cursor-pointer relative max-sm:pl-3"
    >
      <div className="relative">
        <p
          className={cn(
            'text-xl font-bold max-sm:text-sm',
            openFaq && 'text-blue-600'
          )}
        >
          {question}
        </p>

        <IoArrowDown
          className={cn(
            'text-3xl max-sm:-right-8 absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer transition-transform',
            openFaq ? 'rotate-180' : ''
          )}
          onClick={() => setOpenFaq((prev) => !prev)}
        />
      </div>

      <motion.div
        className="h-0 text-sm"
        initial={{ opacity: 0, y: -10, height: 0 }}
        animate={{
          opacity: openFaq ? 1 : 0,
          y: openFaq ? 0 : -10,
          height: openFaq ? 'auto' : 0,
          marginTop: openFaq ? '1rem' : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-lg leading-relaxed max-sm:text-sm max-sm:leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.li>
  );
}
