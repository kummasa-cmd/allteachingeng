"use client";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex shadow-[0_-2px_16px_rgba(0,0,0,0.12)]">
      <a
        href="tel:010-6546-1706"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 text-sm active:bg-primary-dark transition-colors"
        aria-label="전화 상담하기"
      >
        <Phone size={18} />
        📞 전화 걸기
      </a>
      <a
        href="https://pf.kakao.com/_vzfPX"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-kakao text-brand-text font-bold py-4 text-sm active:brightness-95 transition-all"
        aria-label="카카오톡으로 문의하기"
      >
        <MessageCircle size={18} />
        💬 카카오 문의
      </a>
    </div>
  );
}
