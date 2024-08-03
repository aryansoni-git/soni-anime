import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sonianime",
  description: "Watch free animes",
  icons: {
    icon: '/icons/logo.svg',
  } 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
