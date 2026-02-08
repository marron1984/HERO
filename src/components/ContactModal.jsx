import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Phone,
  MessageCircle,
  Mail,
  Send,
  Clock,
  CheckCircle2,
} from 'lucide-react'
import { useApp } from '../context/AppContext'

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const sheet = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: {
    y: '100%',
    transition: { duration: 0.25 },
  },
}

export default function ContactModal() {
  const { showContact, setShowContact, segment } = useApp()
  const [mode, setMode] = useState('menu') // 'menu' | 'form' | 'sent'
  const isStartup = segment === 'startup'

  const handleClose = () => {
    setShowContact(false)
    setTimeout(() => setMode('menu'), 300)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMode('sent')
  }

  return (
    <AnimatePresence>
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Sheet */}
          <motion.div
            variants={sheet}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl max-h-[85dvh] overflow-y-auto"
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 sm:hidden">
              <div className="w-10 h-1 rounded-full bg-gray-300" />
            </div>

            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>

            <div className="p-6 pt-6 sm:pt-6">
              {mode === 'menu' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-xl font-bold text-navy-900 mb-1">
                    無料相談
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    お気軽にお問い合わせください。
                  </p>

                  <div className="space-y-3 mb-6">
                    {/* Phone */}
                    <a
                      href="tel:03-1234-5678"
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-accent-green flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-navy-900 text-sm">
                          電話で相談
                        </div>
                        <div className="text-xs text-gray-500">
                          03-1234-5678（平日 9:00〜21:00）
                        </div>
                      </div>
                    </a>

                    {/* LINE */}
                    <a
                      href="#line"
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#06C755] flex items-center justify-center shrink-0">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-navy-900 text-sm">
                          LINEで相談
                        </div>
                        <div className="text-xs text-gray-500">
                          24時間受付・既読後すぐ返信
                        </div>
                      </div>
                    </a>

                    {/* Form */}
                    <button
                      onClick={() => setMode('form')}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors w-full text-left"
                    >
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                          isStartup ? 'bg-gold-500' : 'bg-royal-500'
                        }`}
                      >
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-navy-900 text-sm">
                          フォームで相談
                        </div>
                        <div className="text-xs text-gray-500">
                          24時間受付・翌営業日までに返信
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-gray-400 justify-center">
                    <Clock className="w-3 h-3" />
                    <span>秘密厳守・相談無料</span>
                  </div>
                </motion.div>
              )}

              {mode === 'form' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <button
                    onClick={() => setMode('menu')}
                    className="text-sm text-gray-500 mb-4 hover:text-gray-700"
                  >
                    ← 戻る
                  </button>
                  <h2 className="text-xl font-bold text-navy-900 mb-1">
                    お問い合わせフォーム
                  </h2>
                  <p className="text-gray-500 text-sm mb-5">
                    必要事項をご記入ください。
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        お名前 <span className="text-accent-red">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-500/30 focus:border-royal-500 transition-shadow"
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        メールアドレス <span className="text-accent-red">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-500/30 focus:border-royal-500 transition-shadow"
                        placeholder="info@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        ご相談内容 <span className="text-accent-red">*</span>
                      </label>
                      <select
                        required
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-500/30 focus:border-royal-500 transition-shadow bg-white"
                      >
                        <option value="">選択してください</option>
                        <option>スタートアップ法務</option>
                        <option>資金調達・投資契約</option>
                        <option>税務・会計</option>
                        <option>交通事故</option>
                        <option>その他</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        詳細
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-500/30 focus:border-royal-500 transition-shadow resize-none"
                        placeholder="ご相談内容をお書きください..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 ${
                        isStartup
                          ? 'bg-gold-500 text-navy-950'
                          : 'bg-royal-500 text-white'
                      }`}
                    >
                      送信する
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </form>
                </motion.div>
              )}

              {mode === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle2 className="w-16 h-16 text-accent-green mx-auto mb-4" />
                  <h2 className="text-xl font-bold text-navy-900 mb-2">
                    送信完了
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    ご相談ありがとうございます。
                    <br />
                    翌営業日までにご連絡いたします。
                  </p>
                  <button
                    onClick={handleClose}
                    className={`px-6 py-2.5 rounded-xl font-bold text-sm ${
                      isStartup
                        ? 'bg-gold-500 text-navy-950'
                        : 'bg-royal-500 text-white'
                    }`}
                  >
                    閉じる
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
