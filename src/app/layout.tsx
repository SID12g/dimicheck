import type { Metadata } from "next";
import "./globals.css";
import AuthSession from "@/components/AuthSession";

export const metadata: Metadata = {
  title: "DIMI CHECK",
  description: "디미고 내 인원체크를 손 쉽게",
  openGraph: {
    title: "DIMI CHECK",
    description: "디미고 내 인원체크를 손 쉽게",
    images: "/images/dimicheck.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}
