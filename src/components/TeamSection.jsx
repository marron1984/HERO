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
    name: '岩崎 章浩',
    role: '代表弁護士・弁理士',
    photo:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&crop=face',
    credentials: ['弁護士', '弁理士'],
    bio: '同志社大学法学部卒。大阪大学大学院法学研究科、東北大学大学院法学研究科を経て司法試験合格。神戸マリン綜合法律事務所を経てHEROリーガルグループを開設。辰巳法律研究所専任講師、近畿大学・立命館大学・関西学院大学にて教鞭を執る。',
    lang: '日本語・英語',
  },
  {
    name: '並木 三恵',
    role: '弁護士',
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&crop=face',
    credentials: ['弁護士', '労働法務', 'キャピタルマーケッツ'],
    bio: '京都大学法科大学院修了。長島・大野・常松法律事務所勤務後、梅田セントラル法律事務所を経て入所。労働法務、キャピタルマーケッツ、会社法務を重点的に取り扱う。',
    lang: '日本語・英語',
  },
  {
    name: '足立 和也 ほか',
    role: '協力 公認会計士・税理士',
    photo:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop&crop=face',
    credentials: ['公認会計士', '税理士', 'M&A・IPO'],
    bio: '大手監査法人を経てパートナーと共に独立。M&A・IPOのスキーム支援を多数手掛ける。財務デューデリジェンスからバリュエーション算定まで幅広く対応。',
    lang: null,
  },
]

export default function TeamSection() {
  const { segment } = useApp()

  return (
    <section className="bg-stone-50 overflow-hidden">
      {/* Full-bleed team image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
      >
        <div className="w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&h=900&fit=crop"
            alt="チームミーティング — プロフェッショナルの議論"
            className="w-full h-[35vh] md:h-[45vh] lg:h-[50vh] object-cover"
          />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-[10rem] md:py-[18rem]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
          className="mb-[6rem] md:mb-[10rem]"
        >
          <p className="text-warm-500 text-xs tracking-[0.35em] uppercase mb-8">
            Our Team
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-stone-900 leading-[1.6] tracking-[0.04em] mb-8">
            法律、会計、税務。
            <br />
            各分野の専門家。
          </h2>
          <div className="divider" />
        </motion.div>

        {/* Member cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[5rem] md:gap-[3rem]">
          {members.map(({ name, role, photo, credentials, bio, lang }, i) => (
            <motion.div
              key={name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fade}
            >
              {/* Photo */}
              <div className="overflow-hidden mb-10">
                <img
                  src={photo}
                  alt={name}
                  className="w-full h-80 md:h-96 object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <h3 className="font-serif text-lg text-stone-900 font-light tracking-[0.08em] mb-2">
                {name}
              </h3>
              <p className="text-stone-500 text-xs tracking-[0.15em] mb-7">{role}</p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="text-[10px] text-warm-600 tracking-[0.1em] border border-warm-200 px-3 py-1"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <p className="text-stone-500 text-sm leading-[2.4] tracking-[0.05em] mb-5">{bio}</p>
              {lang && (
                <p className="text-stone-400 text-xs tracking-[0.1em]">
                  使用言語: {lang}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
