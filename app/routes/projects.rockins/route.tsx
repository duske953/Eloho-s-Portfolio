/* eslint-disable react/no-unescaped-entities */
import { MetaFunction } from '@remix-run/react';
import { FaBookmark, FaCreditCard, FaLock, FaStar } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import {
  RiDashboard2Line,
  RiJavascriptLine,
  RiNextjsLine,
  RiSmartphoneLine,
  RiTailwindCssLine,
} from 'react-icons/ri';
import { SiMongodb, SiSimpleicons, SiTypescript } from 'react-icons/si';

import ProjectHero from '../projects/components/ProjectHero';
import ProjectDescription from '../projects/components/ProjectDescription';
import ProjectFeatures from '../projects/components/ProjectFeatures';
import ProjectCarousel from '../projects/components/ProjectCarousel';
import ProjectOutcomes from '../projects/components/ProjectOutcomes';
import ProjectDemo from '../projects/components/ProjectDemo';
import ProjectCta from '../projects/components/ProjectCta';

const features = [
  {
    icon: <FaLock size={28} />,
    title: 'Secure Logins',
    description:
      'Guests can create personal accounts to safely manage bookings, encouraging repeat visits and trust.',
  },
  {
    icon: <FaCreditCard size={28} />,
    title: 'Seamless Payments',
    description:
      'Integrated with Stripe for smooth online transactions, reducing friction and speeding up conversions.',
  },
  {
    icon: <FaStar size={28} />,
    title: 'Room Reviews',
    description:
      "Reviews help new guests make confident decisions, while good feedback builds your hotel's reputation.",
  },
  {
    icon: <FaBookmark size={28} />,
    title: 'Bookmark Favorites',
    description:
      'Visitors can save rooms they like, making it easy to return and book later without searching again.',
  },
  {
    icon: <IoMail size={28} />,
    title: 'Real-Time Emails',
    description:
      'Automated emails confirm bookings and actions, keeping guests informed while saving you time.',
  },
  {
    icon: <RiDashboard2Line size={28} />,
    title: 'User Dashboard',
    description:
      'Every guest gets a simple dashboard to view and manage their bookings—no need for extra staff support.',
  },
  {
    icon: <RiSmartphoneLine size={28} />,
    title: 'Mobile-Ready Design',
    description:
      'Optimized for all screen sizes so guests can browse and book on the go without frustration.',
  },
  {
    icon: <SiSimpleicons size={28} />,
    title: 'Fast & Simple UI',
    description:
      'The interface is clean and distraction-free, helping guests act fast without feeling overwhelmed.',
  },
];

const projectImg = [
  {
    title: 'Homepage',
    src: '/rockins/hero.svg',
  },

  {
    title: 'Rooms Section',
    src: '/rockins/rooms.jpeg',
  },

  {
    title: 'Reviews Section',
    src: '/rockins/review.jpeg',
  },

  {
    title: 'Room Section',
    src: '/rockins/room.jpeg',
  },

  {
    title: 'Signup Section',
    src: '/rockins/signup.jpeg',
  },

  {
    title: 'Account Profile Section',
    src: '/rockins/profile.jpeg',
  },

  {
    title: 'Payment Gateway Section',
    src: '/rockins/stripe.jpeg',
  },

  {
    title: 'Featured Section',
    src: '/rockins/trending.jpeg',
  },

  {
    title: 'Delete Account Section',
    src: '/rockins/delete-account.jpeg',
  },

  {
    title: 'About-us Section',
    src: '/rockins/about-us.jpeg',
  },

  {
    title: 'Featured Section',
    src: '/rockins/featured.jpeg',
  },

  {
    title: 'Login Section',
    src: '/rockins/login.jpeg',
  },

  {
    title: 'Bookmarks Section',
    src: '/rockins/bookmarks.jpeg',
  },
];

const outcomes = [
  {
    heading: 'More Visibility',
    text: 'The hotel is now searchable on Google — making it easy for travelers to find and book rooms without walking around or asking.',
  },
  {
    heading: 'Increased Bookings',
    text: 'Visitors can now reserve rooms directly online, leading to faster decisions and more confirmed stays.',
  },
  {
    heading: 'Automated Emails',
    text: 'Booking confirmations and other important messages are sent automatically, reducing manual work for staff.',
  },
  {
    heading: 'Return Guests',
    text: 'Saved bookmarks and account logins make it easy for returning guests to rebook.',
  },
  {
    heading: 'Streamlined Operations',
    text: 'A well-designed dashboard helps the hotel team manage bookings and user details with minimal effort.',
  },
  {
    heading: 'Better First Impressions',
    text: 'A polished design reflects professionalism and builds trust at first glance.',
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: ' Rockins Hotel Booking Platform | Browse & Book Rooms Online' },
    {
      name: 'description',
      content:
        'Rockins makes hotel booking simple. View rooms, read reviews, and reserve online. No calls, no stress — just tap, book, stay.',
    },
    {
      name: 'keywords',
      content:
        'hotel booking, book rooms online, hotel website, hotel finder, room reservation, hotel business online Rockins Hotel',
    },
  ];
};

export default function Page() {
  return (
    <>
      <ProjectHero
        heading="Book a Room Before You Even Arrive"
        description="Find and book rooms fast no calls, no walking around."
        imgSrc="/rockins/hero.svg"
        imgAlt="Rockins Hotel Website"
      >
        <RiNextjsLine />
        <RiTailwindCssLine />
        <SiMongodb />
        <RiJavascriptLine />
        <SiTypescript />
      </ProjectHero>
      <ProjectDescription heading="Why Rockins Was Built">
        A lot of hotel businesses still operate entirely offline. They depend on
        people walking in or hearing about them by word of mouth. But in today’s
        world, that limits your reach. If someone is new to town and looking for
        a place to stay, chances are they’ll check online first not roam around
        asking for directions. This creates a real problem for hotels that
        aren't visible online. They lose out on potential guests, not because
        their service isn’t good, but because no one knows they exist. Even
        worse, many small hotel owners think building a website is either too
        expensive or too complex. Rockins was built to fix that. It gives hotel
        businesses a professional online presence. The kind that works even when
        you're asleep. Here’s what it does It shows up on Google Maps. So anyone
        searching for hotels nearby can find it. It displays rooms clearly.
        Guests can see exactly what they're booking — pictures, prices, and
        amenities. It handles bookings online. No need for long calls or
        in-person visits. The booking system is built in. It accepts secure
        payments. So the business doesn’t lose serious customers due to
        complicated payment options. All this comes together in a simple,
        mobile-friendly website that makes it easy for people to find and book
        rooms fast.
      </ProjectDescription>

      <ProjectFeatures
        heading="What Makes Rockins Work for You"
        features={features}
      ></ProjectFeatures>

      <ProjectCarousel projectImg={projectImg}></ProjectCarousel>

      <ProjectOutcomes
        heading="What This Website Solves for Hotels"
        outcomes={outcomes}
      ></ProjectOutcomes>

      <ProjectDemo url='https://youtu.be/tSCUbwa_mdQ"'></ProjectDemo>
      <ProjectCta
        githubUrl="https://github.com/duske953/HOTEL"
        projectUrl="https://rockins.vercel.app"
        nextProject="byte-cart"
        cta="Explore the Booking Experience"
        heading="Let Your Website Work While You Rest"
        description="Turn visitors into customers with a site that does the heavy lifting
            even while you're asleep."
      ></ProjectCta>
    </>
  );
}
