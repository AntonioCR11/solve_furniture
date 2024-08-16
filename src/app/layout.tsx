import type { Metadata } from "next";
import "./globals.css";
import { newYork } from "@/components/fonts";

export const metadata: Metadata = {
  title: "Solve",
  description: "Solve - Ecommerce & Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${newYork.className} text-dark`}>{children}</body>
    </html>
  );
}
