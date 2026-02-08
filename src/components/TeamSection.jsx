import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const members = [
  {
    name: '丸野 悟史',
    role: '代表弁護士 / 公認会計士',
    photo:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face',
    credentials: ['弁護士', '公認会計士', 'エンジェル投資家'],
    bio: '東京大学法学部卒。大手法律事務所を経て独立。弁護士×公認会計士の資格を持ち、30社以上のスタートアップにエンジェル投資。',
  },
  {
    name: '佐藤 美咲',
    role: 'パートナー弁護士',
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
    credentials: ['弁護士', '交通事故専門'],
    bio: '交通事故案件を中心に3,000件以上の解決実績。被害者に寄り添い、保険会社との交渉で最大限の賠償を勝ち取る。',
  },
  {
    name: '田中 健一',
    role: 'Of Counsel / 税理士',
    photo:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
    credentials: ['税理士', 'CFO経験者'],
    bio: 'Big4出身。スタートアップの税務顧問として50社以上を担当。資金調達時のバリュエーション算定にも精通。',
  },
]

export default function TeamSection() {
  const { segment } = useApp()

  return (
    <section className="bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-40">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
          className="mb-20 md:mb-24"
        >
          <p className="text-warm-500 text-xs tracking-[0.25em] uppercase mb-6">
            Our Team
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-stone-900 leading-[1.4] mb-6">
            法律、会計、投資。
            <br />
            三領域の専門家。
          </h2>
          <div className="divider" />
        </motion.div>

        {/* Trinity circles — static, minimal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="flex justify-center mb-24 md:mb-32"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            {/* Circle 1 — Legal */}
            <div className="absolute w-[55%] h-[55%] rounded-full border border-warm-300 left-1/2 top-[15%] -translate-x-[75%] flex items-center justify-center">
              <div className="text-center">
                <div className="font-serif text-stone-700 text-sm">法務</div>
                <div className="text-[9px] text-warm-400 tracking-widest uppercase">Legal</div>
              </div>
            </div>
            {/* Circle 2 — Accounting */}
            <div className="absolute w-[55%] h-[55%] rounded-full border border-warm-300 left-1/2 top-[15%] -translate-x-[25%] flex items-center justify-center">
              <div className="text-center">
                <div className="font-serif text-stone-700 text-sm">会計</div>
                <div className="text-[9px] text-warm-400 tracking-widest uppercase">Accounting</div>
              </div>
            </div>
            {/* Circle 3 — Investment */}
            <div className="absolute w-[55%] h-[55%] rounded-full border border-warm-300 left-1/2 bottom-[10%] -translate-x-1/2 flex items-center justify-center">
              <div className="text-center">
                <div className="font-serif text-stone-700 text-sm">投資</div>
                <div className="text-[9px] text-warm-400 tracking-widest uppercase">Investment</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Member cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {members.map(({ name, role, photo, credentials, bio }, i) => (
            <motion.div
              key={name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fade}
            >
              {/* Photo */}
              <div className="overflow-hidden mb-6">
                <img
                  src={photo}
                  alt={name}
                  className="w-full h-72 md:h-80 object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Info */}
              <h3 className="font-serif text-lg text-stone-900 font-light mb-1">
                {name}
              </h3>
              <p className="text-stone-500 text-xs tracking-wider mb-3">{role}</p>

              <div className="flex gap-2 mb-4">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="text-[10px] text-warm-600 tracking-wider border border-warm-200 px-2 py-0.5"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <p className="text-stone-500 text-sm leading-[2]">{bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
