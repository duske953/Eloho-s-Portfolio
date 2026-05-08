'use client';

import {
  FaHotel,
  FaLocationArrow,
  FaMusic,
  FaShoppingCart,
} from 'react-icons/fa';
import Link from 'next/link';
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

const projects = [
  {
    title: 'RockIns',
    description: 'Hotel web application | Rockins',
    img: '/rockins/homepage.png',
    icon: <FaHotel className="size-6" />,
    tech: ['React', 'Next.js'],
    projectUrl: 'https://rockins.vercel.app/',
    detailsUrl: '/projects/rockins',
  },

  {
    title: 'Byte-Cart',
    description: 'Ecommerce web application | Byte-Cart',
    img: '/byte-cart/homepage.png',
    icon: <FaShoppingCart className="size-6" />,
    tech: ['Next.js', 'Node.js'],
    projectUrl: 'https://bytecart.vercel.app/',
    detailsUrl: '/projects/byte-cart',
  },

  {
    title: 'Geocoords',
    description: 'Geocoordinates web application | Geocoords',
    img: '/geocoords/homepage.png',
    icon: <FaLocationArrow className="size-6" />,
    tech: ['Javascript', 'ArcGis'],
    projectUrl: 'https://geocoordinates.netlify.app/',
    detailsUrl: '/projects/geocoords',
  },

  {
    title: 'Anonymo',
    description: 'Anonymous chat web application | Anonymo',
    img: '/anonymo/homepage.png',
    icon: <IoChatboxSharp className="size-6" />,
    tech: ['React', 'Socket.io'],
    projectUrl: 'https://anonymo.vercel.app/',
    detailsUrl: '/projects/anonymo',
  },

  {
    title: 'Music Snip',
    description: 'Preview latest music & albums',
    img: '/music-snip/homepage.png',
    icon: <FaMusic className="size-6" />,
    tech: ['Next.js', 'React'],
    projectUrl: 'https://music-snip.vercel.app',
    detailsUrl: '/projects/music-snip',
  },
];

export function Porfolio() {
  return (
    <section className="px-6 pb-32 relative max-md:px-3">
      <ul className="grid grid-cols-2 gap-x-7 gap-y-12 max-md:grid-cols-1">
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
                project.title === 'Music snip' && 'left-2/4 max-md:left-0',
              )}
              key={i}
            >
              <Card className="group bg-zinc-950/50 backdrop-blur-md border-white/5 hover:border-blue-500/20 transition-all duration-500 h-full overflow-hidden flex flex-col rounded-[2rem]">
                <CardHeader className="pb-4">
                  <CardTitle className="uppercase flex items-center gap-3">
                    <span className="text-blue-500">{project.icon}</span>
                    <p className="text-sm font-bold tracking-widest">{project.title}</p>
                    <div className="ml-auto flex gap-2">
                      <Badge variant="secondary" className="bg-white/5 text-neutral-400 border-none hover:bg-white/10 transition-colors">{project.tech[0]}</Badge>
                      <Badge variant="secondary" className="bg-white/5 text-neutral-400 border-none hover:bg-white/10 transition-colors">{project.tech[1]}</Badge>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-lg text-neutral-200 font-semibold leading-snug">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0 overflow-hidden flex-1">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/5">
                    <img
                      className="absolute inset-0 size-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                      src={project.img}
                      alt={project.description}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4 p-6 pt-0 relative z-40">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonVariants({
                      variant: 'secondary',
                      size: 'default',
                    })} rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white border-none shadow-[0_0_15px_rgba(37,99,235,0.2)]`}
                    href={project.projectUrl}
                  >
                    Visit
                  </Link>

                  <Link
                    onMouseEnter={() =>
                      (document.documentElement.style.scrollBehavior = 'auto')
                    }
                    className={`${buttonVariants({
                      variant: 'outline',
                      size: 'default',
                    })} rounded-full px-8 border-white/10 hover:bg-white/5 hover:text-white transition-all`}
                    href={project.detailsUrl}
                  >
                    Details
                  </Link>
                </CardFooter>
              </Card>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
