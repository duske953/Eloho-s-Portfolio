import type { MetaFunction } from '@remix-run/node';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import WebServices from './components/WebServices';
import { Porfolio } from './components/Portfolio';
import AboutMe from './components/AboutMe';

export const meta: MetaFunction = () => {
  return [
    { title: "I'm Eloho Kennedy | A Full-stack web developer" },

    {
      name: 'description',
      content:
        "Welcome to Eloho Kennedy's portfolio, showcasing a variety of web development projects including hotel booking website, navigation app, anonymous chat, and an eCommerce platform. Skilled in the MERN stack. Explore my work and discover how I create efficient and user-friendly web applications.",
    },
    {
      name: 'keywords',
      content:
        'Eloho Kennedy, web developer portfolio, full-stack developer, MERN stack, React developer, Node.js developer, MongoDB, Express.js, frontend development, backend development, JavaScript projects, hotel booking website, geocoordinates web app, anonymous chat application, Tech-freak eCommerce, React projects, developer projects, responsive web design, SEO optimization, modern web apps, Next.js, Tailwind CSS, Socket.IO',
    },
    {
      name: 'author',
      content: 'Eloho Kennedy',
    },
  ];
};

export default function Index() {
  return (
    <main className="section-container">
      <Hero />
      <TechStack />
      <WebServices />
      <Porfolio />
      <AboutMe />
    </main>
  );
}
