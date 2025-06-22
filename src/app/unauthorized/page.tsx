import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold text-red-600">403 - Unauthorized</h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        You don’t have permission to view this page.
      </p>
      <Link href="/" className="mt-6 text-blue-600 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
