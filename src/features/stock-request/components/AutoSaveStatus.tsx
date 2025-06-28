export default function AutoSaveStatus({ status }: { status: 'idle' | 'saving' | 'saved' }) {
  return (
    <div className="text-sm text-right text-gray-500 dark:text-gray-400 transition-colors">
      {status === 'saving' && '💾 Saving...'}
      {status === 'saved' && '✅ All changes saved'}
    </div>
  );
}
