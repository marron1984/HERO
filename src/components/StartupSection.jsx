import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useApp } from '../context/AppContext'

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const services = [
  {
    title: '法務',
    en: 'Legal',
    items: [
      '契約書レビュー・作成',
      '株主間契約（SHA）',
      '知財出願戦略',
      '訴訟・紛争対応',
    ],
  },
  {
    title: '会計',
    en: 'Accounting',
    items: [
      '税務申告・節税対策',
      '財務デューデリジェンス',
      '監査対応支援',
      'CFOアドバイザリー',
    ],
  },
  {
    title: '投資',
    en: 'Investment',
    items: [
      'J-KISS / SO設計',
      'タームシート交渉',
      'バリュエーション算定',
      'エンジェル投資家の視点',
    ],
  },
]

const phases = [
  {
    id: 'seed',
    label: 'Seed',
    title: '創業期',
    desc: '会社設立からファーストラウンドまで。定款作成、創業者間契約、初期税務体制を整備。',
    tasks: ['定款作成・登記サポート', '創業者間契約（SHA）', 'J-KISS / SO設計', '初期税務体制構築'],
  },
  {
    id: 'seriesA',
    label: 'Series A',
    title: '成長期',
    desc: '資金調達とプロダクト拡大。投資契約書のドラフトから知財戦略まで。',
    tasks: ['タームシート交渉', '投資契約書レビュー', '利用規約・PP', '法務デューデリジェンス'],
  },
  {
    id: 'seriesB',
    label: 'Series B+',
    title: '拡大期',
    desc: 'M&A・海外展開・コンプライアンス体制の強化。',
    tasks: ['M&Aデューデリジェンス', '海外進出法務', 'コンプライアンス体制', 'SO再設計'],
  },
  {
    id: 'ipo',
    label: 'IPO',
    title: '上場準備',
    desc: '証券審査から上場後ガバナンスまで、完全伴走。',
    tasks: ['Ⅰの部・Ⅱの部作成', '内部統制（J-SOX）', '証券会社対応', '開示書類レビュー'],
  },
]

export default function StartupSection() {
  const { setShowContact } = useApp()
  const [activePhase, setActivePhase] = useState(0)

  return (
    <section className="bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
          className="py-24 md:py-40"
        >
          <p className="text-warm-500 text-xs tracking-[0.25em] uppercase mb-6">
            For Startups
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-stone-900 leading-[1.4] mb-6">
            格式高きパートナーとして、
            <br />
            成長の全局面を支える。
          </h2>
          <div className="divider-gold" />
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-24 md:pb-40 border-b border-stone-200">
          {services.map(({ title, en, items }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fade}
            >
              <p className="text-warm-500 text-[10px] tracking-[0.3em] uppercase mb-2">
                {en}
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-4">
                {title}
              </h3>
              <div className="w-8 h-px bg-stone-300 mb-6" />
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-stone-500 text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-px before:bg-warm-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Growth Roadmap */}
        <div className="py-24 md:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-16"
          >
            <p className="text-warm-500 text-xs tracking-[0.25em] uppercase mb-6">
              Growth Roadmap
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-4">
              創業からIPOまで、伴走する。
            </h3>
            <div className="divider" />
          </motion.div>

          {/* Phase tabs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fade}
            className="flex gap-1 mb-12 overflow-x-auto scrollbar-hide"
          >
            {phases.map(({ label }, i) => (
              <button
                key={label}
                onClick={() => setActivePhase(i)}
                className={`relative px-5 py-2.5 text-sm tracking-wider whitespace-nowrap transition-colors duration-300 ${
                  i === activePhase
                    ? 'text-stone-900'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {label}
                {i === activePhase && (
                  <motion.div
                    layoutId="phaseUnderline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-stone-900"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Phase detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-t border-stone-200 pt-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="text-warm-500 text-xs tracking-[0.2em] uppercase mb-2">
                    {phases[activePhase].label}
                  </p>
                  <h4 className="font-serif text-lg md:text-xl font-light text-stone-900 mb-4">
                    {phases[activePhase].title}
                  </h4>
                  <p className="text-stone-500 text-sm leading-[2] mb-8">
                    {phases[activePhase].desc}
                  </p>
                  <button
                    onClick={() => setShowContact(true)}
                    className="group flex items-center gap-2 text-stone-900 hover:text-warm-700 transition-colors"
                  >
                    <span className="text-sm tracking-wider">このフェーズについて相談</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div>
                  <ul className="space-y-4">
                    {phases[activePhase].tasks.map((task, i) => (
                      <li key={task} className="flex items-start gap-4">
                        <span className="font-serif text-warm-400 text-sm mt-0.5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-stone-600 text-sm leading-relaxed">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Full-width image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="mb-24 md:mb-32"
        >
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=500&fit=crop"
              alt="洗練されたオフィス空間"
              className="w-full h-48 md:h-72 lg:h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="text-center pb-24 md:pb-40"
        >
          <button
            onClick={() => setShowContact(true)}
            className="group inline-flex items-center gap-3 text-stone-900 hover:text-warm-700 transition-colors"
          >
            <span className="font-serif text-lg tracking-wider font-light">
              スタートアップ向け無料相談
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="divider-gold mx-auto mt-6" />
        </motion.div>
      </div>
    </section>
  )
}
