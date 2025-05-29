"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

type RankingProps = {
  number: string
  description: string
  source?: string
}

const RankingCard = ({ number, description, source }: RankingProps) => {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <h3 className="text-3xl font-bold text-[#1f425c] mb-3">{number}</h3>
        <p className="text-gray-700 text-sm font-medium">{description}</p>
        {source && <p className="text-xs text-gray-500 mt-2">{source}</p>}
      </CardContent>
    </Card>
  )
}

export const RankingsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="cu-container">
        <h2 className="text-[#1f425c] text-2xl font-semibold text-center mb-8">
          Proudly Distinguished by Our Prestigious
          <br />
          Rankings and Accreditations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center">
            <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80" alt="Ranking" width={100} height={80} className="mb-2 rounded" />
            <div className="w-full">
              <RankingCard
              number="#231"
              description="WORLDWIDE"
              source="QS World University Rankings (2025)"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80" alt="Ranking" width={100} height={80} className="mb-2 rounded" />
            <div className="w-full">
              <RankingCard
              number="#301-350"
              description="AMONG ASIAN UNIVERSITIES"
              source="QS Asia University Rankings (2024)"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=100&q=80" alt="Ranking" width={100} height={80} className="mb-2 rounded" />
            <RankingCard
              number="#401-450"
              description="EMPLOYER REPUTATION"
              source="QS World University Rankings (2025)"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center">
            <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=100&q=80" alt="Ranking" width={100} height={80} className="mb-2 rounded" />
            <RankingCard
              number="#401-450"
              description="ACADEMIC REPUTATION"
              source="QS World University Rankings (2025)"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80" alt="Ranking" width={100} height={80} className="mb-2 rounded" />
            <RankingCard
              number="#401-450"
              description="AMONG ALL UNIVERSITIES"
              source="QS Graduate Employability Rankings (2024)"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=100&q=80" alt="Ranking" width={100} height={80} className="mb-2 rounded" />
            <RankingCard
              number="#551-600"
              description="WORLD UNIVERSITY RANKING"
              source="Times Higher Education World University Rankings (2024)"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/about/Awards-and-Rankings.php">
            <button className="px-5 py-2 bg-[#a9473b] text-white rounded-md hover:bg-[#863a31] transition-colors">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
