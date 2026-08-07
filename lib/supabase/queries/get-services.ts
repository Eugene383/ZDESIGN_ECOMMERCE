import { createClient } from "../server";


export async function getServices() {
    const supabase = await createClient()
    const {data, error} = await supabase.from("services").select("*")
    
    if(error) {
       
        return [];
    }

    
    return data ?? [];
}