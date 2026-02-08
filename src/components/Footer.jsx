import { MapPin, Phone as PhoneIcon, Mail, Printer, Train } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warm-50 border-t border-stone-200">
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 pt-[8rem] md:pt-[12rem] pb-[8rem] md:pb-[6rem]">
        {/* Top: Logo + tagline */}
        <div className="mb-[6rem] md:mb-[8rem]">
          <span className="font-serif text-xl md:text-2xl tracking-[0.3em] text-stone-800 font-light">
            HERO LEGAL GROUP
          </span>
          <p className="text-stone-500 text-sm leading-[2.2] tracking-[0.08em] mt-5 max-w-md">
            法律事務所 HEROリーガルグループ。
            <br />
            ベンチャー法務・企業法務から交通事故・離婚・労働問題まで、
            幅広くサポートいたします。
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem] md:gap-[5rem] mb-[6rem] md:mb-[8rem]">
          {/* Services */}
          <div>
            <h4 className="text-stone-700 text-[11px] tracking-[0.25em] uppercase font-medium mb-6">
              取扱分野
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#startup" className="text-stone-500 hover:text-stone-800 transition-colors tracking-[0.06em]">
                  ベンチャー・企業法務
                </a>
              </li>
              <li>
                <a href="#startup" className="text-stone-500 hover:text-stone-800 transition-colors tracking-[0.06em]">
                  顧問契約
                </a>
              </li>
              <li>
                <a href="#individual" className="text-stone-500 hover:text-stone-800 transition-colors tracking-[0.06em]">
                  交通事故
                </a>
              </li>
              <li>
                <a href="#individual" className="text-stone-500 hover:text-stone-800 transition-colors tracking-[0.06em]">
                  離婚・労働問題
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
                〒540-0036 大阪府大阪市中央区船越町1丁目6-6
              </li>
              <li className="flex items-start gap-3 tracking-[0.06em]">
                <Train className="w-4 h-4 mt-1 shrink-0 text-warm-400" />
                <span>
                  京阪天満橋駅より徒歩5分
                  <br />
                  地下鉄谷町線天満橋駅より徒歩4分
                </span>
              </li>
              <li className="flex items-start gap-3 tracking-[0.06em]">
                <PhoneIcon className="w-4 h-4 mt-1 shrink-0 text-warm-400" />
                TEL 06-6944-8811
              </li>
              <li className="flex items-start gap-3 tracking-[0.06em]">
                <Printer className="w-4 h-4 mt-1 shrink-0 text-warm-400" />
                FAX 06-6944-8832
              </li>
              <li className="flex items-start gap-3 tracking-[0.06em]">
                <Mail className="w-4 h-4 mt-1 shrink-0 text-warm-400" />
                info@legal-hero.com
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
                  弁護士費用
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

        {/* Disclaimer */}
        <div className="border-t border-stone-200 pt-8 mb-8">
          <p className="text-[10px] text-stone-400 tracking-[0.08em] leading-relaxed">
            ※当事務所はドラマ「HERO」、フジテレビとは一切関係ございません。
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-stone-400 tracking-[0.1em]">
            © 2024 法律事務所 HEROリーガルグループ All Rights Reserved.
          </span>
          <span className="text-xs text-stone-300 tracking-[0.2em]">
            Venture · Corporate · Individual
          </span>
        </div>
      </div>
    </footer>
  )
}
