import Image from 'next/image';
import Link from 'next/link';
import { Button } from './components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "404 - You shouldn't be here",
  description: 'The page you are looking for does not exist.',
};

export default function NotFoundPage() {
  return (
    <section className="relative w-full h-dvh flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Subtle Background Pop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-8">
          No bones found...
        </h1>

        <div className="relative mb-8 group">
          {/* Decorative ring that pops on hover */}
          <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Image
            src="/page-gone.svg"
            alt="No bones found"
            width={350}
            height={350}
            className="relative z-10 drop-shadow-2xl"
            priority
          />
        </div>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full px-8 border-primary/20 hover:border-primary/50 transition-all duration-300"
        >
          <Link href="/">Go home boy</Link>
        </Button>
      </div>

      {/* Minimal Footer detail */}
      <div className="absolute bottom-8 text-muted-foreground/40 text-sm tracking-widest uppercase">
        404 — Page Not Found
      </div>
    </section>
  );
}
