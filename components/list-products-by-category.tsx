import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/utils/";
import { BoxIcon } from "lucide-react";
import { getProductsForCategories } from "@/lib/supabase/queries/get-products-by-categories";
import { ProdutosPagination } from "@/components/pagination";
import CartButton from "./cart-button";

const PER_PAGE = 12;

export default async function ListProductsByCategory({
  searchParams,
}: {
  searchParams: { page?: string; categoria?: string };
}) {
  const page = Math.max(1, Number(searchParams.page) || 1);

  const { data: productsByCategory, count } = await getProductsForCategories({
    page,
    perPage: PER_PAGE,
    categoryId: searchParams.categoria,
  });

  if (!productsByCategory || productsByCategory.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center  py-12  text-slate-400 gap-2">
        <BoxIcon size={60} />
        <p>Nenhuma categoria ou produto disponível no momento.</p>
      </div>
    );
  }

  const totalPages = Math.ceil((count ?? 0) / PER_PAGE);

  return (
    <main className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {productsByCategory.map((productbyCategory) => (
          <Link key={productbyCategory.id}  href={`/details/${productbyCategory.id}`} >
            <Card key={productbyCategory.id}
              
              className="group flex h-full flex-col overflow-hidden border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={productbyCategory.image_url ?? "/api/placeholder/200/150"}
                  alt={productbyCategory.name}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="flex-1 space-y-2 pb-3">
                <CardTitle className="font-heading text-base text-slate-900 dark:text-white">
                  {productbyCategory.name}
                </CardTitle>
                <CardDescription className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {productbyCategory.description ?? "Sem descrição"}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <div className="w-full flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-teal-600">{formatPrice(productbyCategory.price)}</p>
                  <CartButton />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <ProdutosPagination currentPage={page} totalPages={totalPages} />
      </div>
    </main>
  );
}