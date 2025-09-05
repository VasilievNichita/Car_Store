export type Car = {
  id: string;
  name: string;        // Toyota Corolla
  type: string;        // sedan | suv | hatchback | ...
  power: number;       // horsepower
  transmission: 'Automatic' | 'Manual';
  drive: 'FWD' | 'RWD' | 'AWD';
  mpg: number;         // miles per gallon
  pricePerDay: number; // $/day
  image: string;       // url или /public/...
};
