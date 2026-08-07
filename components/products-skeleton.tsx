import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsSkeleton() {
  return (
    <div className="space-y-8">
      <section className="py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="group flex h-full flex-col overflow-hidden border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 rounded-lg">
                <div className="relative aspect-square overflow-hidden">
                  <Skeleton className="w-full h-full" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-5/6" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-8 w-24 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-8 bg-[#f9fbfb] dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <Skeleton className="h-8 w-64 mx-auto mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-4 sm:p-6">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-3" />
                <Skeleton className="h-36 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
