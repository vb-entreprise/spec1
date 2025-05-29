"use client"

import type React from "react"
import { useEffect, useState } from "react"

export function ClientBody({
  children,
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>{isClient ? children : <div style={{ visibility: "hidden" }}>{children}</div>}</>
  )
}
