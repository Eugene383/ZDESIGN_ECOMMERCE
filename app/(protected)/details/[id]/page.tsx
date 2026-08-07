import Header from "@/components/header";
import { getProduct } from "@/lib/supabase/queries/get-product";
import DetailProduct from "@/components/detail-product";
import { Suspense } from "react";
import Loading from "@/app/loading"

interface DetailPageProps {
    params:Promise<{ id: string }>
}




async function ProductLoader({params}:DetailPageProps){
    const {id} = await params
    const productPromise = await getProduct(id)
    return <DetailProduct  productPromise={productPromise}/>
}

export default async function DetailPage({params}:DetailPageProps) {
   
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <Header />
            <div  className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <Suspense fallback={<Loading/>}>
                    <ProductLoader params={params} />
                </Suspense>
            </div>
        </main>
    );
}
