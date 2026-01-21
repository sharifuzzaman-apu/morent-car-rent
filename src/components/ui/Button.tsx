'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500',
        // Variants
        {
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'bg-white text-blue-600 hover:bg-blue-50': variant === 'secondary',
        },
        // Sizes
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
