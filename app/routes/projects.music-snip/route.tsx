import { RiNextjsLine, RiTailwindCssLine } from 'react-icons/ri';
import MediaPlayer from '~/components/Media';
import ProjectOverView from '../projects/components/ProjectOverview';
import { List, ListBox } from '~/components/List';
import ProjectConclusion from '../projects/components/ProjectConclusion';
import { MetaFunction } from '@remix-run/react';
import { FaNapster } from 'react-icons/fa';

export const meta: MetaFunction = () => {
  return [
    { title: 'Discover Music with Song Previews | Music Exploration App' },
    {
      name: 'description',
      content:
        'Explore a modern music web app where you can preview 30 seconds of songs, search for albums and artists, check trending tracks, and save your favorites.',
    },
    {
      name: 'keywords',
      content:
        'music preview app, 30-second song previews, trending music, favorite songs, music discovery, albums, artists, search music',
    },
  ];
};

export default function Page() {
  return (
    <>
      <ProjectOverView
        title=" HarmonySnip: A Music Preview Experience"
        description="This web application is designed for music enthusiasts who want a quick way to discover and preview new tracks. The platform allows users to listen to the first 30 seconds of songs, offering a glimpse into the melody and vibe of each track before diving deeper. With features like trending tracks, popular albums, artist pages, and a personalized favorites section, it ensures an intuitive and engaging music discovery experience."
        imgSrc="/music-snip/hero.svg"
      />
      <ListBox text="Core problems solved">
        <List
          title="Quick Music Discovery"
          description="Users can quickly decide if a song suits their taste by previewing the first 30 seconds, saving time and effort in finding new music."
        />
        <List
          title="Personalized Experience"
          description="The app allows users to save their favorite songs, making it easier to revisit tracks they enjoy without searching repeatedly.."
        />
        <List
          title="Efficient Music Search"
          description="A robust search feature ensures users can quickly find songs, albums, or artists they’re interested in, streamlining the exploration process."
        />
      </ListBox>

      <ListBox text="Core stack">
        <List
          icon={<RiNextjsLine className="size-8" />}
          title="Next.js"
          description="Leveraged for its server-side rendering capabilities and efficient routing to ensure a fast, SEO-friendly web application."
        />

        <List
          icon={<RiTailwindCssLine className="size-8" />}
          title="Tailwind CSS"
          description="For the design, I used Tailwind CSS, a utility-first CSS framework. 
                It allowed me to quickly style the website without writing a lot of custom CSS. 
                This helped create a clean and modern design while keeping the code organized and efficient."
        />

        <List
          icon={<FaNapster className="size-8" />}
          title="Napster"
          description="Integrated to fetch music data, including tracks, albums, and artist information, providing reliable and up-to-date content for users."
        />
      </ListBox>

      <ListBox text="Functionality and Features">
        <List
          title="Song Previews"
          description="Users can listen to the first 30 seconds of any song, helping them quickly decide if they like it.."
        />
        <List
          title="Search Functionality"
          description="A powerful search feature allows users to find their favorite songs, albums, or artists with ease."
        />
        <List
          title="Trending Content"
          description="Explore the most popular albums and tracks in the trending section, showcasing what’s hot in the music world."
        />
        <List
          title="Favorites Management: "
          description="Users can save their favorite songs locally, enabling them to curate their own personalized collection without the need for an account.."
        />
      </ListBox>

      <section className="flex flex-col items-center py-12">
        <h2 className="font-bold text-3xl uppercase mb-4">Music-Snip Demo</h2>
        <MediaPlayer url="https://www.youtube.com/watch?v=t6MPgJzveXg" />
      </section>

      <ProjectConclusion
        conclusion="This music web application demonstrates the power of combining a clean, responsive design with functional features to enhance the user experience. By allowing users to preview tracks, explore trending content, and save their favorites, it simplifies the process of discovering and enjoying music. The integration of Next.js, and the Napster API ensures high performance and reliable data delivery, making the app a practical and enjoyable tool for music lovers."
        projectLink="https://music-snip.vercel.app/"
        githubLink="https://github.com/duske953/preview-music"
        nextProjectLink="/projects/rockins"
      />
    </>
  );
}
