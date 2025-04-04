"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "クライアント1", logo: "/placeholder.svg?height=80&width=160" },
  { name: "クライアント2", logo: "/placeholder.svg?height=80&width=160" },
  { name: "クライアント3", logo: "/placeholder.svg?height=80&width=160" },
  { name: "クライアント4", logo: "/placeholder.svg?height=80&width=160" },
  { name: "クライアント5", logo: "/placeholder.svg?height=80&width=160" },
  { name: "クライアント6", logo: "/placeholder.svg?height=80&width=160" },
  { name: "クライアント7", logo: "/placeholder.svg?height=80&width=160" },
  { name: "クライアント8", logo: "/placeholder.svg?height=80&width=160" },
]

export default function ClientsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">クライアント実績</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            多くの企業様にご利用いただいております。 様々な業種・業界のお客様のビジネス成長をサポートしています。
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={160}
                height={80}
                className="max-h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

