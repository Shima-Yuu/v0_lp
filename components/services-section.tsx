"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Search, Globe, BarChart } from "lucide-react"

const services = [
  {
    icon: <Search className="h-12 w-12 text-white" />,
    title: "インターネット環境調査",
    description: "お客様のビジネスに最適なインターネット環境を調査・分析し、改善策をご提案します。",
    features: ["現状分析", "競合調査", "改善提案"],
  },
  {
    icon: <Globe className="h-12 w-12 text-white" />,
    title: "Webサイト制作",
    description: "SEOに強く、ユーザー体験を重視した高品質なWebサイトを制作します。",
    features: ["レスポンシブデザイン", "SEO対策", "高速表示"],
  },
  {
    icon: <BarChart className="h-12 w-12 text-white" />,
    title: "デジタルマーケティング",
    description: "効果的なデジタルマーケティング戦略で、お客様のビジネス成長をサポートします。",
    features: ["SNS運用", "広告運用", "コンテンツ制作"],
  },
]

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">サービス内容</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            お客様のビジネスに合わせた最適なサービスをご提供します。
            インターネット環境調査からWebサイト制作、マーケティング戦略まで一貫してサポートします。
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden border-none shadow-lg">
                <CardHeader className="bg-[#30b4c5] text-white pb-4">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <CardDescription className="text-gray-700 mb-4 text-base">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-[#30b4c5] mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

