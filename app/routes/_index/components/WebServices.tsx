import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { FaCheckCircle } from 'react-icons/fa';
import { animated, useInView, useSprings } from '@react-spring/web';
import { useEffect } from 'react';
import AnimateHeading from '~/components/AnimateHeading';
const AnimatedCard = animated(Card);

const services = [
  {
    title: 'Website Development',
    description:
      'I create custom websites that fit your business needs. From design to launch, I make sure your site looks great, works well, and meets your goals.',
  },

  {
    title: 'Backend Development',
    description: `I handle the behind-the-scenes part of your website. Whether it’s managing data or building APIs, I make sure everything runs smoothly and securely.`,
  },

  {
    title: 'Web Maintenance',
    description: `I provide ongoing support to keep your website updated and secure. From regular updates to fixing bugs, I ensure everything stays running smoothly.`,
  },
];

export default function WebServices() {
  const [ref, inView] = useInView({ once: true, rootMargin: '-20% 0%' });

  const [animatedServices, setAnimateServices] = useSprings(
    3,
    () => ({
      from: { opacity: 0, transform: `scale(1)` },
    }),
    []
  );

  useEffect(() => {
    if (inView) {
      setAnimateServices.start((i) => ({
        from: { opacity: 0, transform: `scale(0.5)` },
        to: { opacity: 1, transform: `scale(1)` },
        delay: (i + 1) * 200,
      }));
    }
  }, [inView]);

  return (
    <section className="pb-32 px-6 relative">
      <AnimateHeading inView={inView} text="What I offer" />
      <ul
        ref={ref}
        className="grid grid-cols-3 gap-7 lg:grid-cols-2 sm:grid-cols-1"
      >
        {animatedServices.map((styles, i) => {
          return (
            <li
              ref={ref}
              className="last:lg:translate-x-2/4 last:sm:translate-x-0"
              key={crypto.randomUUID()}
            >
              <AnimatedCard
                className="cursor-pointer hover:bg-slate-900/85 hover:transition-all"
                style={styles}
                key={services[i].description}
              >
                <CardHeader className="flex flex-row items-center gap-3">
                  <FaCheckCircle className="size-7" />
                  <CardTitle className="uppercase">
                    {services[i].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{services[i].description}</p>
                </CardContent>
              </AnimatedCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
