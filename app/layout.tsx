import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | Data Delivery Leader",
  description: "Data delivery leadership, transformation, and advisory backed by 19 years of experience.",
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
