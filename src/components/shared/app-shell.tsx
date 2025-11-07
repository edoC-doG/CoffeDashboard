import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SidebarNav } from "./sidebar-nav";
import { UserNav } from "./user-nav";
import { Logo } from "./logo";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarNav />
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="min-h-svh">
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="ml-auto">
            <UserNav />
          </div>
        </header>
        <main className="p-4 sm:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
