import { MapPin, Phone as PhoneIcon, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 pb-24 md:pb-12 pt-16 md:pt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-base tracking-[0.2em] text-stone-200 font-light">
              LEGAL HERO
            </span>
            <p className="text-xs leading-relaxed mt-4">
              弁護士法人リーガルヒーロー
              <br />
              法務 × 会計 × 投資の三位一体で
              <br />
              あなたのビジネスと権利を守ります。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-stone-200 text-[10px] tracking-[0.2em] uppercase font-medium mb-5">
              サービス
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#startup" className="hover:text-stone-200 transition-colors">
                  スタートアップ法務
                </a>
              </li>
              <li>
                <a href="#startup" className="hover:text-stone-200 transition-colors">
                  資金調達・投資契約
                </a>
              </li>
              <li>
                <a href="#startup" className="hover:text-stone-200 transition-colors">
                  税務・会計アドバイザリー
                </a>
              </li>
              <li>
                <a href="#individual" className="hover:text-stone-200 transition-colors">
                  交通事故被害者サポート
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-stone-200 text-[10px] tracking-[0.2em] uppercase font-medium mb-5">
              事務所情報
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                〒100-0001 東京都千代田区丸の内1-1-1
              </li>
              <li className="flex items-start gap-2">
                <PhoneIcon className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                03-1234-5678
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                info@legal-hero.jp
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-stone-200 text-[10px] tracking-[0.2em] uppercase font-medium mb-5">
              その他
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#team" className="hover:text-stone-200 transition-colors">
                  弁護士紹介
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-200 transition-colors">
                  採用情報
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-200 transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-200 transition-colors">
                  利用規約
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-[10px]">
          <span>© 2024 弁護士法人リーガルヒーロー All Rights Reserved.</span>
          <span className="text-stone-600 tracking-wider">
            Legal × Accounting × Investment
          </span>
        </div>
      </div>
    </footer>
  )
}
