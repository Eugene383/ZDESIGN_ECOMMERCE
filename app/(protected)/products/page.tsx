import { Suspense } from "react";
import Header from "@/components/header";
import ListProductsByCategory from "@/components/list-products-by-category";
import Footer from "@/components/footer";
import ProductsSkeleton from "@/components/products-skeleton";
import ListCategories from "@/components/list-categories";
export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; categoria?: string }>;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <main className="w-full ">
      <Header />

      <div className="">
        <section className="py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-8 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-12 gap-4">
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white">Produtos por Categoria</h2>
                <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-light">Navegue pelos produtos organizados por categoria</p>
                <div>
                  <Suspense fallback={<ProductsSkeleton />}>
                    <ListCategories activeCategory={resolvedSearchParams.categoria} />
                  </Suspense>
                </div>
              </div>
            </div>
            <Suspense
              key={`${resolvedSearchParams.categoria ?? "all"}-${resolvedSearchParams.page ?? "1"}`}
              fallback={<ProductsSkeleton />}
            >
              <ListProductsByCategory searchParams={resolvedSearchParams} />
            </Suspense>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}