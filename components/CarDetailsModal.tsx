'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Car } from '@/types';

interface CarDetailsModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CarDetailsModal({ car, isOpen, onClose }: CarDetailsModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!isOpen || !car) return null;

  const images = car.images || [car.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main Image */}
        <div className="relative h-80 w-full">
          <Image
            src={images[selectedImageIndex]}
            alt={car.name}
            fill
            className="object-contain rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Thumbnail Images */}
        {images.length > 1 && (
          <div className="flex gap-2 p-4 justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <Image
                  src={image}
                  alt={`${car.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}

        {/* Car Title */}
        <div className="px-6 pb-4">
          <h2 className="text-2xl font-bold text-gray-900">{car.name}</h2>
        </div>

        {/* Specifications */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Class:</span>
              <span className="font-medium capitalize">{car.class}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cylinders:</span>
              <span className="font-medium">{car.cylinders}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Displacement:</span>
              <span className="font-medium">{car.displacement}L</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Drive:</span>
              <span className="font-medium">{car.drive.toLowerCase()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Fuel Type:</span>
              <span className="font-medium capitalize">{car.fuelType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Make:</span>
              <span className="font-medium capitalize">{car.make}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Model:</span>
              <span className="font-medium capitalize">{car.model}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Transmission:</span>
              <span className="font-medium">{car.transmission === 'Automatic' ? 'a' : 'm'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Year:</span>
              <span className="font-medium">{car.year}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Power:</span>
              <span className="font-medium">{car.power} hp</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">MPG:</span>
              <span className="font-medium">{car.mpg}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Price:</span>
              <span className="font-medium">${car.pricePerDay}/day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
