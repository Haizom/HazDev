import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2 weeks next js",
  description: "Generated by create next app",
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
