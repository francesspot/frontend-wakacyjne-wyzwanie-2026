"use client";

import { useEffect } from "react";

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
    <div className="p-6 text-center border-2 border-red-500 rounded-lg bg-red-50 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold text-red-700">
        Ups! Coś poszło nie tak.
      </h2>
      <p className="mt-2 text-red-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}
