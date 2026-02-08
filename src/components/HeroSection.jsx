import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Rocket, TrendingUp, ArrowRight, Scale, Zap, Play } from 'lucide-react'
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

/* ─── Animated counter for stats ─── */
function CountUp({ value }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {value}
    </motion.span>
  )
}

export default function HeroSection() {
  const { segment, setSegment, setShowContact } = useApp()
  const isStartup = segment === 'startup'

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* ─── Background ─── */}
      <AnimatePresence mode="wait">
        {isStartup ? (
          <motion.div
            key="startup-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 bg-[#0F172A]"
          >
            {/* Dot grid pattern */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(rgba(201,168,76,0.8) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            {/* Glow orbs */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-electric-500/5 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-navy-600/10 rounded-full blur-[100px]" />
          </motion.div>
        ) : (
          <motion.div
            key="individual-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 bg-gradient-to-br from-white via-royal-50/50 to-white"
          >
            <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-royal-300/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-royal-200/20 rounded-full blur-[100px]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Content ─── */}
      <div className="relative z-10 flex flex-col flex-1 px-5 md:px-12 lg:px-16 pt-20 md:pt-28 pb-8 max-w-7xl mx-auto w-full">
        {/* Mobile logo (hidden on md+, desktop uses DesktopNav) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6 md:hidden"
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isStartup ? 'bg-gold-500' : 'bg-royal-500'}`}>
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className={`text-lg font-bold tracking-tight ${isStartup ? 'text-white' : 'text-navy-900'}`}>
            LEGAL HERO
          </span>
        </motion.div>

        {/* Segment Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <div className={`inline-flex rounded-full p-1 ${
            isStartup ? 'bg-white/5 border border-white/10' : 'bg-royal-100/80 border border-royal-200/80'
          }`}>
            <button
              onClick={() => setSegment('startup')}
              className={`relative px-5 py-2 md:px-7 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isStartup ? 'text-navy-950' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {isStartup && (
                <motion.div
                  layoutId="segmentPill"
                  className="absolute inset-0 bg-gold-500 rounded-full shadow-lg shadow-gold-500/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Rocket className="w-3.5 h-3.5" />
                スタートアップ
              </span>
            </button>
            <button
              onClick={() => setSegment('individual')}
              className={`relative px-5 py-2 md:px-7 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                !isStartup ? 'text-white' : isStartup ? 'text-navy-300 hover:text-navy-200' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {!isStartup && (
                <motion.div
                  layoutId="segmentPill"
                  className="absolute inset-0 bg-royal-500 rounded-full shadow-lg shadow-royal-500/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                個人のお客様
              </span>
            </button>
          </div>
        </motion.div>

        {/* ─── Main: PC Split Layout ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={segment}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className="flex-1 flex flex-col justify-center"
          >
            <div className="flex flex-col md:flex-row md:items-center md:gap-16 lg:gap-24">
              {/* Left: Copy */}
              <div className="flex-1 md:max-w-xl">
                {isStartup ? (
                  <>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-gold-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 flex items-center gap-2"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      Legal × Accounting × Investment
                    </motion.p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-5">
                      スタートアップの
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
                        成長を加速
                      </span>させる
                      <br />
                      統合リーガルOS
                    </h1>
                    <p className="text-navy-300 text-base md:text-lg leading-relaxed max-w-xl mb-8">
                      弁護士×公認会計士×エンジェル投資家。
                      創業からIPOまで、法務・税務・資金調達をワンストップで伴走する唯一のファーム。
                    </p>
                  </>
                ) : (
                  <>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-royal-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3"
                    >
                      あなたの権利を、全力で守る。
                    </motion.p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy-900 leading-[1.15] mb-5">
                      交通事故被害に
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-500 to-royal-400">
                        最大限の補償
                      </span>を
                      <br />
                      実現します
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mb-8">
                      3,000件以上の解決実績。後遺障害認定・示談交渉・訴訟まで、
                      被害者様に寄り添い、適正な賠償額を勝ち取ります。
                    </p>
                  </>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mb-10 md:mb-0">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setShowContact(true)}
                    className={`flex items-center gap-2 px-7 py-3.5 md:px-8 md:py-4 rounded-xl text-sm font-bold shadow-xl transition-shadow ${
                      isStartup
                        ? 'bg-gold-500 text-navy-950 hover:shadow-gold-500/30'
                        : 'bg-royal-500 text-white hover:shadow-royal-500/30'
                    }`}
                  >
                    無料相談する
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`flex items-center gap-2 px-6 py-3.5 md:px-7 md:py-4 rounded-xl text-sm font-bold border backdrop-blur-sm transition-colors ${
                      isStartup
                        ? 'border-white/10 text-navy-200 hover:bg-white/5'
                        : 'border-royal-200 text-royal-600 hover:bg-royal-50'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5" />
                    {isStartup ? 'サービス紹介' : '解決事例を見る'}
                  </motion.button>
                </div>
              </div>

              {/* Right: Visual (PC only) + Stats */}
              <div className="flex-1 md:max-w-md lg:max-w-lg">
                {/* PC visual card */}
                <div className="hidden md:block mb-8">
                  {isStartup ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="relative"
                    >
                      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-navy-950/50">
                        <img
                          src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=500&fit=crop"
                          alt="スタートアップの熱気 — チームがホワイトボードの前で議論する活気あるシーン"
                          className="w-full h-56 lg:h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                      </div>
                      {/* Floating metric card */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="absolute -bottom-4 -right-4 glass rounded-xl p-4 shadow-xl"
                      >
                        <div className="text-gold-400 text-[10px] font-semibold tracking-widest uppercase">累計調達支援</div>
                        <div className="text-white text-2xl font-black">¥15B+</div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="relative"
                    >
                      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-2xl shadow-gray-200/50">
                        <img
                          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop"
                          alt="信頼感のある弁護士 — スーツ姿の弁護士と依頼者が面談する穏やかなシーン"
                          className="w-full h-56 lg:h-64 object-cover"
                        />
                      </div>
                      {/* Floating satisfaction badge */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
                      >
                        <div className="text-royal-500 text-[10px] font-semibold tracking-widest uppercase">満足度</div>
                        <div className="text-navy-900 text-2xl font-black">98.5%</div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3">
                  {(isStartup ? startupStats : individualStats).map(
                    ({ label, value, icon: Icon }, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        className={`rounded-xl p-3 md:p-4 text-center cursor-default transition-shadow ${
                          isStartup
                            ? 'glass border-white/5 hover:shadow-lg hover:shadow-gold-500/5'
                            : 'bg-white/90 border border-royal-100 backdrop-blur-sm shadow-sm hover:shadow-md'
                        }`}
                      >
                        <Icon className={`w-5 h-5 mx-auto mb-1.5 ${isStartup ? 'text-gold-400' : 'text-royal-500'}`} />
                        <div className={`text-xl md:text-2xl font-extrabold ${isStartup ? 'text-white' : 'text-navy-900'}`}>
                          <CountUp value={value} />
                        </div>
                        <div className={`text-[10px] md:text-xs mt-0.5 ${isStartup ? 'text-navy-400' : 'text-gray-500'}`}>
                          {label}
                        </div>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
