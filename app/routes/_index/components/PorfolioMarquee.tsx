import { ThreeDMarquee } from '~/components/ui/Marquee';
const images = [
  './rockins/homepage.jpeg',
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
  './rockins/stripe.jpeg',
  './byte-cart/stripe.jpeg',
  './byte-cart/homepage.jpeg',
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
  './music-snip/songs.jpeg',
  './music-snip/homepage.jpeg',
  './music-snip/albums.jpeg',
  './music-snip/album.jpeg',
  './geocoords/homepage.jpeg',
];
export default function PorfolioMarquee() {
  return (
    <section id="projects" className="py-14 portfolio-container">
      <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
        <h2 className="relative uppercase leading-relaxed z-20 mx-auto max-w-4xl text-center font-bold text-balance text-white text-6xl max-md:text-4xl max-sm:text-3xl">
          Real <span className="text-blue-600">Projects</span> Solving Real
          Problems
        </h2>
        <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-lg text-white">
          See how I turn everyday business challenges into working web
          solutions.
        </p>

        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
      </div>
    </section>
  );
}
