import type { Metadata } from "next"
import "./globals.css"
import { ClientBody } from "./ClientBody"

export const metadata: Metadata = {
  title: "Best Private University in Punjab, North India (India) - Chandigarh University",
  description: "Chandigarh University, Punjab (CU) is India's best university in Punjab, North India offers various Undergraduate and Postgraduate Courses like Engineering, B.tech, BCA, BBA, HMCT, B.Com, LLB, B.Arch, MBA, M.Tech and MCA.",
  metadataBase: new URL('https://www.cuchd.in'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  )
}
