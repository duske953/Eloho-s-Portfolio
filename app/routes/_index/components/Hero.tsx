/* eslint-disable react/no-unescaped-entities */
import Navbar from '~/components/Navbar';
import { Button, buttonVariants } from '~/components/ui/button';
import { Link } from '@remix-run/react';
import scrollSectionIntoView from '~/utils/scrollSectionIntoView';
import { cn } from '~/lib/utils';
export default function Hero() {
  return (
    <>
      <section className="md:px-0 md:py-0 bg-img mb-32">
        <Navbar />
        <section className="grid grid-cols-2 relative pt-16 max-lg:grid-cols-1 max-lg:gap-10 items-center px-8 -top-9 max-sm:px-3">
          <div className="max-lg:text-center">
            <span className="text-sm uppercase bg-gradient-to-r from-blue-600 to-blue-400 p-2 font-bold mb-5 inline-block">
              Websites That Work
            </span>
            <h1 className="text-5xl max-md:text-3xl max-lg:leading-relaxed leading-relaxed font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              People come to your site. Let’s make sure they stay.
            </h1>
            <p className="text-xl mt-5 italic text-blue-200 max-sm:text-lg">
              I build websites that help people understand, trust, and buy from
              you.
            </p>
            <div className="flex gap-9 mt-7 max-lg:justify-center max-lg:px-8 max-lg:gap-3">
              <Button
                size="lg"
                onClick={() => scrollSectionIntoView('.portfolio-container')}
                className="border rounded-none"
                variant="secondary"
              >
                See My Work
              </Button>
              <Link
                to="/eloho-kennedy's-resume.pdf"
                reloadDocument
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'border-blue-400 rounded-none'
                )}
              >
                Need A Website?
              </Link>
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
