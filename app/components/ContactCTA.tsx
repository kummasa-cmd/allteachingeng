import FadeIn from "./FadeIn";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <span className="inline-block text-white/70 font-semibold text-sm tracking-wide uppercase mb-4">
            상담 문의
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            우리 아이 영어,
            <br />
            올티칭과 함께 시작해요 🍀
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed">
            부담 없이 연락주세요.
            <br />
            아이 수준에 맞는 수업을 함께 찾아드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:010-6546-1706"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-primary font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone size={20} />
              📞 전화 상담
            </a>
            <a
              href="https://pf.kakao.com/_vzfPX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-kakao text-brand-text font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kakao"
            >
              <MessageCircle size={20} />
              💬 카카오톡 문의
            </a>
          </div>

          <p className="mt-8 text-white/60 text-sm">
            문의 가능 시간 · 평일 14:00 ~ 21:00
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
