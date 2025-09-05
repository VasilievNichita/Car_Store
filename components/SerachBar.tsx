"use client";

type Props = {
  query: string;
  setQuery: (v: string) => void;
  type: string;
  setType: (v: string) => void;
  minPower: number;
  setMinPower: (v: number) => void;
  typesAvailable: string[]; // из данных
};

export default function SearchBar({
  query, setQuery, type, setType, minPower, setMinPower, typesAvailable
}: Props) {

  // Базовые варианты + те, что пришли с API (без дублей)
  const baseTypes = ["sedan","suv","hatchback","coupe","convertible","wagon","pickup","van","crossover","electric"];
  const allTypes = Array.from(new Set([...baseTypes, ...typesAvailable])).sort();

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <input
        type="text"
        placeholder="Search by name, type or power..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-lg border p-3"
      />

      <select
        className="w-full rounded-lg border p-3 sm:w-48"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All types</option>
        {allTypes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <input
        type="number"
        min={0}
        placeholder="Min Power (hp)"
        value={Number.isNaN(minPower) ? '' : minPower}
        onChange={(e) => setMinPower(Number(e.target.value) || 0)}
        className="w-full rounded-lg border p-3 sm:w-48"
      />
    </div>
  );
}
