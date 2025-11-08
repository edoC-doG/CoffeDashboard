import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import { AppShell } from "@/components/shared/app-shell";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cn } from "@/shared/lib/utils";
import StoreProvider from "@/shared/lib/redux/StoreProvider";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
  weight: ["600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "CafeFlow",
  description: "Inventory and sales management for your coffee shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-body antialiased",
          openSans.variable,
          roboto.variable
        )}
      >
        <StoreProvider>
          <AppShell>{children}</AppShell>
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
