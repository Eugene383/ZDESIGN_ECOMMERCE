import { CreditCardIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
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
          Bem-vindo(a) de volta!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 pt-0">
        <div className="rounded-md border-separate border-slate-200  px-3 py-2 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <Link href="#" className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
              <UserIcon size={16} className="inline-block mr-1" />
              Meu perfil
          </Link>
        </div>
         <div className="rounded-md   px-3 py-2 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <Link href="#" className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
              <ShoppingBagIcon size={16} className="inline-block mr-1" />
              Minhas ecomendas
          </Link>
        </div>
         <div className="rounded-md   px-3 py-2 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <Link href="#" className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
              <CreditCardIcon size={16} className="inline-block mr-1" />
              Meus pagamentos
          </Link>
        </div>
      </CardContent>
      <CardFooter className="pt-3">
        <LogoutButton />
      </CardFooter>
    </Card>
  );
}
