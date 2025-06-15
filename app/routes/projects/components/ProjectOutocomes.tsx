import { FaCheck } from 'react-icons/fa';

export default function ProjectOutcomes({
  outcomes,
  heading,
}: {
  heading: string;
  outcomes: Array<{ heading: string; text: string }>;
}) {
  return (
    <section className="max-w-3xl mx-auto py-24 px-8 max-sm:px-4">
      <h2 className="secondary-heading">{heading}</h2>
      <ul className="flex flex-col gap-4">
        {outcomes.map((outcome) => (
          <li
            key={outcome.heading}
            className="border-b-2 pb-2 flex items-center gap-10 shadow-2xl shadow-gray-800 mb-8 p-5 rounded-lg transition-colors cursor-pointer"
          >
            <FaCheck className="text-4xl" />
            <div>
              <p className="font-bold mb-3 uppercase text-blue-600">
                {outcome.heading}
              </p>
              <span className="leading-loose">{outcome.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
