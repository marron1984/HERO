import { motion } from 'framer-motion'
import {
  FileText,
  PiggyBank,
  Scale,
  Building2,
  Landmark,
  BadgeCheck,
  Users,
  TrendingUp,
  Rocket,
  ArrowRight,
} from 'lucide-react'
import { useApp } from '../context/AppContext'

/* ─── Timeline ─── */
const timeline = [
  {
    phase: 'Seed',
    title: '創業期',
    desc: '会社設立・株主間契約・ストックオプション設計',
    icon: Rocket,
    color: 'bg-emerald-500',
  },
  {
    phase: 'Series A',
    title: '成長期',
    desc: '資金調達契約・利用規約・知財戦略',
    icon: TrendingUp,
    color: 'bg-blue-500',
  },
  {
    phase: 'Series B+',
    title: '拡大期',
    desc: 'M&A・海外展開・コンプライアンス体制構築',
    icon: Building2,
    color: 'bg-purple-500',
  },
  {
    phase: 'IPO',
    title: '上場準備',
    desc: '証券審査対応・内部統制・開示書類作成',
    icon: Landmark,
    color: 'bg-gold-500',
  },
]

/* ─── Integration Cards ─── */
const integrationCards = [
  {
    icon: Scale,
    title: '法務',
    subtitle: 'Legal',
    items: ['契約書レビュー', '株主間契約', '知財戦略', '訴訟対応'],
    gradient: 'from-navy-700 to-navy-800',
    accent: 'text-gold-400',
  },
  {
    icon: PiggyBank,
    title: '税務・会計',
    subtitle: 'Accounting',
    items: ['税務申告', '財務DD', '監査対応', 'CFO支援'],
    gradient: 'from-navy-800 to-navy-900',
    accent: 'text-emerald-400',
  },
  {
    icon: TrendingUp,
    title: '資金調達',
    subtitle: 'Fundraising',
    items: ['VC紹介', '投資契約書', 'バリュエーション', 'エンジェル投資'],
    gradient: 'from-navy-700 to-navy-900',
    accent: 'text-blue-400',
  },
]

/* ─── Investment Track Record ─── */
const investments = [
  { sector: 'SaaS', count: 12, icon: FileText },
  { sector: 'FinTech', count: 8, icon: PiggyBank },
  { sector: 'HealthTech', count: 5, icon: BadgeCheck },
  { sector: 'AI/ML', count: 5, icon: Users },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function StartupSection() {
  const { setShowContact } = useApp()

  return (
    <section className="bg-navy-950 text-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Startup Growth OS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-4">
            創業から IPO まで、
            <br />
            <span className="text-gold-400">ワンストップ</span>で伴走
          </h2>
          <p className="text-navy-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            法務・税務・資金調達。通常なら3つの事務所に依頼する業務を、
            弁護士×公認会計士の代表がすべて統合的にマネジメント。
            コスト削減と意思決定スピードを同時に実現します。
          </p>
        </motion.div>

        {/* ─── Growth Timeline ─── */}
        <div className="mb-20">
          <div className="relative">
            {/* Connection line (desktop) */}
            <div className="hidden sm:block absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 via-purple-500 to-gold-500 opacity-30" />
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
              {timeline.map(({ phase, title, desc, icon: Icon, color }, i) => (
                <motion.div
                  key={phase}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="relative"
                >
                  <div className="flex sm:flex-col items-start sm:items-center gap-4 sm:gap-0">
                    <div
                      className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center shrink-0 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="sm:mt-4 sm:text-center">
                      <span className="text-[10px] text-navy-400 font-semibold tracking-widest uppercase">
                        {phase}
                      </span>
                      <h3 className="text-lg font-bold mt-0.5">{title}</h3>
                      <p className="text-navy-400 text-xs sm:text-sm mt-1 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Integration Cards ─── */}
        <div className="mb-20">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg font-bold mb-6 text-center sm:text-left"
          >
            <span className="text-gold-400">三位一体</span>の統合サービス
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {integrationCards.map(
              ({ icon: Icon, title, subtitle, items, gradient, accent }, i) => (
                <motion.div
                  key={title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`rounded-2xl bg-gradient-to-b ${gradient} border border-navy-700/50 p-6`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-600/50 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${accent}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">{title}</h4>
                      <span className="text-[10px] text-navy-400 uppercase tracking-widest">
                        {subtitle}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-navy-200"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${accent.replace('text-', 'bg-')}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ),
            )}
          </div>
        </div>

        {/* ─── Investment Track Record ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-2xl bg-gradient-to-r from-navy-800 to-navy-900 border border-navy-700/50 p-6 sm:p-8 mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-2">
                代表弁護士の投資実績
              </p>
              <h3 className="text-xl sm:text-2xl font-black mb-2">
                30社以上への<span className="text-gold-400">エンジェル投資</span>
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                代表自身がエンジェル投資家として30社以上に出資。
                投資家の視点で、スタートアップの成長戦略を法務面からサポートします。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 shrink-0">
              {investments.map(({ sector, count, icon: Icon }) => (
                <div
                  key={sector}
                  className="bg-navy-700/50 rounded-xl p-3 text-center min-w-[90px]"
                >
                  <Icon className="w-5 h-5 text-gold-400 mx-auto mb-1" />
                  <div className="text-lg font-extrabold">{count}社</div>
                  <div className="text-[10px] text-navy-400">{sector}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-2xl overflow-hidden border border-navy-700/50 mb-10"
        >
          <img
            src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1200&h=500&fit=crop"
            alt="スタートアップの会議風景 — 弁護士とスタートアップ経営者がホワイトボードの前で議論"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="bg-navy-800/80 px-4 py-2 text-xs text-navy-400">
            ※ スタートアップの会議風景（イメージ）
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
            className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 px-8 py-4 rounded-xl font-bold text-sm shadow-lg hover:shadow-gold-500/30 transition-shadow"
          >
            スタートアップ向け無料相談
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
