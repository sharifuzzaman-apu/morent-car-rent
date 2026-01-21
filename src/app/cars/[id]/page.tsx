"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { mockCars } from "@/lib/mockCars";
import { useAppDispatch } from "@/store/hooks";
import { setCar } from "@/store/bookingSlice";
import { useEffect } from "react";

export default function CarDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const car = mockCars.find((c) => c.id === id);

  useEffect(() => {
    if (car) dispatch(setCar(car));
  }, [car, dispatch]);

  if (!car) {
    return <p className="text-center py-20">Car not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left: Image */}
      <div className="rounded-xl overflow-hidden">
        <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
      </div>

      {/* Right: Details */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{car.name}</h1>
        <p className="text-gray-500">{car.type}</p>

        <div className="flex gap-4">
          <span>Capacity: {car.capacity}</span>
          <span>Fuel: {car.fuel}</span>
          <span>Transmission: {car.transmission}</span>
        </div>

        <p className="text-xl font-semibold">${car.pricePerDay} / day</p>

        {/* Date Selection */}
        <div className="flex gap-4">
          <input type="date" className="border rounded px-3 py-2" />
          <input type="date" className="border rounded px-3 py-2" />
        </div>

        <button
          onClick={() => router.push("/checkout")}
          className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}
