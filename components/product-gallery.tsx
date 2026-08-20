"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

type ProductImage = {
  id: string;
  image_url: string;
  is_primary?: boolean | null;
};

type ProductGalleryProps = {
  images: ProductImage[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const defaultImage =
    images.find((image) => image.is_primary)?.image_url ??
    images[0]?.image_url ??
    "/api/placeholder/200/150";


  const [selectedImage, setSelectedImage] = useState<string>(defaultImage);

  useEffect(() => {
    setSelectedImage(defaultImage);
  }, [defaultImage]);

  return (
    <div className="space-y-4">
      {/* Imagem Principal */}
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-6 shadow-inner dark:border-slate-800 dark:bg-slate-900">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-teal-600 to-slate-700">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_35%)]" />
          <Image
            src={selectedImage}
            alt={productName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-all duration-300"
            priority
          />
        </div>
      </div>

      {/* Miniaturas */}
      <div className="grid grid-cols-4 gap-3">
        {images.length > 0
          ? images.map((image) => {
              const isSelected = selectedImage === image.image_url;

              return (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(image.image_url)}
                  className={`group cursor-pointer overflow-hidden rounded-3xl border p-3 transition text-left ${
                    isSelected
                      ? "border-teal-500 ring-2 ring-teal-500/20 dark:border-teal-400"
                      : "border-slate-200 bg-slate-50 hover:border-teal-500 dark:border-slate-800 dark:bg-slate-900"
                  }`}
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-50 transition group-hover:scale-105 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950">
                    <Image
                      src={image.image_url}
                      alt={`${productName} - ${image.id}`}
                      fill
                      sizes="(max-width: 768px) 25vw, 150px"
                      className="object-cover"
                    />
                  </div>
                </button>
              );
            })
          : Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950" />
              </div>
            ))}
      </div>
    </div>
  );
}