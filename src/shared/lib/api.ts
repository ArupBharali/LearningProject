// const BASE_URL = ''//'https://api.my-remote-server.com';
const BASE_URL = 'http://localhost:3000';

type ApiFetchOptions = Omit<RequestInit, 'body'> & {
  params?: Record<string, string | number>;
};

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit & { params?: Record<string, any> } = {}
): Promise<T> {
  const { params, ...fetchOptions } = options;
  // console.log('src/shared/lib/api.ts/apiFetch > hitting apiFetch: ', options, params, fetchOptions);

  const url = new URL(
    `${BASE_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`
  );
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) url.searchParams.append(key, String(value));
    });
  }

  // console.log('src/shared/lib/api.ts/apiFetch > apiFetch endpoint', url, fetchOptions);
  const res = await fetch(url.toString(), {
    headers: { 'Content-Type': 'application/json' },
    ...fetchOptions,
  });
  // console.log('src/shared/lib/api.ts/apiFetch > apiFetch res', { res });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || 'API error');
  }
  return res.json();
}
