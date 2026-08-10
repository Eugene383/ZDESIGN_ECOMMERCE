"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  return <Button variant={"default"} size={"sm"} className="w-full" onClick={logout}>
    <LogOutIcon className="h-4 w-4" />
    Sair
  </Button>;
}
