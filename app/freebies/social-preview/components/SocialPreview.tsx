'use client';
import { useState } from 'react';
import { Share2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import UnifiedPreview from './UnifiedPreview';
import handleAnalyzeOgTags from '../actions/handleAnalyzeOgTags';
import FreebieInput from '~/components/FreebieInput';

export default function SocialPreview() {
  const [url, setUrl] = useState('');
  const [lastAnalyzedUrl, setLastAnalyzedUrl] = useState('');
  const [status, setStatus] = useState<{
    isLoading: boolean;
    data: any;
    error: null | string;
  }>({
    isLoading: false,
    data: null,
    error: null,
  });

  async function handlePreview(e: React.FormEvent) {
    e.preventDefault();
    if (!url) return;
    let normalizedUrl = url.trim();
    if (!/^https?:\/\//i.test(normalizedUrl)) {
      normalizedUrl = `https://${normalizedUrl}`;
    }

    try {
      new URL(normalizedUrl);
    } catch (e) {
      setStatus({
        isLoading: false,
        data: null,
        error: 'Please enter a valid website URL.',
      });
      return;
    }

    setStatus({
      isLoading: true,
      data: null,
      error: null,
    });

    const { response, code } = await handleAnalyzeOgTags(normalizedUrl);

    if (code === 200) {
      setLastAnalyzedUrl(normalizedUrl);
      setStatus({
        isLoading: false,
        data: response as any,
        error: null,
      });
    } else {
      setStatus({
        isLoading: false,
        data: null,
        error:
          typeof response === 'string'
            ? response
            : 'Failed to analyze website. Please try again.',
      });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
        Social <span className="text-blue-600">Preview</span>
      </h1>

      <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
        See how your website looks when shared on social media. Check if your
        meta tags are working correctly.
      </p>

      <FreebieInput
        url={url}
        setUrl={setUrl}
        onSubmit={handlePreview}
        isLoading={status.isLoading}
        buttonText="Preview"
        loadingText="Fetching..."
        ButtonIcon={Share2}
      />

      <AnimatePresence>
        {status.error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-12 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500"
          >
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-medium">{status.error}</p>
          </motion.div>
        )}

        {status.data && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            <UnifiedPreview data={status.data} url={lastAnalyzedUrl} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
