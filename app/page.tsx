import Hero from './routes/_index/components/Hero';
import WebsitesFacts from './routes/_index/components/WebsitesFacts';
import PainPoints from './routes/_index/components/PainPoints';
import WebServices from './routes/_index/components/WebServices';
import PorfolioMarquee from './routes/_index/components/PorfolioMarquee';
import { Porfolio } from './routes/_index/components/Portfolio';
import Testimonial from './routes/_index/components/Testimonial';
import Faq from './routes/_index/components/Faq';
import TechStack from './routes/_index/components/TechStack';
import Cta from './components/Cta';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';

export default function Home() {
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
        <Testimonial />
        <Faq />
        <TechStack />

        <Cta
          heading="Get a website that's fast, secure, and built to last"
          description="Tell me what you need, and I'll build it right - fast, secure, and reliable."
        >
          <ContactModal
            btnText="Let's Talk"
            className="bg-blue-600 hover:bg-blue-700 rounded-full px-10 py-7 text-lg"
          />
        </Cta>
      </main>
    </>
  );
}
