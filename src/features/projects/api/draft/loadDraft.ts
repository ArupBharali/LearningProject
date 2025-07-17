import { apiFetch } from '@/shared/lib/api';

export async function loadDraft(userId: string) {
  const res = await apiFetch(`/api/project/draft/${userId}`, {
    cache: 'no-store',
  });

  // console.log('src/features/projects/api/draft/loadDraft.ts/loadDraft > res', res);
  return res;
}
