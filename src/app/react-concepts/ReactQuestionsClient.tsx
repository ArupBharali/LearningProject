"use client"

import Image from 'next/image';
import { Accordion } from '@/shared/components/ui/Accordion';
import Link from 'next/link';
// import { ChainedAccordion } from '@/features/react-concepts/components/ChainedAccordion';
import { ProgressiveAnswersAccordion } from '@/features/react-concepts/components/ProgressiveAnswersAccordion';
import {
  justRememberThese,
  aspnetMVCQuestions,
  aspnetQuestions,
  aspnetwebapiQuestions,
  dotnetQuestions,
  jqueryQuestions,
  reactQuestions,
  sqlserverQuestions,
  tailwindQuestions,
  dotnetcoreWebApiQuestions,
  dotnetcoreMVCQuestions
} from '@/features/react-concepts/constants';

export default function ReactConcepts() {

  return (
    <main className="min-h-screen px-6 py-10 bg-gray-50 dark:bg-gray-900">
      <section className="max-w-3xl mx-auto space-y-2">
        <Accordion title="🤔 Just Remember These" defaultOpen={false}>
          <ol className="list-decimal pl-5 space-y-1 list-inside items-start">
            {justRememberThese.map(({ question, answers }, index) => (
              <li 
              key={index}
              className=" "
              >
                <ProgressiveAnswersAccordion
                  question={question}
                  answers={answers}
                />{' '}
              </li>
            ))}
          </ol>
        </Accordion>
        <Accordion title=".Net Core Web Api Questions" defaultOpen={false}>
          <ol className="list-decimal pl-5 space-y-1 list-inside items-start">
            {dotnetcoreWebApiQuestions.map(({ question, answers }, index) => (
              <li 
              key={index}
              className=" "
              >
                <ProgressiveAnswersAccordion
                  question={question}
                  answers={answers}
                />{' '}
              </li>
            ))}
          </ol>
        </Accordion>
        <Accordion title=".Net Core MVC Questions" defaultOpen={false}>
          <ol className="list-decimal pl-5 space-y-1 list-inside items-start">
            {dotnetcoreMVCQuestions.map(({ question, answers }, index) => (
              <li 
              key={index}
              className=" "
              >
                <ProgressiveAnswersAccordion
                  question={question}
                  answers={answers}
                />{' '}
              </li>
            ))}
          </ol>
        </Accordion>
        <Accordion title="🤔 React Questions" defaultOpen={false}>
          <ol className="list-decimal pl-5 space-y-1 list-inside items-start">
            {reactQuestions.map(({ question, answers }, index) => (
              <li 
              key={index}
              className=" "
              >
                <ProgressiveAnswersAccordion
                  question={question}
                  answers={answers}
                />{' '}
              </li>
            ))}
          </ol>
        </Accordion>

        <Accordion title="💻 .NET Questions" defaultOpen={false}>
          <ol className="list-decimal pl-5 space-y-1 list-inside items-start">
            {dotnetQuestions.map(({ question, answers }, index) => (
              <li key={index}>
                <ProgressiveAnswersAccordion
                  question={question}
                  answers={answers}
                />{' '}
              </li>
            ))}
          </ol>
        </Accordion>

        <Accordion title="🛠️ ASP.NET Questions" defaultOpen={false}>
          <ol className="list-decimal pl-5 space-y-1 list-inside items-start">
            {aspnetQuestions.map(({ question, answers }, index) => (
              <li key={index}>
                <ProgressiveAnswersAccordion
                  question={question}
                  answers={answers}
                />{' '}
              </li>
            ))}
          </ol>
        </Accordion>

        <Accordion title="🗄️ SQL Server Questions" defaultOpen={false}>
          <ol className="list-decimal pl-5 space-y-1 list-inside items-start">
            {sqlserverQuestions.map(({ question, answers }, index) => (
              <li key={index}>
                <ProgressiveAnswersAccordion
                  question={question}
                  answers={answers}
                />{' '}
              </li>
            ))}
          </ol>
        </Accordion>

        <Accordion title="✨ jQuery Questions" defaultOpen={false}>
          <ol className="list-decimal pl-5 space-y-1 list-inside items-start">
            {jqueryQuestions.map(({ question, answers }, index) => (
              <li key={index}>
                <ProgressiveAnswersAccordion
                  question={question}
                  answers={answers}
                />{' '}
              </li>
            ))}
          </ol>
        </Accordion>

        <Accordion title="🎨 Tailwind CSS Questions" defaultOpen={false}>
          <ol className="list-decimal pl-5 space-y-1 list-inside items-start">
            {tailwindQuestions.map(({ question, answers }, index) => (
              <li key={index}>
                <ProgressiveAnswersAccordion
                  question={question}
                  answers={answers}
                />{' '}
              </li>
            ))}
          </ol>
        </Accordion>

        <Accordion title="🧭 ASP.NET MVC Questions" defaultOpen={false}>
          <ol className="list-decimal pl-5 space-y-1 list-inside items-start">
            {aspnetMVCQuestions.map(({ question, answers }, index) => (
              <li key={index}>
                <ProgressiveAnswersAccordion
                  question={question}
                  answers={answers}
                />{' '}
              </li>
            ))}
          </ol>
        </Accordion>

        <Accordion title="📡 ASP.NET Web API Questions" defaultOpen={false}>
          <ol className="list-decimal pl-5 space-y-1 list-inside items-start">
            {aspnetwebapiQuestions.map(({ question, answers }, index) => (
              <li key={index}>
                <ProgressiveAnswersAccordion
                  question={question}
                  answers={answers}
                />{' '}
              </li>
            ))}
          </ol>
        </Accordion>

        <Accordion title="🛠 Main Tools to Apply" defaultOpen={false}>
          <ul className="list-decimal pl-5 space-y-1 list-inside items-start">
            <li>
              <strong>Redux Toolkit</strong> — Opinionated state management with
              less boilerplate.
            </li>
            <li>
              <strong>React Hook Form</strong> — Performant form handling with
              intuitive validation.
            </li>
            <li>
              <strong>React Query</strong> — Caching, background sync, and async
              state made easy.
            </li>
            <li>
              <strong>Suspense Fallback</strong> — Render loading states for
              async components.
            </li>
            <li>
              <strong>Memoization</strong> — <code>useMemo</code>,{' '}
              <code>useCallback</code>, <code>React.memo</code> to prevent
              unnecessary re-renders.
            </li>
            <li>
              <strong>Zod</strong> — Runtime schema validation fully typed in
              TypeScript.
            </li>
            <li>
              <strong>Server Actions</strong> — Secure functions run on the
              server, invoked directly from the client.
            </li>
            <li>
              <strong>Server Components</strong> — Components rendered
              server-side only, reducing bundle size.
            </li>
            <li>
              <strong>Webhooks</strong> — Event-driven connections from external
              services to your app (e.g., Stripe → update order status).
            </li>
            <li>
              <strong>Middlewares</strong> — ).
            </li>
            <li>
              <strong>Suspense & streaming</strong> — ).
            </li>
            <li>
              <strong>Metadata</strong> — ).
            </li>
          </ul>
        </Accordion>

        <Accordion title="📺 YouTube URLs" defaultOpen={false}>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700 border rounded-lg overflow-hidden text-sm">
            {[
              {
                title: 'Zod Tutorial',
                href: 'https://www.youtube.com/watch?v=AeQ3f4zmSMs',
                videoId: 'AeQ3f4zmSMs',
                duration: '11 min',
                icon: '🧪',
                description: 'All 10 places to use Zod in React / Next.js',
              },
              {
                title: 'NextJS Tutorial - All 12 Concepts You Need to Know',
                href: 'https://www.youtube.com/watch?v=vwSlYG7hFk0&list=PLK5U0tyd34tBYZ1L6rplNfFNNQPwgCRR0&index=22',
                videoId: 'vwSlYG7hFk0',
                duration: '13 min',
                icon: '📋',
                description: 'Validation with minimal re-renders',
              },
              {
                title: 'React Query Mastery',
                href: 'https://www.youtube.com/watch?v=PeKoW_BjZbY',
                videoId: 'PeKoW_BjZbY',
                duration: '9 min',
                icon: '📡',
                description: 'Fetch, cache, sync with ease',
              },
            ].map(({ title, href, videoId, duration, icon, description }) => (
              <li key={videoId}>
                <Link
                  href={href}
                  className="flex gap-4 items-start px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <Image
                    width={50}
                    height={50}
                    src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                    alt={`${title} thumbnail`}
                    className="w-20 h-14 object-cover rounded-sm shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-blue-600 hover:underline">
                        {icon} {title}
                      </div>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-md">
                        {duration}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Accordion>

        <Accordion title="⚛️ Core React Concepts" defaultOpen={false}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div>
              <strong>JSX</strong>: JavaScript syntax extension for UI.
            </div>
            <div>
              <strong>Components</strong>: Reusable, encapsulated UI blocks.
            </div>
            <div>
              <strong>Props</strong>: Inputs passed into components.
            </div>
            <div>
              <strong>State</strong>: Internal reactive data.
            </div>
            <div>
              <strong>Hooks</strong>: Functional API for logic like{' '}
              <code>useState</code>, <code>useEffect</code>.
            </div>
            <div>
              <strong>Virtual DOM</strong>: In-memory DOM diffed and synced
              efficiently.
            </div>
            <div>
              <strong>Reconciliation</strong>: React’s process of updating the
              real DOM.
            </div>
            <div>
              <strong>Lifecycle</strong>: Component mounting, updating,
              unmounting flow.
            </div>
            <div>
              <strong>Context API</strong>: Global state for deeply nested
              components.
            </div>
            <div>
              <strong>Refs</strong>: Imperative access to DOM elements.
            </div>
            <div>
              <strong>Keys</strong>: Help React identify elements in lists.
            </div>
            <div>
              <strong>Fragments</strong>: Return multiple children without a
              wrapper element.
            </div>
            <div>
              <strong>Portals</strong>: Render elements outside parent DOM
              hierarchy.
            </div>
            <div>
              <strong>Error Boundaries</strong>: Catch JS errors in component
              trees.
            </div>
            <div>
              <strong>Concurrent Rendering</strong>: Break rendering into
              interruptible chunks.
            </div>
            <div>
              <strong>Strict Mode</strong>: Helps catch potential problems
              during development.
            </div>
            <div>
              <strong>Routing</strong>: Navigate between pages using{' '}
              <code>next/router</code> or <code>react-router</code>.
            </div>
            <div>
              <strong>Redux</strong>: Centralized global state management.
            </div>
            <div>
              <strong>Custom Hooks</strong>: Share logic across components
              cleanly.
            </div>
            <div>
              <strong>Lazy Loading</strong>: Defer loading components/data until
              needed.
            </div>
            <div>
              <strong>HOC</strong>: Function that wraps and enhances a
              component.
            </div>
            <div>
              <strong>Render Props</strong>: Technique for sharing logic using a
              function-as-child.
            </div>
            <div>
              <strong>Controlled vs Uncontrolled Components</strong>: Form state
              managed by React or DOM.
            </div>
          </div>
        </Accordion>
      </section>
    </main>
  );
}
