import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eloho Kennedy',
  description: 'Learn how Eloho helps businesses build modern, trustworthy websites that attract more customers and grow online visibility—without tech overwhelm.',
  keywords: 'web developer, web developer for small businesses, professional business website, about me, business website developer, frontend and backend developer, build website for business, Nigeria web developer, full-stack developer',
  openGraph: {
    url: '/about-me',
  },
};

export default function AboutMeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
