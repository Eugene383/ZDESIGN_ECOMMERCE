
import {createClient} from "@/lib/supabase/server";

export async function getProducts(){
    const supabase = await createClient()
    const {data,error} = await supabase.from("products").select("*").limit(20)
    if(error){
        return []
    }
    return data ?? [];
}