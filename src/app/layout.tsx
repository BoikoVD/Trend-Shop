import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter"
});

export const metadata: Metadata = {
  title: "Trend Shop",
  description: "Online shopping marketplace",
  icons: [
    { rel: "icon", type: "image/png", sizes: "48x48", url: "/favicon.ico" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-gray-400 dark:bg-gray-500 dark:text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
