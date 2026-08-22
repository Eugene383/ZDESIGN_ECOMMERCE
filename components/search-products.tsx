"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/utils/";
import { BoxIcon } from "lucide-react";
import { useEffect, useState } from "react";
import useDebounce from "@/hook/usedebounce";
import { SearchProducts } from "@/lib/supabase/queries/search-products";
import { Product } from "@/types/database.types";

interface SearchProductsProps {
  search: string;
}

type ProductImage = {
  id: string;
  image_url: string;
  is_primary?: boolean | null;
};

type SearchProduct = Product & { product_images?: ProductImage[] };

export default function SearchProductsDialog({ search }: SearchProductsProps) {
  const [products, setProducts] = useState<SearchProduct[]>([]);
  const termoDebounced = useDebounce(search);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!termoDebounced || termoDebounced.length < 3) {
        setProducts([]);
        return;
      }

      const result = await SearchProducts(termoDebounced);
      setProducts(result ?? []);
    };

    fetchProducts();
  }, [termoDebounced]);

  if (!search || search.length < 3) {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
        <BoxIcon size={52} />
        <p className="mt-4 text-sm sm:text-base">
          Digite pelo menos 3 caracteres para buscar produtos.
        </p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
        <BoxIcon size={52} />
        <p className="mt-4 text-sm sm:text-base">
          Nenhum produto encontrado para essa busca.
        </p>
      </div>
    );
  }

  return (
    <main className="w-full max-h-[65vh] overflow-y-auto">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-2">
        {products.map((product) => (
          <Link key={product.id} href={`/products/details/${product.id}`}>
            <Card className="group mx-auto flex h-full w-full max-w-sm flex-col overflow-hidden border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="relative h-36 overflow-hidden bg-slate-100 dark:bg-slate-800 sm:h-40">
                <Image
                  src={
                    product.product_images?.[0]?.image_url ??
                    "/api/placeholder/200/150"
                  }
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="flex-1 space-y-2 pb-3">
                <CardTitle className="font-heading text-base text-slate-900 dark:text-white">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {product.description ?? "Sem descrição"}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <div className="flex w-full items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-teal-600">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
