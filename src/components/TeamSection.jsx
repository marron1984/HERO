import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Award,
  BookOpen,
  Briefcase,
  TrendingUp,
  GraduationCap,
  ChevronRight,
  Scale,
  PiggyBank,
} from 'lucide-react'
import { useApp } from '../context/AppContext'

const members = [
  {
    name: '丸野 悟史',
    role: '代表弁護士 / 公認会計士',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face',
    photoAlt: '信頼感のある弁護士 — スーツ姿の代表弁護士ポートレート',
    badges: ['弁護士', '公認会計士', 'エンジェル投資家'],
    bio: '東京大学法学部卒。大手法律事務所を経て独立。弁護士×公認会計士の資格を持ち、30社以上のスタートアップにエンジェル投資。法務・会計・投資の三位一体で企業成長を支援。',
    highlights: [
      { icon: Briefcase, text: '弁護士歴 15年' },
      { icon: TrendingUp, text: 'エンジェル投資 30社+' },
      { icon: Award, text: 'IPO支援実績 多数' },
    ],
  },
  {
    name: '佐藤 美咲',
    role: 'パートナー弁護士',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
    photoAlt: '女性弁護士のポートレート — プロフェッショナルな雰囲気',
    badges: ['弁護士', '交通事故専門'],
    bio: '交通事故案件を中心に3,000件以上の解決実績。被害者に寄り添い、保険会社との厳しい交渉で最大限の賠償を勝ち取る。',
    highlights: [
      { icon: Briefcase, text: '解決実績 3,000件+' },
      { icon: Award, text: '後遺障害認定率 93%' },
      { icon: BookOpen, text: '交通事故セミナー講師' },
    ],
  },
  {
    name: '田中 健一',
    role: 'Of Counsel / 税理士',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
    photoAlt: '税理士のポートレート — 経験豊富な印象',
    badges: ['税理士', 'CFO経験者'],
    bio: 'Big4出身。スタートアップの税務顧問として50社以上を担当。資金調達時のバリュエーション算定やDDにも精通。',
    highlights: [
      { icon: GraduationCap, text: 'Big4出身' },
      { icon: Briefcase, text: '顧問先 50社+' },
      { icon: TrendingUp, text: 'DD支援多数' },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function TeamSection() {
  const { segment } = useApp()
  const isStartup = segment === 'startup'
  const [expandedMember, setExpandedMember] = useState(null)

  return (
    <section className={`py-16 md:py-28 ${isStartup ? 'bg-[#0b1222]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16">
        {/* ─── Header ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="mb-14 md:mb-16 text-center md:text-left md:max-w-2xl"
        >
          <p className={`text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 ${
            isStartup ? 'text-gold-400' : 'text-royal-500'
          }`}>
            Our Team
          </p>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 ${
            isStartup ? 'text-white' : 'text-navy-900'
          }`}>
            弁護士×会計士×投資家
            <br />
            <span className={isStartup ? 'text-gold-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-royal-500 to-royal-400'}>
              異色のプロフェッショナル
            </span>
          </h2>
          <p className={`text-sm md:text-base leading-relaxed ${
            isStartup ? 'text-navy-300' : 'text-gray-600'
          }`}>
            リーガルテック × 投資 × 会計の知見を融合。
            従来の法律事務所にはない、ビジネスパーソン視点のリーガルサービスを提供します。
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            PC: Dashboard-style team grid
            ═══════════════════════════════════════════ */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-16">
          {members.map(({ name, role, photo, photoAlt, badges, bio, highlights }, i) => (
            <motion.div
              key={name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`rounded-2xl overflow-hidden group ${
                isStartup
                  ? 'glass hover:ring-1 hover:ring-gold-500/20'
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl'
              } transition-all`}
            >
              <div className="relative h-60 lg:h-64 overflow-hidden">
                <img
                  src={photo}
                  alt={photoAlt}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isStartup ? 'from-[#0b1222] via-[#0b1222]/40 to-transparent' : 'from-white via-white/40 to-transparent'
                }`} />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className={`text-xl font-bold ${isStartup ? 'text-white' : 'text-navy-900'}`}>
                    {name}
                  </h3>
                  <p className={`text-xs ${isStartup ? 'text-navy-300' : 'text-gray-500'}`}>
                    {role}
                  </p>
                </div>
              </div>
              <div className="p-5 lg:p-6">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                        isStartup
                          ? 'bg-gold-500/10 text-gold-400 border border-gold-500/20'
                          : 'bg-royal-50 text-royal-600 border border-royal-100'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <p className={`text-xs leading-relaxed mb-5 ${isStartup ? 'text-navy-300' : 'text-gray-600'}`}>
                  {bio}
                </p>
                <div className="space-y-2.5">
                  {highlights.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isStartup ? 'text-gold-400' : 'text-royal-500'}`} />
                      <span className={`text-xs font-medium ${isStartup ? 'text-navy-200' : 'text-gray-700'}`}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            Mobile: Expandable card list
            ═══════════════════════════════════════════ */}
        <div className="md:hidden space-y-3 mb-14">
          {members.map(({ name, role, photo, photoAlt, badges, bio, highlights }, i) => (
            <motion.div
              key={name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <button
                onClick={() => setExpandedMember(expandedMember === i ? null : i)}
                className={`w-full rounded-xl p-4 text-left transition-all ${
                  isStartup
                    ? `glass ${expandedMember === i ? 'ring-1 ring-gold-500/30' : ''}`
                    : `bg-white border border-gray-100 shadow-sm ${expandedMember === i ? 'ring-1 ring-royal-500/30' : ''}`
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={photo}
                    alt={photoAlt}
                    className="w-14 h-14 rounded-xl object-cover object-top shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold ${isStartup ? 'text-white' : 'text-navy-900'}`}>{name}</h3>
                    <p className={`text-xs ${isStartup ? 'text-navy-400' : 'text-gray-500'}`}>{role}</p>
                    <div className="flex gap-1 mt-1">
                      {badges.slice(0, 2).map((badge) => (
                        <span key={badge} className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                          isStartup ? 'bg-gold-500/10 text-gold-400' : 'bg-royal-50 text-royal-600'
                        }`}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform shrink-0 ${
                    expandedMember === i ? 'rotate-90' : ''
                  } ${isStartup ? 'text-navy-400' : 'text-gray-400'}`} />
                </div>

                <AnimatePresence>
                  {expandedMember === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className={`text-xs leading-relaxed mt-3 mb-3 ${isStartup ? 'text-navy-300' : 'text-gray-600'}`}>
                        {bio}
                      </p>
                      <div className="space-y-2">
                        {highlights.map(({ icon: Icon, text }) => (
                          <div key={text} className="flex items-center gap-2">
                            <Icon className={`w-3.5 h-3.5 ${isStartup ? 'text-gold-400' : 'text-royal-500'}`} />
                            <span className={`text-xs ${isStartup ? 'text-navy-200' : 'text-gray-700'}`}>{text}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            Trinity Infographic — Interactive
            ═══════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={`rounded-2xl p-6 md:p-10 ${
            isStartup ? 'glass' : 'bg-gradient-to-r from-royal-50 to-royal-100 border border-royal-200'
          }`}
        >
          <h3 className={`text-lg md:text-2xl font-bold mb-8 text-center ${
            isStartup ? 'text-white' : 'text-navy-900'
          }`}>
            三位一体のバリュー
          </h3>

          {/* Interactive trinity diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {[
              { label: '法務', sub: 'Legal', icon: Scale, color: isStartup ? 'bg-gold-500' : 'bg-royal-500' },
              { label: '会計', sub: 'Accounting', icon: PiggyBank, color: isStartup ? 'bg-emerald-500' : 'bg-blue-500' },
              { label: '投資', sub: 'Investment', icon: TrendingUp, color: isStartup ? 'bg-electric-500' : 'bg-purple-500' },
            ].map(({ label, sub, icon: Icon, color }, idx) => (
              <div key={label} className="flex items-center gap-6 md:gap-10">
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  className="text-center cursor-default"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${color} flex items-center justify-center mx-auto mb-2 shadow-lg`}>
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className={`font-bold text-base md:text-lg ${isStartup ? 'text-white' : 'text-navy-900'}`}>
                    {label}
                  </div>
                  <div className={`text-[10px] uppercase tracking-widest ${isStartup ? 'text-navy-400' : 'text-gray-400'}`}>
                    {sub}
                  </div>
                </motion.div>
                {idx < 2 && (
                  <span className={`text-2xl md:text-3xl font-light ${isStartup ? 'text-gold-500' : 'text-royal-400'}`}>
                    ×
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className={`mt-8 text-sm max-w-xl mx-auto text-center ${isStartup ? 'text-navy-300' : 'text-gray-600'}`}>
            3つの専門性を一つのチームに統合することで、
            従来の分業体制では実現できなかった、シームレスで高品質なサービスを提供します。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
