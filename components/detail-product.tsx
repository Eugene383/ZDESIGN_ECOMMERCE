"use client";

import ProductGallery from "@/components/product-gallery"
import { Button } from "@/components/ui/button";
import { Product } from "@/types/database.types";
import { formatPrice } from "@/utils";


type ProductImage = {
  id: string;
  image_url: string;
  is_primary?: boolean | null;
};

type ProductPageProps = {
  product: (Product & { product_images?: ProductImage[] }) | null;
};

export default function DetailProduct({ product }: ProductPageProps) {
  if (!product) {
    return (
      <div className="py-12 text-center text-slate-500">
        Produto não encontrado.
      </div>
    );
  }

  const productImages = Array.isArray(product.product_images)
    ? product.product_images
    : [];

  

  return (
    <div>
      <div className="space-y-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-slate-900/40">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                {product.name}
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                {product.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-[#f4f9f5] px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="space-y-1">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Preço
                </p>
                <div className="flex items-end gap-3">
                  <p className="text-3xl font-bold text-slate-950 dark:text-white">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.65fr_1fr]">
          <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-slate-900/40">
            <ProductGallery productName={product.name} images={productImages}/>
            <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8faf8] p-6 dark:border-slate-800 dark:bg-slate-900/80">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                Descrição do Produto
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {product.description ??
                  "Sem descrição disponível para este produto."}
              </p>
            </div>
          </section>

          <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-slate-900/40">
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:bg-emerald-900/70 dark:text-emerald-300">
                  Produto
                </div>
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                  {product.name}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Detalhes e informações do produto selecionado.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    Preço
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    Categoria
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {product.category_id ?? "Geral"}
                  </span>
                </div>
              </div>

              <Button className="w-full rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500">
                Adicionar ao Carrinho
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
