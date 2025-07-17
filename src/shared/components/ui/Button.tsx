'use client';
import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
  className?: string;
};

export function Button({
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  outline = false,
  className,
}: ButtonProps) {
  const base =
    'rounded font-medium transition disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: outline
      ? 'text-blue-600 border border-blue-600 hover:bg-blue-50'
      : 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: outline
      ? 'text-gray-700 border border-gray-500 hover:bg-gray-100'
      : 'bg-gray-600 hover:bg-gray-700 text-white',
    danger: outline
      ? 'text-red-600 border border-red-600 hover:bg-red-50'
      : 'bg-red-600 hover:bg-red-700 text-white',
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const buttonSize = sizeClasses[size || 'md'];

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${base} ${variantClasses[variant]} ${buttonSize} ${className} ?? ''`}
    >
      {isLoading ? 'Loading…' : children}
    </button>
  );
}
