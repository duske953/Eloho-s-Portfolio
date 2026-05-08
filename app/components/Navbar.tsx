'use client';

import Link from 'next/link';
import { cn } from '~/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { useInView, motion, useAnimation } from 'motion/react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import scrollSectionIntoView from '~/utils/scrollSectionIntoView';
import ContactModal from './ContactModal';
import { FaUser } from 'react-icons/fa';
import { IoBriefcase, IoCode, IoMail, IoSparkles } from 'react-icons/io5';

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

  {
    link: '/freebies',
    title: 'Freebies',
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
      controls.set({ y: -100, opacity: 0 });
      controls.start({ y: 0, opacity: 1 });
    }
    return () => controls.stop();
  }, [isInView]);

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          className,
          'max-md:overflow-auto section-container relative z-50 max-md:static',
        )}
      >
        <motion.nav
          key={isInView ? 'in-view' : 'out-of-view'}
          animate={controls}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={cn(
            'flex justify-between py-5 items-center max-md:border-b max-md:border-white/10 max-md:justify-center max-lg:flex-col transition-all duration-300 section-container right-0 left-0 px-8 max-md:px-4 z-50',
            !isInView
              ? 'fixed top-0 w-full bg-black/60 backdrop-blur-lg border-b border-white/10 py-3 shadow-2xl'
              : 'absolute z-[1000] top-0 w-full bg-gradient-to-b from-black/50 to-transparent',
          )}
        >
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/Eloho-Logo.png"
              className="size-16 object-cover max-sm:size-12 max-sm:scale-[1.7]"
              alt="Eloho Kennedy, web developer for local businesses"
            />
          </Link>

          <TopNavBar className="max-md:hidden flex items-center" />
        </motion.nav>
      </header>
    </>
  );
}

function TopNavBar({ className }: { className: string }) {
  return (
    <ul className={cn(className, 'gap-8')}>
      {navBarLinks.map((prop, i) => {
        return <NavLinks i={i} key={i} />;
      })}
      <li>
        <ContactModal
          btnText="Let's Talk"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2.5 text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
        />
      </li>
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
        <button
          onClick={() => scrollSectionIntoView(navBarLinks[i].ref!)}
          className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group"
        >
          {navBarLinks[i].title}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all group-hover:w-full" />
        </button>
      ) : (
        <Link
          onMouseEnter={() => renderMouseEnterNav(i)}
          className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group"
          href={navBarLinks[i].link}
        >
          {navBarLinks[i].title}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all group-hover:w-full" />
        </Link>
      )}
    </li>
  );
}

export function BottomNavBar() {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] w-[90%] max-w-md transition-all duration-500 max-md:block hidden',
        scrollingDown
          ? 'translate-y-[200%] opacity-0'
          : 'translate-y-0 opacity-100',
      )}
    >
      <ul className="flex justify-around items-center py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] px-4">
        <BottmonNavLinks href="/#services" text="Services">
          <IoBriefcase className="size-5" />
        </BottmonNavLinks>

        <BottmonNavLinks href="/#projects" text="Projects">
          <IoCode className="size-5" />
        </BottmonNavLinks>

        <BottmonNavLinks href="/about-me" text="About me">
          <FaUser className="size-5" />
        </BottmonNavLinks>

        <BottmonNavLinks href="/freebies" text="Freebies">
          <IoSparkles className="size-5" />
        </BottmonNavLinks>

        <li>
          <ContactModal
            btnText={
              <div className="flex flex-col items-center gap-1 group">
                <div className="p-2 rounded-full group-hover:bg-blue-600/10 transition-colors">
                  <IoMail className="text-blue-600 size-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                  Contact
                </span>
              </div>
            }
            className="bg-transparent hover:bg-transparent p-0 contents"
          />
        </li>
      </ul>
    </div>
  );
}

function BottmonNavLinks({
  text,
  href,
  children,
}: {
  text: string;
  href: string;
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
        className="flex flex-col justify-center items-center gap-1 group"
        href={href}
      >
        <div className="p-2 rounded-full group-hover:bg-blue-600/10 transition-colors text-blue-600">
          {children}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
          {text}
        </span>
      </Link>
    </li>
  );
}
