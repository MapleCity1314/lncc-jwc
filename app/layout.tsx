import type { Metadata } from "next"
import { Noto_Serif_SC, Noto_Sans_SC } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-serif-sc",
  display: "swap",
})

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans-sc",
  display: "swap",
})

export const metadata: Metadata = {
  title: "辽宁省交通高等专科学校 教务处",
  description:
    "辽宁省交通高等专科学校教务处官方网站，提供人才培养、教学信息、考务信息、资料下载等教务服务，面向学生、教师与教学管理人员。",
  generator: "v0.app",
}

const enableVercelAnalytics = process.env.VERCEL === "1"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${notoSerif.variable} ${notoSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {enableVercelAnalytics && <Analytics />}
      </body>
    </html>
  )
}
