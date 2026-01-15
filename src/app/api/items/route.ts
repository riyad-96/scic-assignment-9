import { NextResponse } from 'next/server';

type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
};

const items: Item[] = [
  {
    id: '1',
    name: 'Laptop',
    price: 1200,
    description: 'High-performance laptop for work and gaming.',
  },
  {
    id: '2',
    name: 'Smartphone',
    price: 800,
    description: 'Latest generation smartphone with OLED display.',
  },
  {
    id: '3',
    name: 'Wireless Headphones',
    price: 200,
    description: 'Noise-cancelling over-ear headphones.',
  },
  {
    id: '4',
    name: 'Smartwatch',
    price: 250,
    description: 'Water-resistant smartwatch with fitness tracking.',
  },
  {
    id: '5',
    name: 'Bluetooth Speaker',
    price: 120,
    description: 'Portable speaker with deep bass.',
  },
  {
    id: '6',
    name: 'Gaming Mouse',
    price: 60,
    description: 'High-precision mouse with RGB lighting.',
  },
  {
    id: '7',
    name: 'Mechanical Keyboard',
    price: 150,
    description: 'Tactile keyboard for gaming and typing.',
  },
  {
    id: '8',
    name: 'External SSD',
    price: 180,
    description: 'Fast portable storage drive, 1TB.',
  },
  {
    id: '9',
    name: 'Monitor 27"',
    price: 300,
    description: 'QHD monitor with 144Hz refresh rate.',
  },
  {
    id: '10',
    name: 'Laptop Stand',
    price: 40,
    description: 'Ergonomic adjustable laptop stand.',
  },
  {
    id: '11',
    name: 'USB-C Hub',
    price: 35,
    description: 'Multiport hub with HDMI, USB, and SD card slots.',
  },
  {
    id: '12',
    name: 'Webcam',
    price: 70,
    description: '1080p HD webcam with microphone.',
  },
  {
    id: '13',
    name: 'Wireless Charger',
    price: 30,
    description: 'Fast Qi wireless charging pad.',
  },
  {
    id: '14',
    name: 'Portable Power Bank',
    price: 50,
    description: '20,000mAh power bank for devices.',
  },
  {
    id: '15',
    name: 'Smart Light Bulb',
    price: 25,
    description: 'Wi-Fi enabled RGB smart bulb.',
  },
  {
    id: '16',
    name: 'VR Headset',
    price: 400,
    description: 'Immersive VR headset for gaming and VR apps.',
  },
  {
    id: '17',
    name: 'Fitness Tracker',
    price: 60,
    description: 'Tracks steps, heart rate, and sleep patterns.',
  },
  {
    id: '18',
    name: 'Noise-Cancelling Earbuds',
    price: 150,
    description: 'Compact earbuds with active noise cancelling.',
  },
  {
    id: '19',
    name: 'Desk Lamp',
    price: 45,
    description: 'LED desk lamp with adjustable brightness.',
  },
  {
    id: '20',
    name: 'Graphic Tablet',
    price: 220,
    description: 'Tablet for drawing and digital art.',
  },
];

export async function GET() {
  return NextResponse.json(items);
}
