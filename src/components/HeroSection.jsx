import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useApp } from '../context/AppContext'

const slow = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }

export default function HeroSection() {
  const { segment, setSegment, setShowContact } = useApp()
  const isStartup = segment === 'startup'

  return (
    <section className="relative flex flex-col bg-stone-50">
      {/* Full-bleed hero image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={segment}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            src={
              isStartup
                ? 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&h=1000&fit=crop'
                : 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&h=1000&fit=crop'
            }
            alt={isStartup ? '洗練されたオフィス空間' : '信頼感のある弁護士'}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/30 via-transparent to-stone-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 px-6 md:px-16 lg:px-24 pt-[6rem] md:pt-[10rem] pb-[6rem] md:pb-[10rem] max-w-6xl mx-auto w-full">
        {/* Mobile logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...slow, delay: 0.2 }}
          className="md:hidden mb-20"
        >
          <span className="font-serif text-lg tracking-[0.3em] text-stone-800 font-light">
            HERO LEGAL
          </span>
        </motion.div>

        {/* Segment toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...slow, delay: 0.4 }}
          className="flex items-center gap-8 mb-[6rem] md:mb-[10rem]"
        >
          <button
            onClick={() => setSegment('startup')}
            className={`relative text-sm tracking-[0.15em] transition-colors duration-500 pb-2 ${
              isStartup
                ? 'text-stone-900'
                : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            企業・ベンチャー
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
            className={`relative text-sm tracking-[0.15em] transition-colors duration-500 pb-2 ${
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
          >
            <div className="max-w-2xl">
              {/* Kicker */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-warm-500 text-xs tracking-[0.35em] uppercase mb-8 md:mb-10"
              >
                {isStartup
                  ? 'Venture & Corporate Law'
                  : 'Individual Support'}
              </motion.p>

              {/* Heading */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light text-stone-900 leading-[1.6] md:leading-[1.5] tracking-[0.04em] mb-[4rem] md:mb-[6rem]">
                {isStartup ? (
                  <>
                    ベンチャーの挑戦を、
                    <br />
                    <span className="text-warm-600">法務の力</span>で
                    <br className="md:hidden" />
                    支える。
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
              <p className="text-stone-500 text-sm md:text-base leading-[2.2] tracking-[0.05em] max-w-lg mb-[5rem] md:mb-[8rem]">
                {isStartup
                  ? 'IT・飲食・医療・教育など幅広い業種のベンチャー企業を支援。契約書作成から利用規約、資金調達、IPO準備まで、成長フェーズに応じた法務をワンストップで提供します。'
                  : '交通事故・離婚・労働問題・消費者被害まで、個人の権利を守る法務を提供。初回30分無料相談で、まずはお気軽にご相談ください。'}
              </p>

              {/* CTA */}
              <button
                onClick={() => setShowContact(true)}
                className="group flex items-center gap-4 text-stone-900 hover:text-warm-700 transition-colors duration-300"
              >
                <span className="text-sm tracking-[0.2em] font-medium">
                  無料相談はこちら
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="border-t border-stone-200 pt-[4rem] mt-[8rem] md:mt-[14rem]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={segment}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-8 md:gap-16 max-w-lg"
            >
              {isStartup ? (
                <>
                  <div>
                    <div className="font-serif text-2xl md:text-3xl text-stone-800 font-light tracking-wider">
                      10<span className="text-warm-500">+</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-stone-400 tracking-[0.2em] mt-2">
                      対応業種
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl md:text-3xl text-stone-800 font-light tracking-wider">
                      初回<span className="text-warm-500">無料</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-stone-400 tracking-[0.2em] mt-2">
                      法律相談
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl md:text-3xl text-stone-800 font-light tracking-wider">
                      2<span className="text-warm-500">万〜</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-stone-400 tracking-[0.2em] mt-2">
                      顧問契約
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="font-serif text-2xl md:text-3xl text-stone-800 font-light tracking-wider">
                      初回<span className="text-warm-500">無料</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-stone-400 tracking-[0.2em] mt-2">
                      30分相談
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl md:text-3xl text-stone-800 font-light tracking-wider">
                      負担<span className="text-warm-500">0</span>円
                    </div>
                    <div className="text-[10px] md:text-xs text-stone-400 tracking-[0.2em] mt-2">
                      弁護士費用特約
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl md:text-3xl text-stone-800 font-light tracking-wider">
                      全国<span className="text-warm-500">対応</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-stone-400 tracking-[0.2em] mt-2">
                      オンライン可
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
