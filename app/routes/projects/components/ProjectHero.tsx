import { ReactNode } from 'react';
import GridBackground from '~/components/ui/GridBackground';
import { Spotlight } from '~/components/ui/Spotlight';

export default function ProjectHero({
  imgSrc,
  imgAlt,
  heading,
  description,
  children,
}: {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <GridBackground className="my-32 max-sm:my-20">
      <section className="relative overflow-hidden py-16">
        <Spotlight />
        <div className="grid grid-cols-2 px-8 items-center gap-4 max-lg:grid-cols-1">
          <div>
            <h1 className="primary-heading"> {heading}</h1>
            <p className="text-xl leading-loose">{description}</p>
            <div className="flex gap-10 mt-8 text-4xl text-gray-400">
              {children}
            </div>
          </div>
          <div>
            <img src={imgSrc} alt={imgAlt} className="rounded-lg" />
          </div>
        </div>
      </section>
    </GridBackground>
  );
}
