// src/app/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart India - Home',
  description: 'India’s one-stop shop for smart commerce',
};

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Cart India</h1>
      <p className="text-gray-600 text-lg">
        Your platform for smart shopping, seamless inventory, and joyful discovery.
      </p>
    </section>
  );
}
