// src/app/projects/page.tsx

import { auth } from '@/lib/auth/auth';
import { redirect } from 'next/navigation';
import { listUserProjects } from '@/features/projects/api/project/listProjects';
import Link from 'next/link';

export default async function ProjectListPage() {
  const session = await auth();
  if (!session) redirect('/login');

  const id = session.user?.email;

  const projects = await listUserProjects(id??''); // implement this to return all of user's drafts & submitted

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Your Projects
        </h1>
        <Link
          href="/projects/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-500 rounded-md shadow-md transition focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1 dark:focus:ring-offset-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          New Project
        </Link>
      </div>

      {projects.length === 0 ? (
        <p className="text-gray-500">No projects found.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((proj) => (
            <li
              key={proj.projectId}
              className="border border-gray-200 dark:border-gray-700 p-4 rounded bg-white dark:bg-gray-800 shadow hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">
                    {proj.data?.generalInfo?.name?.trim() || 'Untitled Project'}
                  </h2>
                  <p className="text-sm text-gray-500">Status: {proj.status}</p>
                </div>
                <Link
                  href={`/projects/view?id=${id}&projectId=${encodeURIComponent(
                    proj.projectId
                  )}&readOnly=${proj.status === 'draft' ? 'false' : 'true'}`}
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                >
                  Open
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
