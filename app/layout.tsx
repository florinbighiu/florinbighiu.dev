import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
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
  title: "Florin Bighiu — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, Java, and Spring Boot. Building scalable web apps with clean code and great UX.",
  openGraph: {
    title: "Florin Bighiu — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Java, and Spring Boot.",
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
      </body>
    </html>
  );
}
