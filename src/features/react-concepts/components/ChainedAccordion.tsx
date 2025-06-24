'use client';

import { useState } from 'react';
import { Accordion } from '@/shared/components/ui/Accordion';

type ChainedAccordionProps = {
  question: string;
  answers: string[];
};

export function ChainedAccordion({ question, answers }: ChainedAccordionProps) {
  const [visible, setVisible] = useState<boolean[]>(
    Array.from({ length: answers.length }, (_, i) => i === 0) // Only first visible
  );

  const revealNext = (index: number) => {
    if (index + 1 < visible.length) {
      setVisible((prev) =>
        prev.map((v, i) => (i === index + 1 ? true : v))
      );
    }
  };

  return (
    <Accordion title={question} defaultOpen={false} size="compact">
      <ul className="list-none space-y-2 pl-2">
        {answers.map((ans, idx) =>
          visible[idx] ? (
            <li key={idx}>
              <Accordion
                title={`Answer ${idx + 1}`}
                defaultOpen={false}
                size="compact"
                // optional: reveal next answer on toggle
                // or put this in onClick if desired
                onToggle={() => revealNext(idx)}
              >
                <p className="text-sm text-gray-700 dark:text-gray-300">{ans}</p>
              </Accordion>
            </li>
          ) : null
        )}
      </ul>
    </Accordion>
  );
}
