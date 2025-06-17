import type { MetaFunction } from '@remix-run/node';
import Hero from './components/Hero';
import WebServices from './components/WebServices';
import { Porfolio } from './components/Portfolio';
import WebsitesFacts from './components/WebsitesFacts';
import PorfolioMarquee from './components/PorfolioMarquee';
import Faq from './components/Faq';
import TechStack from './components/TechStack';
import PainPoints from './components/PaintPoints';
import Cta from '~/components/Cta';
import Navbar from '~/components/Navbar';
import ContactModal from '~/components/ContactModal';

export const meta: MetaFunction = () => {
  return [
    { title: 'Eloho Kennedy – Web Developer for Businesses' },

    {
      name: 'description',
      content:
        'I build websites that don’t just look good — they work. From design to backend, I help businesses keep visitors engaged and coming back.',
    },
    {
      name: 'keywords',
      content:
        'web developer, business website, frontend developer, backend developer, Next.js, Node.js, website maintenance, Eloho Kennedy',
    },
    {
      name: 'author',
      content: 'Eloho Kennedy',
    },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar className="max-md:pr-0" />
      <main className="section-container">
        <Hero />
        <WebsitesFacts />
        <PainPoints />
        <WebServices />
        <PorfolioMarquee />
        <Porfolio />
        <Faq />
        <TechStack />
        <Cta
          heading="Get a website that actually helps your business."
          description="Tell me your goals, and I’ll take care of building a website that
            delivers."
        >
          <ContactModal btnText="Let's Talk" />
        </Cta>
      </main>
    </>
  );
}
