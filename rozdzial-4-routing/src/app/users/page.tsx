import { UserProfileList } from "../../components/UserProfilesList";

export default async function UsersPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="w-full my-auto py-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Katalog użytkowników</h1>
      <UserProfileList />
    </div>
  );
}
