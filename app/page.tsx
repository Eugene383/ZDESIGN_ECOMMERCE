import { Suspense } from "react";
import { MessageCircle} from "lucide-react";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import ListProducts from "@/components/list-products";
import ListServices from "@/components/list-services";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Loading from "./loading";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="w-full ">
      	<Header />
      	<Hero />
	
      	<div className="">
			<section  className="py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-8 bg-white dark:bg-slate-950">
            	<div className="max-w-7xl mx-auto">
            	  	<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-12 gap-4">
            	  	  	<div>
            	  	  	  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white">Produtos em destaque</h2>
            	  	  	  <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-light">Produto de qualidade para o sua necessidade</p>
            	  	  	</div>
            	  	  	<Link href="/protected/products/" className="text-teal-600 font-semibold hover:underline text-sm sm:text-base whitespace-nowrap">
            	  	  	  Ver tudo &rarr;
            	  	  	</Link>
            	  	</div>
					<Suspense fallback={<Loading/>}>
      	  				<ListProducts />
      	  			</Suspense>
				</div>
            </section>
      	  	
			<section className="py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-8 bg-[#f9fbfb] dark:bg-slate-950">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold text-center text-[#091e16] dark:text-white mb-8 sm:mb-12">
					  Serviços especializados
					</h2>
					<Suspense fallback={<Loading/>}>
      	 	  			<ListServices />
      	 			</Suspense>
				</div>
			</section>
      	</div>

      {/* Seção CTA */}
      	<section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-8 bg-gradient-to-b from-[#e3eeff] to-[#f3f7ff] dark:from-slate-900 dark:to-slate-950">
      	  	<div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
      	  	  	<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#091e16] dark:text-white">
      	  	  	  Pronto para elevar a sua marca?
      	  	  	</h2>
      	  	  	<p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
      	  	  	  Fale com os nossos especialistas e receba um orçamento personalizado em menos de 24 horas.
      	  	  	</p>
      	  	  	<div className="pt-2">
      	  	  	  	<Button className="bg-[#00c286] hover:bg-[#00ad77] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-full text-xs sm:text-sm md:text-base inline-flex items-center gap-2 font-semibold shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-102">
      	  	  	  	  <MessageCircle className="w-3 sm:w-4 h-3 sm:h-4 fill-white" />
      	  	  	  	  	Conversar no WhatsApp
      	  	  	  	</Button>
      	  	  	</div>
      	  	</div>
      	</section>
		<Footer />
    </main>
  );
}