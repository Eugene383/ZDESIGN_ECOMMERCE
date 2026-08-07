import Image from "next/image";
import { Button } from "./ui/button";
import { Service } from "@/types/database.types";
import { getServices } from "@/lib/supabase/queries/get-services";
import { BoxesIcon } from "lucide-react";

export default async function ListServices() {
  const services = await getServices();


  if (!services || services.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center  py-12  text-slate-400 gap-2">
			<BoxesIcon size={60}/>
			<p>Nenhum serviço disponível no momento.</p>
      	</div>
    );
  }

  	return (
  	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
  	        <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-4 sm:gap-6">
  	          {services[0] && (
  	            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 items-start lg:items-center">
  	              <div className="flex-1 space-y-3 sm:space-y-4">
  	                <div className="flex items-center gap-2">
  	                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
  	                    {services[0].name}
  	                  </h3>
  	                </div>
  	                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
  	                  {services[0].description}
  	                </p>
  	                <Button variant="default" className="bg-[#0b3c2c] text-white hover:bg-[#082d21] rounded-lg px-4 sm:px-5 py-2 text-xs font-semibold w-fit">
  	                  Get Quote
  	                </Button>
  	              </div>
  	              <div className="w-full lg:w-72 h-32 sm:h-44 relative rounded-lg sm:rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
  	                <Image 
  	                  src={services[0].image_url ?? "/api/placeholder/300/200"} 
  	                  fill 
  	                  alt={services[0].name} 
  	                  className="object-cover"
  	                  unoptimized={services[0].image_url?.includes("pinterest.com") || services[0].image_url?.includes("pinimg.com")}
  	                />
  	              </div>
  	            </div>
  	          )}
	
  	          {/* Subgrid para o Segundo e Terceiro Serviço */}
  	          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
  	            {/* Segundo Serviço */}
  	            {services[1] && (
  	              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between gap-3 sm:gap-4">
  	                <div className="space-y-2 sm:space-y-3">
  	                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
  	                    {services[1].name}
  	                  </h3>
  	                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
  	                    {services[1].description}
  	                  </p>
  	                </div>
  	                <div className="w-full h-28 sm:h-32 relative rounded-lg sm:rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 my-1 sm:my-2">
  	                  <Image 
  	                    src={services[1].image_url ?? "/api/placeholder/300/150"} 
  	                    fill 
  	                    alt={services[1].name} 
  	                    className="object-cover"
  	                    unoptimized={services[1].image_url?.includes("pinterest.com") || services[1].image_url?.includes("pinimg.com")}
  	                  />
  	                </div>
  	                <Button variant="outline" className="w-full border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold py-2">
  	                  Saber Mais
  	                </Button>
  	              </div>
  	            )}

  	            {/* Terceiro Serviço (Estilo Verde Escuro) */}
  	            {services[2] && (
  	              <div className="bg-[#0a3a2a] dark:bg-teal-900 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between gap-3 sm:gap-4">
  	                <div className="space-y-2 sm:space-y-3">
  	                  <h3 className="font-bold text-sm sm:text-base">{services[2].name}</h3>
  	                  <p className="text-emerald-100/80 text-xs leading-relaxed">
  	                    {services[2].description}
  	                  </p>
  	                </div>
  	                <div className="w-full h-28 sm:h-32 relative rounded-lg sm:rounded-xl overflow-hidden bg-[#072d20] dark:bg-teal-950 my-1 sm:my-2">
  	                  <Image 
  	                    src={services[2].image_url ?? "/api/placeholder/300/150"} 
  	                    fill 
  	                    alt={services[2].name} 
  	                    className="object-cover opacity-90"
  	                    unoptimized={services[2].image_url?.includes("pinterest.com") || services[2].image_url?.includes("pinimg.com")}
  	                  />
  	                </div>
  	                <Button className="w-full bg-white text-[#0a3a2a] hover:bg-slate-100 dark:bg-emerald-100 dark:text-teal-900 dark:hover:bg-emerald-200 text-xs font-semibold py-2">
  	                  Solicitar Design
  	                </Button>
  	              </div>
  	            )}
  	          </div>
  	        </div>

  	        {/* Coluna Direita - Quarto Serviço (Vertical Longo) */}
  	        {services[3] && (
  	          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between gap-4 sm:gap-6">
  	            <div className="space-y-3 sm:space-y-4">
  	              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
  	                {services[3].name}
  	              </h3>
  	              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
  	                {services[3].description}
  	              </p>
  	            </div>
  	            <div className="w-full flex-1 min-h-[150px] sm:min-h-[200px] relative rounded-lg sm:rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 my-1 sm:my-2">
  	              <Image 
  	                src={services[3].image_url ?? "/api/placeholder/300/400"} 
  	                fill 
  	                alt={services[3].name} 
  	                className="object-cover"
  	                unoptimized={services[3].image_url?.includes("pinterest.com") || services[3].image_url?.includes("pinimg.com")}
  	              />
  	            </div>
  	            <Button variant="outline" className="w-full border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold py-2">
  	              Saber Mais
  	            </Button>
  	          </div>
  	        )}
  	    </div>
  	    
  	);
}