"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "サービス", href: "#services" },
  { name: "サービスフロー", href: "#process" },
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
        isScrolled ? "bg-white shadow-md py-2" : "bg-gradient-to-r from-[#2a9eac] to-[#30b4c5] py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className={cn("font-bold text-xl transition-colors", isScrolled ? "text-[#30b4c5]" : "text-white")}>
            日本ルミカラー
          </span>
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors hover:text-[#ff7a00]",
                    isScrolled ? "text-gray-700" : "text-white",
                    activeSection === item.href.substring(1) && "text-[#ff7a00] font-bold",
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
            className="bg-[#ff7a00] hover:bg-[#e56e00] text-white transition-all duration-300 hover:shadow-lg"
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
            お問い合わせ
          </Button>
        </nav>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-700" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-gray-700" : "text-white"} size={24} />
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
                      className="block py-4 px-4 rounded-md text-gray-700 hover:bg-gray-50 hover:text-[#30b4c5] transition-colors font-medium"
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
                    className="w-full bg-[#ff7a00] hover:bg-[#e56e00] text-white py-3"
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

