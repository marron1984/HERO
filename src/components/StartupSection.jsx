import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  ChevronRight,
  Zap,
  Target,
  CheckCircle2,
} from 'lucide-react'
import { useApp } from '../context/AppContext'

/* ─── Growth Timeline ─── */
const timeline = [
  {
    phase: 'Seed',
    title: '創業期',
    desc: '会社設立・株主間契約・ストックオプション設計',
    details: ['定款作成・登記サポート', '創業者間契約の設計', 'SO・J-KISS設計', '初期税務体制構築'],
    icon: Rocket,
    color: 'from-emerald-500 to-emerald-600',
    glow: 'shadow-emerald-500/20',
  },
  {
    phase: 'Series A',
    title: '成長期',
    desc: '資金調達契約・利用規約・知財戦略',
    details: ['投資契約書ドラフト・レビュー', '利用規約・プライバシーポリシー', '知財出願戦略', '法務DD対応'],
    icon: TrendingUp,
    color: 'from-electric-500 to-blue-600',
    glow: 'shadow-electric-500/20',
  },
  {
    phase: 'Series B+',
    title: '拡大期',
    desc: 'M&A・海外展開・コンプライアンス体制構築',
    details: ['M&Aデューデリジェンス', '海外進出の法務支援', 'コンプライアンス体制', '労務・内部通報制度'],
    icon: Building2,
    color: 'from-purple-500 to-purple-600',
    glow: 'shadow-purple-500/20',
  },
  {
    phase: 'IPO',
    title: '上場準備',
    desc: '証券審査対応・内部統制・開示書類作成',
    details: ['Ⅰの部・Ⅱの部作成支援', '内部統制（J-SOX）構築', '証券会社・取引所対応', '上場後ガバナンス'],
    icon: Landmark,
    color: 'from-gold-500 to-gold-600',
    glow: 'shadow-gold-500/20',
  },
]

/* ─── Trinity data ─── */
const trinityPillars = [
  {
    icon: Scale,
    title: '法務',
    subtitle: 'Legal',
    items: ['契約書レビュー・作成', '株主間契約(SHA)', '知財戦略', '訴訟・紛争対応'],
    accent: 'text-gold-400',
    bg: 'bg-gold-500',
    ring: 'ring-gold-500/20',
  },
  {
    icon: PiggyBank,
    title: '税務・会計',
    subtitle: 'Accounting',
    items: ['税務申告・節税対策', '財務デューデリジェンス', '監査対応支援', 'CFOアドバイザリー'],
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500',
    ring: 'ring-emerald-500/20',
  },
  {
    icon: TrendingUp,
    title: '資金調達',
    subtitle: 'Fundraising',
    items: ['VC・CVC紹介', '投資契約書の最適化', 'バリュエーション算定', 'エンジェル投資'],
    accent: 'text-electric-400',
    bg: 'bg-electric-500',
    ring: 'ring-electric-500/20',
  },
]

/* ─── Investment data ─── */
const investments = [
  { sector: 'SaaS', count: 12, icon: FileText, color: 'text-blue-400' },
  { sector: 'FinTech', count: 8, icon: PiggyBank, color: 'text-emerald-400' },
  { sector: 'HealthTech', count: 5, icon: BadgeCheck, color: 'text-purple-400' },
  { sector: 'AI / ML', count: 5, icon: Users, color: 'text-gold-400' },
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
  const [activePhase, setActivePhase] = useState(0)

  return (
    <section className="bg-[#0F172A] text-white py-16 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16">
        {/* ─── Section Header ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="mb-16 md:mb-20 md:max-w-2xl"
        >
          <p className="text-gold-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5" />
            Startup Growth OS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
            創業から IPO まで、
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
              ワンストップ
            </span>
            で伴走
          </h2>
          <p className="text-navy-300 text-sm md:text-base leading-relaxed">
            法務・税務・資金調達。通常なら3つの事務所に依頼する業務を、
            弁護士×公認会計士の代表がすべて統合的にマネジメント。
            コスト削減と意思決定スピードを同時に実現します。
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            Growth Timeline — Interactive Stepper
            ═══════════════════════════════════════════ */}
        <div className="mb-20 md:mb-28">
          {/* Desktop: horizontal stepper */}
          <div className="hidden md:block">
            {/* Phase tabs */}
            <div className="relative mb-10">
              {/* Progress bar background */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/5 rounded-full" />
              {/* Progress bar fill */}
              <motion.div
                className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-emerald-500 via-electric-500 via-purple-500 to-gold-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((activePhase + 1) / timeline.length) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              <div className="relative grid grid-cols-4 gap-4">
                {timeline.map(({ phase, title, icon: Icon, color }, i) => (
                  <button
                    key={phase}
                    onClick={() => setActivePhase(i)}
                    className="group flex flex-col items-center text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg ${
                        i <= activePhase ? 'opacity-100' : 'opacity-30'
                      } transition-opacity duration-300`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className={`mt-3 text-[10px] font-semibold tracking-widest uppercase transition-colors ${
                      i === activePhase ? 'text-gold-400' : 'text-navy-500'
                    }`}>
                      {phase}
                    </span>
                    <span className={`text-sm font-bold mt-0.5 transition-colors ${
                      i === activePhase ? 'text-white' : 'text-navy-400'
                    }`}>
                      {title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active phase detail card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className={`glass rounded-2xl p-8 lg:p-10 shadow-xl ${timeline[activePhase].glow}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${timeline[activePhase].color} flex items-center justify-center`}>
                        {(() => { const Icon = timeline[activePhase].icon; return <Icon className="w-5 h-5 text-white" /> })()}
                      </div>
                      <div>
                        <span className="text-[10px] text-navy-400 font-semibold tracking-widest uppercase">
                          {timeline[activePhase].phase}
                        </span>
                        <h3 className="text-xl font-bold">{timeline[activePhase].title}</h3>
                      </div>
                    </div>
                    <p className="text-navy-300 text-sm leading-relaxed mb-6">
                      {timeline[activePhase].desc}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {timeline[activePhase].details.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-sm text-navy-200">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Phase image */}
                  <div className="lg:w-80 shrink-0 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        activePhase === 0 ? '1519389950473-47ba0277781c' :
                        activePhase === 1 ? '1552664730-d307ca884978' :
                        activePhase === 2 ? '1600880292203-757bb62b4baf' :
                        '1486406146926-c627a92ad1ab'
                      }?w=640&h=360&fit=crop`}
                      alt={timeline[activePhase].title}
                      className="w-full h-44 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: vertical cards */}
          <div className="md:hidden space-y-4">
            {timeline.map(({ phase, title, desc, details, icon: Icon, color }, i) => (
              <motion.div
                key={phase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <button
                  onClick={() => setActivePhase(activePhase === i ? -1 : i)}
                  className="w-full"
                >
                  <div className={`glass rounded-xl p-4 text-left transition-all ${
                    activePhase === i ? 'ring-1 ring-gold-500/30' : ''
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] text-navy-400 font-semibold tracking-widest uppercase">
                          {phase}
                        </span>
                        <h3 className="text-base font-bold">{title}</h3>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-navy-400 transition-transform ${activePhase === i ? 'rotate-90' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {activePhase === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="text-navy-300 text-xs mt-3 mb-3 leading-relaxed">{desc}</p>
                          <div className="space-y-1.5">
                            {details.map((d) => (
                              <div key={d} className="flex items-center gap-2 text-xs text-navy-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                                {d}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            Trinity — Interactive SVG Diagram (PC) / Cards (Mobile)
            ═══════════════════════════════════════════ */}
        <div className="mb-20 md:mb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-10"
          >
            <h3 className="text-xl md:text-2xl font-black mb-2">
              <span className="text-gold-400">三位一体</span>の統合サービス
            </h3>
            <p className="text-navy-400 text-sm">
              3つの専門領域を1チームに統合。従来の分業では不可能だった、シームレスな支援を実現。
            </p>
          </motion.div>

          {/* PC: Dashboard-style grid with center diagram */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {trinityPillars.map(({ icon: Icon, title, subtitle, items, accent, bg, ring }, i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`glass rounded-2xl p-6 lg:p-8 hover:ring-2 ${ring} transition-all group`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{title}</h4>
                    <span className="text-[10px] text-navy-400 uppercase tracking-widest">
                      {subtitle}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-navy-200">
                      <div className={`w-1.5 h-1.5 rounded-full ${accent.replace('text-', 'bg-')}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Mobile: horizontal scroll cards */}
          <div className="md:hidden flex gap-3 overflow-x-auto hide-scrollbar pb-2 -mx-5 px-5">
            {trinityPillars.map(({ icon: Icon, title, subtitle, items, accent, bg }) => (
              <div
                key={title}
                className="glass rounded-xl p-5 min-w-[260px] shrink-0"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">{title}</h4>
                    <span className="text-[10px] text-navy-400 uppercase tracking-widest">{subtitle}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-navy-200">
                      <div className={`w-1.5 h-1.5 rounded-full ${accent.replace('text-', 'bg-')}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Trinity visual connector (PC) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="hidden md:flex justify-center mt-8"
          >
            <div className="glass rounded-full px-8 py-3 flex items-center gap-6">
              {['法務', '会計', '投資'].map((label, idx) => (
                <div key={label} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    idx === 0 ? 'bg-gold-400' : idx === 1 ? 'bg-emerald-400' : 'bg-electric-400'
                  }`} />
                  <span className="text-sm font-bold text-white">{label}</span>
                  {idx < 2 && <span className="text-gold-500 font-light text-lg">×</span>}
                </div>
              ))}
              <span className="text-navy-300 text-sm ml-2">= Growth OS</span>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════
            Investment Track Record — Dashboard Card
            ═══════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16 md:mb-20"
        >
          <div className="glass rounded-2xl p-6 md:p-10 shadow-xl shadow-navy-950/30">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* Left copy */}
              <div className="flex-1">
                <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
                  <Target className="w-3.5 h-3.5" />
                  代表弁護士の投資実績
                </p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-3">
                  30社以上への
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
                    エンジェル投資
                  </span>
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed mb-6 md:mb-0">
                  代表自身がエンジェル投資家として30社以上に出資。
                  投資家の視点を持つからこそ、起業家の「本当のニーズ」を理解した法務支援が可能です。
                </p>
              </div>

              {/* Right: sector grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 shrink-0 md:w-72">
                {investments.map(({ sector, count, icon: Icon, color }, i) => (
                  <motion.div
                    key={sector}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                    className="glass rounded-xl p-4 text-center cursor-default"
                  >
                    <Icon className={`w-5 h-5 ${color} mx-auto mb-1.5`} />
                    <div className="text-xl font-extrabold">{count}社</div>
                    <div className="text-[10px] text-navy-400 mt-0.5">{sector}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Startup Image ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-2xl overflow-hidden border border-white/10 mb-12 md:mb-16 shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&h=500&fit=crop"
            alt="スタートアップの熱気 — オフィスでチームが議論しプロダクトを開発するシーン"
            className="w-full h-48 md:h-72 lg:h-80 object-cover"
          />
        </motion.div>

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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 px-10 py-4 md:px-12 md:py-5 rounded-xl font-bold text-sm md:text-base shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 transition-shadow"
          >
            スタートアップ向け無料相談
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
