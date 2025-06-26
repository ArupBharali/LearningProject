"use client"

import { useState } from 'react';
import { useGreetingTracker } from '@/hooks/useGreetingTracker';

export default function GreetingCard() {
  const [name, setName] = useState('Alice');
  const { greeting, count } = useGreetingTracker(name);

  return (
    <div>
      <p>{greeting}</p>
      <p>Youve greeted {name} {count} {count === 1 ? 'time' : 'times'}.</p>
      <button onClick={() => setName('Bob')}>Switch to Bob</button>
      <button onClick={() => setName('Sweta')}>Switch to Sweta</button>
      <button onClick={() => setName('Alice')}>Back to Alice</button>
    </div>
  );
}
