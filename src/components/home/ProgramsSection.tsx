"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

/**
 * @author VB Entreprise
 * @description ProgramCard component for displaying individual academic programs
 */
type ProgramCardProps = {
  title: string
  icon: string
  link: string
}

const ProgramCard = ({ title, icon, link }: ProgramCardProps) => {
  return (
    <Link href={link}>
      <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <Image
              src={icon}
              alt={title}
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-base font-medium text-[#1f425c]">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}

/**
 * @author VB Entreprise
 * @description FeatureCard component for displaying university features
 */
type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-sm">
      <div className="mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#1f425c] mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

/**
 * @author VB Entreprise
 * @description ProgramsSection component displaying academic programs and features
 */
export const ProgramsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0b578a] mb-6">Why Should You Choose Chandigarh University?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg bg-gray-50">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#fbb03b] rounded-full flex items-center justify-center">
                <Image
                  src="/images/icons/global.svg"
                  alt="Global Recognition"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#0b578a]">Global Recognition</h3>
              <p className="text-gray-600">Ranked among World's Top 231 Universities</p>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0b578a] text-center mb-8">Our Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProgramCard
              title="Engineering (B.Tech/M.Tech)"
              icon="/images/icons/engineering.svg"
              link="/engineering/"
            />
            <ProgramCard
              title="Management (BBA/MBA)"
              icon="/images/icons/management.svg"
              link="/management/"
            />
            <ProgramCard
              title="Computing (BCA/MCA)"
              icon="/images/icons/computing.svg"
              link="/computing/"
            />
            <ProgramCard
              title="Architecture"
              icon="/images/icons/architecture.svg"
              link="/architecture-and-design/"
            />
            <ProgramCard
              title="Law"
              icon="/images/icons/law.svg"
              link="/legal-studies/"
            />
            <ProgramCard
              title="Media Studies"
              icon="/images/icons/media.svg"
              link="/journalism-and-mass-communication/"
            />
            <ProgramCard
              title="Hospitality"
              icon="/images/icons/hotel.svg"
              link="/hotel-management-and-tourism/"
            />
            <ProgramCard
              title="Pharma Sciences"
              icon="/images/icons/pharma.svg"
              link="/pharma-sciences/"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6 mb-16">
          <Link href="/admissions/course-fee.php">
            <Button className="bg-[#a9473b] hover:bg-[#863a31] text-white">View All Programs</Button>
          </Link>
        </div>

        {/* Why Choose CU Section */}
        <div className="mb-8">
          <h2 className="text-[#1f425c] text-2xl font-semibold text-center mb-10">
            Why Should You Choose Chandigarh University?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={
                <Image
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=60&q=80"
                  alt="Global Recognition"
                  width={60}
                  height={60}
                />
              }
              title="Global Recognition"
              description="Ranked among World's Top 231 Universities by QS World University Rankings 2025."
            />
            <FeatureCard
              icon={
                <Image
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=60&q=80"
                  alt="Industry Exposure"
                  width={60}
                  height={60}
                />
              }
              title="Industry Exposure"
              description="Strong industry partnerships with 900+ companies for internships and placements."
            />
            <FeatureCard
              icon={
                <Image
                  src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=60&q=80"
                  alt="Campus Infrastructure"
                  width={60}
                  height={60}
                />
              }
              title="Campus Infrastructure"
              description="World-class facilities including labs, research centers, sports complex, and hostels."
            />
            <FeatureCard
              icon={
                <Image
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=60&q=80"
                  alt="Research Excellence"
                  width={60}
                  height={60}
                />
              }
              title="Research Excellence"
              description="A research-driven institution with 6500+ publications and 143 patents."
            />
          </div>
        </div>

        {/* Research Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0b578a] mb-8">Pioneering Research</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-[#0b578a] text-white p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">5000+</h3>
              <p>Research Papers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}