'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SiSpotify } from 'react-icons/si';

interface NowPlayingData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
  type?: 'track' | 'episode';
}

export default function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch('/api/now-playing');
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (e) {
        console.error('Error fetching now playing', e);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {data?.isPlaying && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="fixed bottom-6 left-6 z-[200] group"
        >
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-white/10 p-2 pr-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:bg-black/60 transition-all duration-300 hover:border-blue-600/30 group/link"
          >
            <div className="relative size-10 overflow-hidden rounded-full border border-white/5 ring-1 ring-white/10">
              <img
                src={data.albumImageUrl}
                alt={data.album}
                className="size-full object-cover animate-[spin_12s_linear_infinite]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                <SiSpotify className="text-[#1DB954] size-4 drop-shadow-[0_0_8px_rgba(29,185,84,0.5)]" />
              </div>
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                  {data.type === 'episode'
                    ? 'Listening to Podcast'
                    : 'Now Playing'}
                </span>
                <div className="flex gap-0.5 items-end h-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [2, 8, 2] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6 + i * 0.2,
                        ease: 'easeInOut',
                      }}
                      className="w-0.5 bg-blue-500 rounded-full"
                    />
                  ))}
                </div>
              </div>
              <h3 className="text-xs font-bold text-white truncate max-w-[140px] group-hover/link:text-blue-400 transition-colors">
                {data.title}
              </h3>
              <p className="text-[10px] text-neutral-400 truncate max-w-[140px]">
                {data.artist}
              </p>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
