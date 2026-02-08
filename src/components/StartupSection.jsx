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
      {/* Full-bleed opening image — ドーンと */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
      >
        <div className="w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1800&h=900&fit=crop"
            alt="チームの議論 — スタートアップチームがプロダクトを議論するシーン"
            className="w-full h-[40vh] md:h-[50vh] lg:h-[55vh] object-cover"
          />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
          className="py-28 md:py-44"
        >
          <p className="text-warm-500 text-xs tracking-[0.35em] uppercase mb-8">
            For Startups
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-stone-900 leading-[1.6] tracking-[0.04em] mb-8">
            格式高きパートナーとして、
            <br />
            成長の全局面を支える。
          </h2>
          <div className="divider-gold" />
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 pb-28 md:pb-44 border-b border-stone-200">
          {services.map(({ title, en, items }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fade}
            >
              <p className="text-warm-500 text-[10px] tracking-[0.4em] uppercase mb-3">
                {en}
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 tracking-[0.04em] mb-5">
                {title}
              </h3>
              <div className="w-8 h-px bg-stone-300 mb-8" />
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-stone-500 text-sm tracking-[0.05em] leading-[2] pl-5 relative before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-px before:bg-warm-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Growth Roadmap */}
        <div className="py-28 md:py-44">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-20"
          >
            <p className="text-warm-500 text-xs tracking-[0.35em] uppercase mb-8">
              Growth Roadmap
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 tracking-[0.04em] mb-6">
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
            className="flex gap-2 mb-14 overflow-x-auto scrollbar-hide"
          >
            {phases.map(({ label }, i) => (
              <button
                key={label}
                onClick={() => setActivePhase(i)}
                className={`relative px-6 py-3 text-sm tracking-[0.15em] whitespace-nowrap transition-colors duration-300 ${
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
              className="border-t border-stone-200 pt-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-warm-500 text-xs tracking-[0.3em] uppercase mb-3">
                    {phases[activePhase].label}
                  </p>
                  <h4 className="font-serif text-lg md:text-xl font-light text-stone-900 tracking-[0.04em] mb-5">
                    {phases[activePhase].title}
                  </h4>
                  <p className="text-stone-500 text-sm leading-[2.2] tracking-[0.05em] mb-10">
                    {phases[activePhase].desc}
                  </p>
                  <button
                    onClick={() => setShowContact(true)}
                    className="group flex items-center gap-3 text-stone-900 hover:text-warm-700 transition-colors"
                  >
                    <span className="text-sm tracking-[0.15em]">このフェーズについて相談</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div>
                  <ul className="space-y-6">
                    {phases[activePhase].tasks.map((task, i) => (
                      <li key={task} className="flex items-start gap-5">
                        <span className="font-serif text-warm-400 text-sm tracking-wider mt-0.5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-stone-600 text-sm leading-[2] tracking-[0.05em]">
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

        {/* Second full-bleed image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="-mx-6 md:-mx-16 lg:-mx-24 mb-28 md:mb-36"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&h=800&fit=crop"
            alt="都市の高層ビル — 成長を象徴するスカイライン"
            className="w-full h-[35vh] md:h-[45vh] lg:h-[50vh] object-cover"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="text-center pb-28 md:pb-44"
        >
          <button
            onClick={() => setShowContact(true)}
            className="group inline-flex items-center gap-4 text-stone-900 hover:text-warm-700 transition-colors"
          >
            <span className="font-serif text-lg tracking-[0.15em] font-light">
              スタートアップ向け無料相談
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
          <div className="divider-gold mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  )
}
