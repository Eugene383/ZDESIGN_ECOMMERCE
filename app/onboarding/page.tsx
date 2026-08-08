"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function OnboardingPage() {
  const router = useRouter();
  const supabase = createClient();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setError("Sessão inválida. Faça login novamente.");
      setLoading(false);
      return;
    }

    const profileData = {
      name,
      phone,
      municipio,
      bairro,
      rua,
      onboarding_completed: true,
    };

    const { error: updateError } = await supabase
      .from("profiles")
      .update(profileData as any)
      .eq("id", user.id);

    setLoading(false);

    if (updateError) {
      setError("Não foi possível guardar o perfil. Tente novamente.");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Complete o seu perfil</CardTitle>
          <CardDescription>
            Precisamos de mais alguns dados antes de continuar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Zacarias Sebastião"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+ 224 912 345 678"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="municipio">Município</Label>
              <Input
                id="municipio"
                value={municipio}
                onChange={(e) => setMunicipio(e.target.value)}
                placeholder="Ex: Uige"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="bairro">Bairro</Label>
              <Input
                id="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                placeholder="Ex: Papelão"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="rua">Rua</Label>
              <Input
                id="rua"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                placeholder="Ex: Rua dos Boss"
                required
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "A guardar..." : "Concluir"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}