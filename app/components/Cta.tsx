/* eslint-disable react/no-unescaped-entities */
import { ReactNode } from 'react';

export default function Cta({
  heading,
  description,
  children,
}: {
  heading: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="py-20">
      <div className="py-28 cta-gradient px-8 max-sm:px-3">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold max-sm:text-3xl max-sm:leading-[1.6] leading-[1.6]">
            {heading}
          </h2>
          <p className="text-xl leading-relaxed">{description}</p>
          <div className="pt-3">{children}</div>
        </div>
      </div>
    </section>
  );
}
