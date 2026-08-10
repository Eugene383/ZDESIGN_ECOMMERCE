"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Category = {
  id: string | number;
  name: string;
};

export default function CategoriesCarousel({
  categories,
  activeCategory,
}: {
  categories: Category[];
  activeCategory?: string;
}) {
  if (!categories || categories.length === 0) {
    return <span className="text-gray-400">Nenhuma categoria encontrada</span>;
  }

  return (
    <div className="w-full py-4">
        <Carousel className="relative w-full">
        <CarouselContent className="mx-8">
        <CarouselItem className="basis-auto shrink-0 pl-4 ">
          <Button
            asChild
            variant={!activeCategory ? "default" : "ghost"}
            className={cn(
              "whitespace-nowrap",
              !activeCategory && "bg-teal-600 text-white hover:bg-teal-700",
            )}
          >
            <Link href="?">Todas</Link>
          </Button>
        </CarouselItem>
          
        {categories.map((category) => {
          const isActive = activeCategory === String(category.id);
          return (
            <CarouselItem
              key={category.id}
              className="basis-auto shrink-0 pl-4"
            >
              <Button
                asChild
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "whitespace-nowrap",
                  isActive && "bg-teal-600 text-white hover:bg-teal-700",
                )}
              >
                <Link href={`?categoria=${category.id}`}>
                  {category.name}
                </Link>
              </Button>
            </CarouselItem>
          );
        })}
        </CarouselContent>
        <CarouselPrevious className=" h-10  left-0 top-1/2 z-20 -translate-y-1/2 border-white/20 bg-slate-950/50 text-white backdrop-blur-md hover:bg-slate-950/70" />
        <CarouselNext className="h-10 right-0 top-1/2 z-20 -translate-y-1/2 border-white/20 bg-slate-950/50 text-white backdrop-blur-md hover:bg-slate-950/70" />
      </Carousel>
    </div>
  );
}
    