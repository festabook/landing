import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'festabook',
  description: '흩어진 정보를 하나로, 축제를 한 권에 담다',
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
  description: "흩어진 정보를 하나로, 축제를 한 권에 담다",
  images: [
    {
      url: "/images/logo.png",
      width: 1200,
      height: 1200,
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
