import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Yogendra Rana",
  description: "CV of Yogendra Rana",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="@/images/me/smiley.png" type="image/png+jpg" />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
