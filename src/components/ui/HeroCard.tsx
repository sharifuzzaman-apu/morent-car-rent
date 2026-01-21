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
      className="relative w-[640px] h-[360px] flex  flex-col rounded-[10px] bg-blue-600/80 pt-[32px] pl-[64px] text-white"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'right center',
      }}
    >
      <h2 className="mb-4 text-3xl font-bold">{title}</h2>
      <p className="mb-6 text-blue-100">{description}</p>

      <Button className="w-fit bg-[#3563E9]">Rental Car</Button>
    </div>
  );
}
