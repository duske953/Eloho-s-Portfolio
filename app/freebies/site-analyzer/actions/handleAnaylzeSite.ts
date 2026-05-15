export async function handleAnalyzeSite(url: string) {
  try {
    const data = await fetch(
      'https://freebies-server-nine.vercel.app/analyze-site',
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
    return {
      response:
        "Something went wrong. We can't seem to reach this site. Please try again later.",
      code: 200,
    };
  }
}
