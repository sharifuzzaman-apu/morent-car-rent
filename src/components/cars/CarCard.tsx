"use client";

import { Car } from "@/types/car";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setCar } from "@/store/bookingSlice";

export default function CarCard({ car }: { car: Car }) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Click on card → go to detail page
  const handleCardClick = () => {
    router.push(`/cars/${car.id}`);
  };

  // Click on button → go to checkout
  const handleRentNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // IMPORTANT! Prevent card click
    dispatch(setCar(car));
    router.push("/checkout");
  };

  return (
    <div
      onClick={handleCardClick}
      className="rounded-xl bg-white p-4 shadow-sm cursor-pointer hover:shadow-xl hover:scale-105 transition transform duration-300"
    >
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold">{car.name}</h3>
      <p className="text-sm text-gray-500">{car.type}</p>

      <div className="mt-4 flex justify-between items-center">
        <span className="font-bold">${car.pricePerDay} / day</span>
        <button
          onClick={handleRentNow}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white text-sm hover:bg-blue-700 transition"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}
