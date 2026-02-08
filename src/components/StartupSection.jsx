import { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  PiggyBank,
  Scale,
  Building2,
  Landmark,
  TrendingUp,
  Rocket,
  ArrowRight,
  Zap,
  Target,
  CheckCircle2,
  ChevronRight,
  BarChart3,
  Briefcase,
  Globe,
  X,
} from 'lucide-react'
import { useApp } from '../context/AppContext'
import { useCountUp } from '../hooks/useCountUp'

/* ═══ Bento card mouse-glow helper ═══ */
function BentoCard({ children, className = '', span = '' }) {
  const ref = useRef(null)
  const handleMove = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }, [])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`bento-glow glass rounded-2xl p-5 md:p-6 lg:p-8 transition-all ${span} ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

/* ═══ Count-up stat widget ═══ */
function CountStat({ end, suffix = '', label }) {
  const { count, ref } = useCountUp(end, 2200)
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-black text-white">
        {count.toLocaleString()}
        <span className="text-gold-400">{suffix}</span>
      </div>
      <div className="text-[10px] md:text-xs text-navy-400 mt-0.5">{label}</div>
    </div>
  )
}

/* ═══ Growth Roadmap data ═══ */
const roadmap = [
  {
    phase: 'Seed',
    title: '創業期',
    desc: '会社設立からファーストラウンドまで',
    icon: Rocket,
    gradient: 'from-emerald-500 to-emerald-600',
    tasks: [
      '定款作成・登記サポート',
      '創業者間契約（SHA）',
      'J-KISS / SO設計',
      '初期税務体制構築',
      '初回バリュエーション算定',
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=640&h=360&fit=crop',
  },
  {
    phase: 'Series A',
    title: '成長期',
    desc: '資金調達とプロダクト拡大',
    icon: TrendingUp,
    gradient: 'from-electric-500 to-blue-600',
    tasks: [
      'タームシート交渉',
      '投資契約書ドラフト・レビュー',
      '利用規約・プライバシーポリシー',
      '知財出願戦略',
      '法務デューデリジェンス対応',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=640&h=360&fit=crop',
  },
  {
    phase: 'Series B+',
    title: '拡大期',
    desc: 'M&A・海外展開・体制強化',
    icon: Globe,
    gradient: 'from-purple-500 to-purple-600',
    tasks: [
      'M&Aデューデリジェンス',
      '海外進出の法務支援',
      'コンプライアンス体制構築',
      '労務・内部通報制度',
      'ストックオプション再設計',
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=640&h=360&fit=crop',
  },
  {
    phase: 'IPO',
    title: '上場準備',
    desc: '証券審査から上場後ガバナンスまで',
    icon: Landmark,
    gradient: 'from-gold-500 to-gold-600',
    tasks: [
      'Ⅰの部・Ⅱの部作成支援',
      '内部統制（J-SOX）構築',
      '証券会社・取引所対応',
      '上場後ガバナンス設計',
      '開示書類レビュー',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&h=360&fit=crop',
  },
]

/* ═══ Investment sector data ═══ */
const sectors = [
  { name: 'SaaS', count: 12, icon: FileText, color: 'text-blue-400' },
  { name: 'FinTech', count: 8, icon: PiggyBank, color: 'text-emerald-400' },
  { name: 'HealthTech', count: 5, icon: Briefcase, color: 'text-purple-400' },
  { name: 'AI / ML', count: 5, icon: BarChart3, color: 'text-gold-400' },
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
  const [popup, setPopup] = useState(null)

  /* Close popup on Escape */
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setPopup(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="bg-navy-950 text-white py-16 md:py-28 overflow-hidden">
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
            投資もする弁護士法人の
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
              ワンストップ
            </span>
            支援
          </h2>
          <p className="text-navy-300 text-sm md:text-base leading-relaxed">
            法務・税務・資金調達。通常なら3つの事務所に依頼する業務を、
            弁護士×公認会計士の代表がすべて統合的にマネジメント。
          </p>
        </motion.div>

        {/* ══════════════════════════════════════
            Bento Grid — Services
            ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-20 md:mb-28">
          {/* Card 1: 投資実績 — spans 2 cols on md */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-2"
          >
            <BentoCard>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-gold-400 text-[10px] font-semibold tracking-widest uppercase mb-2 flex items-center gap-1.5">
                    <Target className="w-3 h-3" />
                    代表自身のエンジェル投資
                  </p>
                  <h3 className="text-xl md:text-2xl font-black mb-2">
                    30社以上に
                    <span className="text-gold-400">直接出資</span>
                  </h3>
                  <p className="text-navy-300 text-sm leading-relaxed mb-4 md:mb-0">
                    投資家の視点を持つからこそ、起業家の「本当のニーズ」を理解した法務支援が可能。
                    J-KISSからタームシートまで、投資する側の論理で契約をレビュー。
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 md:w-56 shrink-0">
                  {sectors.map(({ name, count, icon: Icon, color }) => (
                    <div key={name} className="glass rounded-xl p-3 text-center">
                      <Icon className={`w-4 h-4 ${color} mx-auto mb-1`} />
                      <div className="text-lg font-extrabold">{count}社</div>
                      <div className="text-[10px] text-navy-400">{name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* Card 2: 会計一体型 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <BentoCard className="h-full">
              <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center mb-4 shadow-lg">
                <PiggyBank className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">会計一体型リーガル</h3>
              <p className="text-navy-300 text-sm leading-relaxed mb-4">
                法務と税務・会計を分断しない。
                資金調達時のバリュエーション算定からDD対応、
                CFOアドバイザリーまで一気通貫。
              </p>
              <ul className="space-y-2">
                {['税務申告・節税対策', '財務デューデリジェンス', '監査対応支援', 'CFOアドバイザリー'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-navy-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </BentoCard>
          </motion.div>

          {/* Card 3: IPO支援 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          >
            <BentoCard className="h-full">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-4 shadow-lg">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">IPO完全伴走</h3>
              <p className="text-navy-300 text-sm leading-relaxed mb-4">
                上場準備から証券審査、内部統制構築まで。
                弁護士×会計士の二刀流だからこそ可能な包括的IPO支援。
              </p>
              <ul className="space-y-2">
                {['Ⅰの部・Ⅱの部作成', '内部統制（J-SOX）', '証券会社対応', '上場後ガバナンス'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-navy-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </BentoCard>
          </motion.div>

          {/* Card 4: 法務基盤 — spans 2 cols */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
            className="md:col-span-2"
          >
            <BentoCard>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="w-11 h-11 rounded-xl bg-gold-500 flex items-center justify-center mb-4 shadow-lg">
                    <Scale className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">フルスタック法務基盤</h3>
                  <p className="text-navy-300 text-sm leading-relaxed">
                    契約書レビューから株主間契約、知財戦略、訴訟対応まで。
                    スタートアップのライフサイクル全体を支える法務インフラ。
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 md:w-64 shrink-0">
                  {['契約書レビュー・作成', '株主間契約(SHA)', '知財戦略', '訴訟・紛争対応', 'ストックオプション', 'タームシート交渉'].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1.5 text-xs text-navy-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </BentoCard>
          </motion.div>
        </div>

        {/* ═══ Count-up Stats Bar ═══ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="glass rounded-2xl p-6 md:p-8 mb-20 md:mb-28"
        >
          <div className="grid grid-cols-3 divide-x divide-white/10">
            <CountStat end={200} suffix="+" label="支援スタートアップ" />
            <CountStat end={150} suffix="億+" label="累計調達支援額" />
            <CountStat end={30} suffix="社+" label="エンジェル投資先" />
          </div>
        </motion.div>

        {/* ══════════════════════════════════════
            Interactive Growth Roadmap
            ══════════════════════════════════════ */}
        <div className="mb-20 md:mb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-10"
          >
            <h3 className="text-xl md:text-2xl font-black mb-2">
              創業から IPO まで、
              <span className="text-gold-400">インタラクティブ</span>ロードマップ
            </h3>
            <p className="text-navy-400 text-sm">
              各フェーズをタップすると、必要なリーガル・タスクが表示されます。
            </p>
          </motion.div>

          {/* Desktop: Horizontal roadmap */}
          <div className="hidden md:block">
            <div className="relative mb-8">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/5 rounded-full" />
              <motion.div
                className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-emerald-500 via-electric-500 via-purple-500 to-gold-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{
                  width: `${((activePhase + 1) / roadmap.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              <div className="relative grid grid-cols-4 gap-4">
                {roadmap.map(({ phase, title, icon: Icon, gradient }, i) => (
                  <button
                    key={phase}
                    onClick={() => {
                      setActivePhase(i)
                      setPopup(i)
                    }}
                    className="group flex flex-col items-center text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg ${
                        i <= activePhase ? 'opacity-100' : 'opacity-30'
                      } transition-opacity duration-300`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <span
                      className={`mt-3 text-[10px] font-semibold tracking-widest uppercase transition-colors ${
                        i === activePhase ? 'text-gold-400' : 'text-navy-500'
                      }`}
                    >
                      {phase}
                    </span>
                    <span
                      className={`text-sm font-bold mt-0.5 transition-colors ${
                        i === activePhase ? 'text-white' : 'text-navy-400'
                      }`}
                    >
                      {title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Detail card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 lg:p-10 shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${roadmap[activePhase].gradient} flex items-center justify-center`}
                      >
                        {(() => {
                          const Icon = roadmap[activePhase].icon
                          return <Icon className="w-5 h-5 text-white" />
                        })()}
                      </div>
                      <div>
                        <span className="text-[10px] text-navy-400 font-semibold tracking-widest uppercase">
                          {roadmap[activePhase].phase}
                        </span>
                        <h4 className="text-xl font-bold">
                          {roadmap[activePhase].title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-navy-300 text-sm leading-relaxed mb-6">
                      {roadmap[activePhase].desc}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {roadmap[activePhase].tasks.map((t) => (
                        <div
                          key={t}
                          className="flex items-center gap-2 text-sm text-navy-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-80 shrink-0 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={roadmap[activePhase].image}
                      alt={roadmap[activePhase].title}
                      className="w-full h-44 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: Vertical timeline with tap-to-popup */}
          <div className="md:hidden space-y-4">
            {roadmap.map(({ phase, title, desc, icon: Icon, gradient }, i) => (
              <motion.div
                key={phase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <button
                  onClick={() => setPopup(i)}
                  className={`w-full glass rounded-xl p-4 text-left transition-all ${
                    popup === i ? 'ring-1 ring-gold-500/30' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shrink-0`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] text-navy-400 font-semibold tracking-widest uppercase">
                        {phase}
                      </span>
                      <h4 className="text-base font-bold">{title}</h4>
                      <p className="text-navy-400 text-xs mt-0.5">{desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-navy-400 shrink-0" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══ Task Popup (overlay for both mobile & desktop) ═══ */}
        <AnimatePresence>
          {popup !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-5"
              onClick={() => setPopup(null)}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg bg-navy-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
              >
                {/* Image header */}
                <div className="relative h-40">
                  <img
                    src={roadmap[popup].image}
                    alt={roadmap[popup].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
                  <button
                    onClick={() => setPopup(null)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${roadmap[popup].gradient} flex items-center justify-center`}
                    >
                      {(() => {
                        const Icon = roadmap[popup].icon
                        return <Icon className="w-5 h-5 text-white" />
                      })()}
                    </div>
                    <div>
                      <span className="text-[10px] text-navy-400 font-semibold tracking-widest uppercase">
                        {roadmap[popup].phase}
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        {roadmap[popup].title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-navy-300 text-sm mb-5">
                    {roadmap[popup].desc}
                  </p>
                  <h5 className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
                    リーガル・タスク一覧
                  </h5>
                  <ul className="space-y-2.5 mb-6">
                    {roadmap[popup].tasks.map((t) => (
                      <li
                        key={t}
                        className="flex items-center gap-2.5 text-sm text-navy-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setPopup(null)
                      setShowContact(true)
                    }}
                    className="w-full py-3 rounded-xl bg-gold-500 text-navy-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                  >
                    このフェーズについて相談
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Banner Image ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-2xl overflow-hidden border border-white/10 mb-12 md:mb-16 shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&h=500&fit=crop"
            alt="チームの議論 — オフィスでスタートアップチームがプロダクトを議論するシーン"
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
