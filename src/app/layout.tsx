"use client";

import { QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "@/shared/lib/queryClient";
import { Toaster } from "react-hot-toast";
import '@/app/globals.css'; // or wherever your Tailwind CSS file lives
import { Navbar } from "@/shared/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary>
            <Navbar/>
            {children}
            <Toaster position="top-right" /> {/* ✅ Add this line */}
          </HydrationBoundary>
          <ReactQueryDevtools initialIsOpen={false} position="bottom" />
        </QueryClientProvider>
      </body>
    </html>
  );
}
