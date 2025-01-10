import { useInView, animated } from '@react-spring/web';

export default function AboutMe() {
  const [ref, springs] = useInView(
    () => ({
      from: { opacity: 0, y: -100 },
      to: { opacity: 1, y: 0 },
    }),
    { once: true, rootMargin: '-30%' }
  );

  return (
    <animated.section
      id="about-me"
      style={springs}
      ref={ref}
      className="px-12 pb-32 md:px-6"
    >
      <div className="flex justify-center">
        <h2 className="text-center mb-10 text-6xl font-bold uppercase text-gradient xs:text-4xl">
          About me
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
        <div className="text-center flex justify-center">
          <img
            src="/aboutMeImg.svg"
            alt="About Eloho Kennedy | Fullstack Web developer"
          />
        </div>
        <div>
          <div className="leading-loose text-lg text-gray-200/100">
            <p>
              Hi, I’m Eloho Kennedy, a full-stack web developer and a graduate
              of Electrical/Electronics Engineering. I work with modern
              technologies to create efficient and user-friendly web
              applications and have worked on projects like hotel booking
              platforms and eCommerce sites.
            </p>

            <p className="mt-5">
              I believe in building web apps that connect people, as Tim
              Berners-Lee said, "The Web does not just connect machines, it
              connects people."
            </p>
            <p className="mt-5">
              I believe in continuous learning, and always staying up-to-date
              with the latest industry trends. Outside of work, I enjoy
              exploring new technologies and relaxing with wildlife documentary
            </p>
            <p className="mt-5">
              Let’s collaborate and create something great together. Whether
              you’re looking to build a project or discuss new ideas, feel free
              to reach out. I’m always open to new opportunities and
              connections.
            </p>
          </div>
        </div>
      </div>
    </animated.section>
  );
}
