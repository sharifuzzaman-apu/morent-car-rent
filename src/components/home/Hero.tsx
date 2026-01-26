'use client';

import HeroCard from '@/components/ui/HeroCard';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-center w-full max-w-328 mx-auto gap-4 md:gap-8 px-2">
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
