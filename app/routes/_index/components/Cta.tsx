/* eslint-disable react/no-unescaped-entities */
import ContactModal from '~/components/ContactModal';

export default function Cta() {
  return (
    <section className="py-20">
      <div className="py-28 cta-gradient px-4">
        <div className="text-center flex flex-col gap-5 items-center">
          <h2 className="text-5xl font-bold max-sm:text-3xl max-sm:leading-normal">
            Get a website that actually helps your business.
          </h2>
          <p className="text-xl italic leading-relaxed">
            Tell me your goals, and I’ll take care of building a website that
            delivers.
          </p>

          <ContactModal btnText="Let's Talk" />
        </div>
      </div>
    </section>
  );
}
