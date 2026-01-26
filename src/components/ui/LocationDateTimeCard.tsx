'use client';

import { LocationDateTimeProps } from '@/types/location';

const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const times = [
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
];

export default function LocationDateTimeCard({
  title,
  location,
  setLocation,
  date,
  setDate,
  time,
  setTime,
}: LocationDateTimeProps) {
  return (
    <div className="bg-white rounded-[15px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow flex flex-col justify-center px-4 py-4 mx-auto">
      <h3 className="px-3 font-bold text-gray-700">{title}</h3>

      <div className="flex flex-col sm:flex-row justify-between mt-2 gap-4 sm:gap-6">
        <div className="flex flex-col sm:border-r sm:pr-6">
          <label className="text-gray-600">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded py-1"
          >
            <option value="">Select Your City</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:border-r sm:pr-6">
          <label className="text-gray-600">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded py-1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600">Time</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="rounded py-1"
          >
            <option value="">Select Time</option>
            {times.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
