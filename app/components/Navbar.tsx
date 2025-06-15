import { Link } from '@remix-run/react';
import { useMediaQuery } from 'react-responsive';
import { cn } from '~/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { IoClose } from 'react-icons/io5';
import { useInView, motion, useAnimation } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import scrollSectionIntoView from '~/utils/scrollSectionIntoView';
import ContactModal from './ContactModal';
import { RiMenu4Line } from 'react-icons/ri';
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
  const [openNav, setOpenNav] = useState(false);
  const navRef = useRef(null);
  const isInView = useInView(navRef, {
    margin: '100% -20px 0px 0px',
  });

  useEffect(() => {
    if (!isInView) controls.start({ y: 0 });
  }, [isInView]);

  return (
    <>
      <header ref={navRef} className={cn(className)}>
        <motion.nav
          key={isInView ? 'in-view' : 'out-of-view'}
          initial={{ y: isInView ? 0 : -100 }}
          animate={controls}
          className={cn(
            'flex justify-between items-center max-md:flex-col relative',
            !isInView && 'fixed w-full z-50 left-0 px-3 backdrop-blur-3xl'
          )}
        >
          <Link to="/">
            <img
              src="/logo.jpg"
              className="w-32"
              alt="Logo - Eloho Kennedy, A fullstack web developer"
            />
          </Link>

          <ul
            className={cn(
              `flex gap-10 items-center max-md:fixed max-md:bg-slate-900 max-md:h-lvh transition-transform max-md:flex-col z-20 max-md:left-0 max-md:border-none max-md:rounded-none max-md:p-20`,
              isTabletMobile && 'bg-slate-900/10',
              openNav && 'max-md:translate-x-0',
              !openNav && 'max-md:-translate-x-full'
            )}
          >
            {navBarLinks.map((prop, i) => {
              return <NavLinks i={i} key={i} />;
            })}
            <ContactModal />

            <IoClose
              onClick={() => setOpenNav(false)}
              className="absolute right-2 top-2 size-10 cursor-pointer hidden max-md:block"
            />
          </ul>
          <RiMenu4Line
            onClick={() => setOpenNav(true)}
            className="absolute -left-6 text-6xl hidden max-md:block top-2/4 -translate-y-2/4 cursor-pointer"
          />
          {/* <AnimatedMenuIcon className="hidden cursor-pointer absolute size-12 xs:size-10 shadow-2xl shadow-slate-800 top-2/4 md:block left-4" /> */}
        </motion.nav>
        {/* {sideBar && <Overlay />} */}
      </header>
    </>
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
