"use client";

import { useState } from "react";

type Props = {
  question: string;
  answers: string[];
};

export function ProgressiveAnswersAccordion({ question, answers }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(0);

  const handleQuestionClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setAnswerIndex(0); // start from the beginning on first open
    }
  };

  const handleAnswerClick = () => {
    setAnswerIndex((prevIndex) => (prevIndex + 1) % answers.length);
  };

  return (
    <div>
      <button
        onClick={handleQuestionClick}
        className="text-left font-medium text-blue-600 hover:underline"
      >
        {question}
      </button>

      {isOpen && (
        <div
          className="mt-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
          onClick={handleAnswerClick}
        >
          💡 {`${answerIndex+1} - ${answers[answerIndex]}`}
        </div>
      )}
    </div>
  );
}
