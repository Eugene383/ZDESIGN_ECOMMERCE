import { UserIcon } from "lucide-react";
import { LogoutButton } from "./logout-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function CardUser({ email }: { email?: string }) {
  return (
    <Card className="group w-[280px] overflow-hidden border-slate-200 bg-white shadow-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900">
      <CardHeader className="space-y-2 pb-3">
        <CardTitle className="font-heading text-sm text-slate-900 dark:text-white">
          {email}
        </CardTitle>
        <CardDescription className="text-xs font-medium text-slate-600 dark:text-slate-400">
          Conta ativa
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="rounded-md border border-slate-200/80 bg-slate-50 px-3 py-2 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <Link href="#" className="flex items-center gap-2">
              <UserIcon size={16} className="inline-block mr-1" />
              Perfil do usuário
          </Link>
        </div>
      </CardContent>
      <CardFooter className="pt-3">
        <LogoutButton />
      </CardFooter>
    </Card>
  );
}
