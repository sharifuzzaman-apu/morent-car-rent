import { Car } from "@/types/car";

export const mockCars: Car[] = [
  {
    id: "1",
    name: "Koenigsegg",
    type: "Sport",
    pricePerDay: 99,
    capacity: 2,
    fuel: "90L",
    transmission: "Manual",
    image: "/popular%20cars/702f356e48fe531e6fd2626c5d1041dbfcde3341.png",
  },
  {
    id: "2",
    name: "Nissan GT-R",
    type: "Sport",
    pricePerDay: 80,
    capacity: 2,
    fuel: "80L",
    transmission: "Manual",
    image: "/cars/car2.png",
  },
  {
    id: "3",
    name: "Rolls Royce",
    type: "Sedan",
    pricePerDay: 96,
    capacity: 4,
    fuel: "70L",
    transmission: "Auto",
    image: "/cars/car3.png",
  },
];
