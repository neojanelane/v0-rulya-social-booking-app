"use client"

import { useState } from "react"
import { AppHeader } from "@/components/rulya/app-header"
import { BottomNav } from "@/components/rulya/bottom-nav"
import { ConnectScreen } from "@/components/rulya/connect-screen"
import { CourtsScreen } from "@/components/rulya/courts-screen"
import { SportsScreen } from "@/components/rulya/sports-screen"

type Tab = "connect" | "courts" | "sports"

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("connect")

  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col bg-ice">
      <AppHeader />

      {/* Main scrollable area */}
      <main className="hide-scrollbar flex-1 overflow-y-auto">
        {activeTab === "connect" && <ConnectScreen />}
        {activeTab === "courts" && <CourtsScreen />}
        {activeTab === "sports" && <SportsScreen />}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
