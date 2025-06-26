// src/app/providers.tsx
'use client';

import { QueryClientProvider, HydrationBoundary } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from '@/shared/lib/queryClient';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from '@/shared/store';
import { ThemeSync } from '@/shared/components/ThemeSync';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary>
          <ThemeSync />
          {children}
          <Toaster position="top-right" />
        </HydrationBoundary>
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </QueryClientProvider>
    </Provider>
  );
}
