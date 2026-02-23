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
    const handleScrollMessage = (event: MessageEvent) => {
      const validTabs: Tab[] = ['connect', 'courts', 'sports'];
      
      // If the website sends a valid tab name, update the app's active tab
      if (typeof event.data === 'string' && validTabs.includes(event.data as Tab)) {
        setActiveTab(event.data as Tab); 
      }
    };

    window.addEventListener('message', handleScrollMessage);
    return () => window.removeEventListener('message', handleScrollMessage);
  }, []);

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
