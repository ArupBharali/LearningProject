'use client';

import { useState } from 'react';

type Props = {
  question: string;
  answers: string[];
};

export function ProgressiveAnswersAccordion({ question, answers }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(0);

  const handleQuestionClick = () => {
    if (!isOpen) {
      // start from the beginning on first open
    }
    setIsOpen((prev) => !prev);
    setAnswerIndex(0);
  };

  const handleAnswerClick = () => {
    setAnswerIndex((prevIndex) => (prevIndex + 1) % answers.length);
  };

  return (
    <div>
      <button
        onClick={handleQuestionClick}
        className="cursor-pointer text-gray-800 hover:text-blue-600 transition-colors"
      >
        {question}
      </button>

      {isOpen && (
        <pre
          className="whitespace-pre-wrap break-words overflow-x-auto mt-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
          onClick={handleAnswerClick}
        >
          <code>💡 {`${answerIndex + 1} - ${answers[answerIndex]}`}</code>
        </pre>
      )}
    </div>
  );
}
