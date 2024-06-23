import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Absensi PT. WAHANAKARSA SWANDIRI",
  description: "Absensi PT. WAHANAKARSA SWANDIRI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
