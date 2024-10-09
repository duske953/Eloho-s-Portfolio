import { Link, useLocation } from '@remix-run/react';
import { SpringValue, animated, useSpring, useTrail } from '@react-spring/web';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { heroViewState, navItemsState } from '~/atom/states';
import { useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { cn } from '~/lib/utils';
import ContactModal from './ContactModal';
import { buttonVariants } from './ui/button';
import { RiMenu2Line } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import Overlay from './Overlay';
import scrollSectionIntoView from '~/utils/scrollSectionIntoView';
const AnimatedMenuIcon = animated(RiMenu2Line);
const navBarLinks = [
  {
    link: '/',
    title: 'Projects',
  },

  {
    link: '/',
    title: 'About Me',
  },

  {
    link: "/eloho-kennedy's-resume.pdf",
    title: 'CV/Resume',
  },

  {
    link: '/',
    title: 'Contact',
  },
];

export default function Navbar({ className }: { className?: string }) {
  const setNavItemsAnimated = useSetRecoilState(navItemsState);
  const isTabletMobile = useMediaQuery({ maxWidth: '800px' });
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
  const [sideBar, setSideBar] = useState(false);
  const [animateLogoState, setAnimateLogoState] = useState(false);
  const heroView = useRecoilValue(heroViewState);
  const [navSprings, navApi] = useTrail(
    4,
    (i) => ({
      from: { opacity: isHomeRoute ? 0 : 1 },
      delay: (i + 1) * 200,
      onRest() {
        setNavItemsAnimated(true);
      },
    }),
    []
  );

  const animatedLogo = useSpring({
    from: { y: isHomeRoute ? -200 : 0 },
    to: { y: 0 },
    onRest() {
      setAnimateLogoState(true);
    },
  });

  const animatedMenuLogo = useSpring({
    from: { y: isHomeRoute ? '-350%' : '-50%' },
    to: { y: '-50%' },
  });

  const [animatedHeader, setAnimateHeader] = useSpring(() => ({
    from: { y: 0 },
  }));

  const [animatedNavBox, setAnimateNavBox] = useSpring(
    () => ({
      from: { x: -300 },
      config: {
        tension: 120,
        friction: 10,
      },
    }),
    [isTabletMobile]
  );

  function openSideBar() {
    setSideBar(true);
    setAnimateNavBox.start({
      from: { x: -300 },
      to: { x: 0 },
    });
    setTimeout(() => {
      navApi.start({
        from: { opacity: 0 },
        to: { opacity: 1 },
      });
    }, 500);
  }

  function rendeCloseSidebar() {
    setAnimateNavBox.start({
      from: { x: 0 },
      to: { x: -300 },
    });
    navApi.start({
      from: { opacity: 1 },
      to: { opacity: 0 },
    });
    setSideBar(false);
  }

  useEffect(() => {
    if (!isTabletMobile) {
      setSideBar(false);
      setAnimateNavBox.start({
        from: { x: 0 },
        to: { x: -300 },
      });
    }
    if (!isTabletMobile && isHomeRoute && animateLogoState)
      navApi.start({
        to: { opacity: 1 },
      });

    if (!isTabletMobile && !isHomeRoute)
      navApi.start({
        to: { opacity: 1 },
      });
  }, [isTabletMobile, isHomeRoute, animateLogoState]);

  useEffect(() => {
    if (isTabletMobile) {
      navApi.start({
        from: { opacity: 1 },
        to: { opacity: 0 },
      });
      return;
    }
  }, [isTabletMobile]);

  useMemo(() => {
    if (!heroView)
      setAnimateHeader.start({
        from: { y: -100 },
        to: { y: 0 },
        config: {
          tension: 120,
          friction: 10,
        },
      });
  }, [heroView]);

  return (
    <animated.header
      style={animatedHeader}
      className={cn(
        !heroView && 'fixed left-0 right-0 top-0 w-full px-8 z-20 bg-black/100',
        heroView && 'relative',
        className,
        'section-container'
      )}
    >
      <nav className="flex justify-between items-center md:flex-col">
        <Link to="/">
          <animated.img
            style={animatedLogo}
            src="/logo.jpg"
            className="w-32"
            alt="Logo - Eloho Kennedy, A fullstack web developer"
          />
        </Link>

        <animated.ul
          style={isTabletMobile ? animatedNavBox : {}}
          className={`flex gap-10 ${
            isTabletMobile && 'bg-slate-900/100 '
          } items-center md:fixed md:h-lvh md:flex-col z-10 md:left-0 md:border-none  md:rounded-none md:p-20`}
        >
          {navSprings.map((prop, i) => {
            return (
              <NavLinks
                i={i}
                key={i}
                prop={prop}
                isHomeRoute={isHomeRoute}
                sideBar={sideBar}
                renderCloseSidebar={rendeCloseSidebar}
              />
            );
          })}
          {isTabletMobile && (
            <IoClose
              onClick={rendeCloseSidebar}
              className="absolute right-2 top-2 size-10 cursor-pointer"
            />
          )}
        </animated.ul>
        <AnimatedMenuIcon
          onClick={openSideBar}
          style={animatedMenuLogo}
          className="hidden cursor-pointer absolute size-12 xs:size-10 shadow-2xl shadow-slate-800 top-2/4 md:block left-4"
        />
      </nav>
      {sideBar && <Overlay renderOverlayAction={rendeCloseSidebar} />}
    </animated.header>
  );
}

function NavLinks({
  i,
  prop,
  isHomeRoute,
  sideBar,
  renderCloseSidebar,
}: {
  i: number;
  isHomeRoute: boolean;
  prop: { opacity: SpringValue<number> };
  sideBar: boolean;
  renderCloseSidebar: () => void;
}) {
  const [linkSpring, apiSpringLink] = useSpring(() => ({
    from: { transform: 'scale(1)' },
  }));
  const [animateContactBtn, setAnimateContactBtn] = useState(false);
  function renderNavLinkClick() {
    apiSpringLink.start({
      from: { transform: 'scale(1.2)' },
      to: { transform: 'scale(1)' },
      pause: animateContactBtn,
      config: {
        tension: 120,
        friction: 10,
      },
    });
    sideBar && renderCloseSidebar();
  }

  return (
    <animated.li
      onClick={() => renderNavLinkClick()}
      style={{ ...prop, ...linkSpring }}
    >
      {i === 0 && (
        <Link
          preventScrollReset
          to={isHomeRoute ? '#' : '/'}
          onClick={() => scrollSectionIntoView('#projects')}
          className={`${buttonVariants({ variant: 'ghost' })}`}
        >
          {isHomeRoute ? 'Projects' : 'Home'}
        </Link>
      )}
      {i === 1 && (
        <Link
          preventScrollReset
          onClick={() => scrollSectionIntoView('#about-me')}
          className={`${buttonVariants({ variant: 'ghost' })}`}
          to={navBarLinks[i].link}
        >
          {navBarLinks[i].title}
        </Link>
      )}
      {i === 2 && (
        <Link
          className={`${buttonVariants({ variant: 'ghost' })}`}
          to={navBarLinks[i].link}
          reloadDocument
        >
          {navBarLinks[i].title}
        </Link>
      )}
      {i === 3 && <ContactModal setAnimateContactBtn={setAnimateContactBtn} />}
    </animated.li>
  );
}
