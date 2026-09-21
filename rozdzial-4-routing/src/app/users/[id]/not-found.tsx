import Link from "next/link";

export default function UserNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-4xl font-bold text-red-600 mb-4">404</h2>
      <h3 className="text-2xl font-semibold mb-2">
        Nie znaleziono użytkownika
      </h3>
      <p className="text-gray-600 mb-8">
        Użytkownik o podanym identyfikatorze nie istnieje w naszej bazie.
      </p>

      <Link
        href="/users"
        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        Wróć do listy użytkowników
      </Link>
    </div>
  );
}
