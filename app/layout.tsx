import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://allteachingeng.vercel.app"),
  title: "올티칭 영어교습소 | 광주 광산구 신창동 초·중등 영어학원",
  description:
    "광주 광산구 신창동 올티칭 영어교습소. 16년 경력 원장 직강, 소수정예 수업으로 파닉스부터 중등 내신까지 체계적으로 지도합니다.",
  keywords:
    "올티칭영어교습소, 광주영어학원, 광산구영어학원, 신창동영어학원, 신창동영어교습소, 초등영어, 중등영어, 예비중등, 소수정예, 원장직강, 내신영어, 신창중학교, 수문초등학교",
  openGraph: {
    title: "올티칭 영어교습소 | 광주 광산구 신창동 초·중등 영어학원",
    description:
      "16년 경력 원장 직강, 소수정예 수업. 파닉스부터 중등 내신까지.",
    type: "website",
    locale: "ko_KR",
    url: "https://allteachingeng.vercel.app",
    siteName: "올티칭 영어교습소",
    images: [
      {
        url: "/images/hero-illustration.jpg",
        width: 800,
        height: 800,
        alt: "올티칭 영어교습소",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "올티칭 영어교습소 | 광주 광산구 신창동 초·중등 영어학원",
    description:
      "16년 경력 원장 직강, 소수정예 수업. 파닉스부터 중등 내신까지.",
    images: ["/images/hero-illustration.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "올티칭 영어교습소",
  description: "16년 경력 원장 직강 소수정예 영어교습소",
  address: {
    "@type": "PostalAddress",
    streetAddress: "신창로 113, 3층",
    addressLocality: "광산구",
    addressRegion: "광주광역시",
    addressCountry: "KR",
  },
  telephone: "010-6546-1706",
  url: "https://allteachingeng.vercel.app",
  openingHours: "Mo-Fr 14:00-21:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
