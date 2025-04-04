"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    privacy: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // エラーをクリア
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacy: checked }))
    if (errors.privacy) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.privacy
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "お名前を入力してください"
    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください"
    }
    if (!formData.phone.trim()) newErrors.phone = "電話番号を入力してください"
    if (!formData.message.trim()) newErrors.message = "お問い合わせ内容を入力してください"
    if (!formData.privacy) newErrors.privacy = "プライバシーポリシーに同意してください"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // フォーム送信処理（ここではモックアップ）
      console.log("Form submitted:", formData)

      toast({
        title: "お問い合わせを受け付けました",
        description: "担当者より2営業日以内にご連絡いたします。",
      })

      // フォームリセット
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        privacy: false,
      })
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            サービスに関するご質問や資料請求など、お気軽にお問い合わせください。
            2営業日以内に担当者よりご連絡いたします。
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  お名前 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  メールアドレス <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  電話番号 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">会社名</Label>
                <Input id="company" name="company" value={formData.company} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={formData.privacy}
                  onCheckedChange={handleCheckboxChange}
                  className={errors.privacy ? "border-red-500" : ""}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="privacy"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    プライバシーポリシーに同意する <span className="text-red-500">*</span>
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    個人情報の取り扱いについては、
                    <a href="#" className="text-[#30b4c5] hover:underline">
                      プライバシーポリシー
                    </a>
                    をご確認ください。
                  </p>
                </div>
              </div>
              {errors.privacy && <p className="text-red-500 text-sm">{errors.privacy}</p>}

              <Button type="submit" className="w-full bg-[#ff7a00] hover:bg-[#e56e00] text-white py-6">
                送信する
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

