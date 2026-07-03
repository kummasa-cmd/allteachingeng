import FadeIn from "./FadeIn";

const reasons = [
  {
    icon: "🎯",
    title: "원장 직강",
    description:
      "16년 경력의 원장이 모든 수업을 직접 지도합니다. 보조 강사 없이 원장이 처음부터 끝까지 책임집니다.",
  },
  {
    icon: "👥",
    title: "소수정예 수업",
    description:
      "소수의 학생만 받아 한 명 한 명의 수준과 학습 속도를 꼼꼼히 파악하고 밀착 관리합니다.",
  },
  {
    icon: "📝",
    title: "매일 단어 시험 · 금요 누적 시험",
    description:
      "매일의 단어 시험과 금요일 누적 시험으로 학습 루틴을 형성하고 오답을 체계적으로 관리합니다.",
  },
  {
    icon: "🍀",
    title: "수준별 맞춤 커리큘럼",
    description:
      "파닉스 기초부터 중등 내신까지 학생의 수준에 맞는 커리큘럼으로 단계적으로 성장시킵니다.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-accent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">차별점</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-text">
            왜 올티칭인가요?
          </h2>
          <p className="mt-3 text-brand-subtext text-base sm:text-lg max-w-lg mx-auto">
            올티칭만의 4가지 차별화된 강점으로 아이의 영어 실력을 키워드립니다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-brand-text mb-2">
                  {reason.title}
                </h3>
                <p className="text-brand-subtext leading-relaxed text-sm sm:text-base">
                  {reason.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
