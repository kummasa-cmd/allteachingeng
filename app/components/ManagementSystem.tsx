import FadeIn from "./FadeIn";
import { CheckCircle2 } from "lucide-react";

const items = [
  "매일 단어 시험",
  "금요일 누적 시험",
  "오답 관리",
  "소수정예 수업",
  "원장 직강",
  "수준별 맞춤 커리큘럼",
];

export default function ManagementSystem() {
  return (
    <section id="management" className="py-20 sm:py-28 bg-[#f0faf5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">관리 시스템</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-text">
            올티칭 관리 시스템
          </h2>
          <p className="mt-3 text-brand-subtext text-base sm:text-lg max-w-lg mx-auto">
            철저한 관리 시스템으로 아이의 학습 루틴을 완성시켜 드립니다.
          </p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Checklist */}
          <FadeIn direction="right" className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-brand-text mb-6 flex items-center gap-2">
                <span className="text-primary">✓</span> 올티칭이 약속하는 것들
              </h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={18} className="text-primary" />
                    </div>
                    <span className="text-brand-text font-medium text-base sm:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Quote */}
          <FadeIn direction="left" delay={0.2} className="w-full lg:w-1/2">
            <div className="relative">
              <span className="absolute -top-6 -left-2 text-8xl text-primary/15 font-serif select-none leading-none">&ldquo;</span>
              <blockquote className="relative z-10 bg-white rounded-3xl p-8 shadow-sm">
                <p className="text-xl sm:text-2xl font-semibold text-brand-text leading-relaxed mb-6">
                  영어는 단기간에 완성되지 않습니다.
                  <br className="hidden sm:block" />
                  <br className="hidden sm:block" />
                  <span className="text-primary">매일 조금씩</span> 읽고, 외우고, 쓰는
                  <br className="hidden sm:block" />
                  습관이 쌓일 때 실력이 됩니다.
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-xl">
                    🍀
                  </div>
                  <div>
                    <p className="font-bold text-brand-text">김지은 원장</p>
                    <p className="text-brand-subtext text-sm">올티칭 영어교습소</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
