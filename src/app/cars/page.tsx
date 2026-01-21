import CarsList from '@/components/cars/CarsList';
import FiltersSidebar from '@/components/cars/FilterSidebar';

export default function CarsPage() {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar */}
      <div className="lg:col-span-1 ">
        <FiltersSidebar />
      </div>

      {/* Cars Grid */}
      <div className="lg:col-span-3  ">
        <CarsList />
      </div>
    </div>
  );
}
