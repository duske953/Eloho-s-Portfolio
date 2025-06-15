import { Carousel } from '~/components/ui/Carousel';
import { DotBackground } from '~/components/ui/DotBackground';

export default function ProjectCarousel({
  projectImg,
}: {
  projectImg: Array<{ title: string; src: string }>;
}) {
  return (
    <DotBackground>
      <div className="s">
        <h2 className="relative text-center mb-10 font-bold text-3xl text-gray-300">
          Visual Walkthrough of the App
        </h2>
        <div className="relative overflow-hidden size-full pb-20">
          <Carousel slides={projectImg} />
        </div>
      </div>
    </DotBackground>
  );
}
