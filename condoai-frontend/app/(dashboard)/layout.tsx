
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { WidgetSidebar } from '@/components/widget-sidebar'

import { cookies } from "next/headers"
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Separator } from '@/components/ui/separator'

import BreadcrumbHeader from '@/components/breadcrumb-header'


export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"



  return (
    <div>
      <SidebarProvider defaultOpen={defaultOpen}>
        <DashboardSidebar />

        <SidebarInset>
          <header className="flex h-16 shrink-0 p-4 justify-between items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4 space-between">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <BreadcrumbHeader />
            </div>
            <ThemeToggle />
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {/*<div className="grid auto-rows-min gap-4 md:grid-cols-3">*/}
            {/*  <div className="aspect-video rounded-xl bg-muted/50" />*/}
            {/*  <div className="aspect-video rounded-xl bg-muted/50" />*/}
            {/*  <div className="aspect-video rounded-xl bg-muted/50" />*/}
            {/*</div>*/}
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
              {children}
            </div>
          </div>
        </SidebarInset>

        <WidgetSidebar />

      </SidebarProvider>

    </div>
  )
}
