import Link from 'next/link';
import { popularCars } from '@/lib/popularCars';
import CarCard from '../cars/CarCard';

export default function PopularCars() {
  return (
    <section className="w-full max-w-328 mx-auto px-2 md:px-0">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h2 className="my-4 sm:my-8 mx-0 sm:mx-7 text-xl text-[#90A3BF] font-semibold">
          Popular Cars
        </h2>
        <Link
          href="/cars"
          className="text-sm text-blue-600 font-medium mt-2 sm:mt-0"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {popularCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}
