import { NextResponse } from 'next/server';
import { CARS } from '@/constants/cars';

export async function GET() {
  try {
    // Возвращаем локальные данные машин с полной информацией
    return NextResponse.json(CARS);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to find cars' }, { status: 500 });
  }
}
