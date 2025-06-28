// src/shared/components/ui/InfoTooltip.tsx
import { AiOutlineInfoCircle } from 'react-icons/ai';

export function InfoTooltip({ text }: { text: string }) {
  return (
    <span className="group relative inline-block text-gray-400 hover:text-blue-500 cursor-help">
      <AiOutlineInfoCircle size={16} />
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 hidden group-hover:flex bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg z-10 whitespace-pre-line">
        {text}
      </span>
    </span>
  );
}
