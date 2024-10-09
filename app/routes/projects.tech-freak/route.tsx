import { List, ListBox } from '~/components/List';
import ProjectOverView from '../projects/components/ProjectOverview';
import { FaNode, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiReactrouter, SiSass } from 'react-icons/si';
import MediaPlayer from '~/components/Media';
import ProjectConclusion from '../projects/components/ProjectConclusion';
import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    {
      title:
        'Tech-Freak - Your One-Stop platform for Laptops, Smartphones, and Tech Gadgets',
    },
    {
      name: 'description',
      content:
        'Tech-Freak is an eCommerce platform dedicated to tech enthusiasts. Browse and buy the latest laptops, smartphones, and tech gadgets with secure payments.',
    },
    {
      name: 'keywords',
      content:
        'Tech-Freak, eCommerce, tech store, buy laptops, buy smartphones, tech gadgets, online tech shop, tech products, secure payments, product reviews, latest tech devices, tech gadgets store, online tech shopping, electronics store, tech accessories, tech freaks, mobile-friendly eCommerce, tech deals, React eCommerce site, laptops online, smartphone deals',
    },
  ];
};

export default function Page() {
  return (
    <>
      <ProjectOverView
        title="Tech-Freak – eCommerce Platform for Tech Products"
        description="Tech-Freak is an eCommerce platform built specifically for tech enthusiasts, offering a wide range of products like laptops, smartphones, and earphones. The web application delivers a smooth shopping experience, allowing users to browse, review, and purchase tech products with ease. The goal was to create a user-friendly platform where customers can easily browse, compare, and purchase their favorite tech items."
        imgSrc="/tech-freak/hero.svg"
      />
      <ListBox text="Core Problems">
        <List
          title="Limited Access to Tech Products"
          description="Tech enthusiasts often face difficulty finding specific or niche tech products in one place. The app provides a wide range of products from laptops to earphones, all available in a single platform."
        />

        <List
          title="Complicated Checkout and Payment Processes"
          description="Many online platforms have confusing or lengthy checkout processes. Tech-Freak simplifies this with Stripe integration, ensuring quick, secure payments without unnecessary steps."
        />

        <List
          title="Time Efficiency"
          description="Shopping online saves users time compared to visiting multiple physical stores. Tech-Freak allows users to quickly find and purchase products with a few clicks."
        />
      </ListBox>
      <ListBox text="Core Stack">
        <List
          icon={<FaNode />}
          title="Node.js"
          description="Serving as the runtime environment, Node.js allows the application to run JavaScript on the server, ensuring efficient communication between the frontend and backend."
        />

        <List
          icon={<SiExpress />}
          title="Express.js"
          description="Used to create the server-side API, Express.js handles requests and responses, enabling features like user authentication and product management."
        />

        <List
          icon={<SiMongodb />}
          title="MongoDB"
          description="This is the database where all product information, user accounts, and transaction data are stored, providing the necessary backend support for data management."
        />

        <List
          icon={<FaReact />}
          title="React.js"
          description="The frontend of the application is built using React.js, which allows for a dynamic and interactive user interface, improving the shopping experience."
        />

        <List
          icon={<SiReactrouter />}
          title="React Router"
          description="This library manages the navigation within the application, allowing users to move between different sections (like product pages and the shopping cart) without page reloads."
        />
        <List
          icon={<SiSass />}
          title="Sass/SCSS"
          description="This preprocessor is used for styling the application, allowing for more efficient and organized CSS development. It enables the use of variables, nested rules, and mixins, which helps maintain a clean and manageable stylesheet as the project scales."
        />
      </ListBox>
      <ListBox text="Functionality and Features">
        <List
          title="User Authentication"
          description="The application supports user authentication features, including logging in, signing up, and resetting passwords. This ensures secure access to user accounts."
        />

        <List
          title="Stripe Integration"
          description="For efficient payment processing, the app integrates with Stripe, allowing users to make secure transactions for their purchases."
        />

        <List
          title="User Dashboard"
          description="Users have access to a personalized dashboard where they can manage their accounts and update their profile information."
        />

        <List
          title="Cart Functionality"
          description="The application includes a shopping cart feature that allows users to view all products they’ve added to their cart, facilitating easy management of their selections before checkout."
        />

        <List
          title="Real-Time Emails"
          description="Users receive real-time email notifications for key actions such as order confirmations, password resets, and account activity, enhancing communication and user engagement."
        />
      </ListBox>
      <ListBox text="Challenges faced">
        <p className="text-lg leading-loose text-gray-200/100">
          The biggest challenge in building this eCommerce web application was
          integrating all the different technologies to create the final
          product. I had to manually handle most aspects, including implementing
          user authentication with JWT (JSON Web Tokens) for secure login and
          session management. Combining these various technologies—like React,
          Express, MongoDB, and Stripe—required careful coordination, but it was
          a valuable learning experience. It gave me a deeper understanding of
          how each core technology operates and how to use them effectively to
          bring the final product together.
        </p>
      </ListBox>

      <section className="flex flex-col items-center py-12">
        <h2 className="font-bold text-3xl uppercase mb-4">Tech-Freak Demo</h2>
        <MediaPlayer url="https://www.youtube.com/watch?v=0A0kSyIBTA8" />
      </section>
      <ProjectConclusion
        conclusion="This eCommerce web application for tech products showcases my ability to build a full-stack application from scratch using the MERN stack, React Router, and Sass/SCSS for styling. By integrating features such as user authentication with JWT and Stripe for payments, I gained a comprehensive understanding of how these technologies work together. The challenges I faced throughout the process helped me improve my problem-solving skills, and the final product is a functional, user-friendly platform that delivers a smooth online shopping experience. I'm excited to continue building upon this project and applying these learnings to future endeavors"
        projectLink="https://tech-freak.vercel.app/"
        githubLink="https://github.com/duske953/ecommerce-frontend"
        nextProjectLink="/projects/geocoordinates"
      />
    </>
  );
}
