import { motion } from 'framer-motion'
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

const flowSteps = [
  {
    num: '01',
    title: '無料相談',
    desc: '電話・LINE・フォームからお気軽に。初回から弁護士が直接対応いたします。',
  },
  {
    num: '02',
    title: '調査・資料収集',
    desc: '事故状況・医療記録を精査し、最適な戦略を立案します。',
  },
  {
    num: '03',
    title: '示談交渉',
    desc: '弁護士基準で算定し、保険会社の低額提示を徹底的に是正します。',
  },
  {
    num: '04',
    title: '訴訟・解決',
    desc: '示談が不成立の場合は訴訟も辞さず。全力で適正額を勝ち取ります。',
  },
]

const results = [
  { category: '後遺障害14級', before: '75万円', after: '320万円', increase: '4.3倍' },
  { category: '後遺障害12級', before: '250万円', after: '830万円', increase: '3.3倍' },
  { category: '死亡事故', before: '3,500万円', after: '7,200万円', increase: '2.1倍' },
]

export default function IndividualSection() {
  const { setShowContact } = useApp()

  return (
    <section className="bg-white overflow-hidden">
      {/* Full-bleed opening image — ドーンと */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
      >
        <div className="w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&h=900&fit=crop"
            alt="信頼感のある弁護士 — 依頼者との面談シーン"
            className="w-full h-[40vh] md:h-[50vh] lg:h-[55vh] object-cover"
          />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
          className="py-28 md:py-44"
        >
          <p className="text-warm-500 text-xs tracking-[0.35em] uppercase mb-8">
            For Individuals
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-stone-900 leading-[1.6] tracking-[0.04em] mb-8">
            交通事故被害者を、
            <br />
            全力で守り抜く。
          </h2>
          <div className="divider-gold" />
          <p className="text-stone-500 text-sm md:text-base leading-[2.2] tracking-[0.05em] mt-10 max-w-xl">
            保険会社の提示額に納得できていますか？
            当事務所では平均して提示額の2〜4倍の増額を実現しています。
          </p>
        </motion.div>

        {/* Resolution Flow */}
        <div className="border-t border-stone-100 py-28 md:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-20"
          >
            <p className="text-warm-500 text-xs tracking-[0.35em] uppercase mb-8">
              Process
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 tracking-[0.04em]">
              ご相談から解決までの流れ
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10">
            {flowSteps.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fade}
              >
                <span className="font-serif text-warm-300 text-3xl md:text-4xl font-light tracking-wider">
                  {num}
                </span>
                <h4 className="text-stone-900 text-base font-medium tracking-[0.08em] mt-4 mb-3">
                  {title}
                </h4>
                <p className="text-stone-500 text-sm leading-[2.2] tracking-[0.05em]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="border-t border-stone-100 py-28 md:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-20"
          >
            <p className="text-warm-500 text-xs tracking-[0.35em] uppercase mb-8">
              Results
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 tracking-[0.04em]">
              解決実績
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {results.map(({ category, before, after, increase }, i) => (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fade}
                className="border-t border-stone-200 pt-8"
              >
                <p className="text-warm-500 text-xs tracking-[0.2em] mb-6">{category}</p>
                <div className="mb-4">
                  <span className="text-stone-400 text-xs tracking-[0.15em]">保険会社提示</span>
                  <div className="text-stone-400 text-sm line-through mt-2 tracking-wider">{before}</div>
                </div>
                <div className="mb-5">
                  <span className="text-stone-400 text-xs tracking-[0.15em]">最終獲得額</span>
                  <div className="font-serif text-3xl md:text-4xl text-stone-900 font-light mt-2 tracking-wider">
                    {after}
                  </div>
                </div>
                <span className="text-accent-green text-sm font-medium tracking-wider">
                  {increase}に増額
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second big image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="-mx-6 md:-mx-16 lg:-mx-24 mb-28 md:mb-36"
        >
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&h=800&fit=crop"
            alt="握手 — 解決と信頼の象徴"
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
              無料相談はこちら
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
          <p className="text-stone-400 text-xs mt-6 tracking-[0.2em]">
            24時間受付・土日祝も対応
          </p>
        </motion.div>
      </div>
    </section>
  )
}
