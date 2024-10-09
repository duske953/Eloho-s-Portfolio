/* eslint-disable react/no-unescaped-entities */
import { animated, useInView, useSpring } from '@react-spring/web';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Navbar from '~/components/Navbar';
import { heroViewState, navItemsState } from '~/atom/states';
import { Button, buttonVariants } from '~/components/ui/button';
import { useEffect } from 'react';
import { Link } from '@remix-run/react';
import scrollSectionIntoView from '~/utils/scrollSectionIntoView';
export default function Hero() {
  const animatedNavItems = useRecoilValue(navItemsState);
  const setHeroView = useSetRecoilState(heroViewState);
  const [ref, inView] = useInView({ rootMargin: '0% 0%' });
  const heroImgSpring = useSpring({
    from: { opacity: 0, y: -100 },
    to: { opacity: 1, y: -70 },
    pause: !animatedNavItems,
  });
  const heroTextSpring = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    pause: !animatedNavItems,
  });

  useEffect(() => {
    setHeroView(inView);
  }, [inView]);

  return (
    <>
      <section
        ref={ref}
        className="px-8 py-2 md:px-0 md:py-0 bg-img h-svh mb-32"
      >
        <Navbar />
        <section className="grid grid-cols-2 relative pt-16 lg:grid-cols-1 lg:gap-32">
          <animated.div
            style={heroTextSpring}
            className="lg:text-center lg:px-7"
          >
            <h1 className="text-6xl leading-tight text-white lg:text-5xl lg:leading-normal xs:text-4xl">
              Hey there, I'm{' '}
              <span className="font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Eloho Kennedy
              </span>{' '}
              and I work with the{' '}
              <span className="font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                WEB
              </span>
            </h1>
            <div className="flex gap-9 mt-7 lg:justify-center">
              <Button
                size="lg"
                onClick={() => scrollSectionIntoView('#projects')}
                className="border rounded-none"
                variant="secondary"
              >
                Projects
              </Button>
              <Link
                to="/eloho-kennedy's-resume.pdf"
                reloadDocument
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                Download CV
              </Link>
            </div>
          </animated.div>
          <animated.div style={heroImgSpring}>
            <img
              className="w-full"
              src="/aboutMeImg.svg"
              alt="Eloho Kennedy | A fullstack web developer"
            />
          </animated.div>
        </section>
      </section>
    </>
  );
}
