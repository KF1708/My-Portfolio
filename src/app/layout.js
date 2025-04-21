import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CommonLayout from "@/components/commonLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kaniz Fatama Protfolio",
  description: "Creat my simple portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CommonLayout> {children}</CommonLayout>
      </body>
    </html>
  );
}
