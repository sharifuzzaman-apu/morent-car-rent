export default function FiltersSidebar() {
  return (
    <div className="relative right-20 w-[360px] h-full bg-white p-6 shadow space-y-6">
      {/* Car Type */}
      <div>
        <h3 className="font-semibold mb-2">Car Type</h3>
        <div className="flex flex-col gap-1">
          {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map(
            (type) => (
              <label key={type} className="flex items-center gap-2">
                <input type="checkbox" />
                <span>{type}</span>
              </label>
            ),
          )}
        </div>
      </div>

      {/* Capacity */}
      <div>
        <h3 className="font-semibold mb-2">Capacity</h3>
        <div className="flex flex-col gap-1">
          {[2, 4, 5, 6, 8].map((cap) => (
            <label key={cap} className="flex items-center gap-2">
              <input type="checkbox" />
              <span>{cap} persons</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range (UI Only) */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <input type="range" min={0} max={200} className="w-full" />
        <div>
          <span>$70</span>
          <span className="float-right">$200</span>
        </div>
      </div>
    </div>
  );
}
