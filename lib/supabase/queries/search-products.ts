import {createClient} from "@/lib/supabase/client";

export async function SearchProducts(search: string){
    const supabase = await createClient()
    const {data,error} = await supabase.from("products").select("*,product_images(id,image_url,is_primary)").eq('product_images.is_primary',true).ilike("name", `%${search}%`).limit(8)
    if(error) throw error;
    
    return data;
}