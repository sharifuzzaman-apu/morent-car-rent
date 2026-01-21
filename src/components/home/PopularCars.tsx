import Link from 'next/link';
import { popularCars } from '@/lib/popularCars';
import CarCard from '../cars/CarCard';

export default function PopularCars() {
  return (
    <section className="w-[1312px] ">
      <div className="flex items-center justify-between">
        <h2 className="my-8 mx-7 text-xl text-[#90A3BF] font-semibold">
          Popular Cars
        </h2>
        <Link href="/cars" className="text-sm text-blue-600 font-medium">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}
