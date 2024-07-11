'use client'
import useSideBar from '@/context/use-sidebar'
import { cn } from '@/lib/utils'
import React from 'react'
import MaxMenu from './maximized-menu'
import { MinMenu } from './minimized-menu'

type Props = {
  domains:
    | {
        id: string
        name: string
        icon: string
      }[]
    | null
    | undefined
}

const SideBar = ({ domains }: Props) => {
  const { expand, onExpand, page, onSignOut } = useSideBar()

  return (
    <div
      className={cn(
        'bg-cream bg-white h-full w-[60px] fill-mode-forwards fixed md:relative flex',
        
      )}
    >
      
      {/* {expand ? ( */}
        <MaxMenu
          domains={domains}
          current={page!}
          onExpand={onExpand}
          onSignOut={onSignOut}
        />
    
    </div>
  )
}

export default SideBar
