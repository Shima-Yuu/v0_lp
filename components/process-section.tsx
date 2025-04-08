"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const processes = [
  {
    number: "01",
    title: "ヒアリング",
    description: "初回打ち合わせでビジネスの現状と目標を共有いただきます。成功に導くWebサイトの青写真を描くための重要なステップです。",
  },
  {
    number: "02",
    title: "調査・分析",
    description: "ターゲットユーザーと競合サイトを調査・分析し、SEOやUX向上のための重要な改善点を洗い出します。",
  },
  {
    number: "03",
    title: "戦略立案",
    description: "分析結果をもとに、サイト構造やデザインコンセプト、SEO戦略を含む包括的なWebサイト設計書を作成します。",
  },
  {
    number: "04",
    title: "制作・実装",
    description: "デザイン制作からコーディング、CMS実装まで、プロフェッショナルチームが高品質なWebサイトを構築します。",
  },
  {
    number: "05",
    title: "運用・改善",
    description: "アクセス解析による効果測定と継続的な改善提案で、長期的なWebサイトのパフォーマンス向上をサポートします。",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="md:py-16 pt-0 md:pt-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">制作の流れ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-left md:text-center text-sm md:text-base">
          Webサイト制作から運用までの5ステップで、お客様のビジネス成長をサポートします。<br />
          戦略的アプローチと継続的な改善で、長期的な成功をお約束します。
          </p>
        </motion.div>

        <div className="relative mt-6 md:mt-16">
          {/* プロセスフロー図（改良版） */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-[#1a4d89] z-0"></div>

          <div className="grid md:grid-cols-5 gap-12 md:gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#1a4d89] text-white flex items-center justify-center text-xl font-bold mb-3 md:mb-6 z-10">
                  {process.number}
                </div>
                <div className="bg-white pt-2 px-2 text-center">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-left text-gray-600 text-sm md:text-base">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 md:mt-16 mt-8 bg-gray-50 p-6 md:p-8 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-bold mb-4">お客様の成功事例</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                当社のサービスを利用したお客様の成功事例をご紹介します。
                インターネット環境調査から始まり、Webサイトリニューアルとマーケティング戦略の見直しにより、
                問い合わせ数が3倍に増加した事例です。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#1a4d89] mr-2 mt-0.5" />
                  <span className="text-sm md:text-base">Webサイトのコンバージョン率が2.5倍に向上</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#1a4d89] mr-2 mt-0.5" />
                  <span className="text-sm md:text-base">検索エンジンからの流入が65%増加</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#1a4d89] mr-2 mt-0.5" />
                  <span className="text-sm md:text-base">問い合わせ数が月間30件から90件に増加</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <div className="relative w-full h-[140px] md:h-[300px] rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <a 
                    href="https://nihon-lumicolor.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative"
                  >
                    <Image
                      src="/images/img_success story.png"
                      alt="成功事例のグラフ"
                      width={600}
                      height={400}
                      className="w-full object-cover object-top transition-opacity duration-300 hover:opacity-70"
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

