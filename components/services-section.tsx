"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Globe, Workflow } from "lucide-react"

const services = [
  {
    icon: <Globe className="h-12 w-12 text-white" />,
    title: "戦略的WEBサイト構築",
    description: "ビジネス目標達成に直結する、SEO対策とユーザー体験を重視した高品質なWEBサイトを制作します。お客様のブランド価値を最大限に引き出すデザインと機能性を両立させたサイト構築でオンラインプレゼンスを強化します。",
    features: ["CMS導入・カスタマイズ", "UI/UX最適化", "SEO/MEO対策", "サーバ構築・運用"],
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-white" />,
    title: "デジタル集客戦略",
    description: "データ分析に基づいた効果的なオンライン集客戦略で、お客様のビジネス成長を継続的にサポートします。SEO・MEO対策からSNS運用、広告展開まで、目標達成に最適な手法を組み合わせた統合的なアプローチを提供します。",
    features: ["SNSマーケティング", "リスティング・ディスプレイ広告", "アクセス解析・改善提案", "コンテンツマーケティング"],
  },
  {
    icon: <Workflow className="h-12 w-12 text-white" />,
    title: "デジタル業務改革",
    description: "業務分析から最適なシステム導入まで、企業の生産性向上とコスト削減を実現する効率化ソリューションを提供します。クラウドツールの活用やカスタムシステム開発により、お客様のワークフローを最適化します。",
    features: ["業務フロー分析", "クラウドツール導入支援", "システム開発", "業務改善コンサルティング"],
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
    <section id="services" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">提供サービス</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-left md:text-center text-sm md:text-base">
            WEBサイト制作から運用・保守、マーケティング戦略・支援まで一貫してサポートします。<br className="hidden md:block" />
            企業の課題を理解し、目標達成に向けた最適なデジタルソリューションを提供します。
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
                <CardHeader className="bg-[#1a4d89] text-white pb-4 pt-3 md:pt-6">
                  <div className="flex justify-center mb-0 md:mb-4">
                    <div className="h-8 w-8 md:h-12 md:w-12">
                      {React.cloneElement(service.icon, { className: "h-full w-full text-white" })}
                    </div>
                  </div>
                  <CardTitle className="text-lg md:text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 md:pt-6 flex-grow">
                  <CardDescription className="text-gray-700 mb-4 text-sm md:text-base">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-[#1a4d89] mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
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

