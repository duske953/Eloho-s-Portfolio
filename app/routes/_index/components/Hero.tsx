/* eslint-disable react/no-unescaped-entities */
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import scrollSectionIntoView from '~/utils/scrollSectionIntoView';
export default function Hero() {
  return (
    <>
      <section className="pt-12 mb-24 pb-16 bg-img section-container">
        <section className="grid grid-cols-2 relative max-lg:grid-cols-1 max-lg:gap-10 items-center px-8 max-sm:px-3">
          <div className="">
            <h1 className={cn('primary-heading', 'leading-normal')}>
              Your Business Deserves a Clear, Trustworthy Website
            </h1>
            <p className="text-xl mt-5 text-blue-200 max-sm:text-lg leading-10">
              I help businesses build websites that reflect their values and
              make it easy for customers to take the next step.
            </p>
            <div className="flex gap-9 mt-7 max-lg:gap-3">
              <Button
                size="lg"
                onClick={() => scrollSectionIntoView('.portfolio-container')}
                className="border rounded-none"
                variant="secondary"
              >
                See My Work
              </Button>
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
          </div>
          <div>
            <img
              className="w-full"
              src="/hero-img.png"
              alt="Eloho Kennedy | A fullstack web developer"
            />
          </div>
        </section>
      </section>
    </>
  );
}
