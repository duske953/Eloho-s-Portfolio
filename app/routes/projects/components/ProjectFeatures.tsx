export default function ProjectFeatures({
  features,
  heading,
}: {
  heading: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}) {
  return (
    <div className="max-w-6xl mx-auto px-8 py-28 max-sm:px-3">
      <h2 className="secondary-heading">{heading}</h2>

      <ul className="list-disc space-y-4 text-xl grid grid-cols-2 gap-16 max-md:grid-cols-1">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-4 border border-gray-700 p-4 rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
          >
            <span className="text-blue-600 text-3xl">{feature.icon}</span>
            <div className="flex flex-col gap-3">
              <p className="font-bold">{feature.title}</p>
              <p className="text-gray-400 text-lg">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
