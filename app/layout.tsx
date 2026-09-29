import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Matching sanfordheather-marketing-github-io.vercel.app exactly:
// Inter for all headings/subheads/body/labels, with Georgia italic
// reserved for pull-quotes (see .font-quote in globals.css).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const interBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const interMono = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lance Braun | Senior Content Marketing Leader",
  description:
    "Lance Braun is a senior content marketing leader with 15 years building high-impact content engines across SaaS, fintech, and regulated enterprise technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interBody.variable} ${interMono.variable} font-body antialiased bg-paper text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
