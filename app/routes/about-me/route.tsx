import { MetaFunction } from '@remix-run/react';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '~/components/Navbar';
import { Button } from '~/components/ui/button';
import { DotBackground } from '~/components/ui/DotBackground';
import { MovingBorderBox } from '~/components/ui/moving-border';
import { Timeline } from '~/components/ui/Timeline';

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

export const meta: MetaFunction = () => {
  return [
    {
      title:
        'About Me – Web Developer Helping Businesses create a web presence',
    },
    {
      name: 'description',
      content:
        "I'm a web developer with a background in engineering. I build clean, functional websites that help businesses get found and serve customers online.",
    },
    {
      name: 'keywords',
      content:
        'web developer, about me, business website developer, frontend and backend developer, build website for business, Nigeria web developer, full-stack developer',
    },
  ];
};

export default function Page() {
  return (
    <>
      <header className="px-11">
        <Navbar className="fixed left-0 right-0 top-0 w-full px-8 z-[100] bg-slate-900" />
      </header>
      <main className="section-container">
        <DotBackground>
          {/* <div className="relative overflow-x-hidden">
          <Spotlight />
        </div> */}
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
                  <Button variant="outline" size="lg" className="rounded-none">
                    Download CV
                  </Button>
                </MovingBorderBox>
              </div>

              <div className="relative left-10 -top-7 max-lg:left-0 max-lg:top-0 max-lg:justify-self-center">
                <img
                  className="size-[27rem] object-cover border-b-8 border-blue-600 rounded-full brightness-75 max-lg:size-[33rem] max-sm:size-[20rem]"
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
          <div className="max-w-3xl mx-auto px-8 max-sm:px-3 pb-32">
            <h2 className="secondary-heading">
              So… who am I outside of websites and code?
            </h2>

            <p className="flex flex-col gap-6 leading-loose text-lg text-gray-300">
              <span>
                You’ve probably read all the serious stuff — &quot;web developer
                this, full-stack that. Cool. But let’s hit pause for a second.
                Outside of work, I’m just a regular person with very real
                obsessions. First up, wildlife documentaries. I don’t know how
                best to put this, but I can watch monkeys jumping from tree to
                tree for hours. Literally hours. Sometimes I wonder if I missed
                my calling as a forest ranger. There’s just something fun about
                watching animals live their lives and the mysteries that
                surrounds them. And the narrators? Always calm. Always British.
                It’s top-tier relaxation.
              </span>

              <span>
                When I’m not wondering if I missed my calling as a forest
                ranger, I’m probably watching a movie. Horror is my thing. I’ve
                watched enough horror films to know that if you hear a strange
                noise in the basement, don’t go check. But they always check.
                Every time. And don’t get me started on exorcism scenes —
                &quot;I command you, demon, tell me your name!&quot; chills.
                Romance movies though? Nah. I try… but halfway through I’m
                already checking my phone. I respect the lovebirds, but my brain
                wants ghosts, not candlelit dinners.
              </span>

              <span>
                As for music? I&#39;m not on the trendy side. No offense to
                today’s hits, but I’ll take Don Williams over auto-tune any day.
                Slow, calming, and just good for the soul. Play some old reggae
                or country and I’m set. That kind of music doesn’t yell it just
                speaks. As for anime… let&#39;s just say that&#39;s a whole
                other rabbit hole we can talk about later.
              </span>

              <span>
                So yeah, outside of code, I’m either watching animals live
                better lives than me, screaming at horror movie characters who
                make bad choices, or vibing to songs older than I am. Nothing
                fancy. Just a normal person doing normal stuff, and trying not
                to take life too seriously.
              </span>
            </p>
          </div>
        </section>
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
