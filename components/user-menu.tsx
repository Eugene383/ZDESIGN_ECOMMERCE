"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import CardUser from "./card-user";
import { UserCircle, UserIcon } from "lucide-react";

export function UserMenu({ email }: { email?: string }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="relative flex items-center">
      <Button
        onClick={() => setMostrar(!mostrar)}
        size="sm"
        variant="outline"
        className="relative z-10"
      >
        <UserCircle size={20} />
      </Button>

      {mostrar && (
        <div className="absolute right-0 top-full z-50 mt-2">
          <CardUser email={email} />
        </div>
      )}
    </div>
  );
}
