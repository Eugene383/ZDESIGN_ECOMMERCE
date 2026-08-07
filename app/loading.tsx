import { Loader2 } from "lucide-react";

export default function Loading(){
    return(
        <div className="flex h-32 w-full items-center justify-center">
            <Loader2 className="animate-spin text-teal-600 h-8 w-8" />
        </div>
    )
}