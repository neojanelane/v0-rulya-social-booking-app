"use client"

import { Bell, Menu } from "lucide-react"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-coral/30 bg-ice/95 px-5 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-vivid">
          <span className="text-lg font-black text-cta">R</span>
        </div>
        <span className="text-xl font-black tracking-tight text-midnight">
          rulya
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-card/80 text-midnight transition-colors hover:bg-coral/20"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-vivid text-[9px] font-bold text-cta">
            3
          </span>
        </button>
        <button
          aria-label="Menu"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-card/80 text-midnight transition-colors hover:bg-coral/20"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
