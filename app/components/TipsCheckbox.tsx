import { CheckCircle2 } from 'lucide-react';
import { cn } from '~/lib/utils';

interface TipsCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export default function TipsCheckbox({
  id,
  checked,
  onChange,
  label = "Send me occasional tips on improving my site's visibility",
  className,
}: TipsCheckboxProps) {
  return (
    <div
      className={cn(
        'flex items-center space-x-3 group/checkbox cursor-pointer',
        className,
      )}
    >
      <div className="relative flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer h-5 w-5 appearance-none rounded-lg border-2 border-white/10 bg-white/5 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer hover:border-blue-500/50"
        />
        <CheckCircle2
          className="absolute left-1 top-1 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
          strokeWidth={3}
        />
      </div>
      <label
        htmlFor={id}
        className="text-[13px] text-gray-400 cursor-pointer select-none group-hover/checkbox:text-gray-300 transition-colors"
      >
        {label}
      </label>
    </div>
  );
}
