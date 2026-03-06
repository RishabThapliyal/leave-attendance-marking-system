import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/store/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leave & Attendance Calendar",
  description: "Leave and attendance marking system with FullCalendar",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Inline critical CSS — agar phone pe main stylesheet load na ho to bhi dark theme + text color apply ho
const criticalCSS = `
  :root{--bg:#0a0a0a;--fg:#ededed}
  html,body{background:var(--bg);color:var(--fg);font-family:system-ui,-apple-system,sans-serif}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Static CSS — phone pe bundle fail ho to bhi ye load hoti hai */}
        <link rel="stylesheet" href="/critical.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
