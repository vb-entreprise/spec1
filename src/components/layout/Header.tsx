"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

/**
 * @author VB Entreprise
 * @description Header component for the application that includes:
 * - Top announcement bar
 * - Secondary navigation bar with social links
 * - Main header with logo and primary navigation
 * - Mobile responsive menu
 */
export const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const handleMenuToggle = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0b578a] py-2' : 'bg-transparent py-4'
    }`}>
      <div className="relative z-10">
        {/* Top Announcement Bar */}
        <div className="bg-[#c40c12] text-white py-2">
          <div className="cu-container">
            <div className="announcement-content">
              <Image src="/images/TICKER.png" alt="Ticker" width={100} height={30} />
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-[#0b578a]">
          <div className="cu-container flex items-center justify-between py-4">
            <Link href="/" className="z-10">
              <Image
                src="/Logo.png"
                alt="SPEC Institutes Logo"
                width={400}
                height={130}
                className={`w-auto transition-all duration-300 ${scrolled ? 'h-[80px] md:h-[90px]' : 'h-[90px] md:h-[110px]'}`}
                priority
              />
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                <Link href="/student-services/libraries.php" className="text-white hover:text-[#fbb03b]">Library</Link>
                <Link href="/student-services/" className="text-white hover:text-[#fbb03b]">Student Services</Link>
                <Link href="/jobs/" className="text-white hover:text-[#fbb03b]">Career</Link>
                <Link href="/spec-talk/" className="text-white hover:text-[#fbb03b]">SPEC Talk</Link>
                <Link href="/contact/index.php" className="text-white hover:text-[#fbb03b]">Contact Us</Link>
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4">
                    <Link href="/student-services/libraries.php" className="text-lg">Library</Link>
                    <Link href="/student-services/" className="text-lg">Student Services</Link>
                    <Link href="/jobs/" className="text-lg">Career</Link>
                    <Link href="/spec-talk/" className="text-lg">SPEC Talk</Link>
                    <Link href="/contact/index.php" className="text-lg">Contact Us</Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="cu-container">
              <nav className="flex justify-between py-4">
                <Link href="/about/" className="text-white hover:text-[#fbb03b] font-semibold">ABOUT</Link>
                <Link href="/programs/" className="text-white hover:text-[#fbb03b] font-semibold">PROGRAMS</Link>
                <Link href="/academics/" className="text-white hover:text-[#fbb03b] font-semibold">ACADEMICS</Link>
                <Link href="/admissions/" className="text-white hover:text-[#fbb03b] font-semibold">ADMISSIONS</Link>
                <Link href="/campus-life/" className="text-white hover:text-[#fbb03b] font-semibold">CAMPUS LIFE</Link>
                <Link href="/placements/" className="text-white hover:text-[#fbb03b] font-semibold">PLACEMENTS</Link>
                <Link href="/research/" className="text-white hover:text-[#fbb03b] font-semibold">RESEARCH & INNOVATION</Link>
                <Link href="/international/" className="text-white hover:text-[#fbb03b] font-semibold">INTERNATIONAL</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}