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
    { title: 'Your business deserves more than a pretty homepage.' },

    {
      name: 'description',
      content:
        'Professional websites built for business owners. Be found online, get more inquiries, and grow without the tech overwhelm. Start with Eloho today.',
    },
    {
      name: 'keywords',
      content:
        'web development for local business, small business websites, affordable website design, local business web developer, International website builder, website builder Nigeria, Eloho web services',
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
