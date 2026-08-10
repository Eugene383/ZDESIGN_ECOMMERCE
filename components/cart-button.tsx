"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartButton() {
    const router = useRouter();
    return (
    <Button onClick={() => router.push('/cart')} size="sm" variant="default" className=" text-center rounded-lg p-2  bg-teal-600 ">
        <ShoppingCart size={16} className="mr-2  text-white" />
        Adicionar
    </Button>
  );
}