'use client';

import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface PaymentOptionProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function PaymentOption({
  label,
  className,
  ...props
}: PaymentOptionProps) {
  return (
    <label
      className={clsx(
        'flex items-center bg-[#F6F7F9] gap-2  rounded-lg p-4 text-sm cursor-pointer',
        className,
      )}
    >
      <input type="radio" name="payment" {...props} />
      {label}
    </label>
  );
}
