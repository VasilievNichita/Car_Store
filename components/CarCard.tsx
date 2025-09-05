'use client';

import Image from 'next/image';
import { Car } from '@/types';

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold leading-tight">{car.name}</h3>
        <div className="text-right leading-none">
          <div className="text-2xl font-bold">${car.pricePerDay}</div>
          <div className="text-xs text-gray-500">/day</div>
        </div>
      </div>

      {/* Image */}
      <div className="relative my-4 h-36">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-contain"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>

      {/* Specs */}
      <div className="mt-2 grid grid-cols-3 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="text-gray-600">{car.transmission}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="text-gray-600">{car.drive}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="text-gray-600">{car.mpg} MPG</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-700">
          {car.type}
        </span>
        <span className="text-sm text-gray-700">{car.power} hp</span>
      </div>
    </div>
  );
}
