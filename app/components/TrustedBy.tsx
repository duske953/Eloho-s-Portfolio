import { cn } from '~/lib/utils';

export default function TrustedBy({ className }: { className?: string }) {
  const avatars = [
    { src: '/testimonials/emma.jpg', alt: 'Emmanuel' },
    { src: '/testimonials/Ksenija.jpeg', alt: 'Ksenija' },
    { src: '/testimonials/Natalie.jpeg', alt: 'Natalie' },
    { src: '/testimonials/Mariia.jpeg', alt: 'Mariia' },
  ];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex -space-x-3 overflow-hidden">
        {avatars.map((avatar, i) => (
          <img
            key={i}
            className="inline-block size-10 rounded-full ring-2 ring-[#0a0a0a] object-cover"
            src={avatar.src}
            alt={avatar.alt}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-medium text-neutral-400">
          Trusted by <span className="text-white">10+</span> business owners
        </p>
        <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold">Loved by founders globally</p>
      </div>
    </div>
  );
}
