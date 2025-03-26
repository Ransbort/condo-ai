"use client"

import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import React, { Fragment } from 'react'
import { ChevronDown, ChevronUp, Slash } from 'lucide-react'
import Link from 'next/link'

export default function BreadcrumbHeader() {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)

  // const [open, setOpen] = React.useState(false)
  // const isDesktop = useMediaQuery("(min-width: 768px)")
  //
  // const ITEMS_TO_DISPLAY = 3

  return (

      <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          {pathNames.length > 0 && <BreadcrumbSeparator />}

              {
                pathNames.map((link, index) => {
                  const href = `/${pathNames.slice(0, index + 1).join('/')}`
                  const linkName = link[0].toUpperCase() + link.slice(1, link.length)
                  const islastPath = pathNames.length === index + 1;
                  return (
                    <Fragment key={index}>
                      <BreadcrumbItem>

                          {
                              !islastPath ?
                                <BreadcrumbLink asChild>
                                  <Link href={href}>{linkName}</Link>
                                </BreadcrumbLink> :
                                <BreadcrumbPage>{linkName}</BreadcrumbPage>

                          }

                      </BreadcrumbItem>
                      {pathNames.length !== index + 1 && <BreadcrumbSeparator /> }
                    </Fragment>
                  )
                })
              }

        </BreadcrumbList>
      </Breadcrumb>

  )
}