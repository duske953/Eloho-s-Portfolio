import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Link } from '@remix-run/react';
import { buttonVariants } from '~/components/ui/button';
export default function ProjectConclusion({
  projectLink,
  githubLink,
  nextProjectLink,
}: {
  projectLink: string;
  githubLink: string;
  nextProjectLink: string;
}) {
  const nextLink = nextProjectLink.split('projects/')[1];
  return (
    <section className="max-w-3xl mx-auto py-20">
      <div className="grid grid-cols-3 gap-6 mt-10 flex-wrap xs:grid-cols-2 px-4">
        {/* <Link
          className={`${buttonVariants({
            variant: 'secondary',
            size: 'lg',
          })} animate-pulse rounded-none`}
          target="_blank"
          rel="noopener noreferrer"
          to={projectLink}
        >
          Visit
        </Link> */}

        <Link
          className={buttonVariants({ variant: 'outline', size: 'lg' })}
          target="_blank"
          rel="noopener noreferrer"
          to={githubLink}
        >
          Source code
        </Link>

        <Link
          className={`${buttonVariants({
            variant: 'link',
          })} ml-auto text-base xs:ml-0 xs:col-[-2/-1] `}
          to={nextProjectLink}
        >
          {nextLink.replace(nextLink[0], nextLink[0].toUpperCase())}
          <ArrowRightIcon className="ml-3" />
        </Link>
      </div>
    </section>
  );
}
