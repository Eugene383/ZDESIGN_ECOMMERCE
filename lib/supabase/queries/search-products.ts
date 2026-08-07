import {createClient} from "@/lib/supabase/client";

export async function SearchProducts(search: string){
    const supabase = await createClient()
    const {data,error} = await supabase.from("products").select("*").ilike("name", `%${search}%`).limit(8)
    if(error) throw error;
    
    return data;
}