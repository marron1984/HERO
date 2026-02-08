import { motion } from 'framer-motion'
import {
  Award,
  BookOpen,
  Briefcase,
  TrendingUp,
  GraduationCap,
} from 'lucide-react'
import { useApp } from '../context/AppContext'

const members = [
  {
    name: '丸野 悟史',
    role: '代表弁護士 / 公認会計士',
    photo:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face',
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
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
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
    photo:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
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

  return (
    <section
      className={`py-16 sm:py-24 ${
        isStartup ? 'bg-navy-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <p
            className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
              isStartup ? 'text-gold-400' : 'text-royal-500'
            }`}
          >
            Our Team
          </p>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-4 ${
              isStartup ? 'text-white' : 'text-navy-900'
            }`}
          >
            弁護士×会計士×投資家
            <br />
            <span className={isStartup ? 'text-gold-400' : 'text-royal-500'}>
              異色のプロフェッショナル
            </span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-sm sm:text-base leading-relaxed ${
              isStartup ? 'text-navy-300' : 'text-gray-600'
            }`}
          >
            リーガルテック × 投資 × 会計の知見を融合。
            従来の法律事務所にはない、ビジネスパーソン視点のリーガルサービスを提供します。
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map(
            ({ name, role, photo, photoAlt, badges, bio, highlights }, i) => (
              <motion.div
                key={name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`rounded-2xl overflow-hidden ${
                  isStartup
                    ? 'bg-navy-800 border border-navy-700/50'
                    : 'bg-white border border-gray-100 shadow-sm'
                }`}
              >
                {/* Photo */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={photo}
                    alt={photoAlt}
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isStartup
                        ? 'from-navy-800 via-navy-800/30 to-transparent'
                        : 'from-white via-white/30 to-transparent'
                    }`}
                  />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3
                      className={`text-lg font-bold ${
                        isStartup ? 'text-white' : 'text-navy-900'
                      }`}
                    >
                      {name}
                    </h3>
                    <p
                      className={`text-xs ${
                        isStartup ? 'text-navy-300' : 'text-gray-500'
                      }`}
                    >
                      {role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {badges.map((badge) => (
                      <span
                        key={badge}
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          isStartup
                            ? 'bg-gold-500/10 text-gold-400 border border-gold-500/20'
                            : 'bg-royal-50 text-royal-600 border border-royal-100'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      isStartup ? 'text-navy-300' : 'text-gray-600'
                    }`}
                  >
                    {bio}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {highlights.map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-2">
                        <Icon
                          className={`w-3.5 h-3.5 ${
                            isStartup ? 'text-gold-400' : 'text-royal-500'
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            isStartup ? 'text-navy-200' : 'text-gray-700'
                          }`}
                        >
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* Trust Infographic */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={`mt-16 rounded-2xl p-6 sm:p-8 text-center ${
            isStartup
              ? 'bg-gradient-to-r from-navy-800 to-navy-700 border border-navy-600/50'
              : 'bg-gradient-to-r from-royal-50 to-royal-100 border border-royal-200'
          }`}
        >
          <h3
            className={`text-lg sm:text-xl font-bold mb-6 ${
              isStartup ? 'text-white' : 'text-navy-900'
            }`}
          >
            三位一体のバリュー
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {[
              { label: '法務', sub: 'Legal', icon: '⚖️' },
              { label: '会計', sub: 'Accounting', icon: '📊' },
              { label: '投資', sub: 'Investment', icon: '📈' },
            ].map(({ label, sub, icon }, idx) => (
              <div key={label} className="flex items-center gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-3xl mb-1">{icon}</div>
                  <div
                    className={`font-bold ${
                      isStartup ? 'text-white' : 'text-navy-900'
                    }`}
                  >
                    {label}
                  </div>
                  <div
                    className={`text-[10px] uppercase tracking-widest ${
                      isStartup ? 'text-navy-400' : 'text-gray-400'
                    }`}
                  >
                    {sub}
                  </div>
                </div>
                {idx < 2 && (
                  <span
                    className={`text-2xl font-light ${
                      isStartup ? 'text-gold-500' : 'text-royal-400'
                    }`}
                  >
                    ×
                  </span>
                )}
              </div>
            ))}
          </div>
          <p
            className={`mt-6 text-sm max-w-xl mx-auto ${
              isStartup ? 'text-navy-300' : 'text-gray-600'
            }`}
          >
            3つの専門性を一つのチームに統合することで、
            従来の分業体制では実現できなかった、シームレスで高品質なサービスを提供します。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
