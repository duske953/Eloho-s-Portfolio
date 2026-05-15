'use client';
import {
  Globe2,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Image as ImageIcon,
  Info,
  Link2,
  ShieldAlert,
} from 'lucide-react';
import { Input } from '~/components/ui/input';
import { useState } from 'react';
import { handleAnalyzeSite } from '../actions/handleAnaylzeSite';
import { AnalysisData, AnalysisItem } from '../types';
import { cn } from '~/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import ReportGenerator from './ReportGenerator';

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

      <form onSubmit={renderAnalyzeSite} className="relative mb-16">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-blue-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
          <div className="relative flex gap-2 p-2 bg-[#0d0d0d] border border-white/5 rounded-2xl items-center">
            <Globe2 className="w-5 h-5 text-gray-500 ml-4" />
            <Input
              placeholder="https://yourwebsite.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="bg-transparent border-none focus-visible:ring-0 text-white text-lg placeholder:text-gray-600 h-12"
            />
            <button
              type="submit"
              disabled={isAnalyzing || !url}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 h-12 font-semibold transition-all disabled:opacity-50"
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
        </div>
      </form>

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
            {/* <SummaryMessage
              criticalCount={grouped.critical.length}
              warningCount={grouped.warning.length}
            /> */}
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
                <ReportGenerator data={data} url={url} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// function SummaryMessage({
//   criticalCount,
//   warningCount,
// }: {
//   criticalCount: number;
//   warningCount: number;
// }) {
//   const hasManyIssues = criticalCount > 0 || warningCount > 3;

//   return (
//     <div className="pb-6 border-b border-white/5">
//       <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
//         <div className="max-w-2xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
//             {hasManyIssues
//               ? 'Hey, there are quite a few issues here.'
//               : 'Great news! Your site is looking solid.'}
//           </h2>
//           <p className="text-gray-400 text-lg leading-relaxed">
//             {hasManyIssues
//               ? 'We found several technical problems that could be holding your site back. Addressing these will significantly improve your user experience and search rankings.'
//               : "Most of your site's foundation is in excellent shape. We've identified just a few minor areas where you can fine-tune things for even better results."}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

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
    switch (severity) {
      case 'pass':
        return {
          icon: <CheckCircle2 className="text-green-500" size={16} />,
          text: 'PASS',
          color: 'text-green-500 bg-green-500/5',
        };
      case 'critical':
        return {
          icon: <XCircle className="text-red-500" size={16} />,
          text: 'CRITICAL',
          color: 'text-red-500 bg-red-500/5',
        };
      case 'warning':
        return {
          icon: <AlertCircle className="text-amber-500" size={16} />,
          text: 'WARNING',
          color: 'text-amber-500 bg-amber-500/5',
        };
      case 'info':
        return {
          icon: <Info className="text-blue-500" size={16} />,
          text: 'INFO',
          color: 'text-blue-500 bg-blue-500/5',
        };
      default:
        return { icon: null, text: '', color: '' };
    }
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
          {/* <span
            className={`text-[7px] font-black px-1.5 py-0.5 rounded uppercase tracking-[0.2em] ${styles.color}`}
          >
            {styles.text}
          </span> */}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
          {item.message}
        </p>
      </div>
    </div>
  );
}
