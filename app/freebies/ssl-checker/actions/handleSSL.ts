'use server';

export async function handleSSL(url: string) {
  try {
    const data = await fetch(
      'https://freebies-server-nine.vercel.app/check-ssl',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      },
    );
    const result = await data.json();
    return { code: data.status, response: result };
  } catch (err) {
    return { code: 500, response: 'Failed to check SSL' };
  }
}
