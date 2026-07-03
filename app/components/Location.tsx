"use client";
import { useState } from "react";
import { MapPin, Phone, Clock, Copy, Check } from "lucide-react";
import FadeIn from "./FadeIn";

const address = "광주광역시 광산구 신창로 113, 3층";
const googleMapsEmbedUrl = "https://maps.google.com/maps?q=광주광역시+광산구+신창로+113&output=embed&hl=ko&z=17";

export default function Location() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-accent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">오시는 길</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-text">
            올티칭 영어교습소 위치
          </h2>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map embed */}
          <FadeIn direction="right" className="w-full lg:w-3/5">
            <div className="relative rounded-3xl overflow-hidden shadow-md h-72 sm:h-80 lg:h-96">
              <iframe
                src={googleMapsEmbedUrl}
                className="w-full h-full border-0"
                title="올티칭 영어교습소 위치"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn direction="left" delay={0.2} className="w-full lg:w-2/5">
            <div className="bg-white rounded-3xl p-7 shadow-sm h-full flex flex-col justify-between gap-6">
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-brand-subtext font-medium mb-1">주소</p>
                    <p className="text-brand-text font-semibold leading-relaxed">
                      {address}
                    </p>
                    <p className="text-brand-subtext text-sm mt-1">
                      (수문초·신전떡볶이 건물)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-subtext font-medium mb-1">전화</p>
                    <a
                      href="tel:010-6546-1706"
                      className="text-brand-text font-semibold text-lg hover:text-primary transition-colors"
                    >
                      010-6546-1706
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-subtext font-medium mb-1">문의 가능 시간</p>
                    <p className="text-brand-text font-semibold">
                      평일 14:00 ~ 21:00
                    </p>
                  </div>
                </div>

                {/* Nearby */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-lg">🏫</span>
                  </div>
                  <div>
                    <p className="text-xs text-brand-subtext font-medium mb-1">인근 학교</p>
                    <p className="text-brand-text font-semibold">수문초등학교, 신창중학교</p>
                  </div>
                </div>
              </div>

              {/* Copy address button */}
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold py-3 rounded-xl hover:bg-primary hover:text-white transition-all text-sm"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "주소 복사 완료!" : "주소 복사하기"}
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
