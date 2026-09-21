import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import AppProvider from "@/context/AppContext";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hero App | Home",
  description: "This is a hero app website where we can installs app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} h-full antialiased`}
    >
      <body
        className={`${inter.variable} font-inter antialiased min-h-full flex flex-col`}
      >
        <AppProvider>
          <Navbar />
          {children}
          <Footer />

          <ToastContainer />
        </AppProvider>
      </body>
    </html>
  );
}
