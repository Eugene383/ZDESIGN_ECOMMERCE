"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Product, Product_attributes, Product_images, Product_variants } from "@/types/database.types";

type ProductGalleryProps = {
  product: (Product 
      & { product_images?: Product_images[] }
      & { product_variants?: Product_variants[] }
      & { product_attributes?: Product_attributes[] }
    ) | null;
  onVariantChange?: (variant: Product_variants | null) => void;
};

export default function ProductGallery({ product, onVariantChange }: ProductGalleryProps) {
  const images = product?.product_images ?? [];

  const color = useMemo(
    () => [...new Set((product?.product_variants ?? []).map(v => v.color).filter(Boolean))],
    [product?.product_variants]
  );

  const size = useMemo(
    () => [...new Set((product?.product_variants ?? []).map(v => v.size).filter(Boolean))],
    [product?.product_variants]
  );

  const [colorSelected, setColorSelected] = useState<string | null>(null);
  const [sizeSelected, setSizeSelected] = useState<string | null>(null);

  const defaultImage =
    images.find((image) => image.is_primary)?.image_url ??
    images[0]?.image_url ?? "/api/placeholder/200/150";

  const [selectedImage, setSelectedImage] = useState<string>(defaultImage);

  useEffect(() => {
    setSelectedImage(defaultImage);
  }, [defaultImage]);

  useEffect(() => {
    if (color.length > 0 && !colorSelected) {
      setColorSelected(color[0]);
    }
  }, [color, colorSelected]);

  const variantAtual = product?.product_variants?.find(
    v => v.color === colorSelected && v.size === sizeSelected
  ) ?? null;

  useEffect(() => {
    onVariantChange?.(variantAtual);
  }, [variantAtual, onVariantChange]);

  if (!product) {
    return <p className="text-slate-500">Sem imagens disponíveis.</p>;
  }

  const tamanhoDisponivel = (tamanho: string | null) =>
    product.product_variants?.some(
      v => v.color === colorSelected && v.size === tamanho && (v.stock ?? 0) > 0
    );

  return (
    <div className="space-y-4">
      {/* Imagem Principal */}
      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={selectedImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover transition-all duration-300"
            priority
          />
        </div>
        <figcaption className="sr-only">Imagem principal de {product.name}</figcaption>
      </figure>

      {/* Miniaturas */}
      <ul className="flex flex-wrap gap-3" aria-label="Galeria de imagens do produto">
        {images.length > 0
          ? images.map((image, index) => {
              const isSelected = selectedImage === image.image_url;
              return (
                <li key={image.id}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    aria-label={`Ver imagem ${index + 1} de ${product.name}`}
                    onClick={() => setSelectedImage(image.image_url)}
                    className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 transition ${
                      isSelected
                        ? "border-slate-900 dark:border-white"
                        : "border-transparent hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                  >
                    <Image
                      src={image.image_url}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                </li>
              );
            })
          : Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>
                <div className="h-20 w-20 rounded-xl border-2 border-transparent bg-slate-100 dark:bg-slate-900" />
              </li>
            ))}
      </ul>

      {/* Seletor de cor */}
      {color.length > 0 && (
        <fieldset className="space-y-2 border-0 p-0">
          <legend className="text-sm font-semibold text-slate-900 dark:text-white">
            Cor: {colorSelected}
          </legend>
          <div className="flex flex-wrap gap-2">
            {color.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={colorSelected === c}
                onClick={() => {
                  setColorSelected(c);
                  setSizeSelected(null);
                }}
                className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                  colorSelected === c
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-emerald-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {/* Seletor de tamanho */}
      {size.length > 0 && (
        <fieldset className="space-y-2 border-0 p-0">
          <legend className="text-sm font-semibold text-slate-900 dark:text-white">
            Tamanho: {sizeSelected ?? "selecione"}
          </legend>
          <div className="flex flex-wrap gap-2">
            {size.map((s) => {
              const disponivel = tamanhoDisponivel(s);
              return (
                <button
                  key={s}
                  type="button"
                  disabled={!disponivel}
                  aria-pressed={sizeSelected === s}
                  onClick={() => setSizeSelected(s)}
                  className={`min-w-12 rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                    sizeSelected === s
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-emerald-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                  } ${!disponivel ? "opacity-40 cursor-not-allowed line-through" : ""}`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}
    </div>
  );
}