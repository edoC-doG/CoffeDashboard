import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart,
  Home,
  Package,
  ShoppingCart,
  Users,
  ClipboardList
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/orders", label: "Orders", icon: ShoppingCart },
  { href: "/inventory", label: "Inventory", icon: Package },
  { href: "/sales", label: "Sales", icon: ClipboardList },
  { href: "/reports", label: "Reports", icon: BarChart },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href} legacyBehavior passHref>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.href}
              tooltip={item.label}
            >
              <a>
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
