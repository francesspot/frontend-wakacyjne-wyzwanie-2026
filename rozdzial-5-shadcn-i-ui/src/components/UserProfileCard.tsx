import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { User } from "../types/User";
import { buttonVariants } from "@/src/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import Link from "next/link";
import PizzaIcon from "@/src/components/PizzaIcon";
import { cn } from "@/src/lib/utils"; //

interface UserProfileCardProps {
  user: User;
}

export function UserProfileCard({ user }: UserProfileCardProps) {
  const { id, name, avatarUrl, role, likesPizza } = user;
  const fallbackAvatar: string = name.split(" ")[0][0] + name.split(" ")[1][0];
  const profileUrl: string = `/users/${id}`;

  return (
    // Nadanie elementowi klasy @container w celu obserwacji zmiany jego rozmiaru
    <Card
      className={cn(
        "group @container relative mx-auto max-w-none w-full pt-4",
        "overflow-hidden transition-all duration-300 hover:shadow-md", // Dodane płynne przejścia
      )}
    >
      <Avatar className="size-24 mx-auto @md:ml-(--card-spacing)">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback className="uppercase">{fallbackAvatar}</AvatarFallback>
      </Avatar>

      {/* Stylizacja children na podstawie szerokości rodzica @ */}
      <CardHeader className="grid-cols-1! text-center @md:text-left @md:grid-cols-[1fr_auto]">
        <CardAction className="absolute right-3 top-3 @md:static">
          {likesPizza && (
            <div className="size-10 grid place-items-center rounded-full">
              <PizzaIcon />
            </div>
          )}
        </CardAction>

        <CardTitle className="font-semibold text-xl">{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>

      {/* Pokaż przycisk dopiero po najechaniu na Card, dodaj animację */}
      <CardFooter
        className={cn(
          "opacity-0 scale-95 transition-all duration-300 ease-in-out",
          "group-hover:opacity-100 group-hover:scale-100",
        )}
      >
        <Link
          className={cn(buttonVariants({ size: "lg" }), "w-full @md:w-fit")}
          href={profileUrl}
        >
          See profile
        </Link>
      </CardFooter>
    </Card>
  );
}
