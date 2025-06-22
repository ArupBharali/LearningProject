import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart India - Home',
  description: 'India’s one-stop shop for smart commerce',
};

export default function HomePage() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 lg:px-24 
      bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      <div className="relative max-w-3xl text-center z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">Cart India</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Your platform for <span className="font-semibold text-gray-800">smart shopping</span>,
          seamless inventory, and joyful discovery.
        </p>
      </div>
    </section>
  );
}
