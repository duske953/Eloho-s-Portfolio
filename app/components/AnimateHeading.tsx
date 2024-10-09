import { useSpring, animated } from '@react-spring/web';
import { useEffect } from 'react';
import { cn } from '~/lib/utils';

export default function AnimateHeading({
  inView,
  text,
  className,
}: {
  inView: boolean;
  text: string;
  className?: string;
}) {
  const [animatedHeading, setAnimateHeading] = useSpring(
    () => ({
      from: { opacity: 0, y: 0 },
    }),
    []
  );

  useEffect(() => {
    if (inView)
      setAnimateHeading.start({
        from: { opacity: 0, y: -50 },
        to: { opacity: 1, y: 0 },
      });
  });
  return (
    <div className="text-center">
      <animated.h2
        className={cn(
          'text-center mb-10 text-6xl font-bold uppercase text-gradient xs:text-4xl',
          className
        )}
        style={animatedHeading}
      >
        {text}
      </animated.h2>
    </div>
  );
}
