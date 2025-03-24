

import * as React from "react"
import { Plus } from "lucide-react"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuLabel,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarGroup
} from '@/components/ui/sidebar'
import { TabControl } from '@/components/tab-control'

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    type: "Manager",
    avatar: "/avatars/shadcn.jpg",
  },
  calendars: [
    {
      name: "My Calendars",
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "Favorites",
      items: ["Holidays", "Birthdays"],
    },
    {
      name: "Other",
      items: ["Travel", "Reminders", "Deadlines"],
    },
  ],
}

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
      <SidebarGroup className= "h-svh overflow:hidden">

          <SidebarHeader>
            Welcome
          </SidebarHeader>

          <SidebarSeparator className="my-2 mx-0" />

          <TabControl />


      </SidebarGroup>

    </Sidebar>
  )
}
