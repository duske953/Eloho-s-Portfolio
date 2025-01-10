import {
  FaHotel,
  FaLocationArrow,
  FaMusic,
  FaShoppingCart,
} from 'react-icons/fa';
import { Link } from '@remix-run/react';
import { buttonVariants } from '~/components/ui/button';
import { animated, useInView, useSprings } from '@react-spring/web';
import { useEffect, useRef } from 'react';
import { IoChatboxSharp } from 'react-icons/io5';
import { Badge } from '~/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import AnimateHeading from '~/components/AnimateHeading';
const AnimatedCard = animated(Card);
const projects = [
  {
    title: 'RockIns',
    description: 'Hotel web application | Rockins',
    img: '/rockins/hero.svg',
    icon: <FaHotel className="size-6" />,
    tech: ['React', 'Next.js'],
    projectUrl: 'https://rockins.vercel.app/',
    detailsUrl: '/projects/rockins',
  },

  {
    title: 'Tech-Freak',
    description: 'Ecommerce web application | Tech-Freak',
    img: '/tech-freak/hero.svg',
    icon: <FaShoppingCart className="size-6" />,
    tech: ['React', 'Node.js'],
    projectUrl: 'https://tech-freak.vercel.app/',
    detailsUrl: '/projects/tech-freak',
  },

  {
    title: 'Geocoords',
    description: 'Geocoordinates web application | Geocoords',
    img: '/geocoords/hero.svg',
    icon: <FaLocationArrow className="size-6" />,
    tech: ['Javascript', 'ArcGis'],
    projectUrl: 'https://geocoordinates.netlify.app/',
    detailsUrl: '/projects/geocoordinates',
  },

  {
    title: 'Anonymo',
    description: 'Anonymous chat web application | Anonymo',
    img: '/anonymo/hero.svg',
    icon: <IoChatboxSharp className="size-6" />,
    tech: ['React', 'Socket.io'],
    projectUrl: 'https://anonymo.vercel.app/',
    detailsUrl: '/projects/anonymo',
  },

  // {
  //   title: 'Digital Nft',
  //   description:
  //     'Discover, Collect, and Trade Unique Digital Assets in the World of NFTs',
  //   img: '/nft/hero.svg',
  //   icon: <RiNftLine className="size-6" />,
  //   tech: ['Html', 'Css'],
  //   projectUrl: 'https://digital-nft.netlify.app/',
  //   githubUrl: 'https://github.com/duske953/NFT-landing-page',
  // },

  {
    title: 'Music Snip',
    description: 'Preview latest music & albums',
    img: '/music-snip/hero.svg',
    icon: <FaMusic className="size-6" />,
    tech: ['Next.js', 'React'],
    projectUrl: 'https://music-snip.vercel.app',
    detailsUrl: '/projects/music-snip',
  },
];

export function Porfolio() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [animatePortfolio, setAnimatatePortfolio] = useSprings(
    5,
    (i) => ({
      from: { opacity: 0, transform: `scale(1)` },
      delay: (i + 1) * 200,
      config: {
        tension: 120,
        friction: 15,
      },
    }),
    []
  );
  const [ref, inView] = useInView({ once: true, rootMargin: '-10%' });
  useEffect(() => {
    if (inView)
      setAnimatatePortfolio.start((i) => ({
        from: { opacity: 0, transform: `scale(0.5)` },
        to: { opacity: 1, transform: `scale(1)` },
        delay: (i + 1) * 200,
      }));
  }, [inView]);

  return (
    <section id="projects" ref={projectsRef} className="px-6 pb-32 relative">
      <AnimateHeading inView={inView} text="Portfolio" />
      <ul
        ref={ref}
        className="grid grid-cols-2 gap-x-7 gap-y-12 md:grid-cols-1"
      >
        {animatePortfolio.map((styles, i) => {
          return (
            <li key={crypto.randomUUID()}>
              <AnimatedCard style={styles} className="bg-slate-950/100">
                <CardHeader>
                  <CardTitle className="uppercase flex items-center gap-3">
                    {projects[i].icon}
                    <p className="xs:text-xs">{projects[i].title}</p>
                    <div className="ml-auto flex gap-2">
                      <Badge variant="secondary">{projects[i].tech[0]}</Badge>
                      <Badge variant="secondary">{projects[i].tech[1]}</Badge>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-2xl text-white lg:text-xl sm:text-sm">
                    {projects[i].description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="">
                  <img
                    className="rounded-2xl "
                    src={projects[i].img}
                    alt={projects[i].description}
                  />
                </CardContent>
                <CardFooter className="flex justify-end gap-6">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonVariants({
                      variant: 'secondary',
                      size: 'lg',
                    })}`}
                    to={projects[i].projectUrl}
                  >
                    Visit
                  </Link>

                  <Link
                    rel="noopener noreferrer"
                    className={`${buttonVariants({
                      variant: 'outline',
                      size: 'lg',
                    })}`}
                    to={projects[i].detailsUrl}
                  >
                    Details
                  </Link>
                </CardFooter>
              </AnimatedCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
