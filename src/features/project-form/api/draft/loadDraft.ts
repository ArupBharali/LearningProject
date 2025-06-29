import { apiFetch } from "@/shared/lib/api";

export async function loadDraft(userId: string) {
  const res = await apiFetch(`/api/project/draft/${userId}`,{
    cache: 'no-store'
  });
  
  // console.log('src/features/project-form/api/draft/loadDraft.ts/loadDraft > res', res);
  return res;
}