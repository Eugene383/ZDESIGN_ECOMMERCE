import { createClient } from "@/lib/supabase/server"

export async function getProduct(id:string){
    const supabase = await createClient()
    const { data, error } = await supabase
    .from("products").
    select(`*, product_images (id, image_url, is_primary), 
        product_variants(id,sku,color,size,stock,price)
        ,product_attributes(id,attribute_name,attribute_value)`)
    .eq("id", id)
    .order("is_primary", { foreignTable: "product_images", ascending: false })
    .maybeSingle()
    if(error) throw error

    return data
}