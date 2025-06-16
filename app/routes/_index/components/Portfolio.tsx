import {
  FaHotel,
  FaLocationArrow,
  FaMusic,
  FaShoppingCart,
} from 'react-icons/fa';
import { Link } from '@remix-run/react';
import { buttonVariants } from '~/components/ui/button';
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
import { motion } from 'motion/react';
import { cn } from '~/lib/utils';
import { DotBackground } from '~/components/ui/DotBackground';
import { BackgroundGradient } from '~/components/ui/BackgroundGradient';

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
    title: 'Byte-Cart',
    description: 'Ecommerce web application | Byte-Cart',
    img: '/byte-cart/hero.jpeg',
    icon: <FaShoppingCart className="size-6" />,
    tech: ['Next.js', 'Node.js'],
    projectUrl: 'https://byte-cart.vercel.app/',
    detailsUrl: '/projects/byte-cart',
  },

  {
    title: 'Geocoords',
    description: 'Geocoordinates web application | Geocoords',
    img: '/geocoords/hero.svg',
    icon: <FaLocationArrow className="size-6" />,
    tech: ['Javascript', 'ArcGis'],
    projectUrl: 'https://geocoordinates.netlify.app/',
    detailsUrl: '/projects/geocoords',
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

  {
    title: 'Music Snip',
    description: 'Preview latest music & albums',
    img: '/music-snip/homepage.svg',
    icon: <FaMusic className="size-6" />,
    tech: ['Next.js', 'React'],
    projectUrl: 'https://music-snip.vercel.app',
    detailsUrl: '/projects/music-snip',
  },
];

export function Porfolio() {
  return (
    <DotBackground>
      <section className="px-6 pb-32 relative max-md:px-3">
        <ul className="grid grid-cols-3 gap-x-7 gap-y-12 max-md:grid-cols-1">
          {projects.map((project, i) => {
            return (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -250px 0px' }}
                transition={{
                  delay: i === 0 ? 0.03 : i * 0.09,
                  mass: 1.5,
                  damping: 10,
                  type: 'spring',
                }}
                className={cn(
                  project.title === 'Anonymo' && 'col-span-2 max-md:col-span-1',
                  project.title === 'RockIns' && 'col-span-2 max-md:col-span-1',
                  project.title === 'Music Snip' &&
                    'col-span-3 max-md:col-span-1'
                )}
                key={crypto.randomUUID()}
              >
                <BackgroundGradient>
                  <Card className="bg-slate-950/100 h-[30rem]">
                    <CardHeader>
                      <CardTitle className="uppercase flex items-center gap-3">
                        {project.icon}
                        <p className="xs:text-xs">{project.title}</p>
                        <div className="ml-auto flex gap-2">
                          <Badge variant="secondary">{project.tech[0]}</Badge>
                          <Badge variant="secondary">{project.tech[1]}</Badge>
                        </div>
                      </CardTitle>
                      <CardDescription className="text-xl text-blue-300 font-bold lg:text-xl sm:text-sm">
                        {projects[i].description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="">
                      <img
                        className="rounded-2xl h-60 w-full object-cover"
                        src={project.img}
                        alt={project.description}
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
                        to={project.projectUrl}
                      >
                        Visit
                      </Link>

                      <Link
                        rel="noopener noreferrer"
                        className={`${buttonVariants({
                          variant: 'outline',
                          size: 'lg',
                        })}`}
                        to={project.detailsUrl}
                      >
                        Details
                      </Link>
                    </CardFooter>
                  </Card>
                </BackgroundGradient>
              </motion.li>
            );
          })}
        </ul>
      </section>
    </DotBackground>
  );
}
