export type CarType =
  | "Sport"
  | "SUV"
  | "MPV"
  | "Sedan"
  | "Coupe"
  | "Hatchback";

export interface Car {
  id: string;
  name: string;
  type: CarType;
  pricePerDay: number;
  capacity: number;
  fuel: string;
  transmission: "Manual" | "Auto";
  image: string;
}
