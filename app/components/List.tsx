import { FaCheck } from 'react-icons/fa';
export function ListBox({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  return (
    <section className="py-12">
      <h2 className="mb-7 text-3xl font-semibold">{text}</h2>
      <ul className="flex flex-col gap-7 sm:gap-12">{children}</ul>
    </section>
  );
}

export function List({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <div className="flex items-center gap-4 mb-1">
        {icon || <FaCheck />}
        <p className="text-xl font-medium">{title}</p>
      </div>
      <p className="text-lg leading-loose text-gray-200/100">{description}</p>
    </li>
  );
}
