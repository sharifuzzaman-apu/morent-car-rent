// 'use client';

// import { useAppSelector, useAppDispatch } from '@/store/hooks';
// import { useRouter } from 'next/navigation';
// import { differenceInDays } from 'date-fns';
// import { clearBooking } from '@/store/bookingSlice';
// import { useState, useEffect } from 'react';

// export default function CheckoutPage() {
//   const car = useAppSelector((state) => state.booking.car);
//   const router = useRouter();
//   const dispatch = useAppDispatch();

//   const [pickupDate, setPickupDate] = useState('');
//   const [dropoffDate, setDropoffDate] = useState('');

//   useEffect(() => {
//     if (!car) router.push('/cars');
//   }, [car, router]);

//   if (!car) return null;

//   const days =
//     pickupDate && dropoffDate
//       ? Math.max(
//           1,
//           differenceInDays(new Date(dropoffDate), new Date(pickupDate)),
//         )
//       : 1;

//   const total = days * car.pricePerDay;

//   const handleConfirm = () => {
//     alert(`Booking confirmed! Total: $${total}`);
//     dispatch(clearBooking());
//     router.push('/');
//   };

//   return (
//     <div className="bg-[#F6F7F9] min-h-screen">
//       <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* LEFT SIDE */}
//         <div className="lg:col-span-2 space-y-6">
//           <h1 className="text-2xl font-bold">Checkout</h1>

//           {/* Billing Info */}
//           <section className="bg-white border border-gray-200 rounded-xl p-6">
//             <div className="flex justify-between items-center mb-6">
//               <div>
//                 <h2 className="font-semibold">Billing Info</h2>
//                 <p className="text-sm text-gray-400">
//                   Please enter your billing info
//                 </p>
//               </div>
//               <span className="text-sm text-gray-400">Step 1 of 4</span>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Field label="Name" placeholder="Your name" />
//               <Field label="Phone Number" placeholder="Phone number" />
//               <Field label="Address" placeholder="Address" />
//               <Field label="Town / City" placeholder="Town or city" />
//             </div>
//           </section>

//           {/* Rental Info */}
//           <section className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h2 className="font-semibold">Rental Info</h2>
//                 <p className="text-sm text-gray-400">
//                   Please select your rental date
//                 </p>
//               </div>
//               <span className="text-sm text-gray-400">Step 2 of 4</span>
//             </div>

//             {/* Pick-Up */}
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <span className="w-3 h-3 rounded-full bg-blue-600" />
//                 <p className="font-medium text-sm">Pick-Up</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <Select label="Locations" />
//                 <DateInput
//                   label="Date"
//                   value={pickupDate}
//                   onChange={setPickupDate}
//                 />
//                 <Field label="Time" placeholder="Select your time" />
//               </div>
//             </div>

//             {/* Drop-Off */}
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <span className="w-3 h-3 rounded-full bg-blue-600" />
//                 <p className="font-medium text-sm">Drop-Off</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <Select label="Locations" />
//                 <DateInput
//                   label="Date"
//                   value={dropoffDate}
//                   onChange={setDropoffDate}
//                 />
//                 <Field label="Time" placeholder="Select your time" />
//               </div>
//             </div>
//           </section>

//           {/* Payment Method */}
//           <section className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h2 className="font-semibold">Payment Method</h2>
//                 <p className="text-sm text-gray-400">
//                   Please enter your payment method
//                 </p>
//               </div>
//               <span className="text-sm text-gray-400">Step 3 of 4</span>
//             </div>

//             <div className="bg-[#F6F7F9] rounded-lg p-4 space-y-4">
//               <div className="flex justify-between items-center">
//                 <label className="flex items-center gap-2 text-sm font-medium">
//                   <input type="radio" name="payment" defaultChecked />
//                   Credit Card
//                 </label>
//                 <span className="text-xs font-semibold">VISA • MC</span>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <Field label="Card Number" placeholder="Card number" />
//                 <Field label="Expiration Date" placeholder="DD / MM / YY" />
//                 <Field label="Card Holder" placeholder="Card holder" />
//                 <Field label="CVC" placeholder="CVC" />
//               </div>
//             </div>

//             <PaymentOption label="PayPal" />
//             <PaymentOption label="Bitcoin" />
//           </section>

//           {/* Confirmation */}
//           <section className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h2 className="font-semibold">Confirmation</h2>
//                 <p className="text-sm text-gray-400">
//                   We are getting to the end. Just a few clicks and your rental
//                   is ready!
//                 </p>
//               </div>
//               <span className="text-sm text-gray-400">Step 4 of 4</span>
//             </div>

//             <ConfirmBox text="I agree with sending marketing and newsletter emails." />
//             <ConfirmBox text="I agree with our terms and conditions and privacy policy." />

//             <button
//               onClick={handleConfirm}
//               className="bg-blue-600 text-white py-3 rounded-lg w-full font-semibold"
//             >
//               Rent Now
//             </button>

//             <p className="text-xs text-gray-400">🔒 All your data are safe</p>
//           </section>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="rounded-xl bg-white p-6 shadow space-y-4">
//           <h2 className="text-xl font-semibold">Order Summary</h2>
//           <img
//             src={car.image}
//             alt={car.name}
//             className="w-full h-40 object-cover rounded-md"
//           />
//           <h3 className="font-semibold">{car.name}</h3>
//           <p className="text-gray-500">{car.type}</p>
//           <p>
//             <span className="font-semibold">{days}</span>{' '}
//             {days > 1 ? 'days' : 'day'} × ${car.pricePerDay} / day
//           </p>
//           <p className="font-bold text-lg">Total: ${total}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================== UI Helper Components ================== */

// const Field = ({ label, placeholder }: any) => (
//   <label className="text-sm space-y-1">
//     <span className="text-gray-700">{label}</span>
//     <input
//       placeholder={placeholder}
//       className="w-full rounded-lg bg-[#F6F7F9] px-3 py-2 text-sm outline-none"
//     />
//   </label>
// );

// const Select = ({ label }: any) => (
//   <label className="text-sm space-y-1">
//     <span className="text-gray-700">{label}</span>
//     <select className="w-full rounded-lg bg-[#F6F7F9] px-3 py-2 text-sm outline-none">
//       <option>Select your city</option>
//     </select>
//   </label>
// );

// const DateInput = ({ label, value, onChange }: any) => (
//   <label className="text-sm space-y-1">
//     <span className="text-gray-700">{label}</span>
//     <input
//       type="date"
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="w-full rounded-lg bg-[#F6F7F9] px-3 py-2 text-sm outline-none"
//     />
//   </label>
// );

// const PaymentOption = ({ label }: any) => (
//   <label className="flex items-center gap-2 border border-gray-200 rounded-lg p-4 text-sm">
//     <input type="radio" name="payment" />
//     {label}
//   </label>
// );

// const ConfirmBox = ({ text }: any) => (
//   <label className="flex items-start gap-2 bg-[#F6F7F9] p-4 rounded-lg text-sm">
//     <input type="checkbox" />
//     {text}
//   </label>
// );

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { differenceInDays } from 'date-fns';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearBooking } from '@/store/bookingSlice';

import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import PaymentOption from '@/components/ui/PaymentOption';

export default function CheckoutPage() {
  const car = useAppSelector((state) => state.booking.car);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');

  // Guard: no car selected
  useEffect(() => {
    if (!car) router.push('/cars');
  }, [car, router]);

  if (!car) return null;

  // Price calculation
  const days =
    pickupDate && dropoffDate
      ? Math.max(
          1,
          differenceInDays(new Date(dropoffDate), new Date(pickupDate)),
        )
      : 1;

  const total = days * car.pricePerDay;

  const handleConfirm = () => {
    alert(`Booking confirmed! Total: $${total}`);
    dispatch(clearBooking());
    router.push('/');
  };

  return (
    <div className="bg-[#F6F7F9] min-h-screen">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* Billing Info */}
          <Card
            title="Billing Info"
            description="Please enter your billing info"
            step="Step 1 of 4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Name" placeholder="Your name" />
              <Input label="Phone Number" placeholder="Phone number" />
              <Input label="Address" placeholder="Address" />
              <Input label="Town / City" placeholder="Town or city" />
            </div>
          </Card>

          {/* Rental Info */}
          <Card
            title="Rental Info"
            description="Please select your rental date"
            step="Step 2 of 4"
            className="space-y-6"
          >
            {/* Pick-Up */}
            <div>
              <p className="font-medium text-sm mb-3">Pick-Up</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select label="Location">
                  <option>Select your city</option>
                </Select>
                <Input
                  label="Date"
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
                <Input label="Time" type="time" />
              </div>
            </div>

            {/* Drop-Off */}
            <div>
              <p className="font-medium text-sm mb-3">Drop-Off</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select label="Location">
                  <option>Select your city</option>
                </Select>
                <Input
                  label="Date"
                  type="date"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                />
                <Input label="Time" type="time" />
              </div>
            </div>
          </Card>

          {/* Payment Method */}
          <Card
            title="Payment Method"
            description="Please enter your payment method"
            step="Step 3 of 4"
            className="space-y-4 bg-[#F6F7F9]"
          >
            {/* Credit Card */}
            <div className="bg-[#F6F7F9] rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <input type="radio" name="payment" defaultChecked />
                  Credit Card
                </label>
                <span className="text-xs font-semibold">VISA • MC</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  className="bg-white"
                  label="Card Number"
                  placeholder="Card number"
                />
                <Input
                  className="bg-white"
                  label="Expiration Date"
                  placeholder="DD / MM / YY"
                />
                <Input
                  className="bg-white"
                  label="Card Holder"
                  placeholder="Card holder"
                />
                <Input className="bg-white" label="CVC" placeholder="CVC" />
              </div>
            </div>

            {/* Other Payment Options */}
            <PaymentOption label="PayPal" />
            <PaymentOption label="Bitcoin" />
          </Card>

          {/* Confirmation */}
          <Card
            title="Confirmation"
            description="Just a few clicks and your rental is ready!"
            step="Step 4 of 4"
            className="space-y-4"
          >
            <label className="flex items-start gap-2 bg-[#F6F7F9] p-4 rounded-lg text-sm">
              <input type="checkbox" />I agree with sending marketing and
              newsletter emails.
            </label>

            <label className="flex items-start gap-2 bg-[#F6F7F9] p-4 rounded-lg text-sm">
              <input type="checkbox" />I agree with our terms and conditions and
              privacy policy.
            </label>

            <Button size="lg" onClick={handleConfirm}>
              Rent Now
            </Button>

            <p className="text-xs text-gray-400">🔒 All your data are safe</p>
          </Card>
        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-xl w-[492px] h-[520px] bg-white p-6 shadow space-y-4 border border-gray-100">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Rental Summary
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
          </div>
          {/* Car Info */}
          <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
            <div className="rounded-lg   overflow-hidden flex items-center justify-center bg-[url('/pattern-bg.png')] bg-cover">
              <img
                src={car.image}
                alt={car.name}
                className="object-contain w-60 h-44"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-800">{car.name}</h3>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-yellow-400 mt-1">
                {/* Example: 4 stars out of 5 */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09L5.978 12 1 8.18l6.067-.847L10 2l2.933 5.333L19 8.18 14.022 12l1.856 6.09z" />
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09L5.978 12 1 8.18l6.067-.847L10 2l2.933 5.333L19 8.18 14.022 12l1.856 6.09z" />
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09L5.978 12 1 8.18l6.067-.847L10 2l2.933 5.333L19 8.18 14.022 12l1.856 6.09z" />
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09L5.978 12 1 8.18l6.067-.847L10 2l2.933 5.333L19 8.18 14.022 12l1.856 6.09z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-gray-300"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.978 12 1 8.18l6.067-.847L10 2l2.933 5.333L19 8.18 14.022 12l1.856 6.09z" />
                </svg>
                <span className="font-medium text-gray-400 text-xs ml-1">
                  440+ Reviewer
                </span>
              </div>
            </div>
          </div>

          {/* Amount section */}
          <div className="space-y-1">
            <div className="flex justify-between text-sm text-gray-700">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span>Tax</span>
              <span>$0</span>
            </div>
          </div>

          {/* Promo code */}
          <div className="flex items-center mt-2 border rounded-full border-gray-200 p-2 bg-gray-50">
            <input
              type="text"
              placeholder="Apply promo code"
              className="flex-1 rounded-md  bg-gray-50 px-3 py-2 text-sm focus:outline-none"
            />
            <button className="ml-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-300">
              Apply now
            </button>
          </div>

          {/* Total price */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-gray-900 font-semibold">
                  Total Rental Price
                </span>
                <p className="text-xs text-gray-400">
                  Overall price and includes rental discount
                </p>
              </div>
              <span className="text-2xl font-bold text-gray-900">${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
