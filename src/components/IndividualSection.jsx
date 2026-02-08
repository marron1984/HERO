import { motion } from 'framer-motion'
import {
  FileCheck,
  MessageSquare,
  Gavel,
  BadgeCheck,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react'
import { useApp } from '../context/AppContext'

/* ─── Resolution Flow ─── */
const flowSteps = [
  {
    icon: Phone,
    title: '無料相談',
    desc: '電話・LINE・フォームからお気軽にご相談ください。初回から弁護士が直接対応します。',
    color: 'from-royal-500 to-royal-600',
  },
  {
    icon: FileCheck,
    title: '調査・資料収集',
    desc: '事故状況・医療記録を精査し、過失割合・後遺障害等級を見極め、最適な戦略を立案。',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: MessageSquare,
    title: '示談交渉',
    desc: '保険会社との交渉を代行。弁護士基準で算定し、保険会社の低額提示を徹底的に是正。',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Gavel,
    title: '訴訟・解決',
    desc: '示談が不成立の場合は訴訟も辞さず。裁判所基準の適正額で、全力で解決を勝ち取ります。',
    color: 'from-emerald-500 to-emerald-600',
  },
]

/* ─── Results ─── */
const results = [
  { category: '後遺障害14級', before: '75万円', after: '320万円', increase: '4.3倍', barWidth: '85%' },
  { category: '後遺障害12級', before: '250万円', after: '830万円', increase: '3.3倍', barWidth: '70%' },
  { category: '死亡事故', before: '3,500万円', after: '7,200万円', increase: '2.1倍', barWidth: '55%' },
]

const benefits = [
  { text: '着手金0円・完全成功報酬', icon: ShieldCheck },
  { text: '全国対応・オンライン相談OK', icon: HeartHandshake },
  { text: '保険会社との交渉は全てお任せ', icon: MessageSquare },
  { text: '治療中からサポート開始', icon: Clock },
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
    <section className="bg-white py-16 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16">
        {/* ─── Header + Image (PC side-by-side) ─── */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-16 mb-16 md:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="flex-1 md:max-w-xl"
          >
            <p className="text-royal-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
              Traffic Accident Support
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 leading-tight mb-4">
              交通事故被害者を
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-500 to-royal-400">
                全力でサポート
              </span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              保険会社の提示額に納得できていますか？
              当事務所では平均して提示額の<strong className="text-navy-900">2〜4倍</strong>の増額を実現しています。
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {benefits.map(({ text, icon: Icon }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-royal-50 rounded-xl px-3 py-2.5 border border-royal-100"
                >
                  <Icon className="w-4 h-4 text-royal-500 shrink-0" />
                  <span className="text-xs font-medium text-royal-700">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* PC hero image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="hidden md:block flex-1 max-w-lg"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-royal-500/10 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop"
                  alt="信頼感のある弁護士 — 依頼者と誠実に向き合う面談シーン"
                  className="w-full h-64 lg:h-72 object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
              >
                <div className="text-royal-500 text-[10px] font-semibold tracking-widest uppercase">解決実績</div>
                <div className="text-navy-900 text-2xl font-black">3,000+</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════
            Resolution Flow
            ═══════════════════════════════════════════ */}
        <div className="mb-20 md:mb-24">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg md:text-2xl font-bold text-navy-900 mb-8 md:mb-10"
          >
            ご相談から解決までの<span className="text-royal-500">流れ</span>
          </motion.h3>

          {/* PC: Horizontal flow */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-9 left-9 right-9 h-0.5 bg-gradient-to-r from-royal-500 via-purple-400 to-emerald-500 opacity-20 rounded-full" />
              <div className="grid grid-cols-4 gap-6">
                {flowSteps.map(({ icon: Icon, title, desc, color }, i) => (
                  <motion.div
                    key={title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="relative mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-royal-500 text-white text-xs font-bold flex items-center justify-center shadow">
                        {i + 1}
                      </div>
                    </div>
                    <h4 className="font-bold text-navy-900 text-base mb-1.5">{title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical flow */}
          <div className="md:hidden space-y-4">
            {flowSteps.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-royal-300 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] text-royal-500 font-bold bg-royal-50 px-2 py-0.5 rounded-full">
                      STEP {i + 1}
                    </span>
                  </div>
                  <h4 className="font-bold text-navy-900">{title}</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            Results — Dashboard Cards
            ═══════════════════════════════════════════ */}
        <div className="mb-16 md:mb-20">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg md:text-2xl font-bold text-navy-900 mb-8"
          >
            解決実績<span className="text-royal-500">ハイライト</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {results.map(({ category, before, after, increase, barWidth }, i) => (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6 hover:shadow-lg transition-shadow"
              >
                <span className="text-xs text-royal-500 font-semibold bg-royal-50 px-2.5 py-1 rounded-full">
                  {category}
                </span>

                <div className="mt-5 space-y-3">
                  <div>
                    <div className="text-[10px] text-gray-400 mb-0.5">保険会社提示</div>
                    <div className="text-sm text-gray-400 line-through">{before}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 mb-0.5">最終獲得額</div>
                    <div className="text-2xl md:text-3xl font-extrabold text-navy-900">{after}</div>
                  </div>
                </div>

                {/* Visual bar */}
                <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: barWidth }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-royal-500 to-royal-400 rounded-full"
                  />
                </div>

                <div className="mt-3 flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-accent-green" />
                  <span className="text-accent-green text-sm font-bold">{increase} に増額</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── CTA ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowContact(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-royal-500 to-royal-400 text-white px-10 py-4 md:px-12 md:py-5 rounded-xl font-bold text-sm md:text-base shadow-xl shadow-royal-500/20 hover:shadow-royal-500/40 transition-shadow"
          >
            無料相談はこちら
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <p className="text-gray-400 text-xs mt-3 flex items-center justify-center gap-1">
            <Clock className="w-3 h-3" />
            24時間受付・土日祝も対応
          </p>
        </motion.div>
      </div>
    </section>
  )
}
