import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import './tailwind.css';
import { GoogleTagManager } from '@next/third-parties/google';
// import { CookieConsent } from 'react-cookie-consent';
import clsx from 'clsx';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { BottomNavBar } from './components/Navbar';
import ClientProviders from './ClientProviders';
import { Syne } from 'next/font/google';
import NowPlaying from './components/NowPlaying';
import Maintenance from './components/Maintenance';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title:
    'Eloho Kennedy | The cheapest website is the one built right the first time.',
  description:
    'Professional websites built for business owners. Be found online, get more inquiries, and grow without the tech overwhelm. Start with Eloho today.',
  keywords:
    'web development for early stage startups, small business websites, local business web developer, International website builder, website builder Nigeria, Eloho web services, Eloho Kennedy, Who is Eloho Kennedy, Eloho Kennedy web developer Who is Eloho',
  authors: [{ name: 'Eloho Kennedy' }],
  metadataBase: new URL('https://eloho.dev'),
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title:
      'Eloho Kennedy | The cheapest website is the one built right the first time.',
    description:
      'Professional websites built for business owners. Be found online, get more inquiries, and grow without the tech overwhelm.',
    siteName: 'eloho.dev',
    images: [
      {
        url: '/Eloho-OG.png',
        width: 1200,
        height: 630,
        alt: 'Eloho Kennedy Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eloho Kennedy | Professional Web Developer',
    description:
      'I build websites that help small businesses look professional and get more inquiries.',
    images: ['/landing-page.png'],
    creator: '@elohokennedy', // Replace with your actual Twitter handle
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId="GTM-5W8WTZ8S" />
        <meta name="apple-mobile-web-app-title" content="Eloho Kennedy" />
      </head>
      <body className={syne.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {process.env.TYPE === 'MAINTENANCE' ? (
            <Maintenance />
          ) : (
            <ClientProviders>
              {children}
              {/* <CookieConsent
              buttonStyle={{
                backgroundColor: '#1D4ED8',
                color: '#fff',
              }}
            >
              This website uses cookies to enhance the user experience.
            </CookieConsent> */}
              <ToastContainer
                bodyClassName={`font-medium sm:text-sm font-family ${syne.className}`}
                autoClose={5000}
                hideProgressBar={true}
                theme="dark"
              />
              <NowPlaying />
              <Footer />
              <BottomNavBar />
            </ClientProviders>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
