import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useApp } from '../context/AppContext'

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const pillars = [
  {
    title: '契約・法務',
    en: 'Contract & Legal',
    lead: '契約書の作成・レビューから\n利用規約・プライバシーポリシーまで。',
    items: [
      '契約書レビュー・作成',
      '利用規約・プライバシーポリシー',
      '株主間契約（SHA）',
      '知的財産・商標出願',
    ],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&h=900&fit=crop',
    imageAlt: '契約 — 契約書を精査する弁護士',
  },
  {
    title: '顧問契約',
    en: 'Advisory',
    lead: '月額2万円〜の顧問プランで、\n日常的な法務相談をサポート。',
    items: [
      'お気軽プラン — 月2万円〜',
      '通常コンプライアンス — 月5万円〜',
      '社内コンプライアンス — 月10万円〜',
      'オーダーメイド対応',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&h=900&fit=crop',
    imageAlt: '顧問 — ビジネスパートナーとの相談',
  },
  {
    title: '資金調達・M&A',
    en: 'Finance & M&A',
    lead: '資金調達スキームの設計から\nM&A・IPO準備まで一気通貫で支援。',
    items: [
      'タームシート・投資契約',
      'バリュエーション算定',
      'M&Aデューデリジェンス',
      'IPO準備・内部統制',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop',
    imageAlt: '投資 — 成長戦略の議論',
  },
]

const industries = [
  'IT・アプリ・Web',
  '飲食',
  '製造',
  '医療',
  '教育',
  'コンサルティング',
  'インターネット',
  'その他',
]

const phases = [
  {
    id: 'seed',
    label: '創業期',
    title: '創業期',
    desc: '会社設立からファーストラウンドまで。定款作成、創業者間契約、初期の法務体制を整備します。',
    tasks: ['定款作成・登記サポート', '創業者間契約（SHA）', '利用規約・PP作成', '初期顧問契約'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
  },
  {
    id: 'growth',
    label: '成長期',
    title: '成長期',
    desc: '資金調達とプロダクト拡大。投資契約書のドラフトから知財戦略まで一気通貫で支援します。',
    tasks: ['タームシート交渉', '投資契約書レビュー', '知財・商標出願', '法務デューデリジェンス'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop',
  },
  {
    id: 'expansion',
    label: '拡大期',
    title: '拡大期',
    desc: 'M&A・事業拡大・コンプライアンス体制の強化。事業のスケールに合わせた法務基盤を構築します。',
    tasks: ['M&Aデューデリジェンス', 'コンプライアンス体制構築', '社内規程整備', '労務管理支援'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop',
  },
  {
    id: 'ipo',
    label: 'IPO準備',
    title: 'IPO準備',
    desc: '証券審査から上場後ガバナンスまで、完全に伴走します。',
    tasks: ['Ⅰの部・Ⅱの部作成', '内部統制（J-SOX）', '証券会社対応', '開示書類レビュー'],
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1200&h=600&fit=crop',
  },
]

export default function StartupSection() {
  const { setShowContact } = useApp()
  const [activePhase, setActivePhase] = useState(0)

  return (
    <section className="bg-stone-50 overflow-hidden">

      {/* ━━━ Opening full-bleed image ━━━ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
      >
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1800&h=900&fit=crop"
          alt="ベンチャー企業のオフィス"
          className="w-full h-[45vh] md:h-[55vh] lg:h-[60vh] object-cover"
        />
      </motion.div>

      {/* ━━━ Section header ━━━ */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
          className="py-32 md:py-52"
        >
          <p className="text-warm-500 text-xs tracking-[0.4em] uppercase mb-10">
            Venture & Corporate Law
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.75rem] font-light text-stone-900 leading-[1.7] md:leading-[1.6] tracking-[0.04em] mb-10">
            ベンチャーの成長を、
            <br />
            法務で支える。
          </h2>
          <div className="divider-gold" />
          <p className="text-stone-500 text-sm md:text-base leading-[2.4] tracking-[0.06em] mt-12 max-w-lg">
            IT・飲食・製造・医療・教育・コンサルなど、
            幅広い業種のベンチャー企業・中小企業を
            契約書作成からIPO準備まで一貫して支援します。
          </p>
        </motion.div>
      </div>

      {/* ━━━ Three Pillars ━━━ */}
      {pillars.map(({ title, en, lead, items, image, imageAlt }, idx) => (
        <div key={en}>
          {/* 写真 — フルブリード */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-[35vh] md:h-[45vh] lg:h-[50vh] object-cover"
            />
          </motion.div>

          {/* コンテンツ */}
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-28 md:py-44">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fade}
            >
              {/* Number + En label */}
              <div className="flex items-baseline gap-6 mb-8">
                <span className="font-serif text-4xl md:text-5xl text-warm-300 font-light tracking-wider">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-warm-500 text-[10px] tracking-[0.4em] uppercase">
                  {en}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl font-light text-stone-900 tracking-[0.06em] mb-8">
                {title}
              </h3>

              <div className="w-10 h-px bg-warm-400 mb-10" />

              {/* Lead copy */}
              <p className="text-stone-600 text-base md:text-lg leading-[2.4] tracking-[0.06em] whitespace-pre-line mb-16 max-w-md">
                {lead}
              </p>

              {/* Items */}
              <ul className="space-y-6 max-w-md">
                {items.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-6"
                  >
                    <span className="font-serif text-warm-300 text-sm tracking-wider shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-stone-600 text-sm md:text-base tracking-[0.06em] leading-[2]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      ))}

      {/* ━━━ Industries ━━━ */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-28 md:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <p className="text-warm-500 text-xs tracking-[0.4em] uppercase mb-10">
              Industries
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 tracking-[0.04em] leading-[1.7] mb-12">
              対応業種
            </h3>
            <div className="divider mb-16" />
            <div className="flex flex-wrap gap-4">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="text-sm text-stone-600 tracking-[0.08em] border border-stone-200 px-5 py-2.5"
                >
                  {ind}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ━━━ Growth Roadmap ━━━ */}
      <div className="bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-32 md:py-52">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-24"
          >
            <p className="text-warm-500 text-xs tracking-[0.4em] uppercase mb-10">
              Growth Roadmap
            </p>
            <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-stone-900 tracking-[0.04em] leading-[1.7] mb-8">
              創業からIPOまで、
              <br />
              伴走する。
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
            className="flex gap-3 mb-16 overflow-x-auto scrollbar-hide"
          >
            {phases.map(({ label }, i) => (
              <button
                key={label}
                onClick={() => setActivePhase(i)}
                className={`relative px-6 py-3.5 text-sm tracking-[0.2em] whitespace-nowrap transition-colors duration-300 ${
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Phase image */}
              <div className="overflow-hidden mb-14">
                <img
                  src={phases[activePhase].image}
                  alt={phases[activePhase].title}
                  className="w-full h-48 md:h-64 lg:h-72 object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <p className="text-warm-500 text-xs tracking-[0.35em] uppercase mb-4">
                    {phases[activePhase].label}
                  </p>
                  <h4 className="font-serif text-xl md:text-2xl font-light text-stone-900 tracking-[0.04em] mb-6">
                    {phases[activePhase].title}
                  </h4>
                  <p className="text-stone-500 text-sm md:text-base leading-[2.4] tracking-[0.06em] mb-12">
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
                <div className="flex items-start">
                  <ul className="space-y-8">
                    {phases[activePhase].tasks.map((task, i) => (
                      <li key={task} className="flex items-start gap-6">
                        <span className="font-serif text-warm-300 text-lg tracking-wider shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-stone-600 text-sm md:text-base leading-[2.2] tracking-[0.06em]">
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
      </div>

      {/* ━━━ Closing full-bleed image ━━━ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&h=800&fit=crop"
          alt="都市のスカイライン — 成長の象徴"
          className="w-full h-[40vh] md:h-[50vh] lg:h-[55vh] object-cover"
        />
      </motion.div>

      {/* ━━━ CTA ━━━ */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="text-center py-32 md:py-48"
        >
          <p className="text-warm-500 text-xs tracking-[0.4em] uppercase mb-10">
            Contact Us
          </p>
          <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 tracking-[0.06em] leading-[1.7] mb-12">
            まずはお気軽に、
            <br />
            ご相談ください。
          </h3>
          <button
            onClick={() => setShowContact(true)}
            className="group inline-flex items-center gap-4 text-stone-900 hover:text-warm-700 transition-colors"
          >
            <span className="font-serif text-lg tracking-[0.15em] font-light">
              初回30分無料相談
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
          <div className="divider-gold mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  )
}
