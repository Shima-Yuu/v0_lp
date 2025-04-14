"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 overflow-hidden">
      {/* 背景グラデーションとパターン */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d89] via-[#0f3b6f] to-[#082b57] z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* 装飾的な円形要素 */}
      <div className="absolute top-20 right-[5%] w-64 h-64 rounded-full bg-white opacity-5"></div>
      <div className="absolute bottom-10 left-[10%] w-40 h-40 rounded-full bg-white opacity-5"></div>

      <div className="container relative mx-auto px-4 z-10 text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:leading-[1.4]">
              デジタルの力で
              <br />
              <span className="text-yellow-300">ビジネスの可能性</span>を拡げる
            </h1>
            <p className="text-lg md:text-xl mb-8">
              調査・分析・制作・運用までワンストップ
              <br className="hidden md:block" />
              確かな実績と技術であなたのビジネスを次のステージへ
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  className="bg-gradient-to-r from-[#e94e1b] to-[#f26b3c] hover:from-[#d24418] hover:to-[#e45e32] text-white text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
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
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0f3b6f] text-lg py-6 px-8 w-full sm:w-auto transition-all duration-300"
                  onClick={() => {
                    const servicesSection = document.getElementById("services")
                    if (servicesSection) {
                      window.scrollTo({
                        top: servicesSection.offsetTop - 80,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  提供サービスを見る
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-[600px] h-[300px] md:w-[700px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="images/hero-image.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

