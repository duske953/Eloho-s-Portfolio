'use client';

import { motion } from 'motion/react';
import { Hammer, Clock, MessageSquare, Mail } from 'lucide-react';

export default function Maintenance() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 selection:bg-blue-500/30">
      <div className="relative w-full max-w-2xl overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 blur-[120px] rounded-full" />

        <div className="relative z-10 text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/10 text-blue-500"
          >
            <Hammer size={40} className="" />
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl leading-loose max-md:text-2xl max-md:leading-loose font-extrabold text-white tracking-tighter"
            >
              We're down for maintenance. We'll be back shortly — thanks for
              your patience!
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
          >
            <a
              href="mailto:web@eloho.dev"
              className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors text-sm font-bold uppercase tracking-widest group"
            >
              <Mail
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
              <span>Contact me</span>
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
