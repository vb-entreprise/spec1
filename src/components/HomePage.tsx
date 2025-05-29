"use client"

import React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/home/HeroSection"
import { RankingBanner } from "@/components/home/RankingBanner"
import { StatsSection } from "@/components/home/StatsSection"
import { RankingsSection } from "@/components/home/RankingsSection"
import { ProgramsSection } from "@/components/home/ProgramsSection"
import { NewsSection } from "@/components/home/NewsSection"
import { SecondaryMenu } from "@/components/layout/SecondaryMenu"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 relative">
        <HeroSection />
        <RankingBanner />
        <StatsSection />
        <RankingsSection />
        <ProgramsSection />
        <NewsSection />
      </main>

      <Footer />
    </div>
  )
}
