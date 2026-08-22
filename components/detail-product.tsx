"use client";

import { useState, useCallback } from "react";
import ProductGallery from "@/components/product-gallery";
import { Button } from "@/components/ui/button";
import { Info, ShoppingCartIcon, Tag } from "lucide-react";
import { Product, Product_images, Product_attributes, Product_variants } from "@/types/database.types";
import { formatPrice } from "@/utils";

type ProductPageProps = {
  product: (Product 
    & { product_images?: Product_images[] }
    & { product_variants?: Product_variants[] }
    & { product_attributes?: Product_attributes[] }
  ) | null;
};

export default function DetailProduct({ product }: ProductPageProps) {
  const [variantAtual, setVariantAtual] = useState<Product_variants | null>(null);

  const handleVariantChange = useCallback((variant: Product_variants | null) => {
    setVariantAtual(variant);
  }, []);

  if (!product) {
    return (
      <p className="py-12 text-center text-slate-500">
        Produto não encontrado.
      </p>
    );
  }

  const isVariants = (product.product_variants?.length ?? 0) > 0;
  const precoExibido = variantAtual?.price ?? product.price ?? 0;
  const stockExibido = variantAtual?.stock ?? product.stock ?? 0;
  const podeAdicionar = !isVariants || (variantAtual && (variantAtual.stock ?? 0) > 0);

  return (
    <main className="space-y-6">
      <article className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <section
          aria-label="Galeria de imagens"
          className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-slate-900/40"
        >
          <ProductGallery product={product} onVariantChange={handleVariantChange} />
        </section>

        <aside
          aria-label="Informações e compra"
          className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-slate-900/40"
        >
          <div className="space-y-5">
            <header className="space-y-3">
              <h1 className="text-xl font-semibold text-slate-950 dark:text-white">
                {product.name}
              </h1>
              <data value={precoExibido} className=" flex gap-2 items-center text-2xl font-semibold text-slate-950 dark:text-white">
                <Tag/>{formatPrice(precoExibido)}
              </data>
              <p
                className="text-sm text-slate-500 dark:text-slate-400"
                role="status"
                aria-live="polite"
              >
                {stockExibido > 0 ? `${stockExibido} em estoque` : "Fora de estoque"}
              </p>
            </header>

            <section
              aria-labelledby="descricao-produto"
              className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 id="descricao-produto" className="text-xl flex gap-2 items-center  font-semibold text-slate-950 dark:text-white">
                <Info/> 
                Descrição do Produto
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {product.description ??
                  "Sem descrição disponível para este produto."}
              </p>
            </section>

            {product.product_attributes && product.product_attributes.length > 0 && (
              <section
                aria-labelledby="especificacoes-produto"
                className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <h2 id="especificacoes-produto" className="text-sm font-semibold text-slate-950 dark:text-white">
                  Especificações
                </h2>
                <dl className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                  {product.product_attributes.map((attr) => (
                    <div key={attr.id} className="flex justify-between gap-4">
                      <dt className="font-medium">{attr.attribute_name}</dt>
                      <dd>{attr.attribute_value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            <Button
              disabled={!podeAdicionar}
              className="w-full rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500 disabled:opacity-40"
              onClick={() => {
                // variantAtual?.id (se houver variantes) ou product.id
              }}
            >
              <ShoppingCartIcon aria-hidden="true" />
              Adicionar ao carrinho
            </Button>
          </div>
        </aside>
      </article>
    </main>
  );
}