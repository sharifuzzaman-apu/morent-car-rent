'use client';

import { SelectHTMLAttributes } from 'react';
import clsx from 'clsx';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export default function Select({
  label,
  children,
  className,
  ...props
}: SelectProps) {
  return (
    <label className="text-sm space-y-1 w-full">
      {label && <span className="text-gray-700">{label}</span>}
      <select
        {...props}
        className={clsx(
          'w-full rounded-lg bg-[#F6F7F9] px-3 py-2 text-sm outline-none',
          className,
        )}
      >
        {children}
      </select>
    </label>
  );
}
