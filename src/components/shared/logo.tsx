import { Coffee } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2 p-2">
      <Coffee className="h-7 w-7 text-primary" />
      <h1 className="text-xl font-headline font-semibold text-primary-foreground group-data-[collapsible=icon]:hidden">
        CafeFlow
      </h1>
    </div>
  );
}
