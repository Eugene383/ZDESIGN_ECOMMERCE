
import {createClient} from "@/lib/supabase/server";

export async function getProducts(){
    const supabase = await createClient()
    const {data,error} = await supabase.from("products").select("*,product_images(id, image_url, is_primary)").eq('product_images.is_primary',true).limit(20)
    if(error){
        return []
    }
    return data ?? [];
}