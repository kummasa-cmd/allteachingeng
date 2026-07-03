"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-accent via-white to-[#f0faf5] pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── Left: text ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              광주 광산구 신창동 · 원장 직강 · 소수정예
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-text leading-tight mb-5"
            >
              매일의 작은 노력이 쌓여
              <br />
              <span className="text-primary">큰 실력이 됩니다</span>{" "}
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                🍀
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-brand-subtext mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              단기간 선행학습이 아닌,{" "}
              <strong className="text-brand-text font-semibold">꾸준한 학습 습관</strong>을 통해
              <br className="hidden sm:block" />
              스스로 공부하는 힘을 길러드립니다.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center"
            >
              <a
                href="tel:010-6546-1706"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Phone size={20} />
                📞 전화 상담
              </a>
              <a
                href="https://pf.kakao.com/_vzfPX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-kakao text-brand-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-kakao/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kakao"
              >
                <MessageCircle size={20} />
                💬 카카오톡 문의
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5 text-sm text-brand-subtext"
            >
              {[
                { icon: "🎯", label: "원장 직강" },
                { icon: "👥", label: "소수정예 수업" },
                { icon: "📝", label: "매일 단어 시험" },
                { icon: "⭐", label: "16년 경력" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-sm lg:max-w-none lg:w-[420px] flex-shrink-0"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
              <Image
                src="/images/hero-illustration.jpg"
                alt="올티칭 영어교습소 – 스스로 공부하는 습관"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-brand-subtext/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 bg-brand-subtext/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
