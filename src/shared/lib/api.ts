// const BASE_URL = ''//'https://api.my-remote-server.com';
const BASE_URL = 'http://localhost:3000';

export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  console.log('apiFetch endpoint',`${BASE_URL}${endpoint}`);
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  console.log('apiFetch res',{res});

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || 'API error');
  }
  return res.json();
}
