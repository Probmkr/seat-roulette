import "./globals.scss";
import { Zen_Maru_Gothic } from "next/font/google";

const maru_gothic = Zen_Maru_Gothic({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "自動席替えアプリ",
  description: "席替えを自動でしてくれます．",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={maru_gothic.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
