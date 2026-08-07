"use client"

import { ProgressProvider } from "@bprogress/next/app"

export default function Provider({children}:{children:React.ReactNode}){
    return(
        <ProgressProvider height="4px" color="#0d9488" options={{showSpinner:false}} shallowRouting  >
            {
                children
            }
        </ProgressProvider>
    )
}