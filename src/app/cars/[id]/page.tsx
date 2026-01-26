// 'use client';

// import { useRouter } from 'next/navigation';
// import { useParams } from 'next/navigation';
// import { mockCars } from '@/lib/mockCars';
// import { useAppDispatch } from '@/store/hooks';
// import { setCar } from '@/store/bookingSlice';
// import { useEffect } from 'react';

// export default function CarDetailPage() {
//   const { id } = useParams();
//   const router = useRouter();
//   const dispatch = useAppDispatch();

//   const car = mockCars.find((c) => c.id === id);

//   useEffect(() => {
//     if (car) dispatch(setCar(car));
//   }, [car, dispatch]);

//   if (!car) {
//     return <p className="text-center py-20">Car not found</p>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//       {/* Left: Image */}
//       <div className="rounded-xl overflow-hidden">
//         <img
//           src={car.image}
//           alt={car.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Right: Details */}
//       <div className="space-y-4">
//         <h1 className="text-2xl font-bold">{car.name}</h1>
//         <p className="text-gray-500">{car.type}</p>

//         <div className="flex gap-4">
//           <span>Capacity: {car.capacity}</span>
//           <span>Fuel: {car.fuel}</span>
//           <span>Transmission: {car.transmission}</span>
//         </div>

//         <p className="text-xl font-semibold">${car.pricePerDay} / day</p>

//         {/* Date Selection */}
//         <div className="flex gap-4">
//           <input type="date" className="border rounded px-3 py-2" />
//           <input type="date" className="border rounded px-3 py-2" />
//         </div>

//         <button
//           onClick={() => router.push('/checkout')}
//           className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold"
//         >
//           Rent Now
//         </button>
//       </div>
//     </div>
//   );
// }

// ================================

'use client';

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { cars } from '@/lib/cars';
import { useAppDispatch } from '@/store/hooks';
import { setCar } from '@/store/bookingSlice';
import { useEffect } from 'react';

import FiltersSidebar from '@/components/cars/FilterSidebar';

// Dummy thumbnails –
const thumbnails = [
  'https://raw.githubusercontent.com/mhmzdev/fakecars/main/koenigsegg.png',
  'https://www.cars.com/crapi/v1/0gwb4z9a9qo14/e3dbcf76-be68-4b10-bf4a-5cef0bab7e4e.jpg',
  'https://www.cars.com/crapi/v1/0gwb4z9a9qo14/c2dab501-9cdd-4cd5-8357-3be52eb7245f.jpg',
];

// Dummy reviews –
const reviews = [
  {
    name: 'Alex Shinton',
    date: '21 July 2022',
    rating: 4,
    text: 'Great experience! I got to know the features of the car MORENT provides a nice service and a wide selection of cars...',
  },
  {
    name: 'Skylar Dias',
    date: '20 July 2022',
    rating: 4,
    text: 'Cars always in excellent condition and the support team is very helpful!',
  },
];

export default function CarDetail() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const car = cars.find((c) => c.id === id);

  useEffect(() => {
    if (car) dispatch(setCar(car));
  }, [car, dispatch]);

  return (
    <div className="w-full  px-4 py-8">
      <div className="flex gap-30">
        <aside className="hidden lg:block w-[250px] min-w-[220px]">
          <FiltersSidebar />
        </aside>
        <main className="flex-1">
          {!car ? (
            <p className="text-center py-20">Car not found</p>
          ) : (
            <div>
              <main className="flex-1 flex flex-col gap-8">
                {/* Car highlight card */}
                <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row gap-8">
                  {/* Left Highlight */}
                  <div className="flex-1">
                    <div className="bg-[#3563E9] text-white rounded-xl p-6 mb-4 relative min-h-[160px]">
                      <h3 className="text-lg font-bold mb-2">
                        Sports car with the best design and acceleration
                      </h3>
                      <p className="text-sm opacity-80">
                        Easily understand what makes this car special at a
                        glance. Futuristic and elegant sport design.
                      </p>
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-24 object-contain absolute bottom-2 left-2 right-2 pointer-events-none"
                        style={{ maxWidth: 250 }}
                      />
                    </div>
                    {/* Thumbnails */}
                    <div className="flex gap-2 pt-1">
                      {thumbnails.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt=""
                          className={`w-14 h-10 object-cover rounded-lg border-2 ${i === 0 ? 'border-[#3563E9]' : 'border-transparent'}`}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Right: Car details and action */}
                  <div className="flex-1 flex flex-col justify-between gap-6">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-xl font-bold text-gray-800">
                            {car.name}
                          </h2>
                          <div className="flex items-center">
                            <span className="text-yellow-400">★ ★ ★ ★ ☆</span>
                            <span className="text-sm text-gray-400 ml-2">
                              (80+ review)
                            </span>
                          </div>
                        </div>
                        <button className="text-[#ED3F3F] text-xl">♥</button>
                      </div>
                      <p className="mt-2 mb-3 text-gray-500 text-sm">
                        {car.description ||
                          'This is a high-performance vehicle with outstanding handling and comfort.'}
                      </p>
                      <div className="grid grid-cols-2 gap-y-2 mb-3">
                        <div className="text-gray-400 text-xs">Type Car</div>
                        <div className="text-gray-600 font-medium text-xs">
                          {car.type}
                        </div>
                        <div className="text-gray-400 text-xs">Capacity</div>
                        <div className="text-gray-600 font-medium text-xs">
                          {car.capacity} Person
                        </div>
                        <div className="text-gray-400 text-xs">Steering</div>
                        <div className="text-gray-600 font-medium text-xs">
                          {car.transmission}
                        </div>
                        <div className="text-gray-400 text-xs">Gasoline</div>
                        <div className="text-gray-600 font-medium text-xs">
                          {car.fuel || '70L'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <p className="text-xs text-gray-500 line-through">
                          ${Number(car.pricePerDay + 20).toFixed(2)}
                        </p>
                        <p className="text-xl font-bold text-gray-800">
                          ${car.pricePerDay.toFixed(2)}{' '}
                          <span className="text-base text-gray-500 font-normal">
                            / day
                          </span>
                        </p>
                      </div>
                      <button
                        onClick={() => router.push('/checkout')}
                        className="bg-[#3563E9] text-white px-8 py-2 rounded-xl font-semibold shadow"
                      >
                        Rent Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Reviews Card */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">Reviews</h3>
                    <span className="bg-[#3563E9] text-white px-3 py-1 rounded-full text-xs font-bold">
                      13
                    </span>
                  </div>
                  <div className="space-y-6">
                    {reviews.map((rev, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300" />
                        <div>
                          <div className="font-medium text-gray-800 flex gap-2 items-center">
                            {rev.name}
                            <span className="text-xs text-gray-400 font-normal">
                              {rev.date}
                            </span>
                          </div>
                          <div className="text-yellow-400 text-sm mb-1">
                            {'★'.repeat(rev.rating)}
                            {'☆'.repeat(5 - rev.rating)}
                          </div>
                          <div className="text-gray-500 text-sm">
                            {rev.text}
                          </div>
                        </div>
                      </div>
                    ))}
                    <button className="block mt-2 text-[#3563E9] text-sm font-semibold">
                      Show all
                    </button>
                  </div>
                </div>

                {/* Recent Car Grid */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Recent Car</h3>
                    <button
                      onClick={() => router.push(`/cars`)}
                      className="text-[#3563E9] text-sm font-semibold"
                    >
                      View All
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {cars.slice(0, 3).map((recent, i) => (
                      <div
                        key={recent.id}
                        className="bg-[#F6F7F9] rounded-xl p-5 flex flex-col relative"
                      >
                        <button className="absolute top-4 right-4 text-[#ED3F3F]">
                          ♥
                        </button>
                        <img
                          src={recent.image}
                          alt={recent.name}
                          className="w-full h-20 object-contain mb-3"
                        />
                        <div className="font-bold text-gray-800">
                          {recent.name}
                        </div>
                        <div className="text-sm text-gray-500 mb-1">
                          {recent.type}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                          <span>{recent.transmission}</span>
                          <span>{recent.capacity} People</span>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="font-bold text-gray-800">
                            ${recent.pricePerDay}/day
                          </div>
                          <button
                            onClick={() => router.push(`/cars/${recent.id}`)}
                            className="bg-[#3563E9] text-white px-4 py-1 rounded font-semibold"
                          >
                            Rent Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendation Car Grid */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Recommendation Car</h3>
                    <button
                      onClick={() => router.push(`/cars`)}
                      className="text-[#3563E9] text-sm font-semibold"
                    >
                      View All
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {cars.slice(3, 6).map((car, i) => (
                      <div
                        key={car.id}
                        className="bg-[#F6F7F9] rounded-xl p-5 flex flex-col relative"
                      >
                        <button className="absolute top-4 right-4 text-[#ED3F3F]">
                          ♥
                        </button>
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-20 object-contain mb-3"
                        />
                        <div className="font-bold text-gray-800">
                          {car.name}
                        </div>
                        <div className="text-sm text-gray-500 mb-1">
                          {car.type}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                          <span>{car.transmission}</span>
                          <span>{car.capacity} People</span>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="font-bold text-gray-800">
                            ${car.pricePerDay}/day
                          </div>
                          <button
                            onClick={() => router.push(`/cars/${car.id}`)}
                            className="bg-[#3563E9] text-white px-4 py-1 rounded font-semibold"
                          >
                            Rent Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </main>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
