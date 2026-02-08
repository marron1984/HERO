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

const practiceAreas = [
  {
    num: '01',
    title: '交通事故',
    desc: '後遺障害認定・示談交渉・訴訟まで、被害者に寄り添い適正な賠償を実現します。弁護士費用特約ご利用で自己負担0円。',
  },
  {
    num: '02',
    title: '離婚・男女問題',
    desc: '財産分与・親権・養育費・慰謝料など、ご家庭のデリケートな問題を丁寧にサポートします。',
  },
  {
    num: '03',
    title: '労働問題',
    desc: '不当解雇・残業代請求・ハラスメントなど、労働者の権利を守るために全力で取り組みます。',
  },
  {
    num: '04',
    title: '消費者被害',
    desc: '詐欺・悪質商法・インターネットトラブルなど、消費者被害の回復を支援します。',
  },
]

const flowSteps = [
  {
    num: '01',
    title: '無料相談',
    desc: '電話・フォームからお気軽に。初回30分は弁護士が直接対応いたします。',
  },
  {
    num: '02',
    title: '調査・方針策定',
    desc: '事実関係を精査し、ご依頼者様にとって最善の戦略を立案します。',
  },
  {
    num: '03',
    title: '交渉・訴訟',
    desc: '相手方との交渉を進め、必要に応じて訴訟も辞さず適正な解決を目指します。',
  },
  {
    num: '04',
    title: '解決',
    desc: '最善の結果を勝ち取り、解決へ導きます。アフターフォローも万全です。',
  },
]

const fees = [
  { label: '法律相談', detail: '初回30分無料', sub: '以後30分 5,000円（税抜）' },
  { label: '着手金（示談交渉）', detail: '15万円〜', sub: null },
  { label: '着手金（調停事件）', detail: '20万円〜', sub: null },
  { label: '着手金（訴訟事件）', detail: '30万円〜', sub: null },
]

export default function IndividualSection() {
  const { setShowContact } = useApp()

  return (
    <section className="bg-white overflow-hidden">
      {/* Full-bleed opening image */}
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
            あなたの権利を、
            <br />
            全力で守り抜く。
          </h2>
          <div className="divider-gold" />
          <p className="text-stone-500 text-sm md:text-base leading-[2.2] tracking-[0.05em] mt-10 max-w-xl">
            交通事故・離婚・労働問題・消費者被害など、
            個人の方が直面する法的トラブルに寄り添い、
            初回30分無料でご相談をお受けします。
          </p>
        </motion.div>

        {/* Practice Areas */}
        <div className="border-t border-stone-100 py-28 md:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-20"
          >
            <p className="text-warm-500 text-xs tracking-[0.35em] uppercase mb-8">
              Practice Areas
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 tracking-[0.04em]">
              取扱分野
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {practiceAreas.map(({ num, title, desc }, i) => (
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

        {/* Fees */}
        <div className="border-t border-stone-100 py-28 md:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-20"
          >
            <p className="text-warm-500 text-xs tracking-[0.35em] uppercase mb-8">
              Fees
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 tracking-[0.04em]">
              弁護士費用
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {fees.map(({ label, detail, sub }, i) => (
              <motion.div
                key={label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fade}
                className="border-t border-stone-200 pt-8"
              >
                <p className="text-stone-500 text-xs tracking-[0.2em] mb-4">{label}</p>
                <div className="font-serif text-2xl md:text-3xl text-stone-900 font-light tracking-wider">
                  {detail}
                </div>
                {sub && (
                  <p className="text-stone-400 text-sm mt-3 tracking-[0.06em]">{sub}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mt-16 p-6 bg-warm-50 border border-warm-100"
          >
            <p className="text-stone-600 text-sm leading-[2.2] tracking-[0.05em]">
              ※交通事故は<span className="text-warm-700 font-medium">弁護士費用特約</span>のご利用で自己負担0円となります。
              詳しくはお気軽にお問い合わせください。
            </p>
          </motion.div>
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
              初回30分無料相談はこちら
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
          <p className="text-stone-400 text-xs mt-6 tracking-[0.2em]">
            TEL 06-6944-8811（平日 9:00〜18:00）
          </p>
        </motion.div>
      </div>
    </section>
  )
}
