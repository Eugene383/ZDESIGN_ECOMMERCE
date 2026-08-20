// lib/supabase/queries/get-products-by-categories.ts
import { createClient } from "@/lib/supabase/server";

export async function getProductsForCategories({
  page = 1,
  perPage = 12,
  categoryId,
}: {
  page?: number;
  perPage?: number;
  categoryId?: string;
} = {}) {
  const supabase = await createClient();

  const from = (page - 1) * perPage;
  const to = from + perPage - 1;

  let query = supabase
    .from("products")
    .select("*, product_images (id, image_url, is_primary)", {
      count: "exact",
    });

  if (categoryId) {
    query = query.eq("category_id", categoryId);
  }

  const { data, count, error } = await query
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("Erro ao buscar produtos:", error.message);
    return { data: [], count: 0 };
  }

  return { data: data ?? [], count: count ?? 0 };
}
