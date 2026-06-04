'use server';

export default async function handlePostBackend(resource: string, url: string) {
  try {
    const data = await fetch(
      `https://freebies-server.vercel.app/api/v1/${resource}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
        }),
      },
    );
    const result = await data.json();
    return { response: result, code: data.status };
  } catch (error) {
    throw Error(
      "Something went wrong. We can't seem to reach this site. Please try again later.",
    );
  }
}
