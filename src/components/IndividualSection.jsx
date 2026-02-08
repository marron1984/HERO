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
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
          className="py-24 md:py-40"
        >
          <p className="text-warm-500 text-xs tracking-[0.25em] uppercase mb-6">
            For Individuals
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-stone-900 leading-[1.4] mb-6">
            交通事故被害者を、
            <br />
            全力で守り抜く。
          </h2>
          <div className="divider-gold" />
          <p className="text-stone-500 text-sm md:text-base leading-[2] mt-8 max-w-xl">
            保険会社の提示額に納得できていますか？
            当事務所では平均して提示額の2〜4倍の増額を実現しています。
          </p>
        </motion.div>

        {/* Resolution Flow */}
        <div className="border-t border-stone-100 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-16"
          >
            <p className="text-warm-500 text-xs tracking-[0.25em] uppercase mb-6">
              Process
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900">
              ご相談から解決までの流れ
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {flowSteps.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fade}
              >
                <span className="font-serif text-warm-300 text-2xl md:text-3xl font-light">
                  {num}
                </span>
                <h4 className="text-stone-900 text-base font-medium mt-3 mb-2">
                  {title}
                </h4>
                <p className="text-stone-500 text-sm leading-[2]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="border-t border-stone-100 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-16"
          >
            <p className="text-warm-500 text-xs tracking-[0.25em] uppercase mb-6">
              Results
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900">
              解決実績
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {results.map(({ category, before, after, increase }, i) => (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fade}
                className="border-t border-stone-200 pt-6"
              >
                <p className="text-warm-500 text-xs tracking-wider mb-4">{category}</p>
                <div className="mb-3">
                  <span className="text-stone-400 text-xs tracking-wider">保険会社提示</span>
                  <div className="text-stone-400 text-sm line-through mt-1">{before}</div>
                </div>
                <div className="mb-4">
                  <span className="text-stone-400 text-xs tracking-wider">最終獲得額</span>
                  <div className="font-serif text-2xl md:text-3xl text-stone-900 font-light mt-1">
                    {after}
                  </div>
                </div>
                <span className="text-accent-green text-sm font-medium">
                  {increase}に増額
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="mb-24 md:mb-32"
        >
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&h=500&fit=crop"
              alt="信頼感のある弁護士"
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
              無料相談はこちら
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-stone-400 text-xs mt-4 tracking-wider">
            24時間受付・土日祝も対応
          </p>
        </motion.div>
      </div>
    </section>
  )
}
