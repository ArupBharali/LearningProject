'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  question: string;
  answers: string[];
};

export function ProgressiveAnswersAccordion({ question, answers }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [visited, setVisited] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(0);
  const [secondsOpen, setSecondsOpen] = useState(0);
const [isTabFocused, setIsTabFocused] = useState(true)


    const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { ref, inView } = useInView({ 
    threshold: 0 // threshold: 0.5: This means the observer will trigger when 50% or more of the element is visible. If less than 50% is visible, inView will be false.
  }); // Triggered when 50% in view

  // Start or pause timer
  useEffect(() => {
    const handleFocus = () => setIsTabFocused(true)
  const handleBlur = () => setIsTabFocused(false)

  window.addEventListener('focus', handleFocus)
  window.addEventListener('blur', handleBlur)

  const handleVisibilityChange = () => {
    setIsTabFocused(document.visibilityState === 'visible')
  }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    if (isOpen && inView 
      // && isTabFocused
    ) {
      intervalRef.current = setInterval(() => {
        setSecondsOpen((s) => s + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      window.removeEventListener('focus', handleFocus)
  window.removeEventListener('blur', handleBlur)

  document.removeEventListener('visibilitychange', handleVisibilityChange)
    };
  }, [isOpen, inView, isTabFocused]);

  const handleQuestionClick = () => {
    setIsOpen((prev) => !prev);
    setAnswerIndex(0);

  setVisited(true);
  };

  const handleAnswerClick = () => {
    setAnswerIndex((prevIndex) => (prevIndex + 1) % answers.length);
  };

  return (
    <div ref={ref} className="transition-colors duration-300">
      <button
        onClick={handleQuestionClick}
        className={`cursor-pointer text-left font-medium transition-colors
    ${visited ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-100'}
    hover:text-blue-600 dark:hover:text-blue-400`}
      >
        {question} {`(${answers.length})`} {`(was open for `}{(secondsOpen/60).toFixed(0)}{` mins)`}
      </button>

      {isOpen && (
        <pre
          className="whitespace-pre-wrap break-words overflow-x-auto mt-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded cursor-pointer transition-colors"
          onClick={handleAnswerClick}
        >
          <code>💡 {`${answerIndex + 1} - ${answers[answerIndex]}`}</code>
        </pre>
      )}
    </div>
  );
}
