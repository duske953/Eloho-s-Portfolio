/* eslint-disable react/no-unescaped-entities */
import { MetaFunction } from '@remix-run/react';
import { IoEyeOff, IoLogOut, IoTimer } from 'react-icons/io5';
import {
  RiNodejsLine,
  RiPencilLine,
  RiReactjsLine,
  RiShuffleLine,
} from 'react-icons/ri';
import { SiSass, SiSocketdotio } from 'react-icons/si';
import ProjectHero from '../projects/components/ProjectHero';
import ProjectDescription from '../projects/components/ProjectDescription';
import ProjectFeatures from '../projects/components/ProjectFeatures';
import ProjectCarousel from '../projects/components/ProjectCarousel';
import ProjectOutcomes from '../projects/components/ProjectOutcomes';
import ProjectDemo from '../projects/components/ProjectDemo';
import ProjectCta from '../projects/components/ProjectCta';
import { FaClock } from 'react-icons/fa';

const features = [
  {
    icon: <IoEyeOff />,
    title: 'Anonymous Chat',
    description:
      'Users can talk freely without revealing their identity no names, no profiles, just conversations.',
  },
  {
    icon: <IoLogOut />,
    title: 'No Sign-Up Needed',
    description:
      'Reduces friction. Anyone can start chatting immediately, which increases engagement and trust.',
  },
  {
    icon: <IoTimer />,
    title: 'One-Time Session Messages',
    description:
      'Messages disappear once the browser session ends. This ensures full privacy and reduces data concerns.',
  },
  {
    icon: <RiShuffleLine />,
    title: 'Random Usernames',
    description:
      'Each user gets a fun, non-identifiable name helping people engage without revealing anything personal.',
  },
  {
    icon: <RiPencilLine />,
    title: 'Typing Indicator',
    description:
      'Shows when the other person is typing, making the chat feel more human and real-time.',
  },

  {
    icon: <FaClock />,
    title: 'Timestamps',
    description:
      'Each message is time-stamped to provide context while maintaining full anonymity.',
  },
];

const projectImg = [
  {
    title: 'Homepage',
    src: '/anonymo/homepage.jpeg',
  },
];

const outcomes = [
  {
    heading: 'Real Conversations Without Pressure',
    text: 'Users can speak freely without fear of judgment, making the platform a safe space for honest communication.',
  },
  {
    heading: 'Zero Data Liability',
    text: 'Since no data is stored, you don’t carry the burden of securing or managing user information.',
  },
  {
    heading: 'Trust by Design',
    text: 'Anonymity and privacy are built into the system, making it easier to earn user trust and engagement.',
  },
  {
    heading: 'Effortless Onboarding',
    text: 'With no signup process, people can start chatting instantly, lowering the barrier to entry.',
  },
  {
    heading: 'Lightweight and Fast',
    text: 'The app runs quickly and smoothly, giving users a seamless, low-friction experience from any device.',
  },
  {
    heading: 'Ideal for Sensitive Use Cases',
    text: 'Useful in scenarios where users need discretion—like support groups, mental health spaces, or idea sharing.',
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: 'Anonymo | Chat Freely, Stay Anonymous' },
    {
      name: 'description',
      content:
        'Talk to strangers without fear. No accounts, no tracking. Your messages disappear after each session — pure, private chats.',
    },
    {
      name: 'keywords',
      content:
        'anonymous chat, secure chat app, private messaging, no login chat, chat without data, real-time chat app',
    },
  ];
};

export default function Page() {
  return (
    <>
      <ProjectHero
        heading="Speak Freely. No Logins. No Records."
        description="Chat freely with strangers no names, no logins, no pressure. Just real, anonymous conversations."
        imgSrc="/anonymo/homepage.jpeg"
        imgAlt="Anonymo Chat App"
      >
        <RiReactjsLine />
        <SiSass />
        <SiSocketdotio />
        <RiNodejsLine />
      </ProjectHero>
      <ProjectDescription heading="Why Anonymo Was Built">
        Not everyone wants to be seen or remembered online and that’s okay.
        Sometimes, you just need a space to say what’s on your mind without the
        fear of being judged or identified. Whether it’s venting, sharing a
        thought, or having a random chat, people value privacy more than ever.
        But most chat apps don’t offer that. They collect data, track activity,
        and keep records often without your full awareness. That’s where Anonymo
        comes in. It’s a web app that gives you a true anonymous chat
        experience: No sign-ups, no tracking, no stored data. Your identity
        stays hidden even from the person you're chatting with. Messages exist
        only in your browser and disappear when the session ends. There’s no
        link back to you, and nothing gets saved anywhere You’re free to talk,
        express, and connect knowing your privacy stays intact from start to
        finish. Anonymo doesn’t just promise anonymity, it’s built on it.
      </ProjectDescription>
      <ProjectFeatures
        features={features}
        heading="Features That Protect Your Privacy"
      ></ProjectFeatures>
      <ProjectCarousel projectImg={projectImg}></ProjectCarousel>
      <ProjectOutcomes
        heading="Outcomes That Put Your Privacy First"
        outcomes={outcomes}
      ></ProjectOutcomes>
      <ProjectDemo url="https://youtu.be/oljFL41ISN8"></ProjectDemo>
      <ProjectCta
        projectUrl="https://anonymo.vercel.app/"
        githubUrl="https://github.com/duske953/chatapplication-frontend"
        nextProject="music-snip"
        cta="Start Chatting Now"
        heading="Create space for honest conversations no accounts, no tracking."
        description="Start a chat, say what’s on your mind, and leave without a trace. Your privacy is built in."
      ></ProjectCta>
    </>
  );
}
