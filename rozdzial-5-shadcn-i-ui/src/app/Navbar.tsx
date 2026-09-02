import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { NAV_LINKS } from "@/src/config";
import { ModeToggle } from "../components/ModeToggle";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  return (
    <nav className={cn("inset-0 py-6 flex justify-center items-center gap-6")}>
      <Tabs defaultValue={NAV_LINKS[0]?.title} className="w-auto">
        <TabsList>
          {NAV_LINKS.map((link) => (
            <TabsTrigger key={link.id} value={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <ModeToggle />
    </nav>
  );
}
