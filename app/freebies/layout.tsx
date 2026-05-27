import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freebies | Useful Tools for Your Business',
  description: 'Explore a collection of free tools and resources designed to help small businesses audit their security, SEO, and overall online performance.',
  openGraph: {
    url: 'https://eloho.dev/freebies',
  },
};

export default function FreebiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
