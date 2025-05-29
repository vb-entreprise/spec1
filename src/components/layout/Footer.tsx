"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="bg-[#000] text-white pt-10 mt-auto">
      <div className="cu-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-8">
          {/* Column 1 */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-4">ABOUT</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about/" className="hover:text-gray-300">CU Smart Education</Link></li>
              <li><Link href="/about/vision-and-mission.php" className="hover:text-gray-300">Vision & Mission</Link></li>
              <li><Link href="/about/governance.php" className="hover:text-gray-300">Governance</Link></li>
              <li><Link href="/about/institution-social-responsibility.php" className="hover:text-gray-300">Institutional Social Responsibility</Link></li>
              <li><Link href="/about/press-releases.php" className="hover:text-gray-300">Press Releases</Link></li>
              <li><Link href="/about/" className="hover:text-gray-300">About</Link></li>
              <li><Link href="/university-annual-reports.php" className="hover:text-gray-300">University Annual Reports</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-4">PROGRAMS</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/academics/" className="hover:text-gray-300">System of Education</Link></li>
              <li><Link href="/academics/teaching-practices.php" className="hover:text-gray-300">Teaching Practices</Link></li>
              <li><Link href="/academics/academic-calendar.php" className="hover:text-gray-300">Academic Calendar</Link></li>
              <li><Link href="/academics/program-details.php" className="hover:text-gray-300">Program Details</Link></li>
              <li><Link href="/academics/system-of-evaluation.php" className="hover:text-gray-300">System of Evaluation</Link></li>
              <li><Link href="/CU-Programme-Guide-Book-2024.php" className="hover:text-gray-300">CU Programme Guide Book 2024</Link></li>
              <li><Link href="/nirf/" className="hover:text-gray-300">NIRF Data</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-4">ADMISSIONS</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/admissions/" className="hover:text-gray-300">Admission Calendar</Link></li>
              <li><Link href="/admissions/course-fee.php" className="hover:text-gray-300">Course Fee</Link></li>
              <li><Link href="/admissions/how-to-apply.php" className="hover:text-gray-300">How to Apply</Link></li>
              <li><Link href="/scholarship/" className="hover:text-gray-300">Scholarships</Link></li>
              <li><Link href="/admissions/education-loan.php" className="hover:text-gray-300">Education Loan</Link></li>
              <li><Link href="/anti-ragging-policy/" className="hover:text-gray-300">Anti-Ragging Policy</Link></li>
              <li><Link href="/refund/" className="hover:text-gray-300">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/maps/" className="hover:text-gray-300">360° Virtual Tour</Link></li>
              <li><Link href="/NSP/" className="hover:text-gray-300">NSP</Link></li>
              <li><Link href="/DIU/" className="hover:text-gray-300">DIDU</Link></li>
              <li><Link href="/anti-ragging/" className="hover:text-gray-300">Anti-Ragging</Link></li>
              <li><Link href="/national-integrity-pledge-programme/" className="hover:text-gray-300">National Integrity Promotion Programme</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">About Us</h4>
            <p className="text-sm mb-4">
              Chandigarh University, Punjab (CU) is a leading Indian institution known for its innovative approach to education.
              From the beginning, Chandigarh University has aspired to be recognized as a premier institution globally.
            </p>
            <div className="flex space-x-3 mb-4">
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
            </div>

            <div className="flex gap-4 mt-6">
              <Link href="https://www.naac.gov.in/" className="block">
                <Image
                  src="https://ext.same-assets.com/2241434697/2577778225.webp"
                  alt="NAAC"
                  width={70}
                  height={50}
                  className="h-auto object-contain"
                />
              </Link>
              <Link href="https://www.mhrd.gov.in/" className="block">
                <Image
                  src="https://ext.same-assets.com/2241434697/2836384764.webp"
                  alt="MHRD"
                  width={70}
                  height={50}
                  className="h-auto object-contain"
                />
              </Link>
              <Link href="https://www.aicte-india.org/" className="block">
                <Image
                  src="https://ext.same-assets.com/2241434697/690783702.webp"
                  alt="AICTE"
                  width={70}
                  height={50}
                  className="h-auto object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#333] py-4 text-sm">
        <div className="cu-container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://ext.same-assets.com/2241434697/3322341079.webp"
                alt="Virtual Tour"
                width={24}
                height={24}
              />
              <span>VIRTUAL TOUR</span>
            </Link>
            <div className="h-4 w-px bg-gray-600 mx-1"></div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://ext.same-assets.com/2241434697/3234881767.webp"
                alt="Radio Punjab"
                width={24}
                height={24}
              />
              <span>RADIO PUNJAB</span>
            </Link>
          </div>

          <p className="text-gray-400 text-center md:text-right">
            © All rights reserved {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
