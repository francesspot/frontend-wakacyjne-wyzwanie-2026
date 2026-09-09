import { notFound } from "next/navigation";
import { UserProfileCard } from "../../../../components/UserProfileCard";
import { MOCK_USERS } from "../../../../components/UserProfilesList";

export default async function UserModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = parseInt(id);

  if (isNaN(userId) || userId < 1 || userId > 3) {
    notFound();
  }

  const foundUser = MOCK_USERS.find((u) => u.id === id);

  if (!foundUser) {
    notFound();
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          Szybki podgląd profilu
        </h2>

        <UserProfileCard user={foundUser} />

        <p className="text-xs text-gray-400 mt-4 text-center">
          Odśwież stronę, aby zobaczyć pełny widok, lub cofnij w przeglądarce,
          by zamknąć.
        </p>
      </div>
    </div>
  );
}
