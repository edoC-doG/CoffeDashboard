import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPlaceholderImage } from "@/shared/lib/placeholder-images";
import { salesData } from "@/shared/lib/data";

export function RecentSales() {
  const recentSales = salesData.slice(0, 5);

  return (
    <div className="space-y-8">
      {recentSales.map((sale, index) => {
        const avatar = getPlaceholderImage(`avatar-${(index % 5) + 1}`);
        const fallback = sale.customerName
          .split(" ")
          .map((n) => n[0])
          .join("");

        return (
          <div key={sale.id} className="flex items-center">
            <Avatar className="h-9 w-9">
              {avatar && <AvatarImage src={avatar.imageUrl} alt="Avatar" data-ai-hint={avatar.imageHint} />}
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{sale.customerName}</p>
              <p className="text-sm text-muted-foreground">{sale.customerEmail}</p>
            </div>
            <div className="ml-auto font-medium">+${sale.total.toFixed(2)}</div>
          </div>
        );
      })}
    </div>
  );
}
