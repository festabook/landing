import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '대학 축제의 모든 것 - festabook',
  description: '대학 축제의 모든 정보를 한 곳에 모아, 학생회와 학생 모두의 문제를 해결합니다.',
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png" },
    ],
  },

  openGraph: {
  title: "festabook",
  description: "우리 학교 축제, 이제 한 곳에서 만나요",
  images: [
    {
      url: "/images/logo.png",
      width: 1200,
      height: 630,
    },
  ],
},
    generator: 'v0.app'
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
