"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/shared/store";

export function ThemeSync() {
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return null; // no visible output
}
