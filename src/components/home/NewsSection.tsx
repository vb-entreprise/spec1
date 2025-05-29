"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

/**
 * @author VB Entreprise
 * @description NewsCard component for displaying individual news items
 */
const NewsCard = ({
  image,
  title,
  date,
  category,
  link
}: {
  image: string;
  title: string;
  date: string;
  category: string;
  link: string;
}) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute bottom-2 left-2 bg-[#a9473b] text-white text-xs px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-500 text-xs mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-[#1f425c] mb-2 line-clamp-2">
          {title}
        </h3>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={link}
          className="text-sm text-[#a9473b] hover:underline font-medium flex items-center gap-1"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </CardFooter>
    </Card>
  )
}

/**
 * @author VB Entreprise
 * @description NewsSection component displaying latest news and updates
 */
export const NewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="cu-container">
        <h2 className="text-3xl font-bold text-[#0b578a] text-center mb-12">Latest News & Updates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
              alt="News 1"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-[#c40c12] font-semibold">Campus News</span>
              <h3 className="text-xl font-bold text-[#0b578a] mt-2 mb-3">Latest Campus Updates</h3>
              <p className="text-gray-600 mb-4">Stay updated with the latest happenings on campus</p>
              <Button className="bg-[#0b578a] hover:bg-[#094468] text-white">
                Read More
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Pioneering Research
        </h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Innovation and discovery are at the heart of our approach to education and development.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-6">
          <div className="text-center">
            <span className="block text-3xl font-bold">5000+</span>
            <span className="text-sm">RESEARCH PAPERS</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl font-bold">650+</span>
            <span className="text-sm">PATENTS FILED</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl font-bold">500+</span>
            <span className="text-sm">FUNDED PROJECTS</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl font-bold">14+</span>
            <span className="text-sm">RESEARCH CENTERS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Research Lab" width={270} height={150} className="rounded-md" />
          <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Research Center" width={270} height={150} className="rounded-md" />
          <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Innovation Hub" width={270} height={150} className="rounded-md" />
          <Image src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=400&q=80" alt="Research Equipment" width={270} height={150} className="rounded-md" />
        </div>

        {/* News and Events Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <h2 className="text-[#1f425c] text-2xl font-semibold mb-4 md:mb-0">News and Events</h2>
            <Link href="/latest-news">
              <Button className="bg-[#a9473b] hover:bg-[#863a31] text-white self-start md:self-auto">
                View All News & Events
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NewsCard
              image="https://ext.same-assets.com/2241434697/1342323975.webp"
              title="CU hosts International Conference on Emerging Technologies"
              date="May 10, 2025"
              category="Events"
              link="/news/1"
            />
            <NewsCard
              image="https://ext.same-assets.com/2241434697/1431232457.webp"
              title="Chandigarh University Students Win National Hackathon"
              date="May 5, 2025"
              category="Achievements"
              link="/news/2"
            />
            <NewsCard
              image="https://ext.same-assets.com/2241434697/3214124125.webp"
              title="CU Signs MoU with Leading Global Universities for Student Exchange"
              date="April 28, 2025"
              category="Partnerships"
              link="/news/3"
            />
          </div>
        </div>

        {/* Virtual Tour Section */}
        <div>
          <h2 className="text-[#1f425c] text-2xl font-semibold text-center mb-8">
            Step Inside Chandigarh University - Virtually!
          </h2>

          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="https://ext.same-assets.com/2241434697/3786175421.webp"
              alt="Chandigarh University Campus"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#0b578a] text-center mb-12">Students Speak</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Student"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-[#0b578a]">John Doe</h3>
                  <p className="text-gray-600 mt-2">
                    "The university has provided me with excellent opportunities for growth"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}