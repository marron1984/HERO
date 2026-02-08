import { motion } from 'framer-motion'
import {
  Car,
  FileCheck,
  MessageSquare,
  Gavel,
  BadgeCheck,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { useApp } from '../context/AppContext'

/* ─── Resolution Flow ─── */
const flowSteps = [
  {
    icon: Phone,
    title: '無料相談',
    desc: '電話・LINE・フォームからお気軽にご相談ください。',
  },
  {
    icon: FileCheck,
    title: '調査・資料収集',
    desc: '事故状況・医療記録を精査し、最適な戦略を立案。',
  },
  {
    icon: MessageSquare,
    title: '示談交渉',
    desc: '保険会社との交渉を代行。増額実績多数。',
  },
  {
    icon: Gavel,
    title: '訴訟・解決',
    desc: '示談不成立の場合は訴訟も辞さず、全力で戦います。',
  },
]

/* ─── Results ─── */
const results = [
  {
    category: '後遺障害14級',
    before: '75万円',
    after: '320万円',
    increase: '4.3倍',
  },
  {
    category: '後遺障害12級',
    before: '250万円',
    after: '830万円',
    increase: '3.3倍',
  },
  {
    category: '死亡事故',
    before: '3,500万円',
    after: '7,200万円',
    increase: '2.1倍',
  },
]

const benefits = [
  '着手金0円・完全成功報酬',
  '全国対応・オンライン相談OK',
  '保険会社との交渉は全てお任せ',
  '治療中からサポート開始',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function IndividualSection() {
  const { setShowContact } = useApp()

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="text-royal-500 text-xs font-semibold tracking-widest uppercase mb-2">
            Traffic Accident Support
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-900 leading-tight mb-4">
            交通事故被害者を
            <br />
            <span className="text-royal-500">全力でサポート</span>
          </h2>
          <p className="text-gray-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            保険会社の提示額に納得できていますか？
            当事務所では平均して提示額の2〜4倍の増額を実現しています。
          </p>
        </motion.div>

        {/* ─── Benefits Chips ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-wrap gap-2 mb-14"
        >
          {benefits.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 bg-royal-50 text-royal-600 text-xs font-medium px-3 py-1.5 rounded-full border border-royal-100"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              {b}
            </span>
          ))}
        </motion.div>

        {/* ─── Resolution Flow ─── */}
        <div className="mb-20">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg font-bold text-navy-900 mb-8 text-center sm:text-left"
          >
            ご相談から解決までの<span className="text-royal-500">流れ</span>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
            {flowSteps.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="relative"
              >
                <div className="flex sm:flex-col items-start sm:items-center gap-4 sm:gap-0">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-royal-500 flex items-center justify-center shadow-lg shadow-royal-500/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-royal-600 text-[10px] font-bold flex items-center justify-center shadow">
                      {i + 1}
                    </div>
                  </div>
                  <div className="sm:mt-4 sm:text-center">
                    <h4 className="font-bold text-navy-900">{title}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Results Cards ─── */}
        <div className="mb-16">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg font-bold text-navy-900 mb-6 text-center sm:text-left"
          >
            解決実績<span className="text-royal-500">ハイライト</span>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {results.map(({ category, before, after, increase }, i) => (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow"
              >
                <span className="text-xs text-royal-500 font-semibold bg-royal-50 px-2 py-0.5 rounded-full">
                  {category}
                </span>
                <div className="mt-4 flex items-end gap-3">
                  <div>
                    <div className="text-[10px] text-gray-400">保険会社提示</div>
                    <div className="text-sm text-gray-500 line-through">
                      {before}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-royal-400 mb-1" />
                  <div>
                    <div className="text-[10px] text-gray-400">最終獲得額</div>
                    <div className="text-xl font-extrabold text-navy-900">
                      {after}
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-accent-green" />
                  <span className="text-accent-green text-sm font-bold">
                    {increase} に増額
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-2xl overflow-hidden mb-10 border border-gray-100"
        >
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=500&fit=crop"
            alt="信頼感のある弁護士 — スーツ姿の弁護士が依頼者と面談している様子"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="bg-gray-50 px-4 py-2 text-xs text-gray-400">
            ※ 信頼感のある弁護士との面談風景（イメージ）
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowContact(true)}
            className="inline-flex items-center gap-2 bg-royal-500 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg hover:shadow-royal-500/30 transition-shadow"
          >
            無料相談はこちら
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <p className="text-gray-400 text-xs mt-3">
            <Clock className="w-3 h-3 inline mr-1" />
            24時間受付・土日祝も対応
          </p>
        </motion.div>
      </div>
    </section>
  )
}
