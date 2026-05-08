'use client';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import {
  CheckCircle2,
  Globe2,
  Search,
  AlertCircle,
  Clock,
  ShieldCheck,
  Calendar,
  Info,
} from 'lucide-react';
import { handleSSL } from '../actions/handleSSL';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SSLResult {
  secure: {
    message: string;
    status: string;
  };
  daysLeft: number;
  expiringSoon: boolean;
  trusted: string;
  issueDate: string;
  validFrom: string;
  validTo: string;
  isTrusted: boolean;
  tlsVersion: string;
}

export default function UrlSearchBar() {
  const [url, setUrl] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<{
    error: { code: number; message: string } | null;
    result: SSLResult | null;
  }>();
  async function renderSubmitSSL(e: React.FormEvent) {
    e.preventDefault();
    if (!url) return;
    setIsChecking(true);
    setResult({ error: null, result: null });
    const { code, response } = await handleSSL(url);
    setIsChecking(false);
    if (code === 200) {
      setResult({ error: null, result: response });
      return;
    }
    setResult({ error: { code, message: response.error }, result: null });
  }

  return (
    <div className="w-full">
      <form onSubmit={renderSubmitSSL} className="relative mb-6">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-blue-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
          <div className="relative flex gap-2 p-2 bg-[#0d0d0d] border border-white/5 rounded-2xl items-center">
            <Globe2 className="w-5 h-5 text-gray-500 ml-4" />
            <Input
              placeholder="yourbusiness.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="bg-transparent border-none focus-visible:ring-0 text-white text-lg placeholder:text-gray-600 h-12"
            />
            <Button
              type="submit"
              disabled={isChecking || !url}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 h-12 font-semibold transition-all"
            >
              {isChecking ? (
                <Search className="w-5 h-5 animate-spin" />
              ) : (
                'Analyze'
              )}
            </Button>
          </div>
        </div>
      </form>

      <AnimatePresence>
        {result?.error && result.result === null && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5 flex items-start gap-4"
          >
            <div className="p-2 bg-red-500/10 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <div className="text-sm font-bold text-red-500 uppercase tracking-widest mb-1">
                Critical Error
              </div>
              {/* <div className="text-white font-bold mb-1">
                {result.error.message}
              </div> */}
              <p className="text-xs text-gray-400 leading-relaxed">
                Your website security has lapsed. This can lead to browser
                warnings and loss of customer trust.
                <span className="text-red-400 block mt-2 font-medium">
                  Please contact your developer or hosting provider immediately.
                </span>
              </p>
            </div>
          </motion.div>
        )}
        {!result?.error && result?.result && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#0d0d0d] border border-white/5 rounded-2xl overflow-hidden divide-y divide-white/5"
          >
            <DataRow
              label="Secured"
              value={result.result.secure.message}
              icon={<ShieldCheck className="text-blue-500" size={16} />}
            />

            <DataRow
              label="Days Remaining"
              value={`${result.result.daysLeft}`}
              subValue={
                result.result.expiringSoon ? 'Expiring Soon' : 'Healthy'
              }
              icon={
                <Clock
                  className={
                    result.result.expiringSoon
                      ? 'text-amber-500'
                      : 'text-blue-500'
                  }
                  size={16}
                />
              }
            />
            <DataRow
              label="Issued By"
              value={result.result.trusted}
              icon={<ShieldCheck className="text-blue-500" size={16} />}
            />
            <DataRow
              label="Issue Date"
              value={new Date(result.result.issueDate).toDateString()}
              icon={<Calendar className="text-blue-500" size={16} />}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DataRow({
  label,
  value,
  subValue,
  icon,
}: {
  label: string;
  value: string;
  subValue?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-center p-5 hover:bg-white/[0.02] transition-colors">
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
          {label}
        </span>
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-white font-bold">{value}</span>
        </div>
      </div>
      {subValue && (
        <span className="text-xs font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-500 uppercase tracking-tighter">
          {subValue}
        </span>
      )}
    </div>
  );
}
