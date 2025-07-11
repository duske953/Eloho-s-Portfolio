import { Link, MetaFunction } from '@remix-run/react';
import { FaArrowRight } from 'react-icons/fa';
import ContactModal from '~/components/ContactModal';
import Cta from '~/components/Cta';
import Navbar from '~/components/Navbar';
import { buttonVariants } from '~/components/ui/button';
import { DotBackground } from '~/components/ui/DotBackground';
import { MovingBorderBox } from '~/components/ui/moving-border';
import { Timeline } from '~/components/ui/Timeline';
import { cn } from '~/lib/utils';

const timeline = [
  {
    title: 'Where It All Began',
    content:
      'I was studying Electrical/Electronics Engineering when school went on an unexpected break because of COVID. A senior of mine suggested I learn a useful skill during the break. After doing some research, I picked web development and it turned out to be the best decision I’ve ever made.',
  },
  {
    title: 'Learning the Basics',
    content:
      "Starting out was hard. There was a lot to take in, and things didn’t always make sense. But I kept going. I still remember how happy I was when I built my first 'todo app.' It felt like magic.",
  },
  {
    title: 'My First Real Project',
    content:
      'I created a movie app. At the time, it felt like a huge achievement. Looking back at the code today, it’s all over the place. Everything in one file, confusing variable names, no structure. But it worked, and it taught me a lot.',
  },
  {
    title: 'Trial and Error',
    content:
      'I kept building, failing, fixing, and learning. I watched a lot of tutorials, spent many sleepless nights trying to understand how things work, and slowly started to get better.',
  },
  {
    title: 'Building With Purpose',
    content:
      'By this time, I started building real projects that solve actual problems. I also improved how I organize my code and plan my work. Everything started to feel more clear and structured.',
  },
  {
    title: 'Graduated from University',
    content:
      'I completed my degree in Electrical/Electronics Engineering, and by then, I had already built strong experience in web development by working on serious projects.',
  },
  {
    title: 'Doing Work That Matters',
    content:
      'Now, I’m highly skilled in modern web development. I build advanced, real-world applications that meet today’s standards. I’ve launched my portfolio, started building in public, and I share my work and process online to connect with people and businesses who need what I do.',
  },
];

const workOperationData = [
  {
    title: 'We Talk First',
    content:
      'I ask simple questions to understand what you have in mind and what you want it to do. You don’t need to figure out everything we’ll work it out together.',
    placement: 'one',
  },

  {
    title: 'I Plan What Matters',
    content:
      'Based on our conversation, I figure out the best way to build it so it’s easy to use and does what you need.',
    placement: 'two',
  },

  {
    title: 'I Build It Step by Step',
    content:
      'I focus on the things that matter most — making sure it looks good, works well, and is easy for people to use.',
    placement: 'three',
  },

  {
    title: 'I Keep You Updated',
    content:
      'You’ll know what I’m working on at each step. I keep you in the loop and open to changes along the way.',
    placement: 'four',
  },

  {
    title: 'You Get Support After Launch',
    content:
      'I include one week of free support after launch. If you need help after that, we can agree on something that fits.',
    placement: 'five',
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
      title: 'About Eloho – Web Developer for Businesses',
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
      <span className="font-bold mb-1 text-blue-600 uppercase">{heading}</span>
      <span className="leading-8">{text}</span>
    </li>
  );
}

export default function Page() {
  return (
    <>
      <Navbar className="fixed left-0 right-0 top-0 w-full z-[100] bg-slate-900" />
      <main className="section-container">
        <DotBackground>
          <section className="pt-24 relative z-50 w-full px-8 overflow-x-hidden">
            <div className="grid grid-cols-2 items-center gap-7 max-lg:grid-cols-1">
              <div>
                <span className="mb-4 text-xl flex items-center gap-2">
                  <FaArrowRight /> Hello
                </span>
                <h1 className="primary-heading">
                  I&#39;m <span className="text-blue-600">Eloho</span> Kennedy
                </h1>
                <p className="leading-loose text-lg mb-4">
                  A web developer who helps businesses create websites that are
                  easy to use, fast, and built to solve real problems.
                </p>
                <MovingBorderBox className="rounded-none">
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    reloadDocument={true}
                    to="/Eloho Kennedy's resume.pdf"
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'lg',
                    })}
                  >
                    Download CV
                  </Link>
                </MovingBorderBox>
              </div>

              <div className="relative left-10 -top-7 max-lg:left-0 max-lg:top-0 max-lg:justify-self-center">
                <img
                  className="size-[27rem] object-cover border-b-8 border-blue-600 rounded-full brightness-50 max-lg:size-[33rem] max-sm:size-[20rem]"
                  src="/profile.png"
                  alt="Profile of Eloho Kennedy"
                />
              </div>
            </div>
          </section>
        </DotBackground>
        <div className="max-w-5xl mx-auto px-5 py-20">
          <Timeline data={timeline} />
        </div>

        <section className="mx-auto px-9 py-44 max-sm:px-3">
          <h2 className="secondary-heading text-center mb-4 uppercase">
            How I Work
          </h2>
          <ul className="grid grid-rows-5 grid-cols-2 gap-16 max-md:grid-cols-1">
            {workOperationData.map((data, i) => (
              <WorkOperation
                placement={data.placement}
                key={data.title}
                index={i + 1}
                title={data.title}
                content={data.content}
              />
            ))}
          </ul>
        </section>

        <section>
          <div className="max-w-3xl mx-auto px-8 max-sm:px-3 pb-32 flex flex-col gap-20">
            <div>
              <h2 className={cn('secondary-heading', 'mb-4')}>
                So… what makes me different?
              </h2>

              <p className="flex flex-col gap-6 leading-loose text-lg text-gray-300">
                <span>
                  I'm <span className="font-bold">Eloho</span>, the web
                  developer behind eloho.pro. I work with businesses who are
                  proud of what they do, but frustrated by how their websites
                  look or function. My job is simple: make your business easy to
                  find, trust, and contact online. Just websites that help
                  people walk through your door or call your number. I don’t
                  drop your business into a template, I build it around your
                  real goals. Where they confuse, I clarify. I build websites
                  that match your business down to the tools you need and the
                  language your customers understand.
                </span>
              </p>
            </div>
            <div>
              <h2 className="secondary-heading mb-4">
                Benefits of Working With Me
              </h2>

              <ul className="flex flex-col gap-8">
                {benefit.map((item) => (
                  <Benefit
                    key={item.heading}
                    heading={item.heading}
                    text={item.text}
                  />
                ))}
              </ul>
            </div>

            <div>
              <h2 className="secondary-heading mb-7">
                What You Get That Others Often Miss
              </h2>
              <ul className="flex flex-col gap-4 list-decimal">
                <li>
                  A trustworthy presence that looks good and loads fast on all
                  devices
                </li>
                <li>
                  A real person who understands small business realities, not
                  just campaigns or code
                </li>
                <li>
                  Support after launch. I don’t disappear once the invoice is
                  paid
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Cta
          heading="Let’s Build Something That Works"
          description="Whether you're starting fresh or need help with your current
              site, I build websites that are clear, simple, and do what
              they’re meant to do."
        >
          <ContactModal btnText="Let's Talk" />
        </Cta>
      </main>
    </>
  );
}

function WorkOperation({
  placement,
  title,
  content,
}: {
  index: number;
  placement: string;
  title: string;
  content: string;
}) {
  const gridItems = {
    two: 'col-[2] row-[-5_/-4] max-md:row-auto max-md:col-auto',
    three: 'row-[3_/4] max-md:row-auto',
    four: 'col-[2] row-[-3_/-2] max-md:row-auto max-md:col-auto',
    five: 'row-[5/6] max-md:row-auto',
  };
  return (
    <li
      className={`flex gap-14 ${gridItems[placement]} max-md:shadow-sm max-md:shadow-cyan-600 max-md:py-8 max-md:px-8 max-md:rounded-md`}
    >
      <div className="flex flex-col gap-4">
        <p className="uppercase font-bold text-lg text-blue-600">{title}</p>
        <p className="leading-loose">{content}</p>
      </div>
    </li>
  );
}
