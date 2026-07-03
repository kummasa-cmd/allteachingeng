"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import FadeIn from "./FadeIn";

const images = [
  { src: "/images/classroom-01.jpg", alt: "올티칭 영어교습소 교실 전경 – 사인보드" },
  { src: "/images/classroom-02.jpg", alt: "올티칭 영어교습소 교실 내부 측면" },
  { src: "/images/classroom-03.jpg", alt: "올티칭 영어교습소 교실 – 책장" },
  { src: "/images/classroom-04.jpg", alt: "올티칭 영어교습소 교실 전체 뷰" },
  { src: "/images/curriculum-book.jpg", alt: "올티칭 영어교습소 시간표 및 교재 안내" },
  { src: "/images/extra-01.jpg", alt: "올티칭 영어교습소 수업 시간표" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">갤러리</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-text">
            올티칭 교실 이야기
          </h2>
          <p className="mt-3 text-brand-subtext max-w-sm mx-auto">
            쾌적하고 집중하기 좋은 학습 환경에서 수업이 진행됩니다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.07}>
              <button
                onClick={() => setSelected(i)}
                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden group hover:shadow-lg transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`${img.alt} 크게 보기`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={images[selected].src}
                alt={images[selected].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="닫기"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
