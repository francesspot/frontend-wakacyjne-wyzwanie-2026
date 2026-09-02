import { Skeleton } from "@/src/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12 w-full">
      {Array(3)
        .fill(0)
        .map((_, key) => (
          <div key={key} className="flex flex-col space-y-3">
            <Skeleton className="h-64 w-full rounded-md" />
          </div>
        ))}
    </div>
  );
}
