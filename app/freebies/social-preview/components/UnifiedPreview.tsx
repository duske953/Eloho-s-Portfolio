'use client';

import {
  Facebook,
  Twitter,
  Linkedin,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { cn } from '~/lib/utils';
import { motion } from 'motion/react';
import Link from 'next/link';
import GuideForm from './GuideForm';

interface PreviewCardProps {
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  siteName: string;
  platform?: string;
}

const getPlatformName = (platform?: string) => {
  if (!platform) return 'Custom Site';
  const names: Record<string, string> = {
    wordpress: 'WordPress',
    webflow: 'Webflow',
    shopify: 'Shopify',
    wix: 'Wix',
    squarespace: 'Squarespace',
    custom: 'Custom',
  };
  return names[platform.toLowerCase()];
};

export default function UnifiedPreview({
  data,
  url,
}: {
  data: PreviewCardProps;
  url: string;
}) {
  const hasOgTags =
    data && (data.ogTitle || data.ogDescription || data.ogImage);
  const platformName = getPlatformName(data.platform);

  if (!hasOgTags) {
    return (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-[#0d0d0d] p-8 md:p-12 text-center"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 text-red-500">
            <ShieldAlert size={40} />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
            No OG Tags Detected
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            We couldn&apos;t find any Open Graph tags on this page. Without
            them, your website will look{' '}
            <span className="text-white font-semibold italic">very off</span>{' '}
            when shared on social media.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {['Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
              <div
                key={platform}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-500">
                  {platform === 'Facebook' && <Facebook size={16} />}
                  {platform === 'Twitter' && <Twitter size={16} />}
                  {platform === 'LinkedIn' && <Linkedin size={16} />}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  {platform}
                </span>
                <div className="h-1 w-full bg-red-500/20 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-red-500 animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-xs text-amber-500/70 font-medium bg-amber-500/5 border border-amber-500/10 w-fit mx-auto px-4 py-2 rounded-full">
            <AlertTriangle size={14} />
            Platforms will fallback to generic titles or nothing at all.
          </div>
        </motion.div>
        <GuideForm platform={platformName} url={url} />
      </div>
    );
  }

  const titleLength = data.ogTitle?.length || 0;
  const descLength = data.ogDescription?.length || 0;

  const isTitleOk = titleLength >= 30 && titleLength <= 60;
  const isDescOk = descLength >= 50 && descLength <= 160;

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs md:text-sm text-gray-400">
            <span className="text-blue-500 font-bold uppercase tracking-widest mr-2">
              {platformName} Detected
            </span>
            Need help tweaking your previews? We have a step-by-step guide for{' '}
            {platformName} site.
          </p>
        </motion.div>

        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <Facebook className="w-4 h-4 text-[#1877F2] bg-white rounded-full p-0.5" />
              <Twitter className="w-4 h-4 text-[#1DA1F2] bg-white rounded-full p-0.5" />
              <Linkedin className="w-4 h-4 text-[#0A66C2] bg-white rounded-full p-0.5" />
            </div>
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Unified Social Preview
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <ExternalLink size={12} />
            {url}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] shadow-2xl transition-all duration-300">
          <div className="relative aspect-[1.91/1] w-full overflow-hidden bg-gray-900 group">
            {data.ogImage ? (
              <img
                src={data.ogImage}
                alt="Preview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#1a1a1a] text-gray-600 gap-4">
                <AlertTriangle size={48} className="opacity-20" />
                <p className="text-sm font-medium uppercase tracking-widest opacity-50">
                  No Image Preview
                </p>
              </div>
            )}
          </div>
          <div className="p-6 bg-[#1a1a1a] border-t border-white/5">
            <p className="text-[12px] text-blue-500 font-bold uppercase tracking-widest mb-2">
              {url}
            </p>
            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
              {data.ogTitle || 'Untitled Page'}
            </h3>
            <p className="text-base text-gray-400 line-clamp-3 leading-relaxed">
              {data.ogDescription || 'No description available for this page.'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalysisCard
          title="OG Title"
          value={`${titleLength} characters`}
          status={isTitleOk ? 'pass' : 'warning'}
          message={
            isTitleOk
              ? 'Your title length is perfect for social media.'
              : titleLength > 60
                ? 'Your title is a bit long and might be cut off.'
                : 'Your title is quite short. Try to make it more descriptive.'
          }
          limit="Target: 30-60"
          progress={(Math.min(titleLength, 100) / 100) * 100}
        />
        <AnalysisCard
          title="OG Description"
          value={`${descLength} characters`}
          status={isDescOk ? 'pass' : 'warning'}
          message={
            isDescOk
              ? 'Your description length is optimal for all platforms.'
              : descLength > 160
                ? 'Description is too long! Most platforms will truncate after 160 chars.'
                : 'Description is too short. Add more detail to encourage clicks.'
          }
          limit="Target: 50-160"
          progress={(Math.min(descLength, 200) / 200) * 100}
        />
      </div>

      <GuideForm platform={platformName} url={url} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center pt-8"
      >
        <Link
          href="/freebies/site-analyzer"
          className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300"
        >
          <span className="text-sm md:text-base font-medium">
            Run a full site audit, to make sure everything is in place
          </span>
          <ArrowRight
            size={18}
            className="text-blue-500 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </motion.div>
    </div>
  );
}

function AnalysisCard({
  title,
  value,
  status,
  message,
  limit,
  progress,
}: {
  title: string;
  value: string;
  status: 'pass' | 'warning' | 'error';
  message: string;
  limit: string;
  progress: number;
}) {
  return (
    <div className="p-6 bg-[#0d0d0d] border border-white/5 rounded-2xl space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            {title}
          </h4>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div
            className={cn(
              'h-full transition-all duration-1000',
              status === 'pass' ? 'bg-green-500' : 'bg-amber-500',
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-gray-600 font-medium">
          <span>0</span>
          <span>{limit}</span>
        </div>
      </div>

      <div className="flex gap-3 p-3 bg-white/[0.02] rounded-xl items-start">
        {status === 'pass' ? (
          <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
        ) : (
          <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
        )}
        <p className="text-xs text-gray-400 leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
