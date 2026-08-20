import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {formatPrice} from "@/utils/";
import { BoxIcon} from "lucide-react";
import { getProducts } from "@/lib/supabase/queries/get-products";
import CartButton from "./cart-button";





export default async function ListProducts() {
  
    const products = await getProducts()

	if(!products || products.length === 0){
		return(
			<div className="flex flex-col justify-center items-center  py-12  text-slate-400 gap-2">
				<BoxIcon size={60}/>
				<p>Nenhum produto disponível no momento.</p>
      		</div>
		)
	}
    return(
        <main className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => {

                const imageUrl = product.product_images?.find((image:any)=>image.is_primary)?.image_url ??
                product.product_images?.[0]?.image_url?? "/api/placeholder/200/150"

                return (
                  <Link key={product.id} href={`/details/${product.id}`}>
                    <Card
                      className="group flex h-full flex-col overflow-hidden border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                    >
                      <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <Image
                          src={imageUrl}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
                        <div className="w-full flex items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-teal-600">{formatPrice(product.price)}</p>
                          <CartButton />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
              )})}
            
            </div>   
        </main>
    )
}