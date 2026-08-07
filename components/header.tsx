
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Search, ShoppingCart } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { AuthButton } from "./auth-button";
import { Suspense } from "react";
import {DialogSearch} from "@/components/dialog-search"

const navItems = [
  { label: "Produtos", href: "/products" },
  { label: "Serviços", href: "#services" },
  { label: "Sobre Nós", href: "#about" },
  { label: "Contato", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      	<div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
      	  <div className="flex flex-col gap-3 sm:gap-4 py-3 sm:py-4">
      	    <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
      	      	<div className="flex items-center gap-3">
      	      	  <Button
      	      	    asChild
      	      	    variant="ghost"
      	      	    className="font-heading text-lg sm:text-xl font-bold text-teal-600"
      	      	  >
      	      	    <Link href="/">ZD Design</Link>
      	      	  </Button>
      	      	</div>
				
				<DialogSearch/>
    
      	      	<div className="flex items-center gap-1 sm:gap-2">
      	      	  	<Button variant="ghost" size="icon" aria-label="Carrinho" className="h-8 w-8 sm:h-10 sm:w-10">
      	      	  	  	<ShoppingCart className="h-4 sm:h-5 w-4 sm:w-5" />
      	      	  	</Button>
      	      	  	<Suspense fallback={<div className="w-20 h-9 bg-slate-100 rounded-md animate-pulse" />}>
      	      	  	  	<AuthButton />
      	      	  	</Suspense>
      	      	  	<ThemeSwitcher />
      	      	</div>
      	    </div>

          	<nav className="flex flex-wrap items-center gap-1 sm:gap-2 overflow-x-auto pb-1">
          	  {navItems.map((item) => (
          	    	<Button
          	    	  	key={item.label}
          	    	  	asChild
          	    	  	variant="ghost"
          	    	  	size="sm"
          	    	  	className="rounded-full px-2 sm:px-3 text-xs sm:text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-slate-300 whitespace-nowrap"
          	  	>	
          	    	  	<Link href={item.href}>{item.label}</Link>
          	    	</Button>
          	  ))}
          	</nav>

          <div className="sm:hidden flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-800 dark:bg-slate-900">
            <Search className="h-4 w-4 text-slate-400" />
            <Input
              aria-label="Pesquisar"
              placeholder="Pesquisar..."
              className="border-0 bg-transparent px-0 text-xs shadow-none focus-visible:ring-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
}