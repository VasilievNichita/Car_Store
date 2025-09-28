'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Car } from '@/types';

interface CarCardProps {
  car: Car;
  onCarClick: (car: Car) => void;
}

export default function CarCard({ car, onCarClick }: CarCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCarClick(car)}
    >
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
          className="object-contain transition-transform duration-300"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
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

      {/* Hover Details Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-80 rounded-2xl flex items-center justify-center transition-opacity duration-300">
          <div className="text-center text-white">
            <div className="text-lg font-semibold mb-2">Click for Details</div>
            <div className="text-sm opacity-90">
              {car.year} • {car.cylinders} cylinders • {car.displacement}L
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
