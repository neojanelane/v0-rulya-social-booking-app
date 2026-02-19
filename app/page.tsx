"use client"

import { useState, useEffect } from "react"
import { AppHeader } from "@/components/rulya/app-header"
import { BottomNav } from "@/components/rulya/bottom-nav"
import { ConnectScreen } from "@/components/rulya/connect-screen"
import { CourtsScreen } from "@/components/rulya/courts-screen"
import { SportsScreen } from "@/components/rulya/sports-screen"

type Tab = "connect" | "courts" | "sports"

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("connect")

  useEffect(() => {
    window.parent.postMessage(activeTab, "*")
  }, [activeTab])

  return (
    <div className="mx-auto flex h-dvh max-w-md flex-col overflow-hidden bg-ice">
      <AppHeader />

      {/* Main content area - no scroll */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {activeTab === "connect" && <ConnectScreen />}
        {activeTab === "courts" && <CourtsScreen />}
        {activeTab === "sports" && <SportsScreen />}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
