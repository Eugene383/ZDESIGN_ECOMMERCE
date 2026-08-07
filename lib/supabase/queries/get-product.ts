import { createClient } from "@/lib/supabase/server"

export async function getProduct(id:string){
    const supabase = await createClient()
    const {data,error} = await supabase.from('products').select('*').eq('id',id).single()
    if(error) throw error

    return data
}