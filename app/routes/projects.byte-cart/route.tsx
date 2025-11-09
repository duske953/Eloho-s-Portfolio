/* eslint-disable react/no-unescaped-entities */
import { MetaFunction } from '@remix-run/react';
import { IoCartOutline, IoMail } from 'react-icons/io5';
import {
  RiDashboard3Line,
  RiNextjsLine,
  RiNodejsLine,
  RiSmartphoneLine,
  RiTailwindCssLine,
} from 'react-icons/ri';
import {
  SiAuth0,
  SiExpress,
  SiMongodb,
  SiStripe,
  SiTypescript,
} from 'react-icons/si';
import ProjectHero from '../projects/components/ProjectHero';
import ProjectDescription from '../projects/components/ProjectDescription';
import ProjectFeatures from '../projects/components/ProjectFeatures';
import ProjectCarousel from '../projects/components/ProjectCarousel';
import ProjectOutcomes from '../projects/components/ProjectOutcomes';
import ProjectDemo from '../projects/components/ProjectDemo';
import ProjectCta from '../projects/components/ProjectCta';

const features = [
  {
    title: 'User Authentication',
    description:
      'Protects your store and gives buyers their own secure space for managing orders, tracking activity, and building trust.',
    icon: <SiAuth0 size={28} />,
  },
  {
    title: 'Stripe Integration',
    description:
      'Makes payment easy and reliable. Customers can pay online without stress, and you get your money directly.',
    icon: <SiStripe size={28} />,
  },
  {
    title: 'User Dashboard',
    description:
      'Gives each customer a simple view of their orders, payments, and saved items improving the overall shopping experience.',
    icon: <RiDashboard3Line size={28} />,
  },
  {
    title: 'Cart Functionality',
    description:
      'Enables buyers to add items, review their selections, and check out when ready. This leads to better conversions.',
    icon: <IoCartOutline size={28} />,
  },
  {
    title: 'Easy UI',
    description:
      'A clear and clean interface helps visitors browse faster and stay longer making it easier for them to make a purchase decision.',
    icon: <RiSmartphoneLine size={28} />,
  },
  {
    title: 'Real-time Email Notifications',
    description:
      'Keeps customers informed instantly. When they sign up, place an order, or complete a transaction.',
    icon: <IoMail size={28} />,
  },
];

const projectImg = [
  {
    title: 'Hompage',
    src: '/byte-cart/homepage.jpeg',
  },

  {
    title: 'Product Section',
    src: '/byte-cart/product.jpeg',
  },

  {
    title: 'Products Category Section',
    src: '/byte-cart/products.jpeg',
  },

  {
    title: 'Authentication Section',
    src: '/byte-cart/auth.jpeg',
  },

  {
    title: 'Cart Section',
    src: '/byte-cart/cart.jpeg',
  },

  {
    title: 'Cta section',
    src: '/byte-cart/cta.jpeg',
  },

  {
    title: 'Delete Account Section',
    src: '/byte-cart/delete.jpeg',
  },

  {
    title: 'Project Description Dection',
    src: '/byte-cart/description.jpeg',
  },

  {
    title: 'Footer Section',
    src: '/byte-cart/footer.jpeg',
  },

  {
    title: 'profile section',
    src: '/byte-cart/profile.jpeg',
  },

  {
    title: 'Payment Gateway Section',
    src: '/byte-cart/stripe.jpeg',
  },

  {
    title: 'About Us Section',
    src: '/byte-cart/about-us.jpeg',
  },
];

const outcomes = [
  {
    heading: 'Reach More Customers',
    text: 'Online access means people can find your tech store anytime, from anywhere.',
  },
  {
    heading: 'Sell While You Sleep',
    text: 'Orders can come in 24/7 without needing someone at the store.',
  },
  {
    heading: 'Build Customer Trust',
    text: 'Secure payments and order confirmation emails give buyers peace of mind.',
  },
  {
    heading: 'Keep Them Coming Back',
    text: 'Saved carts and user dashboards make shopping easier and encourage repeat purchases.',
  },
  {
    heading: 'Smarter Business Decisions',
    text: 'Track your top-selling products and customer habits to guide future sales and promotions.',
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: 'Bytecart | Buy Tech Products with Ease' },
    {
      name: 'description',
      content:
        'Shop quality tech at Bytecart. Find top laptops, smartphones, and accessories with fast delivery, trusted reviews, and clear pricing—built for real users.',
    },
    {
      name: 'keywords',
      content:
        'tech products online, buy electronics, gadget store, eCommerce tech site, online tech shop, bytecart',
    },
  ];
};

export default function Page() {
  return (
    <>
      <ProjectHero
        heading="Bring Your Tech Store Online, the Right Way"
        description="Bytecart makes it easy for tech customers to find products, place orders, and check out without friction."
        imgSrc="/byte-cart/homepage.png"
        imgAlt="Bytecart Ecommerce Website"
      >
        <RiNextjsLine />
        <SiTypescript />
        <RiTailwindCssLine />
        <RiNodejsLine />
        <SiExpress />
        <SiMongodb />
      </ProjectHero>
      <ProjectDescription heading="Why ByteCart Was Built">
        Many tech product retailers still rely only on their physical store to
        make sales. But in today’s world, people expect to find what they need
        online quickly and easily. When someone wants to buy a phone, laptop, or
        any gadget, they usually start with a quick search. If your store isn’t
        online, they’ll never find you. This is where Bytecart comes in. It
        helps tech-focused businesses build a strong online presence. Customers
        can browse available products, compare options, and place orders from
        anywhere. It removes the barrier of location and lets sellers meet
        buyers right where they are on their phones and laptops. With Bytecart,
        the buying experience is smooth, trustworthy, and designed to make it
        easier for people to say yes to what you sell.
      </ProjectDescription>
      <ProjectFeatures
        features={features}
        heading="What Makes Bytecart Work for Your Tech Business"
      ></ProjectFeatures>
      <ProjectCarousel projectImg={projectImg}></ProjectCarousel>
      <ProjectOutcomes
        heading="Results That Make Selling Easier"
        outcomes={outcomes}
      ></ProjectOutcomes>
      <ProjectDemo url="https://www.youtube.com/watch?v=YZ0K683hgqY"></ProjectDemo>
      <ProjectCta
        projectUrl="https://bytecart.vercel.app"
        githubUrl="https://github.com/duske953/Tech-Freak"
        nextProject="geocoords"
        cta="Experience Like a Real Shopper"
        heading="Turn visitors into buyers with a store that works for you"
        description="Let’s get your tech products in front of the right people. Ready when you are."
      ></ProjectCta>
    </>
  );
}
