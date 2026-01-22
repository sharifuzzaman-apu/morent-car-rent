'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  title?: string;
  description?: string;
  step?: string;
  className?: string;
}

export default function Card({
  children,
  title,
  description,
  step,
  className,
}: CardProps) {
  return (
    <section
      className={clsx(
        'bg-white border border-gray-200 rounded-xl p-6',
        className,
      )}
    >
      {(title || step) && (
        <div className="flex justify-between items-center mb-6">
          <div>
            {title && <h2 className="font-semibold">{title}</h2>}
            {description && (
              <p className="text-sm text-gray-400">{description}</p>
            )}
          </div>
          {step && <span className="text-sm text-gray-400">{step}</span>}
        </div>
      )}

      {children}
    </section>
  );
}
