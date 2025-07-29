/* eslint-disable react/no-unescaped-entities */
import { MetaFunction } from '@remix-run/react';
import { IoLocation } from 'react-icons/io5';
import {
  RiDirectionLine,
  RiJavascriptLine,
  RiMapLine,
  RiMapPin2Line,
  RiPinDistanceLine,
} from 'react-icons/ri';
import { SiArcgis, SiSass, SiSimpleicons } from 'react-icons/si';
import ProjectHero from '../projects/components/ProjectHero';
import ProjectDescription from '../projects/components/ProjectDescription';
import ProjectFeatures from '../projects/components/ProjectFeatures';
import ProjectCarousel from '../projects/components/ProjectCarousel';
import ProjectOutcomes from '../projects/components/ProjectOutcomes';
import ProjectDemo from '../projects/components/ProjectDemo';
import ProjectCta from '../projects/components/ProjectCta';
import { FaSort } from 'react-icons/fa';

const features = [
  {
    icon: <IoLocation size={28} />,
    title: 'Accurate Location Detection',
    description:
      'Helps users find what they need based on where they are, no manual address typing.',
  },
  {
    icon: <RiDirectionLine size={28} />,
    title: 'Step-by-Step Directions',
    description:
      'Gives users easy-to-follow instructions to reach their destination confidently.',
  },
  {
    icon: <RiPinDistanceLine size={28} />,
    title: 'Distance Estimates',
    description:
      'Shows how far each location is, helping users choose based on convenience.',
  },
  {
    icon: <RiMapPin2Line size={28} />,
    title: 'Interactive Map View',
    description:
      'Users can see their location and the destination visually, reducing confusion.',
  },
  {
    icon: <FaSort size={28} />,
    title: 'Sort by Nearest or Furthest',
    description:
      'Lets users prioritize the most accessible options based on distance.',
  },
  {
    icon: <SiSimpleicons size={28} />,
    title: 'Simple, No-Clutter Interface',
    description:
      'Designed for ease of use, even for people who aren’t tech-savvy.',
  },
];

const projectImg = [
  {
    title: 'Homepage',
    src: '/geocoords/homepage.jpeg',
  },

  {
    title: 'Directions',
    src: '/geocoords/directions.jpeg',
  },

  {
    title: 'Places',
    src: '/geocoords/places.jpeg',
  },
];

const outcomes = [
  {
    heading: 'Faster Access to Essential Services',
    text: 'Users can quickly locate nearby gas stations, hotels, or other key spots without asking strangers or guessing.',
  },
  {
    heading: 'Improved User Confidence',
    text: 'Clear directions and accurate maps reduce the anxiety of navigating an unfamiliar area.',
  },
  {
    heading: 'Better First Impressions',
    text: 'For new visitors, the tool helps them settle in faster. No need to rely on outdated information or awkward interactions.',
  },
  {
    heading: 'Time-Saving Navigation',
    text: 'By showing distance and route options clearly, users make faster decisions and save time.',
  },
  {
    heading: 'Accessible on Any Device',
    text: 'Works on mobile or desktop, so users can find places on the go or from their rooms.',
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: 'Geocoords | Find Nearby Places Fast' },
    {
      name: 'description',
      content:
        'New in town? Geocoords helps you find gas stations, hotels, and more with turn-by-turn directions. No awkward questions, just quick results.',
    },
    {
      name: 'keywords',
      content:
        'find nearby places, location finder, gas stations near me, essential services map, local navigation tool',
    },
  ];
};

export default function Page() {
  return (
    <>
      <ProjectHero
        heading="Navigate Any City Like You’ve Lived There"
        description="New in town? Skip the awkward questions. Geocoords helps you find nearby essentials like gas stations and hotels with directions that just work"
        imgSrc="/geocoords/homepage.jpeg"
        imgAlt="GeoCoords Web App"
      >
        <RiJavascriptLine />
        <SiSass />
        <SiArcgis />
        <RiMapLine />
      </ProjectHero>
      <ProjectDescription heading="Why GeoCoords Was Built">
        When someone moves to a new area whether for work, school, or travel the
        first challenge is often finding essential services: gas stations,
        pharmacies, hotels, or ATMs. Not everyone is comfortable asking
        strangers for directions. Some people just want to quietly find what
        they need and get on with their day. Geocoordinates solves this. The web
        app helps users discover nearby places based on their current location.
        It removes the stress of being lost or unsure. With just a few taps,
        users can find the closest essential services, get step-by-step
        directions, view distance estimates and route options, see everything on
        a map without needing to download an app. It's designed with a clean
        layout and no unnecessary steps, so even someone unfamiliar with tech
        can use it. Whether you're in a hurry or just want to plan ahead,
        Geocoordinates gives you control and clarity. For local businesses, it
        also means being discoverable by people nearby increasing foot traffic
        and visibility.
      </ProjectDescription>
      <ProjectFeatures
        features={features}
        heading="Features That Help You Find Your Way"
      ></ProjectFeatures>
      <ProjectCarousel projectImg={projectImg}></ProjectCarousel>
      <ProjectOutcomes
        heading="Helping Users Navigate with Confidence"
        outcomes={outcomes}
      ></ProjectOutcomes>
      <ProjectDemo url="https://youtu.be/IxJxwV2Wjfg"></ProjectDemo>
      <ProjectCta
        projectUrl="https://geocoordinates.netlify.app/"
        githubUrl="https://github.com/duske953/geocoordinates"
        nextProject="anonymo"
        cta="Find Nearyby Places"
        heading="Find what you need, right when you need it."
        description="No need to wander or ask around. With just a few clicks, you’ll know exactly where to go."
      ></ProjectCta>
    </>
  );
}
