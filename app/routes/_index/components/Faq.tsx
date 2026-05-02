import { motion, Variants } from 'motion/react';
import { useState } from 'react';
import { IoArrowDown } from 'react-icons/io5';
import { cn } from '~/lib/utils';

const faqsAnswers = [
  'Just send me a message through the contact form. I’ll reply within a day to discuss your goals and how we can move forward.',
  "No, copywriting isn't part of my service. I build the website based on the content you provide. If you need help with writing, I can point you toward copywriters.",
  "I'm not a designer, but I can implement clean, professional layouts using modern design patterns. If you have branding guidelines or design preferences, I'll code them properly. If not, I'll build something functional and professional based on proven UI patterns.",
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
            className="flex flex-col gap-3"
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
              question="Do you write website copy?"
            />

            <FaqItem
              answer={faqsAnswers[2]}
              question="Are you a web designer?"
            />

            <FaqItem
              answer={faqsAnswers[3]}
              question="Do you offer ongoing support or help after the site is launched?"
            />

            <FaqItem
              answer={faqsAnswers[4]}
              question="Can you fix or improve my current website?"
            />

            <FaqItem answer={faqsAnswers[5]} question="Are you a vibe coder?" />
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [openFaq, setOpenFaq] = useState(false);

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.li
      variants={item}
      onClick={() => setOpenFaq((prev) => !prev)}
      className={cn(
        'group flex flex-col border border-white/5 rounded-2xl p-6 mb-2 cursor-pointer transition-all duration-300',
        openFaq
          ? 'bg-zinc-900/50 border-white/10'
          : 'bg-transparent hover:bg-zinc-900/30',
      )}
    >
      <div className="flex justify-between items-center gap-4">
        <p
          className={cn(
            'text-lg font-semibold max-sm:text-sm transition-colors',
            openFaq
              ? 'text-white'
              : 'text-neutral-400 group-hover:text-neutral-200',
          )}
        >
          {question}
        </p>

        <div
          className={cn(
            'flex items-center justify-center size-8 rounded-full border border-white/10 shrink-0 transition-all duration-300',
            openFaq
              ? 'bg-blue-600 border-blue-600 rotate-180'
              : 'bg-transparent',
          )}
        >
          <IoArrowDown
            className={cn(
              'text-lg transition-colors',
              openFaq ? 'text-white' : 'text-neutral-500',
            )}
          />
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: openFaq ? 'auto' : 0,
          opacity: openFaq ? 1 : 0,
          marginTop: openFaq ? 16 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <p className="text-base text-neutral-400 leading-relaxed max-sm:text-xs">
          {answer}
        </p>
      </motion.div>
    </motion.li>
  );
}
