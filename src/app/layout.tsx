import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'shahin', 
  icons: {
    icon:'/Images/moon.webp',
  },
  description: 'Lets get to know more about Shahin', 
  generator: "shahin",
  manifest: "/manifest.json",
  keywords: ["nextjs", "tailwind", "leaflet", "pwa", "i18next"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#1d192c" }],
  authors: [
    { name: "shahin moshkelgosha" },
    {
      name: "shahin moshkelgosha",
      url: "https://www.linkedin.com/in/kasramg85/",
    },
  ], 
}
  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
