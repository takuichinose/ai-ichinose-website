import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI ICHINOSE",
  description: "自然、旅、文化、食、時間をめぐるAI ICHINOSEのブランドサイト。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
