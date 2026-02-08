import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MessageCircle, Mail, Send, CheckCircle2, ArrowLeft } from 'lucide-react'
import { useApp } from '../context/AppContext'

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const sheet = {
  hidden: { y: '100%' },
  visible: { y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit: { y: '100%', transition: { duration: 0.25 } },
}

const panel = {
  hidden: { opacity: 0, scale: 0.97, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 28 } },
  exit: { opacity: 0, scale: 0.97, y: 16, transition: { duration: 0.2 } },
}

export default function ContactModal() {
  const { showContact, setShowContact } = useApp()
  const [mode, setMode] = useState('menu')

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
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Mobile bottom sheet */}
          <motion.div
            variants={sheet}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full bg-white rounded-t-2xl max-h-[85dvh] overflow-y-auto md:hidden"
          >
            <div className="flex justify-center pt-3">
              <div className="w-10 h-1 rounded-full bg-stone-200" />
            </div>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center"
            >
              <X className="w-4 h-4 text-stone-500" />
            </button>
            <div className="p-6 pb-10">
              <Content mode={mode} setMode={setMode} handleSubmit={handleSubmit} handleClose={handleClose} />
            </div>
          </motion.div>

          {/* Desktop panel */}
          <motion.div
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative hidden md:block w-full max-w-md bg-white rounded-xl max-h-[85dvh] overflow-y-auto shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center z-10"
            >
              <X className="w-4 h-4 text-stone-500" />
            </button>
            <div className="p-8">
              <Content mode={mode} setMode={setMode} handleSubmit={handleSubmit} handleClose={handleClose} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function Content({ mode, setMode, handleSubmit, handleClose }) {
  return (
    <AnimatePresence mode="wait">
      {mode === 'menu' && (
        <motion.div
          key="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-1">
            無料相談
          </h2>
          <p className="text-stone-400 text-sm mb-8">
            お気軽にお問い合わせください。
          </p>

          <div className="space-y-3 mb-8">
            <a
              href="tel:03-1234-5678"
              className="flex items-center gap-4 p-4 border border-stone-200 hover:border-stone-300 transition-colors"
            >
              <Phone className="w-5 h-5 text-stone-500" />
              <div>
                <div className="text-stone-900 text-sm font-medium">電話で相談</div>
                <div className="text-stone-400 text-xs mt-0.5">03-1234-5678（平日 9:00〜21:00）</div>
              </div>
            </a>

            <a
              href="#line"
              className="flex items-center gap-4 p-4 border border-stone-200 hover:border-stone-300 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#06C755]" />
              <div>
                <div className="text-stone-900 text-sm font-medium">LINEで相談</div>
                <div className="text-stone-400 text-xs mt-0.5">24時間受付・既読後すぐ返信</div>
              </div>
            </a>

            <button
              onClick={() => setMode('form')}
              className="flex items-center gap-4 p-4 border border-stone-200 hover:border-stone-300 transition-colors w-full text-left"
            >
              <Mail className="w-5 h-5 text-warm-500" />
              <div>
                <div className="text-stone-900 text-sm font-medium">フォームで相談</div>
                <div className="text-stone-400 text-xs mt-0.5">24時間受付・翌営業日までに返信</div>
              </div>
            </button>
          </div>

          <p className="text-stone-400 text-xs text-center tracking-wider">
            秘密厳守・相談無料
          </p>
        </motion.div>
      )}

      {mode === 'form' && (
        <motion.div
          key="form"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => setMode('menu')}
            className="flex items-center gap-1 text-sm text-stone-400 mb-6 hover:text-stone-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            戻る
          </button>

          <h2 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-6">
            お問い合わせ
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs text-stone-400 tracking-wider mb-2">
                お名前 <span className="text-accent-red">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full pb-2 text-sm border-b border-stone-200 focus:border-stone-900 outline-none transition-colors bg-transparent"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label className="block text-xs text-stone-400 tracking-wider mb-2">
                メールアドレス <span className="text-accent-red">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full pb-2 text-sm border-b border-stone-200 focus:border-stone-900 outline-none transition-colors bg-transparent"
                placeholder="info@example.com"
              />
            </div>
            <div>
              <label className="block text-xs text-stone-400 tracking-wider mb-2">
                ご相談内容 <span className="text-accent-red">*</span>
              </label>
              <select
                required
                className="w-full pb-2 text-sm border-b border-stone-200 focus:border-stone-900 outline-none transition-colors bg-transparent"
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
              <label className="block text-xs text-stone-400 tracking-wider mb-2">
                詳細
              </label>
              <textarea
                rows={3}
                className="w-full pb-2 text-sm border-b border-stone-200 focus:border-stone-900 outline-none transition-colors bg-transparent resize-none"
                placeholder="ご相談内容をお書きください..."
              />
            </div>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 bg-stone-900 text-white text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors"
            >
              送信する
              <Send className="w-3.5 h-3.5" />
            </motion.button>
          </form>
        </motion.div>
      )}

      {mode === 'sent' && (
        <motion.div
          key="sent"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-accent-green" />
          </div>
          <h2 className="font-serif text-xl font-light text-stone-900 mb-2">
            送信完了
          </h2>
          <p className="text-stone-400 text-sm mb-8">
            ご相談ありがとうございます。
            <br />
            翌営業日までにご連絡いたします。
          </p>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleClose}
            className="px-8 py-3 bg-stone-900 text-white text-sm tracking-wider"
          >
            閉じる
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
