import FadeIn from "./FadeIn";

const classes = [
  {
    name: "파닉스반",
    time: "14:00~",
    grade: "초1·2학년",
    color: "from-pink-50 to-rose-50",
    badge: "bg-rose-100 text-rose-700",
    icon: "🔤",
    schedule: "주 5일",
    details: [
      "알파벳 & 음가 학습",
      "파닉스 체계적 지도",
      "사이트워드 습득",
      "읽기 연습 & 기초 어휘",
      "스스로 읽는 힘 기르기",
    ],
  },
  {
    name: "초등 저학년반",
    time: "15:00~",
    grade: "초3·4학년",
    color: "from-orange-50 to-amber-50",
    badge: "bg-amber-100 text-amber-700",
    icon: "📖",
    schedule: "주 5일",
    details: [
      "기초 리딩 & 독해",
      "어휘 학습",
      "문장 이해",
      "기초 영작",
    ],
  },
  {
    name: "초등 고학년반",
    time: "16:00~",
    grade: "초5·6학년",
    color: "from-green-50 to-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
    icon: "📚",
    schedule: "주 5일",
    details: [
      "월·화 — 리딩 & 독해",
      "수·목 — 문법",
      "금 — 주간 테스트 & 오답 정리",
    ],
  },
  {
    name: "예비중등반",
    time: "17:00~",
    grade: "초6·예비중",
    color: "from-cyan-50 to-sky-50",
    badge: "bg-sky-100 text-sky-700",
    icon: "🎯",
    schedule: "주 5일",
    details: [
      "월·화 — 리딩 & 독해",
      "수·목 — 문법",
      "금 — 주간 테스트",
      "중등 진학 준비",
    ],
  },
  {
    name: "중1반",
    time: "18:00~",
    grade: "중학교 1학년",
    color: "from-violet-50 to-purple-50",
    badge: "bg-violet-100 text-violet-700",
    icon: "📐",
    schedule: "월·수·금",
    details: [
      "문법 & 독해 & 어휘",
      "내신 대비",
      "매일 단어시험",
      "금요일 누적시험",
    ],
  },
  {
    name: "중2반",
    time: "18:00~",
    grade: "중학교 2학년",
    color: "from-primary/5 to-primary/10",
    badge: "bg-primary/15 text-primary-dark",
    icon: "✏️",
    schedule: "화·목·금",
    details: [
      "문법 심화 & 독해",
      "서술형 대비",
      "내신 집중 대비",
      "금요일 누적시험 & 오답 정리",
    ],
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">수업 안내</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-text">
            수준별 맞춤 커리큘럼
          </h2>
          <p className="mt-3 text-brand-subtext text-base sm:text-lg max-w-xl mx-auto">
            파닉스 기초부터 중2 내신까지, 학생의 수준에 꼭 맞는 수업으로
            체계적으로 성장시켜 드립니다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {classes.map((cls, i) => (
            <FadeIn key={cls.name} delay={i * 0.08}>
              <div
                className={`bg-gradient-to-br ${cls.color} rounded-2xl p-6 h-full border border-white hover:shadow-lg transition-all hover:scale-[1.02] cursor-default`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-3xl">{cls.icon}</span>
                    <h3 className="mt-2 text-xl font-bold text-brand-text">
                      {cls.name}
                    </h3>
                    <p className="text-brand-subtext text-sm mt-0.5">{cls.grade}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cls.badge}`}>
                      {cls.schedule}
                    </span>
                    <p className="text-brand-text font-semibold text-sm mt-1.5">{cls.time}</p>
                  </div>
                </div>

                {/* Details */}
                <ul className="space-y-1.5">
                  {cls.details.map((detail) => (
                    <li key={detail} className="text-sm text-brand-subtext flex items-start gap-2">
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="mt-10 text-center text-sm text-brand-subtext bg-accent rounded-xl py-4 px-6 max-w-2xl mx-auto">
            ※ 자세한 교재 및 학습 로드맵은 상담 시 학생 수준에 맞춰 안내드립니다.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
