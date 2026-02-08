import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Rocket, ArrowRight, Zap, Play } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { useCountUp } from '../hooks/useCountUp'

/* ─── Particle field ─── */
function Particles({ count = 40, color = 'gold' }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.4 + 0.1,
      })),
    [count],
  )

  const fill =
    color === 'gold'
      ? 'rgba(201,168,76,VAR)'
      : 'rgba(37,99,235,VAR)'

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            background: fill.replace('VAR', String(d.opacity)),
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [d.opacity, d.opacity * 1.8, d.opacity * 0.5, d.opacity * 1.4, d.opacity],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

/* ─── Stat card with count-up ─── */
function StatCard({ end, suffix, label, isStartup, delay }) {
  const { count, ref } = useCountUp(end, 2000)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`rounded-2xl p-4 md:p-5 text-center cursor-default transition-shadow ${
        isStartup
          ? 'glass bento-glow hover:shadow-lg hover:shadow-gold-500/5'
          : 'bg-white/90 border border-royal-100 backdrop-blur-sm shadow-sm hover:shadow-md'
      }`}
    >
      <div
        className={`text-2xl md:text-3xl font-black tracking-tight ${
          isStartup ? 'text-white' : 'text-navy-900'
        }`}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div
        className={`text-[10px] md:text-xs mt-1 font-medium ${
          isStartup ? 'text-navy-400' : 'text-gray-500'
        }`}
      >
        {label}
      </div>
    </motion.div>
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
            className="absolute inset-0 bg-navy-950"
          >
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(201,168,76,0.8) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <Particles count={45} color="gold" />
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-electric-500/5 rounded-full blur-[120px]" />
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
            <Particles count={25} color="blue" />
            <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-royal-300/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-royal-200/20 rounded-full blur-[100px]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Content ─── */}
      <div className="relative z-10 flex flex-col flex-1 px-5 md:px-12 lg:px-16 pt-20 md:pt-28 pb-8 max-w-7xl mx-auto w-full">
        {/* Mobile logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6 md:hidden"
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center ${
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
        </motion.div>

        {/* ─── Segment Toggle — centred on screen ─── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex justify-center mb-10 md:mb-14"
        >
          <div
            className={`inline-flex rounded-full p-1 ${
              isStartup
                ? 'bg-white/5 border border-white/10'
                : 'bg-royal-100/80 border border-royal-200/80'
            }`}
          >
            <button
              onClick={() => setSegment('startup')}
              className={`relative px-5 py-2 md:px-8 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
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
              className={`relative px-5 py-2 md:px-8 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                !isStartup
                  ? 'text-white'
                  : 'text-navy-300 hover:text-navy-200'
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

        {/* ─── Main Content ─── */}
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
              <div className="flex-1 md:max-w-xl text-center md:text-left">
                {isStartup ? (
                  <>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-gold-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 flex items-center gap-2 justify-center md:justify-start"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      Legal × Accounting × Investment
                    </motion.p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.12] mb-5">
                      投資もする
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
                        弁護士法人
                      </span>
                      が、
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-200">
                        成長を加速
                      </span>
                    </h1>
                    <p className="text-navy-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
                      弁護士×公認会計士×エンジェル投資家。
                      J-KISS、タームシート、ストックオプション——
                      創業からIPOまで、法務・税務・資金調達をワンストップで伴走する唯一のファーム。
                    </p>
                  </>
                ) : (
                  <>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-royal-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 justify-center md:justify-start flex items-center gap-2"
                    >
                      あなたの権利を、全力で守る。
                    </motion.p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy-900 leading-[1.12] mb-5">
                      交通事故被害に
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-500 to-royal-400">
                        最大限の補償
                      </span>
                      を
                      <br />
                      実現します
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
                      3,000件以上の解決実績。後遺障害認定・示談交渉・訴訟まで、
                      被害者様に寄り添い、適正な賠償額を勝ち取ります。
                    </p>
                  </>
                )}

                {/* CTA */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10 md:mb-0">
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

              {/* Right: Image + Stats */}
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
                          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop"
                          alt="モダンな建築 — テック企業のオフィスを思わせる洗練された空間"
                          className="w-full h-56 lg:h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="absolute -bottom-4 -right-4 glass rounded-xl p-4 shadow-xl"
                      >
                        <div className="text-gold-400 text-[10px] font-semibold tracking-widest uppercase">
                          累計調達支援
                        </div>
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
                          alt="信頼感のある弁護士 — 依頼者と面談する穏やかなシーン"
                          className="w-full h-56 lg:h-64 object-cover"
                        />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
                      >
                        <div className="text-royal-500 text-[10px] font-semibold tracking-widest uppercase">
                          満足度
                        </div>
                        <div className="text-navy-900 text-2xl font-black">98.5%</div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Stats grid with count-up */}
                <div className="grid grid-cols-3 gap-3">
                  {isStartup ? (
                    <>
                      <StatCard end={200} suffix="+" label="支援スタートアップ" isStartup delay={0.3} />
                      <StatCard end={150} suffix="億+" label="累計調達支援額" isStartup delay={0.4} />
                      <StatCard end={30} suffix="社+" label="代表自身の投資先" isStartup delay={0.5} />
                    </>
                  ) : (
                    <>
                      <StatCard end={3000} suffix="+" label="交通事故解決実績" isStartup={false} delay={0.3} />
                      <StatCard end={98} suffix="%" label="依頼者満足度" isStartup={false} delay={0.4} />
                      <StatCard end={93} suffix="%" label="後遺障害認定率" isStartup={false} delay={0.5} />
                    </>
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
