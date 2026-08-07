"use client"
import { Button } from "@/components/ui/button";
import { Product } from "@/types/database.types";
import { use } from "react";
import { formatPrice } from "@/utils";
import Image from "next/image";


type ProductPageProps = {
    product: Product
}

export default function DetailProduct({ product }: ProductPageProps) {
    const item = product
    return(
        <div>
            
                <div  className="space-y-6">
                    <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-slate-900/40">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                            <div className="space-y-3">
                            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                                {item.name}
                            </h1>
                            <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                                {item.description}
                            </p>
                            </div>
                            <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-[#f4f9f5] px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    
                                <div className="space-y-1">
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Preço</p>
                                    <div className="flex items-end gap-3">
                                    <p className="text-3xl font-bold text-slate-950 dark:text-white">{formatPrice(item.price)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-6 xl:grid-cols-[1.65fr_1fr]">
                        <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-slate-900/40">
                            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-6 shadow-inner dark:border-slate-800 dark:bg-slate-900">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-teal-600 to-slate-700">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_35%)]" />
                                    <Image src={item.image_url ?? "/api/placeholder/200/150"} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover" />
                                </div>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-4">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 transition hover:border-teal-500 dark:border-slate-800 dark:bg-slate-900">
                                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-50 transition group-hover:scale-105 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950" />
                                    </div>
                                ))}
                            </div>
            
                            <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8faf8] p-6 dark:border-slate-800 dark:bg-slate-900/80">
                                <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Descrição do Projeto</h2>
                                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                                Transforme a identidade visual da sua empresa com nosso serviço de Branding Sob Medida. Este pacote premium inclui a criação de logotipos exclusivos, paleta de cores institucional, tipografia selecionada e um manual de marca completo para garantir consistência em todos os pontos de contato.
                                </p>
            
                                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Design Exclusivo</p>
                                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Cada traço é pensado para refletir a essência única do seu negócio.</p>
                                </div>
                                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Manual da Marca</p>
                                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Guia técnico para aplicação correta em mídias digitais e impressas.</p>
                                </div>
                                </div>
                            </div>
                        </section>
            
                        <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-slate-900/40">
                            <div className="space-y-5">
                                <div className="space-y-3">
                                    <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:bg-emerald-900/70 dark:text-emerald-300">
                                    Serviço Premium
                                    </div>
                                    <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Branding Sob Medida</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Detalhes do pedido e upload de referências para começar o briefing imediatamente.</p>
                                </div>
            
                                <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-sm font-semibold text-slate-900 dark:text-white">Prazo de Entrega</span>
                                        <span className="text-sm text-slate-500 dark:text-slate-400">Padrão (15 dias)</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-sm font-semibold text-slate-900 dark:text-white">Revisões</span>
                                        <span className="text-sm text-slate-500 dark:text-slate-400">3 Rodadas</span>
                                    </div>
                                </div>
            
                                <div className="space-y-3 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                                    <label className="text-sm font-medium text-slate-900 dark:text-white">Detalhes do Pedido</label>
                                    <textarea
                                    rows={5}
                                    readOnly
                                    className="w-full resize-none rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-teal-400 dark:focus:ring-teal-500/20"
                                    value="Descreva brevemente sua visão ou requisitos específicos para o projeto..."
                                    />
                                </div>
            
                                <div className="space-y-3 rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-4 text-center dark:border-slate-700 dark:bg-slate-950">
                                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                                    <span className="text-xl">⌃</span>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Upload de Referências (Opcional)</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Arraste ou clique para enviar arquivos JPG, PNG ou PDF (Max 10MB)</p>
                                </div>
            
                                <Button className="w-full rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500">
                                Adicionar ao Carrinho
                                </Button>
            
                                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                                    <p className="font-semibold text-slate-900 dark:text-white">Regra de Negócio:</p>
                                    <p className="mt-2">Pagamento integral ou sinal de 50% deve ser realizado presencialmente em nosso estúdio após a reunião de briefing.</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
        </div>
    )
}