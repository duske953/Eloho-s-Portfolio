import { Link } from '@remix-run/react';
import { FaArrowRight } from 'react-icons/fa';
import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export default function ProjectCta({
  githubUrl,
  cta,
  heading,
  description,
  nextProject,
  projectUrl,
}: {
  cta: string;
  githubUrl: string;
  projectUrl: string;
  heading: string;
  description: string;
  nextProject: string;
}) {
  return (
    <section className="py-32">
      <div className="cta-gradient py-28 px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-3xl font-bold text-gray-300 mb-5 leading-relaxed">
            {heading}
          </p>
          <span className="mb-5 inline-block leading-loose">{description}</span>
          <Link
            target="_blank"
            rel="noreferrer noopener"
            to={projectUrl}
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'lg' }),
              'rounded-none'
            )}
          >
            {cta}
          </Link>
        </div>
      </div>
      <div className="flex px-8 py-9">
        <div className="ml-auto flex gap-10">
          <Link
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
            to={githubUrl}
          >
            Source Code
          </Link>

          <Link
            className="flex items-center gap-3 uppercase font-bold"
            to={`/projects/${nextProject}`}
          >
            <span>{nextProject}</span> <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
