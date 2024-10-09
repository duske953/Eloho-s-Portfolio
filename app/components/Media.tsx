import ReactPlayer from 'react-player';
import { ClientOnly } from 'remix-utils/client-only';
export default function MediaPlayer({ url }: { url: string }) {
  return (
    <ClientOnly fallback={<p>loading</p>}>
      {() => (
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
      )}
    </ClientOnly>
  );
}
