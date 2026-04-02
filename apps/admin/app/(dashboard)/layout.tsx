"use client";

import { SidebarInset, SidebarProvider } from "@shared/ui/components/sidebar";
import { cn } from "@shared/ui/lib/utils";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { SearchProvider } from "@/context/search-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset
          className={cn("@container/content", "has-data-[layout=fixed]:h-svh")}
        >
          {children}
        </SidebarInset>
      </SidebarProvider>
    </SearchProvider>
  );
}
