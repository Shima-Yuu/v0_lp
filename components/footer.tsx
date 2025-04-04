"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2a9eac] to-[#30b4c5] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start mb-4">
              <span className="font-bold text-xl">日本ルミカラー</span>
            </Link>
            <p className="max-w-md">
              最先端のWebマーケティングと制作サービスで、お客様のビジネスの成長をサポートします。
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-yellow-300 transition-colors p-2 hover:bg-white/10 rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors p-2 hover:bg-white/10 rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors p-2 hover:bg-white/10 rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors p-2 hover:bg-white/10 rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <p>〒150-0002 東京都渋谷区渋谷1-1-1 渋谷ビル5F</p>
            <p>TEL: 03-1234-5678</p>
            <p>Email: info@nihon-lumicolor.co.jp</p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© 2025 日本ルミカラー All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

