import { useState } from 'react';
import { Button } from './ui/Button';

export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    setIsUploading(false);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="flex items-center justify-between gap-4 transition-colors duration-300">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="flex-grow text-sm text-gray-700 dark:text-gray-200 
          file:py-2 file:px-4 
          file:rounded-md file:border-0 
          file:text-sm file:font-medium 
          file:bg-blue-100 dark:file:bg-blue-900 
          file:text-blue-700 dark:file:text-blue-300 
          hover:file:bg-blue-200 dark:hover:file:bg-blue-800 
          transition-colors"
      />

      {file && (
        <button
          type="button"
          onClick={handleRemoveFile}
          className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-lg font-bold transition-colors"
          aria-label="Remove file"
        >
          &times;
        </button>
      )}

      <Button
        onClick={handleUpload}
        size="sm"
        type="button"
        disabled={!file || isUploading}
        className={`px-4 py-2 rounded-md text-white transition-colors ${
          isUploading
            ? 'bg-gray-400 dark:bg-gray-600'
            : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600'
        }`}
      >
        {isUploading ? 'Uploading...' : 'Upload'}
      </Button>
    </div>
  );
}
