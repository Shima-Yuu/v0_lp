"use client"

import { motion } from "framer-motion"

export default function HighlightSection() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-yellow-100 p-6 rounded-lg border-l-4 border-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base md:text-xl font-bold mb-2 font-bold text-[#e94e1b]">【先着5社限定】無料でWEBサイト作成いたします！</h2>
          <p className="text-gray-700 text-sm md:text-base">
            お問い合わせいただいた企業様の中から<span className="font-bold text-[#e94e1b]">先着5社様</span>に限り、<span className="font-bold text-[#e94e1b]">無料</span>でWEBサイト制作いたします！お気軽にお問い合わせください！
          </p>
        </motion.div>
      </div>
    </section>
  )
}

