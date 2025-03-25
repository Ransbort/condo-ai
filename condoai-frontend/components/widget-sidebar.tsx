

import * as React from "react"


import {
  Sidebar,
  SidebarHeader,
  SidebarSeparator,
  SidebarGroup
} from '@/components/ui/sidebar'
import { TabControl } from '@/components/tab-control'

export function WidgetSidebar({
     ...props
   }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="bg-background sticky hidden lg:flex top-0 h-custom-svh!
      md:peer-data-[variant=inset]:rounded-xl
      md:peer-data-[variant=inset]:shadow-sm
      md:peer-data-[variant=inset]:m-2"
      {...props}
      variant={"inset"}
      style={{
        "--sidebar-width": "21rem",
      }}
    >
      <SidebarGroup className= "h-full overflow:hidden">

          <SidebarHeader>
            Welcome
          </SidebarHeader>

          <SidebarSeparator className="my-2 mx-0" />

          <TabControl />


      </SidebarGroup>

    </Sidebar>
  )
}
