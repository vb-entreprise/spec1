"use client"

import React, { useState, useEffect, useCallback } from "react"
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
        <div className={`announcement-bar overflow-hidden relative py-2 transition-all duration-300 ${
          scrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'
        }`}>
          <div className="announcement-content">
            Register Now for CU Joint Campus Placement Programme <Link href="https://www.cuchd.in/placements/frmRegistration.aspx?Type=jpp2019" className="underline ml-1">Register Now</Link>
            <span className="mx-3">|</span>
            International Conference on Innovative Trends in Electrical, Electronics and Bio-Technology Engineering <Link href="https://www.cuchd.in/conference/iciteeb-2025/" className="underline ml-1">Register Now</Link>
            <span className="mx-3">|</span>
            1st International Conference on Building Urban Infrastructure with Leading Design Innovations (BUILD- 2025) <Link href="https://www.cuchd.in/conference/build-2025/" className="underline ml-1">Register Now</Link>
          </div>
        </div>

        {/* Top Secondary Bar */}
        <div className={`text-white py-2 px-4 bg-transparent transition-all duration-300 ${
          scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
        }`}>
          <div className="cu-container flex justify-between items-center">
            {/* Left Links */}
            <div className="flex gap-4 text-sm">
              <Link href="/whatsapp.php" className="flex items-center">
                <span>Whatsapp</span>
              </Link>
              <Link href="tel:8033094409" className="flex items-center">
                <span>Call Us</span>
              </Link>
              <Link href="/maps/" className="flex items-center">
                <span>360°</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Link href="https://www.facebook.com/chandigarhuniversitygharuan" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </Link>
              <Link href="https://www.twitter.com/chandigarh_uni" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </Link>
              <Link href="https://www.linkedin.com/school/chandigarh-university/" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </Link>
              <Link href="https://www.instagram.com/chandigarhuniversity" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
              <Link href="https://www.youtube.com/user/chandigarhuniversity" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </Link>
              <Link href="https://www.threads.net/@chandigarhuniversity" aria-label="Threads">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M19.59 11.99c-.2.06-.42.1-.65.1a1.56 1.56 0 0 1-.61-.06 1.48 1.48 0 0 1-1.05-1.19 2.59 2.59 0 0 1-.02-.45V6.67c0-.13 0-.25.01-.38a3.76 3.76 0 0 1 .78-2.07A4.78 4.78 0 0 1 20.9 2.89c.52-.12 1.05-.18 1.58-.18h.48v2.79h-.24c-.65 0-1.29.07-1.86.36a2.07 2.07 0 0 0-1.1 1.3v.05a5.13 5.13 0 0 0-.06.7v.94c0 .15.04.29.12.42.08.12.2.21.34.27.27.11.57.09.85.09h.55a10.45 10.45 0 0 0 1.74-.14l.8 2.08c-.75.23-1.54.37-2.33.42h-.51c-.4-.02-.79-.06-1.17-.11Zm-7.43.11a7.15 7.15 0 0 1-1.97-.27 5.17 5.17 0 0 1-1.61-.76 3.11 3.11 0 0 1-1.28-2.07c-.06-.6-.05-1.2-.05-1.79 0-.97.14-1.52.34-2.07a3.77 3.77 0 0 1 3.41-2.42c.39-.04.78-.04 1.16 0a5.8 5.8 0 0 1 2.6.74c.65.41 1.1.85 1.42 1.52a4.12 4.12 0 0 1 .54 2V9.1c0 .6-.05 1.05-.14 1.53a3.62 3.62 0 0 1-1.08 1.86c-.51.45-1.05.7-1.7.9a6.87 6.87 0 0 1-1.64.23c0-.37 0 .37 0 0Zm.55-2.4c.65 0 1.3-.35 1.63-.65.32-.3.32-.65.32-1.3s0-1.25-.33-1.55a2.34 2.34 0 0 0-1.62-.65c-.65 0-1.3.35-1.62.65-.33.3-.33.65-.33 1.55 0 .65 0 1 .33 1.3.32.3.97.65 1.62.65Zm-5.93 4.95a5.67 5.67 0 0 1-1.08-.3 3.48 3.48 0 0 1-1.1-.62A3.55 3.55 0 0 1 3 10.83c-.04-1.87.02-3.8.2-5.68l2.77.3c-.12 1.59-.18 3.2-.16 4.8 0 .32.06.75.38.95a1.7 1.7 0 0 0 .95.24c.31 0 .56 0 .86-.03.32-.04.63-.1.95-.17l.8 2.58c-.8.25-1.64.38-2.47.42ZM20.98 21.5a9.1 9.1 0 0 1-2.17-1.3c-1.7-1.3-2.97-3.01-3.69-5.01a18.43 18.43 0 0 1-.47-1.62h3.03c.08.3.18.6.29.89a7.46 7.46 0 0 0 1.76 2.89c.63.63 1.38 1.14 2.2 1.53a7.64 7.64 0 0 0 1.47.55A12.52 12.52 0 0 1 20.98 21.5ZM2.79 19.43a10.82 10.82 0 0 1 5.65-2.08c.72-.06 1.45-.06 2.17.01.61.06 1.22.18 1.81.37l-.8 2.5c-.47-.16-.95-.28-1.44-.34a9.09 9.09 0 0 0-1.74 0c-.59.05-1.16.2-1.7.43-.26.11-.5.24-.74.39a12.07 12.07 0 0 1-3.21-1.29Z"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`relative transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-2'
        } border-b border-white/10`}>
          <div className="cu-container flex items-center justify-between relative z-10">
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

            {/* Primary Navigation */}
            <div className="hidden md:flex flex-1 justify-start ml-20">
            <div className="hidden lg:flex gap-8 text-white">
              <Link href="/student-services/libraries.php" className="nav-link py-2">Library</Link>
              <Link href="/student-services/" className="nav-link py-2">Student Services</Link>
              <Link href="/jobs/" className="nav-link py-2">Career</Link>
              <Link href="/spec-talk/" className="nav-link py-2">SPEC Talk</Link>
              <Link href="/contact/index.php" className="nav-link py-2">Contact Us</Link>
            </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex items-center gap-4">
                <Link href="tel:+1800121288800" className="hidden md:flex items-center gap-2 text-white">
                  <Image
                    src="https://www.cuchd.in/includes/assets/images/header-footer/phone-icon.webp"
                    alt="Phone Icon"
                    width={20}
                    height={20}
                  />
                  <div className="flex flex-col">
                    <span className="text-xs">Admission Helpline</span>
                    <span className="text-sm font-semibold">1800121288800</span>
                  </div>
                </Link>

                <button aria-label="Search" className="hidden md:block text-white">
                  <span>Search</span>
                </button>
              </div>
              
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                  <div className="flex flex-col gap-4 mt-6">
                    <Link href="/student-services/libraries.php" className="px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded-md">
                      Library
                    </Link>
                    <Link href="/student-services/" className="px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded-md">
                      Student Services
                    </Link>
                    <Link href="/jobs/" className="px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded-md">
                      Career
                    </Link>
                    <Link href="/spec-talk/" className="px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded-md">
                      SPEC Talk
                    </Link>
                    <Link href="/contact/index.php" className="px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded-md">
                      Contact Us
                    </Link>
                    <div className="border-t border-gray-200 mt-4 pt-4">
                      <Link href="tel:+1800121288800" className="flex items-center gap-2 px-4 py-2 text-lg font-semibold">
                        <span>Call: 1800121288800</span>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          
          {/* Secondary Navigation */}
          <div className="hidden md:flex mt-2 justify-center">
            <div className="max-w-[1800px] w-full">
              <div className={`hidden lg:flex justify-center items-center py-2 px-12 rounded-lg ${
                scrolled ? 'bg-white/20 backdrop-blur-lg' : 'bg-black/20 backdrop-blur-sm'
              }`}>
                {[
                  "About",
                  "Programs",
                  "Academics",
                  "Admissions",
                  "Campus Life",
                  "Placements",
                  "Research & Innovation",
                  "International"
                ].map((item) => (
                  <div className="relative group\" key={item}>
                    <button className="px-8 py-2 flex items-center gap-1 text-white uppercase font-bold text-sm tracking-wide hover:text-[#fbb03b] transition-colors whitespace-nowrap">
                      {item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}