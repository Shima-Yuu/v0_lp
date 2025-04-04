"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const processes = [
  {
    number: "01",
    title: "ヒアリング",
    description: "お客様のビジネスの課題や目標をヒアリングし、最適なソリューションを検討します。",
  },
  {
    number: "02",
    title: "調査・分析",
    description: "現状のインターネット環境や競合状況を調査・分析し、改善点を洗い出します。",
  },
  {
    number: "03",
    title: "戦略立案",
    description: "調査結果をもとに、お客様のビジネスに最適なマーケティング戦略を立案します。",
  },
  {
    number: "04",
    title: "制作・実装",
    description: "Webサイト制作やマーケティング施策の実装を行います。",
  },
  {
    number: "05",
    title: "運用・改善",
    description: "効果測定を行いながら、継続的な運用と改善を行います。",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">サービスフロー</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            お客様のビジネスを成功に導くための5つのステップをご紹介します。
            一貫したサポート体制で、お客様のビジネス成長をお手伝いします。
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* プロセスフロー図（改良版） */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-[#30b4c5] z-0"></div>

          <div className="grid md:grid-cols-5 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#30b4c5] text-white flex items-center justify-center text-xl font-bold mb-6 z-10">
                  {process.number}
                </div>
                <div className="bg-white pt-2 px-2 text-center">
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-center text-gray-600">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 md:mt-16 mt-8 bg-gray-50 p-8 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">お客様の成功事例</h3>
              <p className="text-gray-600 mb-4">
                当社のサービスを利用したお客様の成功事例をご紹介します。
                インターネット環境調査から始まり、Webサイトリニューアルとマーケティング戦略の見直しにより、
                問い合わせ数が3倍に増加した事例です。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#30b4c5] mr-2 mt-0.5" />
                  <span>Webサイトのコンバージョン率が2.5倍に向上</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#30b4c5] mr-2 mt-0.5" />
                  <span>検索エンジンからの流入が65%増加</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#30b4c5] mr-2 mt-0.5" />
                  <span>問い合わせ数が月間30件から90件に増加</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="relative w-full h-[250px] md:h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="成功事例のグラフ"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

