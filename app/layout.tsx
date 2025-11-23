import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Pair Programming Simulator",
  description: "Simulate pair programming sessions with different AI personalities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

