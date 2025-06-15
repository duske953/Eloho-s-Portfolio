export default function ProjectDescription({
  heading,
  children,
}: {
  heading: string;
  children: string;
}) {
  return (
    <section className="max-w-3xl px-8 mx-auto py-14 max-sm:px-4">
      <div>
        <h2 className="secondary-heading">{heading}</h2>
        <p className="leading-[2.5] text-lg text-white">{children}</p>
      </div>
    </section>
  );
}
