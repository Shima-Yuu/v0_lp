"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function CompanySection() {
  return (
    <section id="company" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">会社概要</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            日本ルミカラーは、Webマーケティングと制作のプロフェッショナル集団です。
            お客様のビジネス成長を全力でサポートします。
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#30b4c5]">基本情報</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <th className="py-3 text-left font-medium text-gray-600 w-1/3">会社名</th>
                      <td className="py-3">日本ルミカラー</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <th className="py-3 text-left font-medium text-gray-600">設立</th>
                      <td className="py-3">2015年4月</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <th className="py-3 text-left font-medium text-gray-600">資本金</th>
                      <td className="py-3">1,000万円</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <th className="py-3 text-left font-medium text-gray-600">代表取締役</th>
                      <td className="py-3">山田 太郎</td>
                    </tr>
                    <tr>
                      <th className="py-3 text-left font-medium text-gray-600">従業員数</th>
                      <td className="py-3">25名</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#30b4c5]">所在地・連絡先</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#30b4c5] mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">本社</p>
                      <p className="text-gray-600">〒150-0002 東京都渋谷区渋谷1-1-1 渋谷ビル5F</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 text-[#30b4c5] mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">電話番号</p>
                      <p className="text-gray-600">03-1234-5678</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 text-[#30b4c5] mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">メールアドレス</p>
                      <p className="text-gray-600">info@nihon-lumicolor.co.jp</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-[#30b4c5] mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">営業時間</p>
                      <p className="text-gray-600">平日 9:00〜18:00（土日祝休）</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

