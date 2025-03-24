'use client'

import { SidebarMenuSubButton } from '@/components/ui/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SidebarMenuActiveButton(
  {
    href,
    icon,
    title
  } : {
    href: string,
    icon: React.ReactNode
    title: string
  }
) {

  const pathName = usePathname()
  const isActive = pathName === href
  return (
    <SidebarMenuSubButton asChild tooltip={title} isActive={isActive}>
      <Link href={href}>
        {icon}
        <span>{title}</span>
      </Link>
    </SidebarMenuSubButton>
    )

}


