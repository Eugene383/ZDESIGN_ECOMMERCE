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

  // 1º: monta o builder com os filtros primeiro
  let query =  supabase
    .from("products")
    .select("id, name, description, price, image_url, category_id", { count: "exact" });

  if (categoryId) {
    query =  query.eq("category_id", categoryId); // filtro ainda é permitido aqui
  }

  // 2º: só agora aplica order/range (transform) — depois disto, sem mais .eq()
  const { data, count, error } = await query
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("Erro ao buscar produtos:", error.message);
    return { data: [], count: 0 };
  }

  return { data, count: count ?? 0 };
}