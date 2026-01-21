'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LocationDateTimeCard from '@/components/ui/LocationDateTimeCard';

export default function PickupDropoffRow() {
  const router = useRouter();

  // Pickup state
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  // Dropoff state
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [dropoffTime, setDropoffTime] = useState('');

  const handleSearch = () => {
    router.push('/cars');
  };

  return (
    <div className="flex justify-center my-auto items-center">
      {/* Pick Up */}
      <LocationDateTimeCard
        title="Pick-Up"
        location={pickupLocation}
        setLocation={setPickupLocation}
        date={pickupDate}
        setDate={setPickupDate}
        time={pickupTime}
        setTime={setPickupTime}
      />

      <button
        onClick={handleSearch}
        className="bg-[#3563E9] w-[60px] h-[60px]  text-white rounded-lg flex items-center justify-center m-7"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.16051 3.83577L7.16051 17.4536"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.08273 7.93188L7.1605 3.83522L11.2383 7.93188"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.0887 20.1671L17.0887 6.54934"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.1665 16.071L17.0887 20.1677L13.0109 16.071"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      {/* Drop Off */}
      <LocationDateTimeCard
        title="Drop-Off"
        location={dropoffLocation}
        setLocation={setDropoffLocation}
        date={dropoffDate}
        setDate={setDropoffDate}
        time={dropoffTime}
        setTime={setDropoffTime}
      />
    </div>
  );
}
