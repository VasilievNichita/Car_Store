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
  // Дополнительные поля для детального окна
  year: number;
  make: string;
  model: string;
  cylinders: number;
  displacement: number;
  fuelType: string;
  class: string;
  // Дополнительные изображения для галереи
  images?: string[];
};

export type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: () => void;
  btnType?: "button" | "submit";
};