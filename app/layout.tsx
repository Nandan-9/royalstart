import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/bootstrap.css";
import "@/styles/font-awesome.css";
import "@/styles/flaticon.css";
import "@/styles/animate.css";
import "@/styles/custom-animate.css";
import "@/styles/global.css";
import "@/styles/style.css";
import "@/styles/responsive.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Royal Star Crusher LLC | Quarry Mining & Aggregate UAE",
  description:
    "Royal Star Crusher LLC — a well-established and licensed Quarry mining and crusher unit at Fujairah, UAE. Premium aggregates, armor rock, manufactured sand, and road base materials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
