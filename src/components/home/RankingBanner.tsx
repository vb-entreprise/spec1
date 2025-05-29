"use client"

import React from "react"
import Image from "next/image"

export const RankingBanner = () => {
  return (
    <section className="bg-[#0b578a] py-16">
      <div className="cu-container">
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden">
          <div className="text-center py-8 px-4">
            <h1 className="text-[#c40c12] text-4xl font-bold mb-2">SARDAR PATEL EDUCATION CAMPUS</h1>
            <p className="text-2xl mb-4">Enters The League of</p>
            <div className="text-[#f7941d] text-6xl font-bold leading-tight mb-4">
              GUJARAT'S TOP 5<br />
              ENGINEERING COLLEGES
            </div>
            <p className="text-2xl mb-4">by GUJARAT TECHNOLOGICAL UNIVERSITY</p>
            <p className="text-5xl font-bold">2025</p>
            <div className="mt-8 bg-[#f7941d] py-6">
              <p className="text-3xl text-white">
                <span className="font-bold">RANKED 5TH</span> | STATEWIDE<br />
                GTU ENGINEERING CATEGORY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}