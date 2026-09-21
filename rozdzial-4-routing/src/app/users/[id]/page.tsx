import { notFound } from "next/navigation";
import { UserProfileCard } from "../../../components/UserProfileCard";
import { MOCK_USERS } from "../../../components/UserProfilesList"; // Importujemy naszą listę

export default async function UserProfilePage({
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
    <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">Profil użytkownika #{id}</h1>
      <UserProfileCard user={foundUser} />
    </div>
  );
}
