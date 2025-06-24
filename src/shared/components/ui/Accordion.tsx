'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

type AccordionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  size?: 'base' | 'compact';
};

export function Accordion({
  title,
  children,
  defaultOpen = false,
  size = 'base',
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  const containerStyle =
    size === 'compact'
      ? 'rounded-md border px-3 py-2 text-sm'
      : 'rounded-lg border px-4 py-3 text-lg';

  const contentPadding = size === 'compact' ? 'px-3 py-2' : 'px-4 py-3';

  return (
    <div
      className={`border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm ${containerStyle}`}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between text-left font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition"
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`overflow-hidden ${contentPadding} text-sm text-gray-800 dark:text-gray-100`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
