"use client"

import { cn } from "@/lib/utils"

export function PageHeader({ 
  title, 
  description, 
  children, 
  className,
  ...props 
}) {
  return (
    <div className={cn("flex flex-col gap-1 md:flex-row md:items-center md:justify-between", className)} {...props}>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
        {description && (
          <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        )}
      </div>
      {children && (
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          {children}
        </div>
      )}
    </div>
  )
}

export function PageContent({ children, className, ...props }) {
  return (
    <div className={cn("flex-1 space-y-6", className)} {...props}>
      {children}
    </div>
  )
}

export function PageContainer({ children, className, ...props }) {
  return (
    <div className={cn("flex-1 p-4 md:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto w-full", className)} {...props}>
      {children}
    </div>
  )
}

export function Section({ title, description, children, className, action, ...props }) {
  return (
    <section className={cn("space-y-4", className)} {...props}>
      {(title || description || action) && (
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            {title && <h2 className="text-lg font-semibold tracking-tight">{title}</h2>}
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}

export function Grid({ children, cols = 4, className, ...props }) {
  const colsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  }

  return (
    <div className={cn("grid gap-4", colsClass[cols], className)} {...props}>
      {children}
    </div>
  )
}
