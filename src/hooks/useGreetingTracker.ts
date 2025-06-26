import { useEffect, useState } from 'react';

export function useGreetingTracker(name: string) {
  const [greeting, setGreeting] = useState('');
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    setGreeting(`Hello, ${name}!`);
    setCounts(prev => ({
      ...prev,
      [name]: (prev[name] || 0) + 1
    }));
  }, [name]);

  const currentCount = counts[name] || 0;

  return { greeting, count: currentCount };
}
