import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://68ba9a4e84055bce63ef9625.mockapi.io/cars', {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Remote API error');
    const data = await res.json();
    
    // Обрабатываем данные из mockapi
    const cars = Array.isArray(data) ? data : data.value || [];
    
    // Преобразуем данные в нужный формат
    const transformedCars = cars.map((car: any, index: number) => {
      // Создаем более реалистичные данные
      const carTypes = ['sedan', 'suv', 'hatchback', 'coupe', 'convertible'];
      const transmissions = ['Automatic', 'Manual'];
      const drives = ['FWD', 'RWD', 'AWD'];
      
      // Разнообразные имена машин
      const carNames = [
        'Toyota Camry', 'Honda Accord', 'BMW 3 Series', 'Mercedes C-Class',
        'Audi A4', 'Lexus ES', 'Volkswagen Jetta', 'Nissan Altima',
        'Hyundai Sonata', 'Kia Optima', 'Mazda6', 'Subaru Legacy'
      ];
      
      // Разная мощность: 100, 200, 300 hp
      const powerLevels = [100, 200, 300];
      const power = powerLevels[index % powerLevels.length];
      
      return {
        id: car.id,
        name: carNames[index % carNames.length] || `Car ${car.id}`,
        type: carTypes[Math.floor(Math.random() * carTypes.length)],
        power: power,
        transmission: transmissions[Math.floor(Math.random() * transmissions.length)],
        drive: drives[Math.floor(Math.random() * drives.length)],
        mpg: Math.max(15, Math.min(50, car.mpg || 25)),
        pricePerDay: Math.floor(Math.random() * 80) + 40, // цена от 40 до 120
        image: '/cars/store-car.png' // используем изображение store-car
      };
    });
    
    return NextResponse.json(transformedCars);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to find cars' }, { status: 500 });
  }
}
