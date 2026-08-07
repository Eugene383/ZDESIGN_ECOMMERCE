import Link from "next/link";
import { getCategories } from "@/lib/supabase/queries/get-categoies";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default async function ListCategories({
  activeCategory,
}: {
  activeCategory?: string;
}) {
  const categories = await getCategories();

  if (!categories || categories.length === 0) {
    return <span className="text-gray-400">Nenhuma categoria encontrada</span>;
  }

  return (
    <div className="w-full py-4 flex flex-wrap items-center gap-2">
      <Button
        asChild
        variant={!activeCategory ? "default" : "ghost"}
        className={cn(
          !activeCategory && "bg-teal-600 text-white hover:bg-teal-700",
        )}
      >
        <Link href="?">Todas</Link>
      </Button>

      {categories.map((category) => {
        const isActive = activeCategory === String(category.id);
        return (
          <Button
            asChild
            variant={isActive ? "default" : "ghost"}
            key={category.id}
            className={cn(
              isActive && "bg-teal-600 text-white hover:bg-teal-700",
            )}
          >
            <Link href={`?categoria=${category.id}`}>{category.name}</Link>
          </Button>
        );
      })}
    </div>
  );
}
