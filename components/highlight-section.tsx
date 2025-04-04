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
          <h2 className="text-xl font-bold text-gray-800 mb-2">インターネット環境調査キャンペーン実施中！</h2>
          <p className="text-gray-700">
            今なら初回のインターネット環境調査が<span className="font-bold text-[#ff7a00]">50%オフ</span>！
            2025年5月末までの期間限定キャンペーンです。お気軽にお問い合わせください。
          </p>
        </motion.div>
      </div>
    </section>
  )
}

