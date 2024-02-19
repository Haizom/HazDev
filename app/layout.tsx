import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "HazDev Agency.",
    template: "%s | HazDev"
  },
  description: "Creative Thoughts Agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} container`}>
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  );
}
