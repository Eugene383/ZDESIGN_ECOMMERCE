import { createClient } from "@/lib/supabase/server"

export async function getProduct(id:string){
    const supabase = await createClient()
    const { data, error } = await supabase
    .from("products").select(`*, product_images (id, image_url, is_primary)`).eq("id", id)
    .order("is_primary", { foreignTable: "product_images", ascending: false })
    .maybeSingle()
    if(error) throw error

    return data
}