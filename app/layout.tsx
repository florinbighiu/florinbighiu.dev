import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
// @ts-ignore: side-effect import of CSS globals
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Florin Bighiu — QA Automation & Full-Stack Developer",
  description:
    "ISTQB certified QA Automation Engineer and Full-Stack Developer specializing in Playwright E2E testing, CI/CD with GitHub Actions, and API testing with Postman — backed by hands-on React, Next.js, Java, and Spring Boot experience, and open-source QA work on peviitor.ro.",
  openGraph: {
    title: "Florin Bighiu — QA Automation & Full-Stack Developer",
    description:
      "ISTQB certified QA Automation Engineer and Full-Stack Developer — Playwright E2E, CI/CD, API testing, React, Next.js, Java and Spring Boot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} bg-bg text-primary font-body antialiased overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
