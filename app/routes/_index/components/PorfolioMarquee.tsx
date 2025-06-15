import { ThreeDMarquee } from '~/components/ui/Marquee';
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
];
export default function PorfolioMarquee() {
  return (
    <section className="py-14 portfolio-container">
      <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        <ThreeDMarquee images={images} />
      </div>
    </section>
  );
}
