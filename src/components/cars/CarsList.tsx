'use client';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { setCar } from '@/store/bookingSlice';
import { cars } from '@/lib/cars';
import CarCard from './CarCard';

export default function CarsList() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleRent = (car) => {
    dispatch(setCar(car));
    router.push('/checkout');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onRent={handleRent} />
      ))}
    </div>
  );
}
