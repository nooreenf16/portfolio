import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactForm } from "@/components/ContactForm";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nooreen Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Timeline />

        <Projects />
        <ContactForm />

        {/* <!-- Footer --> */}
        <footer>
          <p>© 2025 Nooreen. All Rights Reserved. Fluid Glass, Fluid Ether credit to React Bits</p>
        </footer>
      </body>
    </html>
  );
}
