import Hero from "@/components/home/Hero";
import PopularCars from "@/components/home/PopularCars";
import PickupDropoffRow from "@/components/home/PickupDropoffRow";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <Hero />
      <PickupDropoffRow />
      <PopularCars />
    </div>
  );
}
