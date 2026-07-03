import Image from "next/image";
import FadeIn from "./FadeIn";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "사범대 영어교육과 졸업",
  "중고등학교 교사 경력",
  "대형학원 강사 경력",
  "총 16년간 다양한 학생 지도",
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">원장 소개</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-text">
            16년의 교육 경험,
            <br />
            아이의 영어 습관을 만듭니다
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo / card */}
          <FadeIn direction="right" className="w-full md:w-2/5 flex-shrink-0">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/teacher-about.jpg"
                alt="올티칭 영어교습소 원장 김지은 소개"
                fill
                className="object-cover object-top"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="left" delay={0.15} className="flex-1">
            <blockquote className="border-l-4 border-primary pl-5 mb-8">
              <p className="text-xl sm:text-2xl font-semibold text-brand-text leading-relaxed">
                &ldquo;영어 실력은 단기 선행학습이 아니라
                <br />
                <span className="text-primary">꾸준한 학습 습관</span>에서 시작됩니다.&rdquo;
              </p>
            </blockquote>

            <p className="text-brand-subtext leading-relaxed mb-8 text-base sm:text-lg">
              올티칭 영어교습소는 단순한 성적 향상을 넘어, 아이 스스로 공부하는
              힘과 영어를 즐기는 태도를 길러주는 것을 가장 중요하게 생각합니다.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-text">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
