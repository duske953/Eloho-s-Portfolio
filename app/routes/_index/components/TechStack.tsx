import { FaCss3, FaGit, FaHtml5, FaReact, FaStripe } from 'react-icons/fa';
import {
  RiJavascriptLine,
  RiNextjsLine,
  RiNodejsLine,
  RiTailwindCssLine,
} from 'react-icons/ri';
import {
  SiExpress,
  SiMongodb,
  SiSass,
  SiSocketdotio,
  SiTypescript,
} from 'react-icons/si';
import { MovingCards } from '~/components/ui/MovingCards';

const techStack = [
  {
    name: 'HTML',
    quote: <FaHtml5 />,
    title:
      'This is the tool that provides the structure for all your website content.',
  },

  {
    name: 'CSS',
    quote: <FaCss3 />,
    title:
      'This is the tool that makes your website look attractive and professional.',
  },

  {
    name: 'Tailwind CSS',
    quote: <RiTailwindCssLine />,
    title: 'This is the tool that speeds up creating clean, modern designs.',
  },

  {
    name: 'SASS',
    quote: <SiSass />,
    title:
      'This is the tool that helps create organized and flexible styles for your site.',
  },

  {
    name: 'Javascript',
    quote: <RiJavascriptLine />,
    title:
      'This is the tool that adds interactive features to keep visitors engaged.',
  },

  {
    name: 'Typescript',
    quote: <SiTypescript />,
    title: 'This is the tool that adds extra safety and clarity to your code.',
  },

  {
    name: 'React',
    quote: <FaReact />,
    title: 'This is the tool that builds fast, smooth user experiences.',
  },

  {
    name: 'Next.js',
    quote: <RiNextjsLine />,
    title:
      'This is the tool that helps make development faster and your website ranking higher on search engines.',
  },

  {
    name: 'Node.js',
    quote: <RiNodejsLine />,
    title:
      'This is the tool that runs your website’s behind-the-scenes operations.',
  },

  {
    name: 'Express.js',
    quote: <SiExpress />,
    title:
      'This is the tool that organizes data and connects your website’s parts.',
  },

  {
    name: 'MongoDB',
    quote: <SiMongodb />,
    title:
      'This is the tool that safely stores your website’s important information.',
  },

  {
    name: 'Git',
    quote: <FaGit />,
    title:
      'This is the tool that tracks all changes to keep your project organized.',
  },

  {
    name: 'Stripe',
    quote: <FaStripe />,
    title: 'This is the tool that makes online payments easy and secure.',
  },

  {
    name: 'Socket.IO',
    quote: <SiSocketdotio />,
    title:
      'This is the tool that enables live updates like chat and notifications.',
  },
];

export default function TechStack() {
  return (
    <section className="py-20 px-8">
      <div>
        <h2 className="uppercase text-4xl max-sm:text-2xl max-sm:leading-relaxed font-bold mb-10 text-gray-300 italic text-center">
          Tools That Power Your Website’s Success
        </h2>
        <MovingCards speed="fast" items={techStack}></MovingCards>
      </div>
    </section>
  );
}
