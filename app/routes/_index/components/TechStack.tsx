import {
  RiNextjsLine,
  RiRemixRunLine,
  RiTailwindCssLine,
} from 'react-icons/ri';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip';
import { SiExpress, SiSass, SiSocketdotio, SiTypescript } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { animated, useInView, useTrail } from '@react-spring/web';
import { MdCss, MdHtml, MdJavascript } from 'react-icons/md';
import { FaNode, FaReact } from 'react-icons/fa';
import { useEffect } from 'react';
import AnimateHeading from '~/components/AnimateHeading';
const technologies = [
  {
    tech: <MdHtml />,
    content: 'HTML',
  },
  {
    tech: <MdCss />,
    content: 'CSS',
  },
  {
    tech: <MdJavascript />,
    content: 'JAVASCRIPT',
  },

  {
    tech: <SiTypescript />,
    content: 'TYPESCRIPT',
  },
  {
    tech: <FaNode />,
    content: 'NODE.JS',
  },

  {
    tech: <SiExpress />,
    content: 'EXPRESS.JS',
  },
  {
    tech: <FaReact />,
    content: 'REACT',
  },
  {
    tech: <RiNextjsLine />,
    content: 'NEXT.JS',
  },
  {
    tech: <RiRemixRunLine />,
    content: 'REMIX.JS',
  },
  {
    tech: <RiTailwindCssLine />,
    content: 'TAILWINDCSS',
  },
  {
    tech: <SiSass />,
    content: 'SASS/SCSS',
  },

  {
    tech: <SiSocketdotio />,
    content: 'SOCKET.IO',
  },
  {
    tech: <BiLogoMongodb />,
    content: 'MONGODB',
  },
];

export default function TechStack() {
  const [animateTechStack, setAnimateTechStack] = useTrail(
    13,
    () => ({
      from: { opacity: 0 },
    }),
    []
  );
  const [ref, inView] = useInView({ once: true, rootMargin: '-10%' });

  useEffect(() => {
    if (inView)
      setAnimateTechStack.start(() => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
      }));
  }, [inView]);

  return (
    <animated.section
      style={{}}
      className="pb-32 px-6 flex flex-col items-center"
    >
      <AnimateHeading
        className="text-xl xs:text-lg"
        inView={inView}
        text="Proudly working with these technologies"
      />

      <div className="flex gap-16 flex-wrap justify-center">
        {animateTechStack.map((styles, i) => {
          return (
            <animated.span ref={ref} style={styles} key={crypto.randomUUID()}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-8xl cursor-pointer sm:text-5xl">
                      {technologies[i].tech}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>{technologies[i].content}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </animated.span>
          );
        })}
      </div>
    </animated.section>
  );
}
