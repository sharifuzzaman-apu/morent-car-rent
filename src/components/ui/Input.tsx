'use client';

import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, className, ...props }: InputProps) {
  return (
    <label className="text-sm space-y-1 w-full">
      {label && <span className="text-gray-700">{label}</span>}
      <input
        {...props}
        className={clsx(
          'w-full rounded-lg bg-[#F6F7F9] px-3 py-2 text-sm outline-none',
          className,
        )}
      />
    </label>
  );
}
