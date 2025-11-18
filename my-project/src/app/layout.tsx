import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "천상수학 - 꿈을 향한 첫 걸음",
  description: "천상수학은 학생들의 꿈과 미래를 함께 만들어가는 교육기관입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
