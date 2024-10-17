import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "German Gohringer",
  description: "Professional portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider enableSystem defaultTheme="light">
          <main>{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
