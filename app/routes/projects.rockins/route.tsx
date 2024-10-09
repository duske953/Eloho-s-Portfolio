import { BiLogoMongodb } from 'react-icons/bi';
import { RiNextjsLine, RiTailwindCssLine } from 'react-icons/ri';
import MediaPlayer from '~/components/Media';
import ProjectOverView from '../projects/components/ProjectOverview';
import { List, ListBox } from '~/components/List';
import ProjectConclusion from '../projects/components/ProjectConclusion';
import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Rockins Hotel - Online Room Booking Experience' },
    {
      name: 'description',
      content:
        'Rockins Hotel offers a hassle-free online room booking experience with real-time availability, secure payments, and user-friendly features. Book your stay effortlessly and manage your reservations with ease through our optimized and secure platform.',
    },
    {
      name: 'keywords',
      content:
        'Rockins Hotel, online room booking, hotel reservations, book hotel rooms, real-time availability, secure hotel booking, Stripe payments, hotel reviews, user dashboard, hotel management, hotel booking platform, best hotel booking website, hotel booking app, hotel deals, room availability, mobile-friendly hotel booking, optimized hotel website, hotel booking security, hotel SEO, easy hotel booking',
    },
  ];
};

export default function Page() {
  return (
    <>
      <ProjectOverView
        title=" Rockins: Efficient Hotel Booking Experience"
        description="A hotel booking website, Rockins, was created to make it easier for people to book rooms online instead of physically going to the hotel. The goal is to give users a simple way to view available rooms and book them in just a few clicks. The purpose of this website is to allow users to book hotel rooms easily and quickly. It has an intuitive design, so even first-time users can navigate without confusion. The site shows a list of rooms, and users can immediately see if they are available, which saves them time."
        imgSrc="/rockins/hero.svg"
      />
      <ListBox text="Core problems solved">
        <List
          title="Complicated Booking Process"
          description="Booking a hotel room can be confusing on many websites because there are
                  too many steps or the design is hard to follow. With Rockins, the
                booking process is made simple and clear. Users can choose a room, check
                its availability, and book it without needing to go through complicated
                forms or pages."
        />
        <List
          title="Lack of Real-Time Availability"
          description="Some hotel websites don't show if a room is available right away, 
                leading to frustration when users try to book a room that's already taken. Rockins 
                solves this by displaying real-time availability. If a room is booked, 
                it immediately reflects that on the website, so users won’t waste time."
        />
        <List
          title="Poor Mobile Experience"
          description="Many people want to book rooms on their phones, 
                but some hotel websites don’t work well on mobile devices. 
                Rockins solves this by having a mobile-friendly design. 
                Whether a user is on a phone, tablet, or computer, 
                they will have the same smooth experience."
        />
      </ListBox>

      <ListBox text="Core stack">
        <List
          icon={<RiNextjsLine className="size-8" />}
          title="Next.js"
          description="Next.js is a popular framework for building fast, dynamic websites. 
                I used it to make sure that the website loads quickly,
                 It also helps with server-side rendering, which improves performance and SEO"
        />

        <List
          icon={<RiTailwindCssLine className="size-8" />}
          title="Tailwind CSS"
          description="For the design, I used Tailwind CSS, a utility-first CSS framework. 
                It allowed me to quickly style the website without writing a lot of custom CSS. 
                This helped create a clean and modern design while keeping the code organized and efficient."
        />

        <List
          icon={<BiLogoMongodb className="size-8" />}
          title="MongoDB"
          description="To store all the data, such as room availability and bookings, I used MongoDB. 
            It’s a database that can handle large amounts of data and is flexible enough 
            to grow with the website as more users book rooms. It also works well with other technologies 
            I used in the project."
        />
      </ListBox>

      <ListBox text="Functionality and Features">
        <List
          title="User Authentication"
          description="Users can create an account, log in, and reset their password if needed. 
              This allows them to securely manage their bookings and personal information."
        />
        <List
          title="Stripe Integration for Payment"
          description="To handle payments, I integrated Stripe, a reliable and secure payment gateway. 
              This allows users to pay for their room bookings directly through the website"
        />
        <List
          title="Add Reviews for Rooms"
          description="After staying in a room, users can leave reviews to help others make informed decisions. 
              This feature encourages feedback and improves the overall user experience"
        />
        <List
          title="Bookmark Rooms for Future Use"
          description="Users can save or bookmark rooms they like, so they can easily find and book them later. 
              This helps them keep track of their favorite options without needing to search again."
        />
        <List
          title="Real-Time Emails"
          description="For important actions like booking a room, resetting a password, 
              or confirming an account, users receive real-time email notifications. 
              This keeps them updated on their activities."
        />
        <List
          title="User Dashboard"
          description="Each user has a personal dashboard where they can see the rooms they have booked. 
              The dashboard also allows them to view and edit their profile, 
              such as changing their profile picture or name"
        />
        <List
          title="Account Deletion"
          description="If a user no longer wants to use the website, 
              they have the option to delete their account along with all their data."
        />
      </ListBox>

      <div className="py-12">
        <h2 className="mb-7 font-bold text-3xl">Perfomance Optimization</h2>
        <div className="flex flex-col gap-8">
          <p className="text-lg leading-loose text-gray-200/100">
            I ensured that every page is optimized for search engines. This
            includes using proper meta tags, keywords, and descriptions so the
            site is more likely to appear in search results. This helps
            potential customers easily find the website when looking for hotel
            bookings.
          </p>

          <p className="text-lg leading-loose text-gray-200/100">
            Images are optimized to load quickly without sacrificing quality. I
            used lazy loading to ensure that images only load when they are
            visible on the screen, which improves page load times. I also
            compressed the images to reduce file size, ensuring the website
            stays fast, even with high-quality visuals.
          </p>
        </div>
      </div>

      <ListBox text="Security features">
        <List
          title="Rate limiting"
          description="  I set up rate limiting to prevent users from making too many requests in a short amount of time. 
              This helps avoid spam and ensures the website performs well for all users"
        />
        <List
          title="Room Booking Limit"
          description="To prevent spamming of room bookings, I limited users to a maximum of 3 active booked         rooms at a time. 
              This ensures fair usage and avoids overbooking"
        />
        <List
          title="User Authorization and Authentication"
          description="I implemented proper user authorization and authentication systems to ensure that only verified users can access their accounts and make bookings. 
              This keeps user data safe and prevents unauthorized actions."
        />
      </ListBox>
      <section className="flex flex-col items-center py-12">
        <h2 className="font-bold text-3xl uppercase mb-4">RockIns Demo</h2>
        <MediaPlayer url="https://www.youtube.com/watch?v=tSCUbwa_mdQ" />
      </section>

      <ProjectConclusion
        conclusion="Building the Rockins hotel website was an exciting challenge that
        allowed me to solve real-world problems. By using a modern tech stack
        including Next.js, Tailwind CSS, MongoDB, and React, I was able to
        create a fast, secure, and user-friendly platform. The site offers
        features like user authentication, secure payment processing through
        Stripe, and real-time room availability, all while being optimized for
        mobile devices and search engines. With performance enhancements like
        lazy loading and image compression, and security measures like rate
        limiting and user authorization, Rockins is both efficient and scalable.
        This project helped me grow as a full-stack developer, and I look
        forward to applying these skills to future projects. Feel free to
        explore the site and see the features in action."
        projectLink="https://rockins.vercel.app/"
        githubLink="https://github.com/duske953/HOTEL"
        nextProjectLink="/projects/tech-freak"
      />
    </>
  );
}
