'use client';
import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
};

export function Button({
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  onClick,
  variant = 'primary'
}: ButtonProps) {
  const base =
    'px-4 py-2 rounded text-white font-medium transition disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-gray-600 hover:bg-gray-700',
    danger: 'bg-red-600 hover:bg-red-700'
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${base} ${variantClasses[variant]}`}
    >
      {isLoading ? 'Loading…' : children}
    </button>
  );
}
