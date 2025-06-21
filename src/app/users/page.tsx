"use client";

import { useTransition, useState, useEffect } from "react";
import { UserList } from "@/features/users/components/UserList";
import { UserForm } from "@/features/users/components/UserForm";

export default function Users() {
  const [showList, setShowList] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setShowList(true);
    });
  }, []);

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">🛒 Users List</h1>
      <UserForm />
      {isPending && <p className="text-sm text-gray-500">Loading users...</p>}
      {showList && <UserList />}
    </main>
  );
}
