const BASE_URL = ''//'https://api.my-remote-server.com';

export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || 'API error');
  }
  return res.json();
}
