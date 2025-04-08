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
    title: "飲食店ブランドサイト制作と集客支援",
    category: "戦略的WEBサイト構築",
    image:
      "/images/img_works_01.png",
    description: "WEBサイト制作と集客戦略で客数が増加し、売上150%アップ",
    fullDescription:
      "老舗イタリアンレストランのWEBサイトをモバイルファーストで全面リニューアル。ブランドの世界観を伝える高品質な写真撮影から予約システム導入までトータルサポートしました。同時にSEO対策とGoogle MAP連携も実施し、検索上位表示を実現。さらにSNSマーケティングも展開し、若年層の新規顧客獲得にも成功。予約数増加と客単価向上により、リニューアル前と比較して売上が150%にアップしました。",
    results: [
      "予約数が月間40件から92件に増加",
      "客単価が平均15%向上し、売上増加に貢献",
      "Google検索での上位表示を実現し、オーガニック流入が150%増加",
    ],
  },
  {
    title: "専門メディアサイトの全面リニューアル",
    category: "デジタル集客戦略",
    image:"/images/img_works_03.png",
    description: "サイト構造とデザイン刷新でPV数150%増、広告収益も大幅アップ",
    fullDescription:
      "専門分野に特化したメディアサイトの全面リニューアルを実施。コンテンツ分析とユーザー行動調査に基づき、サイト構造とナビゲーションを抜本的に見直しました。モバイルファーストのデザインと高速化対応により、検索エンジンからの流入増加と回遊率向上を実現。広告表示最適化も同時に行い、広告収益も増加させています。",
    results: [
      "月間PV数が135%に増加し、広告収益が120%向上",
       "検索エンジンからの流入が180%増加",
        "モバイルでのコンバージョン率が45%改善"
      ],
  },
  {
    title: "整体院の予約管理システム導入と業務改革",
    category: "デジタル業務改革",
    image:"/images/img_works_02.png",
    description: "予約管理システム導入で業務工数70%削減、顧客満足度も向上",
    fullDescription:
      "地域密着型の整体院向けに、オンライン予約システムと顧客管理システムを統合導入。電話対応時間の削減により施術に集中できる環境を整備しました。また、顧客データ分析により効果的なリピート促進策を実施し、定期的な来院を促進。業務効率化と売上向上の好循環を生み出しています。",
    results: [
      "予約管理業務の工数が70%削減され、施術時間の確保に成功",
      "電話対応時間が1日あたり平均2時間から30分に短縮",
      "顧客データ活用によりリピート率が25%向上",
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
    <section id="works" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">制作事例</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-left md:text-center text-sm md:text-base">
            当社がこれまでに手がけた制作事例をご紹介します。<br />
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
                  <Image src={work.image} alt={work.title} fill className="object-cover" />
                </div>
                <CardContent className="pt-4 md:pt-6 flex-grow">
                  <Badge className="mb-2 bg-[#1a4d89] hover:bg-[#1a4d89] text-xs md:text-base">{work.category}</Badge>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{work.description}</p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full border-[#1a4d89] text-[#1a4d89] hover:bg-[#1a4d89] hover:text-white transition-all duration-300"
                        onClick={() => setSelectedWork(work)}
                      >
                        詳細を見る
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] p-6 bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
                      <DialogClose className="absolute right-2 top-1 md:right-4 md:top-4 rounded-full p-2 hover:bg-gray-100 transition-colors">
                        <X className="h-5 w-5" />
                        <span className="sr-only">閉じる</span>
                      </DialogClose>
                      <DialogHeader className="mb-1 md:mb-4">
                        <DialogTitle className="text-lg md:text-2xl font-bold text-gray-800 text-left">{work.title}</DialogTitle>
                        <Badge className="w-fit mt-2 md:!mt-3 bg-[#1a4d89] hover:bg-[#1a4d89]">{work.category}</Badge>
                      </DialogHeader>
                      <div className="relative h-60 w-full md:mt-4 rounded-md overflow-hidden">
                        <Image src={work.image || "/placeholder.svg"} alt={work.title} fill className="object-cover" />
                      </div>
                      <DialogDescription className="mt-0 md:mt-6 text-sm md:text-base text-gray-700">
                        {work.fullDescription}
                      </DialogDescription>
                      <div className="mt-2 md:mt-6">
                        <h4 className="font-bold text:base md:text-lg mb-3 text-gray-800">成果</h4>
                        <ul className="space-y-3">
                          {work.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-[#1a4d89] mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm md:text-base">{result}</span>
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

