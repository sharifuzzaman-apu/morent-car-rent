import Link from 'next/link';
import { mockCars } from '@/lib/mockCars';
import CarCard from '../cars/CarCard';

export default function RecommendationCar() {
  return (
    <section className="w-full max-w-328 mx-auto px-2 md:px-0">
      <div className="flex items-center justify-between">
        <h2 className="my-4 sm:my-8 mx-0 sm:mx-7 text-xl text-[#90A3BF] font-semibold">
          Recomendation Car
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {mockCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/cars">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Show more car
          </button>
        </Link>
      </div>
    </section>
  );
}
