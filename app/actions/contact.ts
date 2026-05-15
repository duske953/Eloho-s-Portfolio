'use server';

import handleSendMessage from '~/actions/handleSendMessage';
import { processEmail } from '~/lib/mailchimp/audience';
import { cookies } from 'next/headers';

export async function contactAction(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (name && email && message) {
    const response = await handleSendMessage({ name, email, message });
    return response;
  }

  return { status: 400, response: 'Missing required fields' };
}

export async function auditAction(formData: FormData) {
  const email = formData.get('email') as string;
  if (!email) return { status: 400, response: 'Email is required' };

  const response = await processEmail(email);

  if (response.status === 200) {
    const cookieStore = await cookies();
    cookieStore.set('subscribed', 'true', {
      maxAge: 60 * 60 * 24 * 7, // one week
      path: '/',
      httpOnly: true,
    });
  }

  return { status: response.status, response: response.response };
}
