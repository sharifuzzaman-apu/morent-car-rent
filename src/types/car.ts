export type CarType = 'Sport' | 'SUV' | 'MPV' | 'Sedan' | 'Coupe' | 'Hatchback';

export interface Car {
  id: string;
  name: string;
  type: string;
  image: string;
  pricePerDay: number;
  fuel: string;
  transmission: string;
  capacity: number;
}
