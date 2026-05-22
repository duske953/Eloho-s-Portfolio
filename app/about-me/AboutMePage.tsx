'use client';

import ContactModal from '~/components/ContactModal';
import Cta from '~/components/Cta';
import Navbar from '~/components/Navbar';
import TrustedBy from '~/components/TrustedBy';
import { motion } from 'motion/react';
import { Timeline } from '~/components/ui/Timeline';
import { FaGithub, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const resumeData = [
  {
    company: 'Gopsal Global Limited',
    role: 'Full Stack Developer',
    whatTheyDo:
      'A Nigerian business support company that helps organisations improve operations through HR, payroll, logistics, training, and related management services.',
    howIHelped: [
      'Built a vehicle intake system that automatically retrieves car model data from the FRSC database using registration numbers, removing manual lookup and reducing intake errors',
      'Integrated Paystack webhooks to automatically move jobs to completed status after payment confirmation, removing manual payment verification from the workflow',
      'Developed a live analytics dashboard that gave management real-time visibility into revenue, pending jobs, and completed vehicle services',
    ],
  },
  {
    company: 'Banister-staff',
    role: 'Full Stack Developer',
    whatTheyDo:
      'A platform that lets households hire, manage, and pay vetted domestic workers in one place.',
    howIHelped: [
      'Migrated the company website from Tilda to a fully custom-built platform, increasing conversion rate by 45%',
      'Handled full production deployment including DNS setup, transactional email infrastructure, and live environment configuration',
      'Integrated Google Analytics and Meta Ads tracking to give the business measurable visibility into user activity and marketing performance',
    ],
  },
  {
    company: 'Rockhills hotel',
    role: 'Full Stack Web Developer',
    whatTheyDo: 'Hotel business.',
    howIHelped: [
      'Replaced the hotel’s manual bookkeeping process with a centralized digital management system used across operations,',
      'Reduced internal theft by creating traceable operational records and giving management direct visibility into daily activities',
      'Eliminated scattered paper-based record management by automating internal operational workflows',
    ],
  },
];

const timelineData = resumeData.map((item) => ({
  title: item.company,
  content: (
    <div className="space-y-6">
      <div>
        <h4 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">
          {item.role}
        </h4>
        <p className="text-gray-400 text-lg leading-relaxed italic">
          <span className="text-white font-semibold not-italic">
            What they do:
          </span>{' '}
          {item.whatTheyDo}
        </p>
      </div>
      <div className="space-y-4">
        <h5 className="text-white font-bold text-xl uppercase tracking-tighter">
          How I Helped
        </h5>
        <ul className="grid grid-cols-1 gap-4">
          {item.howIHelped.map((point, i) => (
            <li
              key={i}
              className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 leading-relaxed hover:bg-white/10 transition-colors"
            >
              <span className="text-blue-600 font-bold">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ),
}));

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/eloho-kennedy-65b731139',
    icon: FaLinkedinIn,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/duske953',
    icon: FaGithub,
  },
  {
    name: 'Pinterest',
    href: 'https://www.pinterest.com/Eloho_ken/',
    icon: FaPinterest,
  },
];

export default function AboutMePage() {
  return (
    <>
      <Navbar className="" />
      <main className="bg-[#0a0a0a]">
        <section className="pt-40 pb-24 relative w-full px-6 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="mb-4 text-blue-500 font-bold uppercase tracking-widest text-sm">
                Hey YOU, I'm
              </p>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white tracking-tighter">
                Eloho Kennedy
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                I build websites that help small businesses look professional,
                get found online, and convert visitors into customers.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <ContactModal
                  btnText="Let's Talk"
                  className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 text-base shrink-0"
                />
                <Link
                  href="/Eloho Kennedy's resume.pdf"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition-colors shrink-0"
                >
                  Download CV
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2 bg-gradient-to-b from-blue-600/20 to-transparent rounded-2xl p-1 relative group">
              <div className="bg-[#111] rounded-2xl overflow-hidden aspect-[4/5] relative">
                <Image
                  src="/Eloho's profile.png"
                  alt="Eloho Kennedy - Full Stack Web Developer"
                  className="w-full h-full object-cover transition-all duration-700 brightness-50"
                  width={500}
                  height={500}
                />

                <div className="absolute right-4 top-10 flex flex-col gap-5 z-20">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white/70 hover:text-blue-500 hover:bg-black/60 transition-all duration-300 border border-white/5"
                      aria-label={link.name}
                    >
                      <link.icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-3 flex flex-col gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Full Stack Web Developer
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6" />
              </div>

              <div className="space-y-4">
                <TrustedBy />
                <p className="text-gray-400 font-medium">
                  10+ clients world-wide
                </p>
              </div>
            </div>
          </div>
        </section>

        <Timeline data={timelineData} />
        <section className="py-24 bg-[#0d0d0d] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Projects Completed', value: '10+' },
                { label: 'In the Craft', value: '5YRS' },
                { label: 'On Delivery', value: '99%' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-500 hover:border-blue-600/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]"
                >
                  <span className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter group-hover:text-blue-500 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight uppercase">
              Edu<span className="text-blue-600">cation</span>
            </h2>
            <div className="max-w-3xl p-10 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    University of Benin
                  </h3>
                  <p className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                    Bachelor of Engineering
                  </p>
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">
                    Electrical/Electronics Engineering
                  </p>
                </div>
                <div className="bg-blue-600/10 border border-blue-600/20 px-6 py-2 rounded-full">
                  <span className="text-blue-500 font-bold tabular-nums">
                    2019 — 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight uppercase">
              Beyond <span className="text-blue-600">the Screen</span>
            </h2>

            <div className="space-y-12 text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
              <p>
                Hey there, hope you're good? Well, I guess if you're reading
                this, you already know a lot about me (at least professionally),
                but who am I when I'm not{' '}
                <span className="text-white">"flirting"</span> with my computer?
              </p>

              <p>
                Outside work? Well… honestly?{' '}
                <span className="italic text-white/60">
                  Jesus heavenly Christ
                </span>
                , I have no life outside work, hahaha. Okay, calm down, I'm
                still thinking of what to say…
              </p>

              <p>
                Oh yeah, I'm a chill guy. Think of the{' '}
                <span className="text-blue-500 font-bold">Chill Guy meme</span>,
                that's pretty much me. So don't expect anything too wild here.
              </p>

              <p>
                What I do know is that I enjoy really listening to podcasts, and
                I mean really listening.{' '}
                <span className="text-white">Mel Robbins</span> is my favourite.
                She just has a way of getting to you with words, right? She
                really is the GOAT. I'm currently on episode 50, I'm lagging
                behind, right? But I'll get there.
              </p>

              <p>
                And of course, music, as everyone does. Favourite genres being{' '}
                <span className="text-white">Country music and Reggae</span>.
                What do you mean boring? No, you're the one that's boring, not
                me.
              </p>

              <p>
                And everybody's favourite way to relax, movies. I'm a big fan of{' '}
                <span className="text-red-500/80">Horror</span>. Like big, big
                fan. I've literally seen everything there is to see about horror
                movies. And the weird thing? I love watching them at night… it
                really sets the mood.
              </p>

              <div className="space-y-4">
                <p className="text-2xl md:text-3xl font-bold text-white tracking-tighter uppercase">
                  MANCHESTER IS <span className="text-[#6CABDD]">BLUE</span>
                </p>
                <p>
                  — and if you know, you know. Under{' '}
                  <span className="text-white">Pep Guardiola</span> since 2016,
                  we've won 6 Premier League titles including a historic four in
                  a row, a domestic treble, the Champions League, the UEFA Super
                  Cup, and the FIFA Club World Cup — 18 major trophies in total.
                  Yeah. That's my team. Still think football is boring? I'm
                  sorry for people who don't watch football… you're missing a
                  loooot.
                </p>
              </div>

              <p className="text-white/40 italic pt-8 border-t border-white/5">
                Well, that's pretty much everything (that I can remember)
                LOOOOL, I don't wanna bore you with too much information.
              </p>

              <div className="pt-12 flex flex-col md:flex-row items-center gap-6">
                <p className="text-white font-bold">
                  So, now you know the person behind the code, think we'd vibe?
                </p>
                <ContactModal
                  btnText="Let's Talk"
                  className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-4 text-base"
                />
              </div>
            </div>
          </div>
        </section>
        {/* 
        <Cta
          heading="The cheapest website is the one built right the first time."
          description="Tell me what you need, and I'll build it right - fast, secure, and reliable."
        >
          <ContactModal
            btnText="Let's Talk"
            className="bg-blue-600 hover:bg-blue-700 rounded-full px-10 py-7 text-lg"
          />
        </Cta> */}
      </main>
    </>
  );
}
