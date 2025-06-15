'use client';
import { ThreeDMarquee } from '~/components/ui/Marquee';

export default function PorfolioMarquee() {
  const images = [
    './rockins/hero.jpeg',
    './byte-cart/cta.jpeg',
    './rockins/featured.jpeg',
    './byte-cart/cart.jpeg',
    './rockins/rooms.jpeg',
    './rockins/room.jpeg',
    './byte-cart/products.jpeg',
    './rockins/signup.jpeg',
    './rockins/login.jpeg',
    './rockins/delete-account.jpeg',
    './rockins/bookmarks.jpeg',
    './anonymo/hero.svg',
    './rockins/stripe.jpeg',
    './byte-cart/stripe.jpeg',
    './byte-cart/hero.jpeg',
    './byte-cart/featured.jpeg',
    './rockins/trending.jpeg',
    './byte-cart/footer.jpeg',
    './rockins/review.jpeg',
    './byte-cart/product.jpeg',
    './rockins/description.jpeg',
    './byte-cart/products-home.jpeg',
    './byte-cart/auth.jpeg',
    './byte-cart/profile.jpeg',
    './byte-cart/delete.jpeg',
    './rockins/about-us.jpeg',
    './byte-cart/about-us.jpeg',
    './byte-cart/the-team.jpeg',
    './rockins/profile.jpeg',
    './nft/hero.svg',
    './music-snip/songs.jpeg',
    './byte-cart/hero.svg',
    './music-snip/homepage.svg',
    './music-snip/albums.jpeg',
    './music-snip/album.jpeg',
    './geocoords/hero.svg',
  ];
  return (
    <section className="py-14 portfolio-container">
      <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
        <h2 className="relative z-20 mx-auto max-w-4xl text-center font-bold text-balance text-5xl uppercase text-blue-600">
          Projects I’ve Brought to Life
        </h2>
        <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-xl text-white md:text-base">
          These websites were built to do more than just look good, they work.
        </p>

        <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
            Let’s work together
          </button>
        </div>

        {/* overlay */}
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
      </div>
    </section>
  );
}
