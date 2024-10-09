import { List, ListBox } from '~/components/List';
import ProjectOverView from '../projects/components/ProjectOverview';
import { FaNode, FaReact } from 'react-icons/fa';
import { SiSocketdotio } from 'react-icons/si';
import MediaPlayer from '~/components/Media';
import ProjectConclusion from '../projects/components/ProjectConclusion';
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
        title="Anonymo: Real-Time Anonymous Web Chat for Open Conversations"
        description="Anonymo is a web application that lets people chat with each other anonymously in real time. Users can join without creating an account, and all messages are deleted as soon as the browser is closed, ensuring complete privacy. With features like randomly generated usernames, chat timestamps, and typing indicators, Anonymo provides a simple and secure way for people to connect without revealing their identity."
        imgSrc="/anonymo/hero.svg"
      />
      <ListBox text="Core problems solved">
        <List
          title="Lack of Anonymity in Online Chats"
          description="Many online chat platforms require users to create accounts or provide personal information, which can discourage open communication. Anonymo allows users to chat without revealing their identity, promoting more honest and open conversations."
        />

        <List
          title="Concerns About Privacy and Data Security"
          description="People often worry about their messages being stored or shared without their consent. Anonymo ensures true privacy by not storing any messages permanently. All chats are deleted when the browser session ends, giving users peace of mind."
        />

        <List
          title="Need for Quick and Spontaneous Conversations"
          description="Most chat platforms require a lengthy sign-up process before users can start talking. Anonymo eliminates this by allowing users to join instantly with a randomly generated username, making it easy to have quick and spontaneous conversations."
        />

        <List
          title="Difficulty Keeping Track of Conversations in Real-Time"
          description="In fast-paced chat environments, it’s hard to keep up with who is saying what. Anonymo includes features like chat timestamps and typing indicators, helping users follow the flow of the conversation in real time."
        />
      </ListBox>

      <ListBox text="Core stack">
        <List
          icon={<FaNode className="size-8" />}
          title="Node.js"
          description="Node.js is a server-side JavaScript runtime that was used to build the backend of Anonymo. It provided a scalable and efficient environment for handling multiple users in real time. Node.js, combined with Socket.IO, managed all the server-side logic, including handling chat sessions, generating random usernames, and ensuring the messages are persisted only within the active browser session."
        />

        <List
          icon={<SiSocketdotio className="size-8" />}
          title="Socket.IO"
          description="Socket.IO is a powerful library for real-time web applications. It enables instant, bidirectional communication between the server and clients, making it ideal for a live chat application like Anonymo. Socket.IO was used to handle all the real-time messaging features, such as sending and receiving chat messages, showing typing indicators, and updating the chat in real time as users interact"
        />

        <List
          icon={<FaReact className="size-8" />}
          title="React.js"
          description="React.js is a popular JavaScript library for building user interfaces. It was used to create the dynamic and responsive frontend of Anonymo. React's component-based architecture allowed for efficient updates to the chat UI, such as displaying new messages, showing the list of active users, and handling user interactions with minimal re-rendering, resulting in a smooth user experience."
        />
      </ListBox>

      <ListBox text="Functionality & Features">
        <List
          title="Complete Anonymity"
          description="Anonymo ensures that users can chat without revealing their identity. There is no need for account creation, personal details, or login credentials. Users are assigned randomly generated usernames when they join the chat, allowing them to interact freely and anonymously."
        />
        <List
          title="Real-Time Messaging"
          description="The app provides real-time messaging, enabling users to send and receive messages instantly. This is powered by Socket.IO, which ensures that the chat is updated in real time for all participants, creating a smooth and interactive chat experience."
        />
        <List
          title="Chat Timestamps"
          description="Each message in the chat is accompanied by a timestamp, showing when it was sent. This helps users keep track of the conversation timeline and adds context to the flow of the chat, making it easier to follow along."
        />
        <List
          title="Typing Indicators"
          description="Anonymo includes typing indicators that show when someone is typing a message. This feature enhances the chat experience by giving users a sense of activity and anticipation, making conversations feel more lively and engaging."
        />
        <List
          title="Messages Persisted Within Browser Session"
          description="To ensure true anonymity, messages in Anonymo are only stored for the duration of the active browser session. Once the browser is closed or the session ends, all messages are permanently deleted. This prevents any record of the conversation from being stored on the server, ensuring complete privacy."
        />
        <List
          title="Randomly Generated Usernames"
          description="When a user joins the chat, the app automatically assigns them a randomly generated username. This feature adds a layer of anonymity and fun to the chat experience, as users can chat without using their real names and enjoy the randomness of their assigned identities"
        />
      </ListBox>

      <ListBox text="Challenges">
        <List
          title="Incorrect Message Sorting"
          description="One of the challenges was sorting the messages based on the client’s local time instead of the server’s time. This caused issues where messages appeared out of order, especially when users from different time zones were chatting. To resolve this, the sorting logic was adjusted to use the server time, ensuring that messages were displayed in the correct order for all users, regardless of their local time settings."
        />

        <List
          title=" Message Loss with Slow Internet Connections"
          description="Another challenge was handling message delivery in cases where users had slow or unstable internet connections. Sometimes, messages were not sent properly, leading to message loss. This was particularly problematic as it affected the integrity of the conversation. To address this, a more robust message delivery mechanism was implemented to ensure that messages were reliably delivered or re-sent if the initial attempt failed, reducing the likelihood of message loss."
        />
      </ListBox>

      <section className="flex flex-col items-center py-12">
        <h2 className="font-bold text-3xl uppercase mb-4">Anonymo Demo</h2>
        <MediaPlayer url="https://www.youtube.com/watch?v=oljFL41ISN8" />
      </section>

      <ProjectConclusion
        conclusion="The development of Anonymo provided an opportunity to create a unique platform for real-time, anonymous communication. By focusing on features like anonymity, real-time messaging, and chat persistence within a session, the app offers a secure and engaging environment for open conversations. Despite challenges like message sorting and handling connectivity issues, these obstacles were overcome, resulting in a stable and user-friendly chat application. The use of technologies like Node.js, Socket.IO, and React ensured a smooth integration of frontend and backend functionalities, delivering a reliable chat experience."
        projectLink="https://anonymo.vercel.app/"
        githubLink="https://github.com/duske953/chatapplication-frontend"
        nextProjectLink="/projects/rockins"
      />
    </>
  );
}
