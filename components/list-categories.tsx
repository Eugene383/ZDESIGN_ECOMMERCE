import { getCategories } from "@/lib/supabase/queries/get-categoies";
import CategoriesCarousel from "./categories-carousel";

export default async function ListCategories({
  activeCategory,
}: {
  activeCategory?: string;
}) {
  const categories = await getCategories();

  return (
    <div className="min-w-0">
      <CategoriesCarousel
        categories={categories ?? []}
        activeCategory={activeCategory}
      />
    </div>
  );
}
