"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Suspense, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import SearchProductsDialog from "./search-products";
import Loading from "@/app/loading";

export function DialogSearch() {
  const [search, setSearch] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          aria-label="Abrir busca"
          className="hidden sm:flex flex-1 justify-start items-center gap-2 lg:gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-500 dark:border-slate-800 dark:bg-slate-900 lg:max-w-3xl"
        >
          <Search className="h-4 w-4 text-slate-400" />
          <span className="text-sm">Buscar...</span>
         
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">
            Pesquisar
          </DialogTitle>
          <Input
            type="search"
            placeholder="O que você está procurando?"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-black text-sm shadow-sm focus:ring-2 focus:ring-teal-500"
          />
          <DialogDescription>
            {""}
          </DialogDescription>
        </DialogHeader>
        <Suspense fallback={<Loading/>}>
            <SearchProductsDialog search={search} />
        </Suspense>
      </DialogContent>
    </Dialog>
  );
}
