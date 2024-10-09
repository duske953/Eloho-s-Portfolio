import { RiJavascriptLine } from 'react-icons/ri';
import { List, ListBox } from '~/components/List';
import MediaPlayer from '~/components/Media';

import ProjectOverView from '../projects/components/ProjectOverview';
import { SiArcgis, SiSass } from 'react-icons/si';
import ProjectCta from '../projects/components/ProjectConclusion';
import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Anonymo - Anonymous Chat App with Random Users',
    },
    {
      name: 'description',
      content:
        'Anonymo is an anonymous chat platform where users can connect randomly and chat without revealing their identity. With features like randomly generated usernames, chat time stamps, typing indicators, and temporary messages that disappear after the session ends, Anonymo ensures a truly anonymous and private chat experience.',
    },
    {
      name: 'keywords',
      content:
        'Anonymo, anonymous chat, random chat app, private messaging, temporary messages, disappearing messages, chat without account, chat anonymously, secure chat platform, typing indicator, chat time stamps, random usernames, browser session chat, anonymous messaging app, privacy-focused chat, Node.js chat app, real-time chat, Socket.IO chat',
    },
  ];
};

export default function Page() {
  return (
    <>
      <ProjectOverView
        title="GeoCoords: Discover Nearby Essentials with Real-Time Navigation"
        description="GeoCoords is a web app designed to help users easily navigate and find essential 
          places near their current location. Whether you need to locate a gas station, restaurant, 
          or ATM, GeoCoords provides accurate locations and real-time data. 
          The app features step-by-step directions,
          displays the approximate 
          distance between your location and the place of interest, 
          and shows your approximate location on the map. GeoCoords even draws a path linking your 
          location to your destination, 
          making navigation simple and efficient. 
          With a responsive design and seamless user experience, 
          GeoCoords is the perfect tool for quick, reliable navigation."
        imgSrc="/geocoords/hero.svg"
      />
      <ListBox text="Core problems solved">
        <List
          title="Difficulty Finding Nearby Places"
          description="Many users struggle to find essential places like gas stations, 
            restaurants, or ATMs nearby. GeoCoords solves this by fetching and displaying places close to the user’s 
            current location in real time."
        />
        <List
          title="Inaccurate or Outdated Location Data"
          description="Some navigation tools display outdated information or closed businesses. 
            GeoCoords ensures up-to-date 
            location data by integrating with reliable APIs, so users get accurate information."
        />
        <List
          title="Poor Mobile Optimization"
          description="Navigating on mobile can be difficult with some tools due to poor optimization. 
            GeoCoords solves 
            this by being fully responsive, ensuring a smooth user experience across all devices, 
            whether on mobile or desktop."
        />
      </ListBox>

      <ListBox text="Core stack">
        <List
          icon={<RiJavascriptLine className="size-8" />}
          title="Javascript"
          description="The app is built using pure JavaScript to handle all the 
            interactive features and dynamic content. JavaScript enables the app to fetch real-time location 
            data, calculate distances, and provide step-by-step directions."
        />

        <List
          icon={<SiSass className="size-8" />}
          title="Scss/SASS"
          description="For styling the app, Sass (Syntactically Awesome Style Sheets) was used, 
            a CSS preprocessor that extends the capabilities of regular CSS. SCSS, a syntax of 
            Sass, allows for more organized and modular stylesheets. 
            It enables the use of variables, nesting, and mixins, which helps in maintaining clean, 
            reusable, and scalable styles."
        />
        <List
          icon={<SiArcgis className="size-8" />}
          title="ArcGis"
          description="ArcGIS is a powerful mapping and geospatial analysis platform. 
            It was integrated into the app to provide accurate location data, maps, and geocoding services. 
            ArcGIS allows the app to display users' current locations, show nearby places of interest, 
            and draw paths between the user’s location and selected destinations. 
            This makes it possible to offer precise and reliable navigation services within the app."
        />
      </ListBox>

      <ListBox text="Functionality and Features">
        <List
          title=" Accurate Locations"
          description="The app provides precise location data for the user and nearby places of interest. 
            Using ArcGIS’s geolocation services, it can pinpoint the user’s 
            current position and show nearby locations such as gas stations, 
            restaurants, and ATMs with high accuracy."
        />
        <List
          title="Step-by-Step Directions"
          description="Users can receive turn-by-turn directions to guide them from their current location to their chosen destination. This feature makes navigation easy and intuitive, helping users reach their destinations without confusion."
        />
        <List
          title="Approximate Distance"
          description="The app displays the approximate distance between the user’s location and selected places of interest. This real-time information helps users understand how far they need to travel and choose the best route."
        />
        <List
          title=" Map Showing User’s Approximate Location"
          description="An interactive map shows the user’s approximate location, providing a clear visual representation of their surroundings. The map updates dynamically as the user moves, ensuring an accurate navigation experience."
        />
        <List
          title="Path Linking Location to Place of Interest"
          description="When a user selects a destination, the app draws a path on the map linking their current location to the chosen place. This visual guide makes it easy to follow the route and navigate efficiently."
        />
        <List
          title="User Dashboard"
          description="Each user has a personal dashboard where they can see the rooms they have booked. 
              The dashboard also allows them to view and edit their profile, 
              such as changing their profile picture or name"
        />
        <List
          title='Sort Locations by “Furthest" or "Nearest"'
          description="The app allows users to sort nearby locations based on distance, either showing the nearest or furthest places first. This feature helps users prioritize their search results and find the most convenient options based on their preferences."
        />
      </ListBox>

      <ListBox text="Challenges">
        <List
          title="Understanding the ArcGIS Documentation"
          description="One of the main challenges in building the geocoordinates app was getting acquainted with the ArcGIS technology. As it was the first time working with ArcGIS, it took some time to navigate and understand the extensive documentation. However, the documentation was well-organized and straightforward, which made it easier to grasp the concepts and functionalities needed for the project. This experience not only helped in effectively integrating ArcGIS into the app but also enhanced the ability to read and utilize documentation efficiently, a valuable skill for future projects."
        />
      </ListBox>

      <section className="flex flex-col items-center py-12">
        <h2 className="font-bold text-3xl uppercase mb-4">GeoCoords Demo</h2>
        <MediaPlayer url="https://www.youtube.com/watch?v=IxJxwV2Wjfg" />
      </section>

      <ProjectCta
        conclusion="The development of the GeoCoords web app was an enriching experience,
          aimed at solving common navigation challenges by providing accurate
          and real-time location data. With features like step-by-step
          directions, distance calculations, and an interactive map, the app
          offers a comprehensive solution for users seeking nearby places of
          interest. The ability to sort locations by distance adds another layer
          of convenience, making it easier to find the best options based on
          user preferences. By using technologies like JavaScript, Sass/SCSS,
          and ArcGIS, the app delivers a responsive and user-friendly experience
          across all devices. This project not only enhanced my skills in
          frontend development and geospatial analysis but also showcased the
          potential of web applications in improving everyday navigation"
        projectLink="https://geocoordinates.netlify.app/"
        githubLink="https://github.com/duske953/geocoordinates"
        nextProjectLink="/projects/anonymo"
      />
    </>
  );
}
