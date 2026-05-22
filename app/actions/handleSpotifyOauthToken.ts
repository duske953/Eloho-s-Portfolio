export default async function handleSpotifyOauthToken() {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    next: { revalidate: 3600 },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
      client_id: process.env.SPOTIFY_CLIENT_ID!,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
    }),
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
