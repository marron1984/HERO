import { MapPin, Phone as PhoneIcon, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warm-50 border-t border-stone-200">
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 pt-20 md:pt-32 pb-28 md:pb-16">
        {/* Top: Logo + tagline */}
        <div className="mb-16 md:mb-20">
          <span className="font-serif text-xl md:text-2xl tracking-[0.3em] text-stone-800 font-light">
            LEGAL HERO
          </span>
          <p className="text-stone-500 text-sm leading-[2.2] tracking-[0.08em] mt-5 max-w-md">
            弁護士法人リーガルヒーロー。
            <br />
            法務 × 会計 × 投資の三位一体で、
            あなたのビジネスと権利を守ります。
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Services */}
          <div>
            <h4 className="text-stone-700 text-[11px] tracking-[0.25em] uppercase font-medium mb-6">
              サービス
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#startup" className="text-stone-500 hover:text-stone-800 transition-colors tracking-[0.06em]">
                  スタートアップ法務
                </a>
              </li>
              <li>
                <a href="#startup" className="text-stone-500 hover:text-stone-800 transition-colors tracking-[0.06em]">
                  資金調達・投資契約
                </a>
              </li>
              <li>
                <a href="#startup" className="text-stone-500 hover:text-stone-800 transition-colors tracking-[0.06em]">
                  税務・会計アドバイザリー
                </a>
              </li>
              <li>
                <a href="#individual" className="text-stone-500 hover:text-stone-800 transition-colors tracking-[0.06em]">
                  交通事故被害者サポート
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-stone-700 text-[11px] tracking-[0.25em] uppercase font-medium mb-6">
              事務所情報
            </h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li className="flex items-start gap-3 tracking-[0.06em]">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-warm-400" />
                〒100-0001 東京都千代田区丸の内1-1-1
              </li>
              <li className="flex items-start gap-3 tracking-[0.06em]">
                <PhoneIcon className="w-4 h-4 mt-1 shrink-0 text-warm-400" />
                03-1234-5678
              </li>
              <li className="flex items-start gap-3 tracking-[0.06em]">
                <Mail className="w-4 h-4 mt-1 shrink-0 text-warm-400" />
                info@legal-hero.jp
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-stone-700 text-[11px] tracking-[0.25em] uppercase font-medium mb-6">
              その他
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#team" className="text-stone-500 hover:text-stone-800 transition-colors tracking-[0.06em]">
                  弁護士紹介
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-500 hover:text-stone-800 transition-colors tracking-[0.06em]">
                  採用情報
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-500 hover:text-stone-800 transition-colors tracking-[0.06em]">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-500 hover:text-stone-800 transition-colors tracking-[0.06em]">
                  利用規約
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-stone-400 tracking-[0.1em]">
            © 2024 弁護士法人リーガルヒーロー All Rights Reserved.
          </span>
          <span className="text-xs text-stone-300 tracking-[0.2em]">
            Legal × Accounting × Investment
          </span>
        </div>
      </div>
    </footer>
  )
}
