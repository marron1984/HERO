import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Rocket, TrendingUp, ArrowRight, Scale } from 'lucide-react'
import { useApp } from '../context/AppContext'

const startupStats = [
  { label: '支援スタートアップ', value: '200+', icon: Rocket },
  { label: '累計調達支援額', value: '150億+', icon: TrendingUp },
  { label: '代表自身の投資先', value: '30社+', icon: Scale },
]

const individualStats = [
  { label: '交通事故解決実績', value: '3,000+', icon: Shield },
  { label: '依頼者満足度', value: '98.5%', icon: TrendingUp },
  { label: '後遺障害認定率', value: '93%', icon: Scale },
]

export default function HeroSection() {
  const { segment, setSegment, setShowContact } = useApp()
  const isStartup = segment === 'startup'

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        {isStartup ? (
          <motion.div
            key="startup-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
          >
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
                  backgroundSize: '60px 60px',
                }}
              />
            </div>
            {/* Glow orbs */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-0 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl" />
          </motion.div>
        ) : (
          <motion.div
            key="individual-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-br from-royal-50 via-white to-royal-100"
          >
            <div className="absolute top-10 right-0 w-80 h-80 bg-royal-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-royal-200/30 rounded-full blur-3xl" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col flex-1 px-5 pt-16 pb-8 max-w-6xl mx-auto w-full">
        {/* Logo & Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                isStartup ? 'bg-gold-500' : 'bg-royal-500'
              }`}
            >
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-lg font-bold tracking-tight ${
                isStartup ? 'text-white' : 'text-navy-900'
              }`}
            >
              LEGAL HERO
            </span>
          </div>
        </motion.div>

        {/* Segment Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10"
        >
          <div
            className={`inline-flex rounded-full p-1 ${
              isStartup ? 'bg-navy-800/80 border border-navy-700' : 'bg-royal-100 border border-royal-200'
            }`}
          >
            <button
              onClick={() => setSegment('startup')}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isStartup
                  ? 'text-navy-950'
                  : isStartup
                    ? 'text-navy-300 hover:text-navy-200'
                    : 'text-royal-500 hover:text-royal-600'
              }`}
            >
              {isStartup && (
                <motion.div
                  layoutId="segmentPill"
                  className="absolute inset-0 bg-gold-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">スタートアップ</span>
            </button>
            <button
              onClick={() => setSegment('individual')}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isStartup
                  ? 'text-white'
                  : isStartup
                    ? 'text-navy-300 hover:text-navy-200'
                    : 'text-royal-500 hover:text-royal-600'
              }`}
            >
              {!isStartup && (
                <motion.div
                  layoutId="segmentPill"
                  className="absolute inset-0 bg-royal-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">個人のお客様</span>
            </button>
          </div>
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={segment}
            initial={{ opacity: 0, x: isStartup ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isStartup ? 30 : -30 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex flex-col justify-center"
          >
            {isStartup ? (
              <>
                <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
                  Legal × Accounting × Investment
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                  スタートアップの
                  <br />
                  <span className="text-gold-400">成長を加速</span>させる
                  <br />
                  統合リーガルOS
                </h1>
                <p className="text-navy-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                  弁護士×公認会計士×エンジェル投資家。
                  <br className="hidden sm:block" />
                  創業から IPO まで、法務・税務・資金調達を
                  <br className="hidden sm:block" />
                  ワンストップで伴走する唯一のファーム。
                </p>
              </>
            ) : (
              <>
                <p className="text-royal-500 text-sm font-semibold tracking-widest uppercase mb-3">
                  あなたの権利を、全力で守る。
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 leading-tight mb-4">
                  交通事故被害に
                  <br />
                  <span className="text-royal-500">最大限の補償</span>を
                  <br />
                  実現します
                </h1>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                  3,000件以上の解決実績。後遺障害認定・示談交渉・訴訟まで、
                  <br className="hidden sm:block" />
                  被害者様に寄り添い、適正な賠償額を勝ち取ります。
                </p>
              </>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowContact(true)}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold shadow-lg transition-shadow ${
                  isStartup
                    ? 'bg-gold-500 text-navy-950 hover:shadow-gold-500/30'
                    : 'bg-royal-500 text-white hover:shadow-royal-500/30'
                }`}
              >
                無料相談する
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold border transition-colors ${
                  isStartup
                    ? 'border-navy-600 text-navy-200 hover:bg-navy-800'
                    : 'border-royal-200 text-royal-600 hover:bg-royal-50'
                }`}
              >
                {isStartup ? 'サービス一覧' : '解決事例を見る'}
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {(isStartup ? startupStats : individualStats).map(
                ({ label, value, icon: Icon }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className={`rounded-xl p-3 sm:p-4 text-center ${
                      isStartup
                        ? 'bg-navy-800/60 border border-navy-700/50 backdrop-blur-sm'
                        : 'bg-white/80 border border-royal-100 backdrop-blur-sm shadow-sm'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 mx-auto mb-1 ${
                        isStartup ? 'text-gold-400' : 'text-royal-500'
                      }`}
                    />
                    <div
                      className={`text-xl sm:text-2xl font-extrabold ${
                        isStartup ? 'text-white' : 'text-navy-900'
                      }`}
                    >
                      {value}
                    </div>
                    <div
                      className={`text-[10px] sm:text-xs mt-0.5 ${
                        isStartup ? 'text-navy-400' : 'text-gray-500'
                      }`}
                    >
                      {label}
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
