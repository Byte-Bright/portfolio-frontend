/**
 * shadcn/ui — Tabs primitive
 * Built on @radix-ui/react-tabs.
 * Run `npm install @radix-ui/react-tabs clsx tailwind-merge` to activate.
 */
import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '../../lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex flex-wrap items-center gap-2 rounded-lg text-stone-600 dark:text-stone-300',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      // base
      'px-3 py-1 rounded-lg border text-sm sm:text-base break-normal text-left',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'transition-colors duration-200 select-none',
      // inactive
      'bg-white dark:bg-stone-900 space:bg-stone-900 space:border-violet-400/30 space:text-stone-300',
      'neon:bg-yellow-400 tron:bg-transparent tron:border-[2px] tron:border-red-700',
      'data-[state=inactive]:hover:text-teal-600 data-[state=inactive]:hover:border-teal-600 dark:data-[state=inactive]:hover:text-lime-500 dark:data-[state=inactive]:hover:border-lime-500 space:data-[state=inactive]:hover:text-violet-400 space:data-[state=inactive]:hover:border-violet-400 neon:data-[state=inactive]:hover:text-rose-600 neon:data-[state=inactive]:hover:border-rose-200 tron:data-[state=inactive]:hover:text-red-400 tron:data-[state=inactive]:hover:border-red-700',
      'space:focus:ring-violet-400 space:focus:ring-offset-black',
      // active (data-state="active")
      'data-[state=active]:bg-teal-600 data-[state=active]:text-white',
      'dark:data-[state=active]:bg-white dark:data-[state=active]:text-stone-900',
      'space:data-[state=active]:bg-violet-400/10 space:data-[state=active]:text-violet-400 space:data-[state=active]:border-violet-400',
      'neon:data-[state=active]:bg-rose-600',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn('mt-0 focus:outline-none', className)}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
