import { mockCars } from "@/lib/mockCars";
import CarCard from "./CarCard";

export default function CarsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {mockCars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
