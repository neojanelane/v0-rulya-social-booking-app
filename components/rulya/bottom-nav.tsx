"use client"

import { Users, MapPin, Trophy } from "lucide-react"

type Tab = "connect" | "courts" | "sports"

interface BottomNavProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

const tabs: { id: Tab; label: string; icon: typeof Users }[] = [
  { id: "connect", label: "Connect", icon: Users },
  { id: "courts", label: "Courts", icon: MapPin },
  { id: "sports", label: "Sports", icon: Trophy },
]

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav
      className="sticky bottom-0 z-50 flex items-center justify-around border-t-2 border-coral bg-card px-2 py-2"
      role="tablist"
      aria-label="Main navigation"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        const Icon = tab.icon
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-1 flex-col items-center gap-1 rounded-xl py-2 transition-all duration-200 ${
              isActive
                ? "bg-vivid text-cta"
                : "text-midnight hover:text-coral"
            }`}
          >
            <Icon className="h-6 w-6" strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-xs font-bold uppercase tracking-wide">
              {tab.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
