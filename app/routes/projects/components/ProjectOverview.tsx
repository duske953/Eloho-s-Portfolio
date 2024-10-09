export default function ProjectOverView({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) {
  return (
    <section>
      <div className="flex flex-col items-center sm:gap-4">
        <h1 className="text-4xl font-bold text-center sm:text-3xl">{title}</h1>
        <img className="w-[75%] sm:w-full" src={imgSrc} alt={`${title}`} />
      </div>

      <div className="text-lg leading-loose text-gray-200/100 pb-12 pt-10">
        <p className="font-bold text-4xl my-4">Overview</p>
        <p>{description}</p>
      </div>
    </section>
  );
}
