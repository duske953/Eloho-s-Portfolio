import { Link } from '@remix-run/react';
import { useMediaQuery } from 'react-responsive';
import { cn } from '~/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { useInView, motion, useAnimation } from 'motion/react';
import { useEffect, useRef } from 'react';
import scrollSectionIntoView from '~/utils/scrollSectionIntoView';
import ContactModal from './ContactModal';
const navBarLinks = [
  {
    link: null,
    title: 'What I Do',
    ref: '.web-services-intro',
  },

  {
    link: null,
    title: 'Selected Works',
    ref: '.portfolio-container',
  },

  {
    link: '/about-me',
    title: 'About Me',
  },
];

export default function Navbar({ className }: { className?: string }) {
  const isTabletMobile = useMediaQuery({ maxWidth: '800px' });
  const controls = useAnimation();
  const navRef = useRef(null);
  const isInView = useInView(navRef, {
    margin: '100% -20px 0px 0px',
  });

  useEffect(() => {
    if (!isInView) {
      controls.set({ y: -100 });
      controls.start({ y: 0 });
    }
  }, [isInView]);

  return (
    <>
      <header
        ref={navRef}
        className={cn(className, 'max-md:overflow-auto section-container')}
      >
        <motion.nav
          key={isInView ? 'in-view' : 'out-of-view'}
          animate={controls}
          className={cn(
            'flex justify-between items-center max-md:justify-center',
            !isInView &&
              'fixed top-0 w-full z-50 left-0 px-3 bg-slate-900 section-container right-0'
          )}
        >
          <Link to="/">
            <img
              src="/logo.jpg"
              className="w-32 max-sm:w-20 object-cover"
              alt="Logo - Eloho Kennedy, A fullstack web developer"
            />
          </Link>

          <NavLinkBox className="max-md:hidden flex max-md:pointer-events-none" />
        </motion.nav>
      </header>
    </>
  );
}

export function NavLinkBox({ className }: { className: string }) {
  return (
    <ul
      className={cn(
        className,
        `gap-10 items-center z-[100] max-md:bg-slate-900 transition-transform max-md:border-none max-md:rounded-none max-md:py-5 max-md:px-2`
      )}
    >
      {navBarLinks.map((prop, i) => {
        return <NavLinks i={i} key={i} />;
      })}
      <ContactModal />
    </ul>
  );
}

function NavLinks({ i }: { i: number }) {
  return (
    <li>
      {!navBarLinks[i].link ? (
        <Button
          onClick={() => scrollSectionIntoView(navBarLinks[i].ref!)}
          variant="outline"
          size="lg"
        >
          {navBarLinks[i].title}
        </Button>
      ) : (
        <Link
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            i === 3 && 'bg-blue-600 hover:bg-blue-500 rounded-none'
          )}
          to={navBarLinks[i].link}
        >
          {navBarLinks[i].title}
        </Link>
      )}
    </li>
  );
}
