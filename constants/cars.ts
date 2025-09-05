import { Car } from '@/types';

export const CARS: Car[] = [
  {
    id: 'corolla',
    name: 'Toyota Corolla',
    type: 'sedan',
    power: 139,
    transmission: 'Automatic',
    drive: 'FWD',
    mpg: 32,
    pricePerDay: 53,
    image: '/cars/corolla.png',
  },
  {
    id: 'civic',
    name: 'Honda Civic',
    type: 'sedan',
    power: 158,
    transmission: 'Manual',
    drive: 'FWD',
    mpg: 30,
    pricePerDay: 53,
    image: '/cars/civic.png',
  },
  {
    id: 'tiguan',
    name: 'Volkswagen Tiguan',
    type: 'suv',
    power: 184,
    transmission: 'Automatic',
    drive: 'AWD',
    mpg: 27,
    pricePerDay: 67,
    image: '/cars/tiguan.png',
  },
];
