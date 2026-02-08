import { Shield, MapPin, Phone as PhoneIcon, Mail } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Footer() {
  const { segment } = useApp()
  const isStartup = segment === 'startup'

  return (
    <footer
      className={`pb-24 pt-12 sm:pt-16 ${
        isStartup ? 'bg-navy-950 text-navy-300' : 'bg-gray-900 text-gray-400'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isStartup ? 'bg-gold-500' : 'bg-royal-500'
                }`}
              >
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold tracking-tight">
                LEGAL HERO
              </span>
            </div>
            <p className="text-xs leading-relaxed">
              弁護士法人リーガルヒーロー
              <br />
              法務 × 会計 × 投資の三位一体で
              <br />
              あなたのビジネスと権利を守ります。
            </p>
          </div>

          {/* Office Info */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">事務所情報</h4>
            <ul className="space-y-2 text-xs">
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
            <h4 className="text-white font-bold text-sm mb-3">サービス</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#startup" className="hover:text-white transition-colors">
                  スタートアップ法務
                </a>
              </li>
              <li>
                <a href="#individual" className="hover:text-white transition-colors">
                  交通事故
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  弁護士紹介
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`border-t pt-6 text-center text-[10px] ${
            isStartup ? 'border-navy-800' : 'border-gray-800'
          }`}
        >
          © 2024 弁護士法人リーガルヒーロー All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
