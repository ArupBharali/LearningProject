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
    setIsOpen((prev) => !prev);
    setAnswerIndex(0);
  };

  const handleAnswerClick = () => {
    setAnswerIndex((prevIndex) => (prevIndex + 1) % answers.length);
  };

  return (
    <div className="transition-colors duration-300">
      <button
        onClick={handleQuestionClick}
        className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium"
      >
        {question}
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
