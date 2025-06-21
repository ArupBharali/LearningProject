"use client";

import { QueryClient, QueryCache, MutationCache } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import {
  createSyncStoragePersister,
  Persister,
} from "@tanstack/query-sync-storage-persister";
import { encrypt, decrypt } from "./utils/crypto"; // adjusted path as needed

let client: QueryClient | null = null;

export const getQueryClient = (() => {
  return () => {
    if (!client) {
      client = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 0.5 * 60 * 1000,
            retry: 2,
            refetchOnReconnect: true,
            refetchOnWindowFocus: false,
          },
          mutations: {
            retry: 0,
          },
        },
        queryCache: new QueryCache({
          onError: (error: unknown, query) => {
            const message =
              error instanceof Error ? error.message : JSON.stringify(error);
            console.error("❌ Query Error:", message, query);
          },
        }),
        mutationCache: new MutationCache({
          onError: (error, variables, context, mutation) => {
            console.error("❌ Mutation Error:", {
              error,
              variables,
              context,
              mutation,
            });
          },
        }),
      });

      // // ✅ Inject logger (this is the correct and type-safe way)
      // setLogger({
      //   log: console.log,
      //   warn: console.warn,
      //   error: console.error
      // });

      if (typeof window !== "undefined") {
        const encryptedLocalStorage: Storage = {
          getItem: (key) => {
            const raw = localStorage.getItem(key);
            if (!raw) return null;
            let decrypted = "";
            decrypt(raw)
              .then((res) => (decrypted = res))
              .catch(() => (decrypted = ""));
            return decrypted;
          },
          setItem: (key, value) => {
            encrypt(value)
              .then((res) => localStorage.setItem(key, res))
              .catch(() => {});
          },
          removeItem: (key) => {
            localStorage.removeItem(key);
          },
          key: localStorage.key.bind(localStorage),
          length: localStorage.length,
          clear: localStorage.clear.bind(localStorage),
        };

        const persister: Persister = createSyncStoragePersister({
          storage: encryptedLocalStorage,
          broadcastChannel: true,
        });

        persistQueryClient({
          queryClient: client,
          persister,
          maxAge: 60 * 60 * 1000,
        });
      }
    }

    return client;
  };
})();
