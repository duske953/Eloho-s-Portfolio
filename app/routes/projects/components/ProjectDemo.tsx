import MediaPlayer from '~/components/Media';

export default function ProjectDemo({ url }: { url: string }) {
  return (
    <section className="max-w-3xl mx-auto py-24 px-8">
      <h2 className="secondary-heading">Watch the Website Do the Work</h2>
      <MediaPlayer url={url} />
    </section>
  );
}
