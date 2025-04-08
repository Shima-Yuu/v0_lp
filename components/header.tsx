"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "提供サービス", href: "#services" },
  { name: "制作の流れ", href: "#process" },
  { name: "制作事例", href: "#works" },
  { name: "会社概要", href: "#company" },
  { name: "お問い合わせ", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // アクティブセクションの検出
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-0 " : "bg-white py-1.5",
      )}
    >
      <div className="container !px-2 md:!px-4 mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="日本ルミカラー" 
            width={270} 
            height={60} 
            style={{ height: 'auto' }}
            className={cn(
              "transition-opacity w-[200px] md:w-[270px]",
              isScrolled ? "opacity-100" : "opacity-100"
            )}
          />
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors hover:text-[#e94e1b]",
                    "text-gray-700",
                    activeSection === item.href.substring(1) && "text-[#e94e1b] font-bold",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById(item.href.substring(1))
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            className="bg-[#e94e1b] hover:bg-[#f26b3c] text-white transition-all duration-300 hover:shadow-lg"
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80,
                  behavior: "smooth",
                })
              }
            }}
          >
            無料相談する
          </Button>
        </nav>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {mobileMenuOpen ? (
            <X className="text-gray-700" size={24} />
          ) : (
            <Menu className="text-gray-700" size={24} />
          )}
        </button>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col divide-y divide-gray-100">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-4 px-4 rounded-md text-gray-700 hover:bg-gray-50 hover:text-[#1a4d89] transition-colors font-medium"
                      onClick={(e) => {
                        e.preventDefault()
                        setMobileMenuOpen(false)
                        setTimeout(() => {
                          const element = document.getElementById(item.href.substring(1))
                          if (element) {
                            window.scrollTo({
                              top: element.offsetTop - 80,
                              behavior: "smooth",
                            })
                          }
                        }, 300) // メニューが閉じた後にスクロール
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Button
                    className="w-full bg-[#e94e1b] hover:bg-[#f26b3c] text-white py-3"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setTimeout(() => {
                        const contactSection = document.getElementById("contact")
                        if (contactSection) {
                          window.scrollTo({
                            top: contactSection.offsetTop - 80,
                            behavior: "smooth",
                          })
                        }
                      }, 300)
                    }}
                  >
                    お問い合わせ
                  </Button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

