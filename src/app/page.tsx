import Hero from '@/components/home/Hero';
import PopularCars from '@/components/home/PopularCars';
import PickupDropoffRow from '@/components/home/PickupDropoffRow';
import RecommendationCar from '@/components/home/RecomendationCar';

export default function HomePage() {
  return (
    <div className="w-full max-w-328 mx-auto px-2 md:px-4 py-8 space-y-12">
      <Hero />
      <PickupDropoffRow />
      <PopularCars />
      <div className="mb-16">
        <RecommendationCar />
      </div>
    </div>
  );
}
