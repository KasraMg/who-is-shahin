import ClientInit from "@/utils/client-init";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "shahin moshkelgosha | front end developer",
  icons: {
    icon: "/Images/moon.webp",
  },
  description:
    "Frontend Developer with over 4 years of experience in designing and developing websites using modern technologies such as React, Next.js, and TypeScript.",
  generator: "shahin moshkelgosha",
  manifest: "/manifest.json",
  authors: [{ name: "شاهین مشکل گشا", url: "https://shahinmg.ir" }],
  keywords: ["nextjs", "tailwind", "leaflet", "pwa", "i18next"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#1d192c" }],
  openGraph: {
    title: "shahin moshkelgosha | front end developer",

    description:
      "Frontend Developer with over 4 years of experience in designing and developing websites using modern technologies such as React, Next.js, and TypeScript.",
    type: "website",
    url: "https://shahinmg.ir",
    locale: "fa",
    siteName: "shahin moshkelgosha | front end developer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientInit />
        {children}
      </body>
    </html>
  );
}
