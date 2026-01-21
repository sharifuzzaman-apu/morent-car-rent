'use client';

import HeroCard from '@/components/ui/HeroCard';

export default function Hero() {
  return (
    <section className="flex space-x-[32px] justify-center w-[1312px]">
      <HeroCard
        title="The Best Platform for Car Rental"
        description="Ease of doing a car rental safely and reliably."
        backgroundImage="/Hero/BG.png"
      />

      <HeroCard
        title="Easy way to rent a car at a low price"
        description="Providing cheap car rental services and safe."
        backgroundImage="/Hero/BG 1.png"
      />
    </section>
  );
}
