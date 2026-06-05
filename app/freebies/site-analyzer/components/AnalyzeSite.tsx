'use client';
import { CheckCircle2, XCircle, AlertCircle, Info } from 'lucide-react';
import { useState } from 'react';
import { handleAnalyzeSite } from '../actions/handleAnaylzeSite';
import { AnalysisData, AnalysisItem } from '../types';
import { cn } from '~/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import ReportGenerator from './SiteReport';
import FreebieInput from '~/components/FreebieInput';
import SiteReport from './SiteReport';

export default function AnaylzeSite() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [data, setData] = useState<AnalysisData | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function renderAnalyzeSite(e: React.FormEvent) {
    e.preventDefault();
    if (!url) return;
    setIsAnalyzing(true);
    setData(null);
    setError(null);
    const { response, code } = await handleAnalyzeSite(url);
    setIsAnalyzing(false);

    if (code === 200 && typeof response !== 'string') {
      setData(response);
    } else {
      setError(
        typeof response === 'string'
          ? response
          : 'Failed to analyze site. Please check the URL and try again.',
      );
    }
  }

  const allItems: AnalysisItem[] = data
    ? [
        data.seo.hasTitle,
        data.seo.hasDescription,
        data.seo.hasKeywords,
        data.seo.hasCanonical,
        data.seo.hasFavicon,
        data.seo.og.hasOgTitle,
        data.seo.og.hasOgDescription,
        data.seo.og.hasOgImage,
        data.seo.twitter.hasTwitterCard,
        data.seo.twitter.hasTwitterTitle,
        data.headings.hasH1,
        data.headings.multipleH1,
        data.headings.h2Count,
        data.links?.brokenLinks,
        data.links?.links405,
        data.images.missingAlt,
        data.images?.brokenImages,
        data.images?.duplicateImages,
      ].filter((item): item is AnalysisItem => item !== null)
    : [];

  const grouped = {
    critical: allItems.filter((i) => i?.severity === 'critical'),
    warning: allItems.filter((i) => i?.severity === 'warning'),
    pass: allItems.filter((i) => i?.severity === 'pass'),
    info: allItems.filter((i) => i?.severity === 'info'),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
        Site <span className="text-blue-600">Analyzer</span>
      </h1>

      <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
        Know exactly what's wrong with your site in 10 seconds.
      </p>

      <FreebieInput
        url={url}
        setUrl={setUrl}
        onSubmit={renderAnalyzeSite}
        isLoading={isAnalyzing}
      />

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-12 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500"
          >
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </motion.div>
        )}

        {data && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-20"
          >
            <p className="text-center text-3xl font-bold">
              {data.seo.hasTitle.description}
            </p>

            <div className="space-y-20 pt-10 border-t border-white/5">
              {grouped.critical.length > 0 && (
                <Group title="Critical Issues" items={grouped.critical} />
              )}

              {grouped.warning.length > 0 && (
                <Group title="Warnings" items={grouped.warning} />
              )}

              {grouped.pass.length > 0 && (
                <Group title="What's Working" items={grouped.pass} />
              )}

              {grouped.info.length > 0 && (
                <Group title="General Information" items={grouped.info} />
              )}

              <div
                style={{ marginTop: 0 }}
                className="py-14 border-t border-white/5 flex justify-center"
              >
                <SiteReport data={data} url={url} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Group({ title, items }: { title: string; items: AnalysisItem[] }) {
  return (
    <div className="space-y-4">
      <h3
        className={cn(
          'text-[10px] font-bold uppercase tracking-[0.3em] pl-1',
          title.includes('Critical')
            ? 'text-red-500'
            : title.includes('Warnings')
              ? 'text-amber-500'
              : title.includes('Working')
                ? 'text-green-500'
                : 'text-blue-500',
        )}
      >
        {title}
      </h3>
      <div className="flex flex-col">
        {items.map((item, i) => (
          <ResultRow key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

function ResultRow({ item }: { item: AnalysisItem }) {
  const getSeverityStyles = (severity: string) => {
    if (severity === 'pass')
      return {
        icon: <CheckCircle2 className="text-green-500" size={16} />,
        text: 'PASS',
        color: 'text-green-500 bg-green-500/5',
      };
    if (severity === 'critical')
      return {
        icon: <XCircle className="text-red-500" size={16} />,
        text: 'CRITICAL',
        color: 'text-red-500 bg-red-500/5',
      };
    if (severity === 'warning')
      return {
        icon: <AlertCircle className="text-amber-500" size={16} />,
        text: 'WARNING',
        color: 'text-amber-500 bg-amber-500/5',
      };
    if (severity === 'info')
      return {
        icon: <Info className="text-blue-500" size={16} />,
        text: 'INFO',
        color: 'text-blue-500 bg-blue-500/5',
      };
    return { icon: null, text: '', color: '' };
  };

  const styles = getSeverityStyles(item?.severity);

  return (
    <div className="py-7 border-b border-white/5 last:border-none flex gap-6 items-start">
      <div className="mt-1 shrink-0">{styles.icon}</div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <h4 className="text-white font-bold text-lg leading-none tracking-tight">
            {item.title}
          </h4>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
          {item.message}
        </p>
      </div>
    </div>
  );
}
