'use client';

import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';

export default function MediaPlayer({ url }: { url: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <p>loading</p>;

  return (
    <div className="relative pt-[56.25%] w-full">
      <ReactPlayer
        controls={true}
        url={url}
        playing={false}
        width="100%"
        height="100%"
        className="absolute top-0 left-2/4 -translate-x-2/4 w-36"
      />
    </div>
  );
}
