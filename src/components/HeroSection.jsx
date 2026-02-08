import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useApp } from '../context/AppContext'

const slow = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }

export default function HeroSection() {
  const { segment, setSegment, setShowContact } = useApp()
  const isStartup = segment === 'startup'

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-stone-50">
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-12 max-w-6xl mx-auto w-full">
        {/* Mobile logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...slow, delay: 0.2 }}
          className="md:hidden mb-12"
        >
          <span className="font-serif text-lg tracking-[0.2em] text-stone-800 font-light">
            LEGAL HERO
          </span>
        </motion.div>

        {/* Segment toggle — understated text links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...slow, delay: 0.4 }}
          className="flex items-center gap-6 mb-16 md:mb-20"
        >
          <button
            onClick={() => setSegment('startup')}
            className={`relative text-sm tracking-wider transition-colors duration-500 pb-1 ${
              isStartup
                ? 'text-stone-900'
                : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            スタートアップ
            {isStartup && (
              <motion.div
                layoutId="segmentLine"
                className="absolute bottom-0 left-0 right-0 h-px bg-stone-900"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
          <button
            onClick={() => setSegment('individual')}
            className={`relative text-sm tracking-wider transition-colors duration-500 pb-1 ${
              !isStartup
                ? 'text-stone-900'
                : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            個人のお客様
            {!isStartup && (
              <motion.div
                layoutId="segmentLine"
                className="absolute bottom-0 left-0 right-0 h-px bg-stone-900"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        </motion.div>

        {/* Main content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={segment}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 flex flex-col justify-center"
          >
            <div className="max-w-2xl">
              {/* Kicker */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-warm-500 text-xs tracking-[0.25em] uppercase mb-6 md:mb-8"
              >
                {isStartup
                  ? 'Legal × Accounting × Investment'
                  : 'Traffic Accident Support'}
              </motion.p>

              {/* Heading — serif, light weight */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light text-stone-900 leading-[1.4] md:leading-[1.35] mb-8 md:mb-10">
                {isStartup ? (
                  <>
                    法律、会計、投資。
                    <br />
                    <span className="text-warm-600">三つの知見</span>を、
                    <br className="md:hidden" />
                    一つに。
                  </>
                ) : (
                  <>
                    あなたの権利を、
                    <br />
                    <span className="text-warm-600">静かに、確実に</span>
                    <br className="md:hidden" />
                    守る。
                  </>
                )}
              </h1>

              {/* Body copy */}
              <p className="text-stone-500 text-sm md:text-base leading-[2] max-w-lg mb-10 md:mb-12">
                {isStartup
                  ? '弁護士×公認会計士×エンジェル投資家。創業からIPOまで、法務・税務・資金調達をワンストップで伴走します。'
                  : '3,000件以上の解決実績。後遺障害認定・示談交渉・訴訟まで、被害者様に寄り添い、適正な賠償額を実現します。'}
              </p>

              {/* CTA — text link style */}
              <button
                onClick={() => setShowContact(true)}
                className="group flex items-center gap-3 text-stone-900 hover:text-warm-700 transition-colors duration-300"
              >
                <span className="text-sm tracking-wider font-medium">
                  無料相談はこちら
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom stats — whisper-quiet */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="border-t border-stone-200 pt-8 mt-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={segment}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-6 md:gap-12 max-w-lg"
            >
              {isStartup ? (
                <>
                  <div>
                    <div className="font-serif text-xl md:text-2xl text-stone-800 font-light">
                      200<span className="text-warm-500">+</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-stone-400 tracking-wider mt-1">
                      支援企業
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-xl md:text-2xl text-stone-800 font-light">
                      150<span className="text-warm-500">億</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-stone-400 tracking-wider mt-1">
                      調達支援額
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-xl md:text-2xl text-stone-800 font-light">
                      30<span className="text-warm-500">社</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-stone-400 tracking-wider mt-1">
                      投資先
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="font-serif text-xl md:text-2xl text-stone-800 font-light">
                      3,000<span className="text-warm-500">+</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-stone-400 tracking-wider mt-1">
                      解決実績
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-xl md:text-2xl text-stone-800 font-light">
                      98<span className="text-warm-500">%</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-stone-400 tracking-wider mt-1">
                      満足度
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-xl md:text-2xl text-stone-800 font-light">
                      93<span className="text-warm-500">%</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-stone-400 tracking-wider mt-1">
                      認定率
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
