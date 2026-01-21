'use client';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Left Card */}
      <div
        className="relative flex min-h-[360px] flex-col rounded-xl bg-blue-600/80 p-8 text-white"
        style={{
          backgroundImage: "url('/Hero/BG.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
        }}
      >
        <h1 className="text-3xl font-bold mb-4">
          The Best Platform for Car Rental
        </h1>
        <p className="mb-6 text-blue-100">
          Ease of doing a car rental safely and reliably.
        </p>
        <button className="w-1/5 rounded-lg bg-white px-6 py-3 text-blue-600 font-semibold">
          Rental Car
        </button>
        
      </div>

      {/* Right Card */}
      <div
        className="relative flex min-h-[360px] flex-col rounded-xl bg-blue-600/80 p-8 text-white"
        style={{
          backgroundImage: "url('/Hero/BG 1.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
        }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Easy way to rent a car at a low price
        </h2>
        <p className="mb-6 text-blue-100">
          Providing cheap car rental services and safe.
        </p>
        <button className="w-1/5 rounded-lg bg-white px-6 py-3 text-blue-600 font-semibold">
          Rental Car
        </button>
      </div>
    </section>
  );
}
