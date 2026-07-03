# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A one-page landing site for **올티칭 영어교습소** (AllTeaching English Academy), located in Gwangju Gwangsan-gu Sinchang-dong. The goal is to drive parents to call or open KakaoTalk for enrollment consultations.

Full requirements are in `requirements.md`.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Font**: Pretendard (CDN)
- **Deployment**: Vercel

## Commands

```bash
# Install dependencies
npm install

# Dev server
npm run dev

# Build
npm run build

# Lint
npm run lint
```

## Architecture

Single-page app (`app/page.tsx`) composed of section components in `app/components/`. Layout metadata (SEO, fonts) lives in `app/layout.tsx`.

**Section order in `page.tsx`:**
Header → Hero → About → WhyUs → Curriculum → ManagementSystem → Gallery → Location → ContactCTA → AllteachingCafe → Footer + MobileStickyBar

## Design System

**Color palette** (define in `tailwind.config.ts`):
| Token | HEX |
|---|---|
| `primary` | `#4CAF7D` |
| `primary-dark` | `#2F7A5A` |
| `accent` | `#FFF8E7` |
| `text` | `#2B2B2B` |
| `subtext` | `#6B6B6B` |
| `bg` | `#FAFAF7` |
| `kakao` | `#FEE500` |

**Typography**: Pretendard for Korean (letter-spacing `-0.02em`), Inter or Pretendard for English/numbers. Headings 28–48px, body 16–18px.

**Mobile-first**. Breakpoints: `sm(640)`, `md(768)`, `lg(1024)`, `xl(1280)`.

## Key Business Content (must be accurate)

- **Phone**: `010-6546-1706` → `tel:010-6546-1706`
- **KakaoTalk**: `https://pf.kakao.com/_vzfPX` (open in new tab)
- **AllTeaching Cafe**: `https://allteaching.vercel.app/` (open in new tab)
- **Address**: 광주광역시 광산구 신창로 113, 3층
- **Principal**: 김지은 (Julia), 사범대 영어교육과, 16년 경력

**Curriculum (6 classes):**
| 반 | 시간 | 주요 내용 |
|---|---|---|
| 파닉스반 | 14:00~ | 알파벳/음가, 파닉스, 사이트워드 |
| 초등 저학년반 | 15:00~ | 기초 리딩, 어휘, 기초 영작 |
| 초등 고학년반 | 16:00~ | 월·화 리딩 / 수·목 문법 / 금 테스트 |
| 예비중등반 | 17:00~ | 월·화 리딩 / 수·목 문법 / 금 테스트 |
| 중1반 | 월·수·금 18:00~ | 문법·독해·내신, 매일 단어시험, 금 누적시험 |
| 중2반 | 화·목·금 18:00~ | 문법심화·서술형·내신, 금 누적시험 |

## Critical UI Behaviors

- **Mobile sticky bottom bar**: phone (left 50%) + KakaoTalk yellow (right 50%) — mobile only
- Scroll-enter animation on all sections: fade-in + slide-up (Framer Motion)
- CTA buttons: hover → shadow lift; Curriculum cards: hover → `scale(1.02)`
- Header: transparent → white background + shadow on scroll

## Images

Place in `/public/images/`. Naming: `hero.jpg`, `teacher-julia.jpg`, `classroom-01.jpg`, `classroom-02.jpg`, `og-image.jpg` (1200×630 for OG). Use `next/image` with WebP where possible.

Source images: naver blog photo tabs listed in `requirements.md` §3.4.

## SEO

- `<title>`: 올티칭 영어교습소 | 광주 광산구 신창동 초·중등 영어학원
- JSON-LD `LocalBusiness` schema with address, phone, coordinates
- OG tags for KakaoTalk/Instagram share preview
- Target Lighthouse 90+ across all categories
