import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "./_providers/ReactQueryProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/features/products";
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
        className={`${inter.className} customScrollBar text-gray-400 dark:bg-gray-500 dark:text-white`}
      >
        <ReactQueryProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
