"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

type HeaderProps = {
  onOpenContactForm?: () => void
}

export function Header({ onOpenContactForm }: HeaderProps) {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={(event) => {
              if (pathname === "/") {
                event.preventDefault()
                window.location.reload()
              }
            }}
          >
            <Image 
              src="/images/logo.png" 
              alt="festabook 로고" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-xl text-foreground font-sans">festabook</span>
          </Link>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Button 
              type="button"
              className="bg-foreground text-background hover:bg-foreground/90 font-medium shadow-md"
              onClick={onOpenContactForm}
            >
              무료로 시작하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
