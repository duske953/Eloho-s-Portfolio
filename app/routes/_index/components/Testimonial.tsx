import { AnimatedTestimonials } from '~/components/ui/Testimonials';

export default function Testimonial() {
  const testimonials = [
    {
      quote:
        'My son, Kennedy, built a hotel management system that changed how we run the hotel. Everything is now digital — no more paper records or missing cash. I can monitor operations and approve reports from my phone, which has made management much easier.',
      name: 'Emmanuel Oghounu',
      designation: 'Director, Rockhills hotel',
      src: '/testimonials/emma.jpg',
    },
    {
      quote:
        'Working with Eloho Kennedy was a smooth experience. He’s reliable, takes initiative, and handles challenges calmly. Communication was clear throughout, and he genuinely cares about delivering a good outcome.',
      name: 'Ksenija Vjazni',
      designation: 'COO & Head of sales',
      src: '/testimonials/Ksenija.jpeg',
    },
    {
      quote:
        'Working with Kennedy made a clear difference. Our tracking tools were set up properly, and our online presence and conversion rate increased significantly. He’s fast, clear in communication, and attentive from start to finish a professional you can count on.',
      name: 'Natalie Antoshchuk',
      designation: 'Founder @ Banister-staff',
      src: '/testimonials/Natalie.jpeg',
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
