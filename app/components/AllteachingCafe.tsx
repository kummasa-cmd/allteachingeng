import FadeIn from "./FadeIn";
import { ExternalLink, BookOpen, TrendingUp, Clock } from "lucide-react";

const features = [
  { icon: <BookOpen size={18} />, text: "스스로 공부하는 힘을 기르는 공간" },
  { icon: <TrendingUp size={18} />, text: "학습 기록으로 꾸준한 성장 지원" },
  { icon: <Clock size={18} />, text: "학습 루틴 관리 시스템" },
];

export default function AllteachingCafe() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <FadeIn direction="right" className="flex-1">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">관련 서비스</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-text leading-tight mb-4">
              공부 습관까지 완성하는 공간,
              <br />
              <span className="text-primary">올티칭 카페</span>
            </h2>
            <p className="text-brand-subtext text-base sm:text-lg leading-relaxed mb-6">
              올티칭 영어교습소가 운영하는{" "}
              <strong className="text-brand-text">학습 루틴 관리 카페</strong>입니다.
              <br />
              스스로 공부하는 힘을 기르고, 학습 기록을 통해 꾸준한 성장을 도와드립니다.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-text">
                  <span className="text-primary">{f.icon}</span>
                  <span className="font-medium">{f.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://allteaching.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-7 py-3.5 rounded-2xl hover:bg-primary hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              올티칭 카페 방문하기
              <ExternalLink size={16} />
            </a>
          </FadeIn>

          {/* Visual */}
          <FadeIn direction="left" delay={0.2} className="w-full md:w-2/5 flex-shrink-0">
            <div className="bg-gradient-to-br from-accent to-[#f0faf5] rounded-3xl p-10 text-center shadow-sm">
              <div className="text-7xl mb-4">☕</div>
              <h3 className="text-xl font-bold text-brand-text mb-2">올티칭 카페</h3>
              <p className="text-brand-subtext text-sm leading-relaxed mb-6">
                영어교습소와 함께하는
                <br />
                자기주도 학습 공간
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                allteaching.vercel.app
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
