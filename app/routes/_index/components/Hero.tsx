'use client';
import { ArrowDownIcon } from '@radix-ui/react-icons';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import scrollSectionIntoView from '~/utils/scrollSectionIntoView';
export default function Hero() {
  const avatars = [
    { src: '/testimonials/emma.jpg', alt: 'Emmanuel' },
    { src: '/testimonials/Ksenija.jpeg', alt: 'Ksenija' },
    { src: '/testimonials/Natalie.jpeg', alt: 'Natalie' },
    { src: '/testimonials/Mariia.jpeg', alt: 'Mariia' },
  ];

  return (
    <>
      <section className="pt-32 mb-24 pb-16 bg-img section-container max-md:pt-24">
        <section className="grid grid-cols-2 relative max-lg:grid-cols-1 max-lg:gap-10 items-center px-8 max-sm:px-3">
          <div className="">
            <h1 className={cn('primary-heading', 'leading-normal')}>
              Stop Losing Visitors to Slow, Broken Websites.
            </h1>
            <p className="text-xl mt-5 text-blue-200 max-sm:text-lg leading-10">
              "If you're looking for a developer who respects your time,
              communicates clearly, and actually cares about the outcome —
              you'll be very lucky to have Eloho Kennedy on your project."
              <span className="block text-sm mt-2 text-neutral-400 font-medium italic">
                — Ksenia, Fractional COO & Business Architect.
              </span>
            </p>
            <div className="flex gap-9 mt-7 max-lg:gap-3 items-center flex-wrap">
              <Button
                size="lg"
                onClick={() => scrollSectionIntoView('.portfolio-container')}
                className="border rounded-full"
                variant="secondary"
              >
                See My Work
                <ArrowDownIcon className="size-5 ml-2" />
              </Button>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3 overflow-hidden">
                  {avatars.map((avatar, i) => (
                    <img
                      key={i}
                      className="inline-block size-10 rounded-full ring-2 ring-black object-cover"
                      src={avatar.src}
                      alt={avatar.alt}
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-neutral-400">
                  Trusted by <span className="text-white">10+</span> business
                  owners
                </p>
              </div>
            </div>

            {/* <Link
                to="/eloho-kennedy's-resume.pdf"
                reloadDocument
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'border-blue-400 rounded-none'
                )}
              >
                Need A Website?
              </Link> */}
          </div>

          <div>
            <img
              className="w-full"
              src="./hero-img.png"
              alt="Eloho Kennedy | A fullstack web developer"
            />
          </div>
        </section>
      </section>
    </>
  );
}
