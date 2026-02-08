import { Shield, MapPin, Phone as PhoneIcon, Mail, ExternalLink } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Footer() {
  const { segment } = useApp()
  const isStartup = segment === 'startup'

  return (
    <footer className={`pb-24 md:pb-12 pt-12 md:pt-20 ${
      isStartup ? 'bg-navy-950 text-navy-300' : 'bg-gray-900 text-gray-400'
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                isStartup ? 'bg-gold-500' : 'bg-royal-500'
              }`}>
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">LEGAL HERO</span>
            </div>
            <p className="text-xs leading-relaxed">
              弁護士法人リーガルヒーロー
              <br />
              法務 × 会計 × 投資の三位一体で
              <br />
              あなたのビジネスと権利を守ります。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">サービス</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#startup" className="hover:text-white transition-colors flex items-center gap-1">スタートアップ法務 <ExternalLink className="w-2.5 h-2.5" /></a></li>
              <li><a href="#startup" className="hover:text-white transition-colors">資金調達・投資契約</a></li>
              <li><a href="#startup" className="hover:text-white transition-colors">税務・会計アドバイザリー</a></li>
              <li><a href="#individual" className="hover:text-white transition-colors">交通事故被害者サポート</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">事務所情報</h4>
            <ul className="space-y-2.5 text-xs">
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
            <h4 className="text-white font-bold text-sm mb-4">その他</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#team" className="hover:text-white transition-colors">弁護士紹介</a></li>
              <li><a href="#" className="hover:text-white transition-colors">採用情報</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
            </ul>
          </div>
        </div>

        <div className={`border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-[10px] ${
          isStartup ? 'border-navy-800' : 'border-gray-800'
        }`}>
          <span>© 2024 弁護士法人リーガルヒーロー All Rights Reserved.</span>
          <span className="opacity-60">Legal × Accounting × Investment</span>
        </div>
      </div>
    </footer>
  )
}
