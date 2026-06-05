'use client';

import { useState } from 'react';
import { Mail, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import handleSendPlatformGuide from '../actions/handleSendPlatformGuide';
import TipsCheckbox from '~/components/TipsCheckbox';

export default function GuideForm({
  platform,
  url,
}: {
  platform: string;
  url: string;
}) {
  const [email, setEmail] = useState('');
  const [sendTips, setSendTips] = useState(false);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  async function renderSendPlatformGuide(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    const { code } = await handleSendPlatformGuide(
      email,
      platform,
      url,
      sendTips,
    );
    if (code === 200) {
      setStatus('success');
      return;
    }
    setStatus('error');
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl flex flex-col items-center text-center gap-3"
      >
        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <p className="text-white font-bold text-lg">Guide is on its way!</p>
          <p className="text-gray-400 text-sm">
            Check your inbox. We&apos;ve sent the step-by-step {platform} guide
            to {email}.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6 relative overflow-hidden group mt-8">
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full" />

      <div className="relative z-10">
        <h4 className="text-xl font-bold text-white mb-2 italic">
          Get the {platform} site SEO Guide
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          We&apos;ve compiled a step-by-step Doc on how to fix and optimize OG
          tags specifically for{' '}
          <span className="text-blue-500 font-bold">{platform} site</span>.
          Enter your email and we&apos;ll send it over instantly.
        </p>

        <form
          onSubmit={renderSendPlatformGuide}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-black/40 border-white/10 pl-11 h-12 focus:border-blue-500/50 transition-colors"
            />
          </div>
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-8 rounded-xl shrink-0 transition-all active:scale-95"
          >
            {status === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Send Guide
                <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>

        <TipsCheckbox
          id="sendTips"
          checked={sendTips}
          onChange={setSendTips}
          className="mt-4"
        />

        {status === 'error' && (
          <p className="text-red-500 text-xs mt-3 font-medium">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
