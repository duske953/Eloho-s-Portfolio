import { createCookie } from '@remix-run/node'; // or cloudflare/deno

export const userSubscribed = createCookie('user-subscribed', {
  maxAge: 60 * 60 * 24 * 7, // one week
  path: '/',
  httpOnly: true,
});
