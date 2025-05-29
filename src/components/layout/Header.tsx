"use client"

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

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
        {/* Top Bar with Social Links and Quick Links */}
        <div className="bg-[#0b578a] text-white py-2">
          <div className="cu-container flex justify-between items-center">
            {/* Quick Links */}
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm hover:text-[#fbb03b]">Whatsapp</Link>
              <Link href="/" className="text-sm hover:text-[#fbb03b]">Call Us</Link>
              <Link href="/" className="text-sm hover:text-[#fbb03b]">360°</Link>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm hover:text-[#fbb03b]">Facebook</Link>
              <Link href="/" className="text-sm hover:text-[#fbb03b]">Twitter</Link>
              <Link href="/" className="text-sm hover:text-[#fbb03b]">LinkedIn</Link>
              <Link href="/" className="text-sm hover:text-[#fbb03b]">Instagram</Link>
              <Link href="/" className="text-sm hover:text-[#fbb03b]">YouTube</Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`relative transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-2'
        } border-b border-white/10`}>
          <div className="cu-container flex items-center justify-between relative z-10">
            {/* Logo */}
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

            {/* Right Side - Contact and Search */}
            <div className="flex items-center gap-6">
              {/* Admission Helpline */}
              <div className="flex items-center gap-2 text-white">
                <span className="text-sm">Admission Helpline</span>
                <span className="font-semibold">18001212888800</span>
              </div>
              
              {/* Search Button */}
              <button className="text-white">Search</button>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="bg-[#0b578a]/90 mt-4">
            <div className="cu-container">
              <nav className="flex justify-between items-center py-2">
                {/* Primary Links */}
                <div className="flex items-center gap-6">
                  <Link href="/" className="text-white hover:text-[#fbb03b]">Library</Link>
                  <Link href="/" className="text-white hover:text-[#fbb03b]">Student Services</Link>
                  <Link href="/" className="text-white hover:text-[#fbb03b]">Career</Link>
                  <Link href="/" className="text-white hover:text-[#fbb03b]">SPEC Talk</Link>
                  <Link href="/" className="text-white hover:text-[#fbb03b]">Contact Us</Link>
                </div>
                
                {/* Main Navigation */}
                <div className="flex items-center gap-6">
                  <Link href="/" className="text-white hover:text-[#fbb03b] font-semibold">ABOUT</Link>
                  <Link href="/" className="text-white hover:text-[#fbb03b] font-semibold">PROGRAMS</Link>
                  <Link href="/" className="text-white hover:text-[#fbb03b] font-semibold">ACADEMICS</Link>
                  <Link href="/" className="text-white hover:text-[#fbb03b] font-semibold">ADMISSIONS</Link>
                  <Link href="/" className="text-white hover:text-[#fbb03b] font-semibold">CAMPUS LIFE</Link>
                  <Link href="/" className="text-white hover:text-[#fbb03b] font-semibold">PLACEMENTS</Link>
                  <Link href="/" className="text-white hover:text-[#fbb03b] font-semibold">RESEARCH & INNOVATION</Link>
                  <Link href="/" className="text-white hover:text-[#fbb03b] font-semibold">INTERNATIONAL</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Ticker */}
        <div className="bg-[#c40c12] text-white py-2">
          <div className="cu-container">
            <div className="announcement-content">
              <span>TICKER</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}