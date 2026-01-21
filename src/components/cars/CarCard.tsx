'use client';

import { useRouter } from 'next/navigation';
import { Car } from '@/types/car';

interface CarCardProps {
  car: Car;
  onRent?: (car: Car) => void;
}

export default function CarCard({ car, onRent }: CarCardProps) {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent click if Rent Now button is clicked
    if ((e.target as HTMLElement).closest('button')) return;
    router.push(`/cars/${car.id}`);
  };

  return (
    <div
      className="w-full max-w-sm rounded-xl border-blue-500 bg-white p-4 shadow-sm transition hover:shadow-lg cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Header */}
      <div className="mb-2 flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{car.name}</h3>
          <p className="text-sm text-gray-400">{car.type}</p>
        </div>
        <button className="text-red-500">❤️</button>
      </div>

      {/* Image */}
      <img
        src={car.image}
        alt={car.name}
        className="mx-auto my-6 h-28 w-full object-contain"
      />

      {/* Specs */}
      <div className="mb-4 flex justify-between text-sm text-gray-500">
        <span>⛽ {car.fuel}</span>
        <span>⚙ {car.transmission}</span>
        <span>👥 {car.capacity} People</span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">
          ${car.pricePerDay.toFixed(2)}
          <span className="text-sm font-normal text-gray-400"> / day</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRent ? onRent(car) : router.push('/checkout');
          }}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}
