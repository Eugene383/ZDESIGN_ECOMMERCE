
import {createClient} from "@/lib/supabase/server";

export async function getProducts(){
    const supabase = await createClient()
    const {data,error} = await supabase.from("products").select("*").limit(8)
    if(error){
        return []
    }
    return data ?? [];
}