import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import type {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunction,
} from '@remix-run/node';
import './tailwind.css';
import { RecoilRoot } from 'recoil';
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from 'remix-themes';
import { themeSessionResolver } from './sessions.server';
import clsx from 'clsx';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import handleSendMessage from './actions/handleSendMessage';
import { BottomNavBar } from './components/Navbar';
export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },

  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon/favicon.ico',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
];

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };
  const response = await handleSendMessage(data);
  return response;
}
export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  const trackingId = process.env.GA_TRACKING_ID;
  return json({ theme: getTheme(), trackingId });
};

export function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  const gaTrackingId = data.trackingId;
  console.log(gaTrackingId);
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-J2YJX7J91V`}
          />
          <script
            async
            id="gtag-init"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-J2YJX7J91V')`,
            }}
          />
        </>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <RecoilRoot>
          <Outlet />
          <ToastContainer
            bodyClassName={`font-medium sm:text-sm font-family`}
            autoClose={5000}
            hideProgressBar={true}
            theme="dark"
          />
          <Footer />
        </RecoilRoot>
        <ScrollRestoration />
        <Scripts />
        <BottomNavBar />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  // const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme="dark" themeAction="/action/set-theme">
      {/* <Analytics /> */}
      <App />
    </ThemeProvider>
  );
}
