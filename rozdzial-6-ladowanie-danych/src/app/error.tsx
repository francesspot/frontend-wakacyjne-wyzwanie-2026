'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-8">
      <h2 className="mb-4 text-2xl font-bold">Wystąpił problem z pobraniem danych!</h2>
      <button
        onClick={() => reset()}
        className="rounded bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}