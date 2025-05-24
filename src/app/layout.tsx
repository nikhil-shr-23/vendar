import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";


const dmSans = DM_Sans({subsets:["latin"]})

export const metadata: Metadata = {
  title: "Vendoor",
  description: "Vendoor is a platform for vendors to manage their businesses and customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
