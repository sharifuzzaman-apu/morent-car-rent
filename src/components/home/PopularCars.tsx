import Link from "next/link";
import { mockCars } from "@/lib/mockCars";
import CarCard from "../cars/CarCard";

export default function PopularCars() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Popular Cars</h2>
        <Link
          href="/cars"
          className="text-sm text-blue-600 font-medium"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}
