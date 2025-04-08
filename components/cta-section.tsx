"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gray-50 p-8 md:p-12 rounded-lg text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-base md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            明確な目標へ、<br className="block md:hidden" />確かな一歩を踏み出すお手伝い
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8 max-w-2xl mx-auto text-left md:text-center text-sm md:text-base"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            無料相談でぜひお話をお聞かせください。<br className="hidden md:block" />
            あなたのビジネスを深く理解し、成長を加速させる具体的な戦略を共に創り上げます。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              className="bg-[#e94e1b] hover:bg-[#f26b3c] text-white text-base md:text-lg md:py-6 md:px-8"
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
        </motion.div>
      </div>
    </section>
  )
}

