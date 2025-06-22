"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/shared/store";
import { toggleSidebar } from "@/shared/store/slices/uiSlice";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function SidebarToggle() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

  return (
    <button
      onClick={() => dispatch(toggleSidebar())}
      aria-label="Toggle sidebar"
    >
      {isOpen ? (
        <XMarkIcon className="h-6 w-6 text-gray-700" />
      ) : (
        <Bars3Icon className="h-6 w-6 text-gray-700" />
      )}
    </button>
  );
}
