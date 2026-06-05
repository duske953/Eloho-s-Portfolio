'use client';

import { Globe2, LucideIcon } from 'lucide-react';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

interface FreebieInputProps {
  url: string;
  setUrl: (url: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  placeholder?: string;
  buttonText?: string;
  loadingText?: string;
  Icon?: LucideIcon;
  ButtonIcon?: LucideIcon;
  className?: string;
}

export default function FreebieInput({
  url,
  setUrl,
  onSubmit,
  isLoading,
  placeholder = 'https://yourwebsite.com',
  buttonText = 'Analyze',
  loadingText = 'Analyzing...',
  Icon = Globe2,
  ButtonIcon,
  className,
}: FreebieInputProps) {
  return (
    <form onSubmit={onSubmit} className={cn('relative mb-16', className)}>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-blue-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
        <div className="relative flex gap-2 p-2 bg-[#0d0d0d] border border-white/5 rounded-2xl items-center">
          <Icon className="w-5 h-5 text-gray-500 ml-4" />
          <Input
            placeholder={placeholder}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-transparent border-none focus-visible:ring-0 text-white text-lg placeholder:text-gray-600 h-12"
          />
          <Button
            type="submit"
            disabled={isLoading || !url}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 h-12 font-semibold transition-all disabled:opacity-50 flex items-center gap-2 shrink-0"
          >
            {isLoading ? (
              loadingText
            ) : (
              <>
                {ButtonIcon && <ButtonIcon size={18} />}
                {buttonText}
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
