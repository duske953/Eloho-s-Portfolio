import { FaArrowRight } from 'react-icons/fa';
import Navbar from '~/components/Navbar';
import { Button } from '~/components/ui/button';
import { DotBackground } from '~/components/ui/DotBackground';
import { MovingBorderBox } from '~/components/ui/moving-border';
import { Spotlight } from '~/components/ui/Spotlight';
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

export default function Page() {
  return (
    <>
      <header className="px-11">
        <Navbar className="fixed left-0 right-0 top-0 w-full px-8 z-[100] backdrop-blur-3xl" />
      </header>

      <DotBackground>
        {/* <div className="relative overflow-x-hidden">
          <Spotlight />
        </div> */}
        <section className="pt-8 relative z-50 w-full px-8 overflow-x-hidden">
          <div className="grid grid-cols-2 items-center gap-7">
            <div>
              <span className="mb-4 text-xl flex items-center gap-2">
                <FaArrowRight /> Hello
              </span>
              <h1 className="text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-8">
                I&#39;m <span className="text-blue-600">Eloho</span> Kennedy
              </h1>
              <p className="leading-loose text-lg mb-4">
                A web developer who helps businesses create websites that are
                easy to use, fast, and built to solve real problems.
              </p>
              <MovingBorderBox>
                <Button variant="outline" size="lg" className="rounded-none">
                  Download CV
                </Button>
              </MovingBorderBox>
            </div>

            <div className="relative left-10 -top-7">
              <img
                className="size-[27rem] object-cover border-b-8 border-blue-600 rounded-full brightness-75"
                src="/profile.png"
                alt="Eloho Kennedy"
              />
            </div>
          </div>
        </section>
      </DotBackground>
      <div className="max-w-5xl mx-auto px-5 py-20">
        <Timeline data={timeline} />
      </div>

      <section className="mx-auto px-9 py-20">
        <h2 className="mb-24 text-5xl font-bold uppercase text-gray-300 text-center italic">
          How I Work
        </h2>
        <div className="grid grid-rows-5 grid-cols-2 gap-16">
          {workOperationData.map((data, i) => (
            <WorkOperation
              placement={data.placement}
              key={data.title}
              index={i + 1}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function WorkOperation({
  index,
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
    two: 'col-[2] row-[-5_/-4]',
    three: 'row-[3_/4]',
    four: 'col-[2] row-[-3_/-2]',
    five: 'row-[5/6]',
  };
  return (
    <div className={`flex gap-14 ${gridItems[placement]}`}>
      <p className="text-7xl font-bold text-gray-400">0{index}</p>

      <div className="flex flex-col gap-4">
        <p className="uppercase font-bold text-xl text-blue-600">{title}</p>
        <p className="leading-loose">{content}</p>
      </div>
    </div>
  );
}
