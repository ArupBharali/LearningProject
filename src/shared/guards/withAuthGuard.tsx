"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RootState } from "@/shared/store";
import { Spinner } from "../components/ui/Spinner";

export function withAuthGuard<P extends object>(
  Component: React.ComponentType<P>,
  allowedRoles: string[] = []
): React.FC<P> {
  return function ProtectedComponent(props: P) {
    const { isAuthenticated, user } = useSelector(
      (state: RootState) => state.auth
    );
    const [hydrated, setHydrated] = useState(false);

    const router = useRouter();

    useEffect(() => {
      setHydrated(true);
    }, []);

    if (!hydrated) {
      return <Spinner/>; // wait for hydration
    }

    if (!isAuthenticated || !user) {
      // redirect, but block render
      router.push("/login");
      return null;
    }

    if (!allowedRoles.includes(user.role)) {
      router.push("/unauthorized");
      return null;
    }

    return <Component {...props} />;
  };
}
