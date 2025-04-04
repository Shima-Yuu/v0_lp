"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { X, CheckCircle } from "lucide-react"

const works = [
  {
    title: "不動産会社Webサイトリニューアル",
    category: "Webサイト制作",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "コンバージョン率を重視したデザインで問い合わせ数が2倍に増加",
    fullDescription:
      "不動産会社のWebサイトをリニューアルし、ユーザビリティを向上させました。物件検索機能の改善やレスポンシブデザインの導入により、モバイルからの問い合わせが3倍に増加。SEO対策も同時に行い、オーガニック流入も50%増加しました。",
    results: [
      "問い合わせ数が月間50件から100件に増加",
      "モバイルからのアクセス率が40%から65%に向上",
      "平均セッション時間が1分30秒から3分20秒に延長",
    ],
  },
  {
    title: "製造業向けマーケティング戦略",
    category: "デジタルマーケティング",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "BtoB向けのマーケティング戦略で新規顧客獲得数が150%増加",
    fullDescription:
      "製造業のクライアント向けにBtoBマーケティング戦略を立案・実行しました。ターゲット企業へのアプローチ方法を見直し、コンテンツマーケティングとリードナーチャリングを組み合わせた施策を展開。新規顧客獲得数が大幅に増加しました。",
    results: [
      "ホワイトペーパーのダウンロード数が月間200件を達成",
      "リード獲得コストが30%削減",
      "商談化率が15%から25%に向上",
    ],
  },
  {
    title: "ECサイト売上改善プロジェクト",
    category: "インターネット環境調査",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "ユーザビリティ改善とSEO対策で月間売上30%アップを実現",
    fullDescription:
      "アパレルブランドのECサイトの売上改善プロジェクトを実施しました。ユーザビリティテストを行い、カート離脱率の高い箇所を特定。チェックアウトプロセスの簡略化や商品ページの改善を行い、コンバージョン率が大幅に向上しました。",
    results: ["カート離脱率が65%から40%に改善", "平均注文単価が15%向上", "リピート購入率が25%増加"],
  },
  {
    title: "飲食店チェーンのブランディング",
    category: "Webサイト制作",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "統一感のあるブランディングで店舗認知度向上に貢献",
    fullDescription:
      "全国展開する飲食店チェーンのブランディングとWebサイトリニューアルを担当しました。ブランドイメージを一新し、各店舗の特色を活かしながらも統一感のあるデザインを実現。予約システムの導入により、オンライン予約率が大幅に向上しました。",
    results: [
      "Webサイト経由の予約数が200%増加",
      "ブランド認知度調査で認知率が35%向上",
      "SNSフォロワー数が3ヶ月で2倍に増加",
    ],
  },
  {
    title: "アパレルブランドのSNS運用",
    category: "デジタルマーケティング",
    image:
      "https://images.unsplash.com/photo-1600878459108-617a253537e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Instagram運用代行でフォロワー数が半年で3倍に増加",
    fullDescription:
      "新興アパレルブランドのSNS運用を代行し、Instagram戦略を立案・実行しました。ターゲット層に響くビジュアルコンテンツの制作とインフルエンサーマーケティングを組み合わせ、短期間でフォロワー数を大幅に増加させました。",
    results: [
      "Instagramフォロワーが5,000人から15,000人に増加",
      "エンゲージメント率が業界平均の2倍を達成",
      "SNS経由の売上が全体の35%を占めるまでに成長",
    ],
  },
  {
    title: "医療機関のWebサイト制作",
    category: "Webサイト制作",
    image:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "患者さんに優しいUIデザインで予約数増加を実現",
    fullDescription:
      "総合病院のWebサイトをリニューアルし、患者さんに優しいUIデザインを実現しました。診療科目ごとの情報整理や予約システムの導入、アクセシビリティに配慮したデザインにより、Webサイトからの予約数が大幅に増加しました。",
    results: [
      "オンライン予約数が月間300件から800件に増加",
      "サイト滞在時間が平均2分から4分30秒に延長",
      "患者満足度調査でWebサイトの使いやすさが90%の評価",
    ],
  },
]

export default function WorksSection() {
  const [selectedWork, setSelectedWork] = useState<(typeof works)[0] | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">制作事例</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            当社がこれまでに手がけた制作事例をご紹介します。
            様々な業種・業界のお客様のビジネス成長をサポートしてきました。
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {works.map((work, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image src={work.image || "/placeholder.svg"} alt={work.title} fill className="object-cover" />
                </div>
                <CardContent className="pt-6 flex-grow">
                  <Badge className="mb-2 bg-[#30b4c5] hover:bg-[#30b4c5]">{work.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-gray-600">{work.description}</p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full border-[#30b4c5] text-[#30b4c5] hover:bg-[#30b4c5] hover:text-white transition-all duration-300"
                        onClick={() => setSelectedWork(work)}
                      >
                        詳細を見る
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] p-6 bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
                      <DialogClose className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100 transition-colors">
                        <X className="h-5 w-5" />
                        <span className="sr-only">閉じる</span>
                      </DialogClose>
                      <DialogHeader className="mb-4">
                        <DialogTitle className="text-2xl font-bold text-gray-800">{work.title}</DialogTitle>
                        <Badge className="w-fit mt-2 bg-[#30b4c5] hover:bg-[#30b4c5]">{work.category}</Badge>
                      </DialogHeader>
                      <div className="relative h-60 w-full mt-4 rounded-md overflow-hidden">
                        <Image src={work.image || "/placeholder.svg"} alt={work.title} fill className="object-cover" />
                      </div>
                      <DialogDescription className="mt-6 text-base text-gray-700">
                        {work.fullDescription}
                      </DialogDescription>
                      <div className="mt-6">
                        <h4 className="font-bold text-lg mb-3 text-gray-800">成果</h4>
                        <ul className="space-y-3">
                          {work.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-[#30b4c5] mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

