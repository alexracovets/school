import { Sawarabi_Gothic } from 'next/font/google';
import localFont from "next/font/local";
import type { Metadata } from "next";


import { Header } from "@/shared/components";

const sawarabi = Sawarabi_Gothic({
  weight: "400",
  variable: '--font-sawarabi',
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

const kyivTypeSans = localFont({
  src: [
    {
      path: "./fonts/KyivTypeSans/KyivTypeSans-Thin.woff",
      weight: "100",
      style: "normal"
    },
    {
      path: "./fonts/KyivTypeSans/KyivTypeSans-Light.woff",
      weight: "300",
      style: "normal"
    },
    {
      path: "./fonts/KyivTypeSans/KyivTypeSans-Regular.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/KyivTypeSans/KyivTypeSans-Medium.woff",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/KyivTypeSans/KyivTypeSans-Bold.woff",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/KyivTypeSans/KyivTypeSans-Black.woff",
      weight: "800",
      style: "normal"
    },
    {
      path: "./fonts/KyivTypeSans/KyivTypeSans-Heavy.woff",
      weight: "900",
      style: "normal"
    }
  ],
  variable: "--font-kyiv-type-sans",
  display: "swap"
})

const kyivTypeTitling = localFont({
  src: [
    {
      path: "./fonts/KyivTypeTitling/KyivTypeTitling-Regular.woff",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-kyiv-type-titling"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import "./globals.scss";
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${kyivTypeSans.variable} ${kyivTypeTitling.variable} ${sawarabi.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
