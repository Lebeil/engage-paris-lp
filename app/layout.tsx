import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Engage Paris | La conférence annuelle Customer Success",
  description: "Le hub du Customer Success s'installe pour vous accueillir pour partager sur les problématiques et nouvelles tendances de l'expérience client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
