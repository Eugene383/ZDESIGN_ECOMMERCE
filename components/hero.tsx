import Image from "next/image";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";


const slides = [
  {
    title: "Letreiros Luminosos & Sinalética",
    description:
      "Soluções premium de iluminação interior e exterior para destacar o seu negócio com sofisticação e visibilidade.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Soluções de Iluminação LED",
    description:
      "Tecnologia LED de última geração para máxima eficiência energética com acabamento moderno.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Design Personalizado",
    description:
      "Criamos peças únicas alinhadas à identidade da sua marca, com atenção ao detalhe e acabamento.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
];

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 py-4 sm:py-6 md:py-10">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8">
        <div className="overflow-hidden rounded-lg sm:rounded-2xl lg:rounded-[28px] border border-white/10 bg-slate-950/40 shadow-[0_30px_80px_rgba(15,23,42,0.45)] backdrop-blur-sm">
          <Carousel className="relative w-full">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.title}>
                  <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      loading="eager"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                      style={{ backgroundImage: `url(${slide.image})` }}
                      className="absolute inset-0 h-full w-full   brightness-50 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.24),_transparent_35%)]" />

                    <div className="absolute inset-x-3 bottom-3 max-w-xl rounded-lg sm:rounded-2xl lg:rounded-[24px] border border-white/15 bg-white/10 p-3 sm:p-5 md:p-6 text-white shadow-2xl backdrop-blur-md md:inset-x-8 md:bottom-8">
                      <h1 className="mt-2 sm:mt-3 font-heading text-lg sm:text-2xl md:text-4xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-slate-100/90">
                        {slide.description}
                      </p>
                      <div className="mt-4 sm:mt-5 flex flex-wrap gap-2 sm:gap-3">
                        <Button className="bg-teal-500 text-white hover:bg-teal-400 text-xs sm:text-sm px-3 sm:px-4 py-2">
                          Ver catálogo
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/70 hover:bg-white/10 bg-black text-xs sm:text-sm px-3 sm:px-4 py-2"
                        >
                          Solicitar orçamento
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-3 top-1/2 z-20 -translate-y-1/2 border-white/20 bg-slate-950/50 text-white backdrop-blur-md hover:bg-slate-950/70" />
            <CarouselNext className="right-3 top-1/2 z-20 -translate-y-1/2 border-white/20 bg-slate-950/50 text-white backdrop-blur-md hover:bg-slate-950/70" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
