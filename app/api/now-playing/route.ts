import { NextResponse } from 'next/server';
import handleSpotifyOauthToken from '~/actions/handleSpotifyOauthToken';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const tokenData = await handleSpotifyOauthToken();
    if (!tokenData) {
      return NextResponse.json({ isPlaying: false });
    }
    const { access_token: token } = tokenData;
    const res = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing?additional_types=episode',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: 'no-store',
      },
    );

    if (res.status === 204 || res.status > 400) {
      return NextResponse.json({ isPlaying: false });
    }

    const song = await res.json();

    if (!song || song.item === null) {
      return NextResponse.json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const type = song.currently_playing_type;
    
    let title = '';
    let artist = '';
    let albumImageUrl = '';
    let songUrl = '';

    if (type === 'track') {
      title = song.item.name;
      artist = song.item.artists
        .map((_artist: any) => _artist.name)
        .join(', ');
      albumImageUrl = song.item.album.images[0].url;
      songUrl = song.item.external_urls.spotify;
    } else if (type === 'episode') {
      title = song.item.name;
      artist = song.item.show.name;
      albumImageUrl = song.item.images[0]?.url || song.item.show.images[0]?.url;
      songUrl = song.item.external_urls.spotify;
    }

    return NextResponse.json({
      isPlaying,
      title,
      artist,
      songUrl,
      albumImageUrl,
      type,
    });
  } catch (error) {
    return NextResponse.json({ isPlaying: false }, { status: 500 });
  }
}
