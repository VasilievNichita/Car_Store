'use client';

import { useEffect, useMemo, useState } from 'react';
import CarCard from '@/components/CarCard';
import SearchBar from '@/components/SearchBar';
import { Car } from '@/types';
import Hero from '@/components/Hero';
export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [minPower, setMinPower] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  // загрузка
  useEffect(() => {
    const load = async () => {
      try {
        console.log('Loading cars...');
        const res = await fetch('/api/cars');
        const data = await res.json();
        console.log('API Response:', data);
        if (res.ok) {
          setCars(data);
          console.log('Cars loaded:', data.length);
        } else {
          setError(data?.error || 'Failed to load cars');
        }
      } catch (e: any) {
        console.error('Error loading cars:', e);
        setError(e?.message || 'Failed to load cars');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const typesAvailable = useMemo(
    () => Array.from(new Set((cars || []).map(c => c.type))).sort(),
    [cars]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (cars || []).filter((car) => {
      const textMatch =
        !q ||
        car.name.toLowerCase().includes(q) ||
        car.type.toLowerCase().includes(q) ||
        String(car.power).includes(q);

      const typeMatch = !type || car.type === type;
      const powerMatch = !minPower || car.power >= minPower;

      return textMatch && typeMatch && powerMatch;
    });
  }, [cars, query, type, minPower]);

  return (
    <div className="min-h-screen">
      {/* Герой */}
      <Hero />

      {/* Каталог */}
      <section className="padding-x py-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Car Catalogue</h2>
          <p className="text-gray-600">Explore the cars you might like</p>
        </div>

        <SearchBar
          query={query}
          setQuery={setQuery}
          type={type}
          setType={setType}
          minPower={minPower}
          setMinPower={setMinPower}
          typesAvailable={typesAvailable}
        />

        {loading && <div className="mt-8 text-gray-600">Loading cars…</div>}
        {error && <div className="mt-8 text-red-600">{error}</div>}

        {!loading && !error && (
          <>
            <div className="mt-4 text-sm text-gray-500">
              Found {cars.length} cars, showing {filtered.length} after filtering
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {filtered.map((car) => <CarCard key={car.id} car={car} />)}
              {filtered.length === 0 && (
                <div className="text-gray-600">Nothing found. Try other filters.</div>
              )}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
