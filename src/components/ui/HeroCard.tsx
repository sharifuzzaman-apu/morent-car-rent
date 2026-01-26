'use client';

import Button from '@/components/ui/Button';

interface HeroCardProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export default function HeroCard({
  title,
  description,
  backgroundImage,
}: HeroCardProps) {
  return (
    <div
      className="relative w-full max-w-160 h-55 sm:h-75 md:h-90 flex flex-col rounded-[10px] bg-blue-600/80 pt-6 sm:pt-8 md:pt-8 pl-4 sm:pl-8 md:pl-16 text-white"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'right center',
      }}
    >
      <h2 className="mb-2 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold">
        {title}
      </h2>
      <p className="mb-4 sm:mb-6 text-blue-100 text-sm sm:text-base">
        {description}
      </p>

      <Button className="w-fit bg-[#3563E9] text-xs sm:text-sm">
        Rental Car
      </Button>
    </div>
  );
}
