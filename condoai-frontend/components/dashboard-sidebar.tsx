
"use client"

import * as React from "react"


import {

  MessageCircleQuestion,

  Landmark,
  NotebookText,

  HandCoins,
  Presentation,
  FolderTree,
  FolderOpen,
  HousePlus,
  MessageSquareShare, Minus
} from 'lucide-react'


import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'




// This is sample data.
const data = {
  user: {
    name: "Douglas Baker",
    email: "m@example.com",
    type: "Manager",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Home",
      isActive: true,
      icon: "",
      items: [
        {
          title: "Ask AI",
          url: "/",
          icon: MessageCircleQuestion,
        },

      ],
    },

    {
      title: "Managers",
      icon: "",
      isActive: true,
      items: [
        {
          title: "Accounting",
          url: "/accounting",
          icon: HandCoins,
        },
        {
          title: "Asset",
          icon: FolderTree,
          url: "/asset",
        },
        {
          title: "Bids & Quotes",
          url: "/bids-and-quotes",
          icon: NotebookText,
        },

        {
          title: "Documents",
          url: "/documents",
          icon: FolderOpen,
        },

        {
          title: "Governance",
          url: "/governance",
          icon: Landmark,
        },

        {
          title: "Units",
          url: "/units",
          icon: HousePlus,
        },
        {
          title: "Communications",
          url: "/communications",
          icon: MessageSquareShare,
        },
        {
          title: "Meetings",
          icon: Presentation,
          url: "/meetings",
        },

      ],
    },

  ],
}

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {


  return (

        <Sidebar collapsible="icon" {...props} variant={"inset"} className="group-data-[side=left]:border-r-0">
          <SidebarHeader>

          </SidebarHeader>
          <SidebarContent >

            <NavMain items={data.navMain} />

          </SidebarContent>
          <SidebarFooter>
            <NavUser user={data.user}  />
          </SidebarFooter>
        </Sidebar>


  )
}
