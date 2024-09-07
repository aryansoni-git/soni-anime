import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "soni-anime - Watch and Download Free Anime | Responsive Anime Streaming",
  description: "Sonianime is a feature-rich anime streaming site offering free anime streaming and downloading. Built with Next.js 14, Tailwind CSS, and Swiper.js, Sonianime provides a seamless, responsive design and enhanced user experience across all devices.",
  keywords: "anime streaming, free anime, download anime, Sonianime, watch anime, responsive design, Next.js, Tailwind CSS, Swiper.js",
  icons: {
    icon: '/icons/logo.svg',
  },
  metadataBase: new URL("https://soni-anime.vercel.app"),
  openGraph: {
    title: "soni-anime - Watch Free Anime",
    description: "Stream and download your favorite anime for free on Sonianime. Experience smooth navigation, fast loading, and responsive design across all devices.",
    url: "https://soni-anime.vercel.app/",
    images: [
      {
        url: "/soni-anime-cover.png",
        alt: "Sonianime cover image",
      },
    ],
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white flex flex-col`}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
