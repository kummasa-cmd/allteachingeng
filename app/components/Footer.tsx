import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e2d25] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-8">
          {/* Brand */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍀</span>
              <span className="font-bold text-lg">올티칭 영어교습소</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              매일의 작은 노력이 쌓여 큰 실력이 됩니다.
              <br />
              16년 경력 원장 직강, 소수정예 수업.
            </p>
          </div>

          {/* Info */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">연락처</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="tel:010-6546-1706"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Phone size={14} />
                    010-6546-1706
                  </a>
                </li>
                <li>
                  <a
                    href="https://pf.kakao.com/_vzfPX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <span className="text-sm">💬</span>
                    카카오채널
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">위치</h4>
              <address className="not-italic">
                <p className="flex items-start gap-2 text-sm text-white/80">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                  광주광역시 광산구 신창로 113, 3층
                </p>
              </address>
            </div>

            <div>
              <h4 className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">관련 링크</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://allteaching.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    ☕ 올티칭 카페
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <p>원장: 김지은 (Julia) · 사범대 영어교육과</p>
          <p>© 2025 올티칭 영어교습소. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
