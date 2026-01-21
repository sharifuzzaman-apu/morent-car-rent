"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { differenceInDays } from "date-fns";
import { clearBooking } from "@/store/bookingSlice";
import { useState, useEffect } from "react";

export default function CheckoutPage() {
  const car = useAppSelector((state) => state.booking.car);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  useEffect(() => {
    if (!car) router.push("/cars"); // guard
  }, [car, router]);

  if (!car) return null;

  // Price calculation
  const days =
    pickupDate && dropoffDate
      ? Math.max(
          1,
          differenceInDays(new Date(dropoffDate), new Date(pickupDate))
        )
      : 1;

  const total = days * car.pricePerDay;

  const handleConfirm = () => {
    alert(`Booking confirmed! Total: $${total}`);
    dispatch(clearBooking());
    router.push("/");
  };

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left: Form */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

        <div className="flex flex-col gap-4">
          <label>
            Full Name
            <input type="text" className="border rounded px-3 py-2 w-full" />
          </label>

          <label>
            Email
            <input type="email" className="border rounded px-3 py-2 w-full" />
          </label>

          <label>
            Phone
            <input type="tel" className="border rounded px-3 py-2 w-full" />
          </label>

          <div className="flex gap-4">
            <label>
              Pickup Date
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="border rounded px-3 py-2"
              />
            </label>

            <label>
              Dropoff Date
              <input
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="border rounded px-3 py-2"
              />
            </label>
          </div>
        </div>

        <button
          onClick={handleConfirm}
          className="bg-blue-600 text-white py-3 rounded-lg w-full mt-4"
        >
          Confirm & Pay
        </button>
      </div>

      {/* Right: Order Summary */}
      <div className="rounded-xl bg-white p-6 shadow space-y-4">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-40 object-cover rounded-md"
        />
        <h3 className="font-semibold">{car.name}</h3>
        <p className="text-gray-500">{car.type}</p>
        <p>
          <span className="font-semibold">{days}</span>{" "}
          {days > 1 ? "days" : "day"} × ${car.pricePerDay} / day
        </p>
        <p className="font-bold text-lg">Total: ${total}</p>
      </div>
    </div>
  );
}
