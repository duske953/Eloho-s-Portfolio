// /* eslint-disable react/no-unescaped-entities */
import { MetaFunction } from '@remix-run/react';
import { IoTrendingUp } from 'react-icons/io5';
import { RiLayout2Line, RiNextjsLine } from 'react-icons/ri';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import ProjectHero from '../projects/components/ProjectHero';
import ProjectDescription from '../projects/components/ProjectDescription';
import ProjectFeatures from '../projects/components/ProjectFeatures';
import ProjectCarousel from '../projects/components/ProjectCarousel';
import ProjectOutcomes from '../projects/components/ProjectOutocomes';
import ProjectDemo from '../projects/components/ProjectDemo';
import ProjectCta from '../projects/components/ProjectCta';
import { FaHeart, FaNapster, FaPlay, FaSearch } from 'react-icons/fa';

const features = [
  {
    icon: <FaPlay />,
    title: '30-second song previews',
    description:
      'Quickly hear the best part of any song before deciding if you like it.',
  },
  {
    icon: <FaSearch />,
    title: 'Search by artist, album, or track',
    description: 'Find songs or artists you like without scrolling endlessly.',
  },
  {
    icon: <IoTrendingUp />,
    title: "See what's trending",
    description:
      'Get a list of popular songs and albums people are listening to right now.',
  },
  {
    icon: <FaHeart />,
    title: 'Save your favorites',
    description:
      'Easily mark songs you enjoy so you can come back to them later.',
  },
  {
    icon: <RiLayout2Line />,
    title: 'Simple layout',
    description:
      'Everything is easy to use and understand, no need to figure anything out.',
  },
];

const projectImg = [
  {
    title: 'Homepage',
    src: '/music-snip/homepage.svg',
  },

  {
    title: 'Albums Details',
    src: '/music-snip/album.jpeg',
  },

  {
    title: 'Trendig Albums',
    src: '/music-snip/albums.jpeg',
  },

  {
    title: 'Trending Songs',
    src: '/music-snip/songs.jpeg',
  },
];

const outcomes = [
  {
    heading: 'Faster song discovery',
    text: 'Users quickly know if they like a song without wasting time listening to full tracks.',
  },
  {
    heading: 'More engagement',
    text: 'Short previews encourage users to explore more songs in less time.',
  },
  {
    heading: 'Better decision-making',
    text: 'Helps users build playlists or music collections based on what they actually enjoy.',
  },
  {
    heading: 'Lower bounce rate',
    text: 'Simple layout keeps users on the site longer without feeling lost or overwhelmed.',
  },
  {
    heading: 'Repeat visits',
    text: 'Users come back to check new trending tracks and listen to saved favorites.',
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: ' Music-Snip | Preview Songs in 30 Seconds' },
    {
      name: 'description',
      content:
        'Don’t waste time listening to full tracks. Music-Snip plays the catchiest part of songs so you decide instantly if it’s your vibe.',
    },
    {
      name: 'keywords',
      content:
        'music preview app, 30 second song clips, discover music fast, listen before saving, short song previews, quick music discovery',
    },
  ];
};

export default function Page() {
  return (
    <>
      <ProjectHero
        heading="Discover Music in Moments."
        description="Preview songs, explore top charts, and save your favorites all in one place."
        imgSrc="/music-snip/homepage.svg"
        imgAlt="Discover Music in Moments"
      >
        <RiNextjsLine />
        <SiTypescript />
        <SiTailwindcss />
        <FaNapster />
      </ProjectHero>
      <ProjectDescription heading="Why Music-Snip Was Built">
        In today’s fast-paced world, most people don’t have the time or the
        patience to sit through entire tracks just to figure out if they like a
        song. Scrolling through endless libraries, previewing intros that don’t
        reflect the true feel of the song, or getting stuck with music that
        doesn’t match their mood can be frustrating. Music-Snip solves this
        problem by cutting to the chase. It plays the most engaging 30 seconds
        of each song, the part that usually hooks listeners so users can
        instantly tell if the track is worth saving, sharing, or skipping.
        Whether someone’s trying to quickly curate a playlist, discover new
        tracks, or just get a feel for what&#39;s trending, Music-Snip makes the
        experience quick, smooth, and fun. No fluff. Just the music highlights
        that matter. For music businesses and creators, this means more
        engagement, faster discovery, and a better shot at landing in someone’s
        go-to playlist.
      </ProjectDescription>
      <ProjectFeatures
        features={features}
        heading="Everything That Makes Music-Snip Work"
      ></ProjectFeatures>
      <ProjectCarousel projectImg={projectImg}></ProjectCarousel>
      <ProjectOutcomes
        heading="How Music-Snip Helps You Decide Faster"
        outcomes={outcomes}
      ></ProjectOutcomes>
      <ProjectDemo url="https://youtu.be/t6MPgJzveXg"></ProjectDemo>
      <ProjectCta
        nextProject="rockins"
        githubUrl="https://github.com/duske953/preview-music"
        cta="Try a quick preview"
        heading="Find songs you’ll actually enjoy without the endless scrolling."
        description="No need to listen to full tracks just to decide. Get a quick feel in under 30 seconds and move on if it’s not for you."
      ></ProjectCta>
    </>
  );
}
