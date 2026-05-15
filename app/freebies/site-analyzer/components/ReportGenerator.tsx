'use client';
import { Mail, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

import { AnalysisData, AnalysisItem } from '../types';
import { handleEmailReport } from '../actions/handleEmailReport';
import { Input } from '~/components/ui/input';
import pdfReport from '../pdfReport';

interface ReportGeneratorProps {
  data: AnalysisData;
  url: string;
}

export default function ReportGenerator({ data, url }: ReportGeneratorProps) {
  const [email, setEmail] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateAndSendPDF = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsGenerating(true);
    setError(null);
    setIsSuccess(false);
    const element = document.createElement('div');
    try {
      const pdf = await pdfReport(data, url, element);
      const { response, code } = await handleEmailReport({
        email,
        url,
        pdfBase64: pdf,
      });
      document.body.removeChild(element);
      setIsGenerating(false);
      if (code === 200) {
        setIsSuccess(true);
        setEmail('');
        return;
      }

      setError(response);
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-green-500">
        <CheckCircle2 className="w-5 h-5" />
        <p className="text-sm font-medium">Report sent! Check your inbox.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={generateAndSendPDF} className="space-y-4">
        <p className="text-sm text-gray-400 text-center mb-6">
          Where should we send your report?
        </p>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-blue-600/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
          <div className="relative flex p-1 bg-[#0d0d0d] border border-white/5 rounded-xl items-center">
            <Mail className="w-4 h-4 text-gray-500 ml-3" />
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent border-none focus-visible:ring-0 text-white text-sm placeholder:text-gray-600 h-10"
            />
            <button
              type="submit"
              disabled={isGenerating || !email}
              className="bg-white hover:bg-gray-200 text-black rounded-lg px-4 h-10 text-xs font-bold transition-all disabled:opacity-50 whitespace-nowrap"
            >
              {isGenerating ? 'Sending...' : 'Email Report'}
            </button>
          </div>
        </div>
        {error && (
          <p className="text-xs text-red-500 text-center mt-2">{error}</p>
        )}
      </form>
    </div>
  );
}
