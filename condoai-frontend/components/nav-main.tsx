"use client"

import React from 'react'


import { LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuLabel,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem, SidebarSeparator
} from '@/components/ui/sidebar'
import SidebarMenuActiveButton from '@/components/ui/sidebar-menu-active-button'



export function NavMain({
  items,}: {
  items: {
    title: string
    isActive?: boolean
    icon?: LucideIcon
    items?: {
      title: string
      url: string
      icon?: LucideIcon
    }[]
  }[]
}) {

  return (
    <SidebarGroup >
      <SidebarMenu>
        {items.map((item) => (

            <SidebarMenuItem key={item.title}>

                <SidebarMenuLabel className="text-xs">
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuLabel>
              <SidebarSeparator className="m-2 mx-0"/>

              <SidebarMenuSub className="group-data-[collapsible=icon]:visible">
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title} >

                      {/*This sets the active button on the sidebar*/}
                      <SidebarMenuActiveButton
                          href={subItem.url}
                          icon={subItem.icon && <subItem.icon />}
                          title={subItem.title}
                      />


                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>

            </SidebarMenuItem>

        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
