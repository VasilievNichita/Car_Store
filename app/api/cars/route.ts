import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://68ba9a4e84055bce63ef9625.mockapi.io/:endpoint', {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Remote API error');
    const cars = await res.json();
    return NextResponse.json(cars);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to find cars' }, { status: 500 });
  }
}
