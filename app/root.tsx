import {
  json,
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
} from '@remix-run/react';
import {
  type ActionFunctionArgs,
  type LinksFunction,
  type LoaderFunction,
} from '@remix-run/node';
import './tailwind.css';
import { RecoilRoot } from 'recoil';
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from 'remix-themes';
import { themeSessionResolver } from './sessions.server';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import clsx from 'clsx';
import Footer from './components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import handleSendMessage from './actions/handleSendMessage';

import { BottomNavBar } from './components/Navbar';
import { freeAudit } from './lib/mailchimp/audience';
import { userSubscribed } from './cookie.server';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';
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
  if (data.name && data.email && data.message) {
    const response = await handleSendMessage(data);
    return response;
  }

  const cookieValue = await userSubscribed.serialize('subscribed');
  const response = await freeAudit(data.email);
  console.log(response);
  return json(
    { status: response.status, response: response.response },
    {
      headers: {
        'Set-Cookie': response.status === 200 ? cookieValue : '',
      },
    }
  );
}
export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  const trackingId = process.env.GA_TRACKING_ID;
  const cookieHeader = request.headers.get('Cookie');
  const subscribed = await userSubscribed.parse(cookieHeader);
  return json({ theme: getTheme(), trackingId, subscribed });
};

export const userSchema = object({
  email: string()
    .required('Please enter your email address')
    .email('Invalid email')
    .max(30, 'Email must be in the range of 20 characters'),
});

export function App() {
  const {
    register,
    reset,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const fetcher = useFetcher<{ status: number; response: string }>();
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  useEffect(() => {
    if (!fetcher.data) return;
    if (fetcher.data?.status === 200) {
      reset({ email: '' });
      toast('Audit request received. We’ll be in touch soon', {
        type: 'success',
        toastId: 'free-audit',
      });
      return;
    }

    toast(fetcher.data.response, { type: 'error', toastId: 'free-audit' });
  }, [fetcher.data, reset]);

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5W8WTZ8S');`,
          }}
        ></script>

        {/* <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p)
          {
            ((m = c.createElement(h)),
            (p = c.getElementsByTagName(h)[0]),
            (m.async = 1),
            (m.src = i),
            p.parentNode.insertBefore(m, p))
          }
          (document,"script","https://chimpstatic.com/mcjs-connected/js/users/05e559cded6eb6f18b02848a9/123c7ff68b2834a1f607ea330.js");`,
          }}
        ></script> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <noscript>
          <iframe
            title="Google tag"
            src="https://www.googletagmanager.com/ns.html?id=GTM-5W8WTZ8S"
            height="0"
            width="0"
            className="hidden invisible"
          ></iframe>
        </noscript>

        <RecoilRoot>
          {data.subscribed !== 'subscribed' && (
            <fetcher.Form id="free-audit" method="post" action="/">
              <div className="flex gap-3 max-w-4xl py-1 justify-center mx-auto px-4 items-center max-sm:flex-col">
                <Input
                  placeholder="Enter your email to get your free website audit"
                  className="w-2/4 max-sm:w-full text-xs"
                  type="email"
                  {...register('email')}
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="rounded-none flex gap-1"
                  disabled={!isValid || fetcher.state === 'submitting'}
                >
                  {fetcher.state === 'submitting' && (
                    <ReloadIcon className="animate-spin" />
                  )}
                  Free Website Audit
                </Button>
              </div>
            </fetcher.Form>
          )}

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
