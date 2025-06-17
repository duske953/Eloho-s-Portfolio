import { Link } from '@remix-run/react';
import { cn } from '~/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { useInView, motion, useAnimation } from 'motion/react';
import { ReactNode, useEffect, useRef } from 'react';
import scrollSectionIntoView from '~/utils/scrollSectionIntoView';
import ContactModal from './ContactModal';
import { FaUser } from 'react-icons/fa';
import { IoBriefcase, IoCode, IoMail } from 'react-icons/io5';
const navBarLinks = [
  {
    link: '/#services',
    title: 'What I Do',
    ref: '.web-services-intro',
  },

  {
    link: '/#projects',
    title: 'Selected Works',
    ref: '.portfolio-container',
  },

  {
    link: '/about-me',
    title: 'About Me',
  },
];

export default function Navbar({ className }: { className?: string }) {
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
    return () => controls.stop();
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
            'flex justify-between items-center max-md:justify-center bg-slate-900 section-container right-0 left-0 px-3',
            !isInView && 'fixed top-0 w-full z-50 '
          )}
        >
          <Link to="/">
            <img
              src="/logo.jpg"
              className="w-32 max-sm:w-20 object-cover"
              alt="Logo - Eloho Kennedy, A fullstack web developer"
            />
          </Link>

          <TopNavBar className="max-md:hidden flex max-md:pointer-events-none" />
        </motion.nav>
      </header>
    </>
  );
}

function TopNavBar({ className }: { className: string }) {
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
  function renderMouseEnterNav(i: number) {
    if (
      navBarLinks[i].title === 'What I Do' ||
      navBarLinks[i].title === 'Selected Works'
    ) {
      document.documentElement.style.scrollBehavior = 'smooth';
    } else {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }

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
          onMouseEnter={() => renderMouseEnterNav(i)}
          className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          to={navBarLinks[i].link}
        >
          {navBarLinks[i].title}
        </Link>
      )}
    </li>
  );
}

export function BottomNavBar() {
  return (
    <ul className="hidden pointer-events-none max-md:pointer-events-auto justify-around gap-5 max-md:flex z-[200] max-md:sticky bottom-0 max-md:left-0 bg-slate-900 items-center py-6">
      <BottmonNavLinks link="/#services" text="Services">
        <IoBriefcase />
      </BottmonNavLinks>

      <BottmonNavLinks link="/#projects" text="Projects">
        <IoCode />
      </BottmonNavLinks>

      <BottmonNavLinks link="/about-me" text="About me">
        <FaUser />
      </BottmonNavLinks>

      <li>
        <ContactModal
          btnText={
            <div className="flex flex-col items-center gap-3">
              <IoMail className="text-blue-600" />
              <span>Contact</span>
            </div>
          }
          className="bg-transparent hover:bg-transparent p-0 contents font-semibold text-sm"
        />
      </li>
    </ul>
  );
}

function BottmonNavLinks({
  text,
  link,
  children,
}: {
  text: string;
  link: string;
  children: ReactNode;
}) {
  function renderMouseEnterNav() {
    if (text === 'Services' || text === 'Projects') {
      document.documentElement.style.scrollBehavior = 'smooth';
    } else {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }
  return (
    <li>
      <Link
        onMouseEnter={renderMouseEnterNav}
        className="flex flex-col justify-center items-center gap-3"
        to={link}
      >
        <span className="text-blue-600">{children}</span>
        <span className="font-semibold text-sm">{text}</span>
      </Link>
    </li>
  );
}
