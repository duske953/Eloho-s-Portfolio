import { Link } from '@remix-run/react';
import { FaArrowRight } from 'react-icons/fa';
import Cta from '~/components/Cta';
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
      <Cta heading={heading} description={description}>
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
      </Cta>

      <div className="flex max-sm:px-3">
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
