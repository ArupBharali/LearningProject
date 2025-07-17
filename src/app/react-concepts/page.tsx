// ReactConcepts.tsx
import { auth } from '@/lib/auth/auth'
import { redirect } from 'next/navigation'
import ReactQuestionsClient from './ReactQuestionsClient'

export default async function ReactConcepts() {
  const session = await auth()
  if (!session) redirect('/login')

  return <ReactQuestionsClient />
}
