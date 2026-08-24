import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jmtechlab.do"),
  title: {
    default: "José Manuel Suárez | QA Automation Engineer | JMTechLab",
    template: "%s | JMTechLab",
  },
  description:
    "Portfolio of José Manuel Suárez, QA Automation Engineer and Systems Engineer focused on SDET, Playwright, software quality, AI and secure software engineering.",
  keywords: [
    "José Manuel Suárez",
    "QA Automation Engineer",
    "SDET",
    "Playwright",
    "Software Testing",
    "QA Engineer",
    "Next.js",
    "Python",
    "FastAPI",
    "Cybersecurity",
    "JMTechLab",
  ],
  authors: [{ name: "José Manuel Suárez" }],
  creator: "José Manuel Suárez",
  openGraph: {
    title: "José Manuel Suárez | QA Automation Engineer",
    description:
      "QA Automation, SDET, software engineering, AI and cybersecurity projects.",
    url: "https://jmtechlab.do",
    siteName: "JMTechLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Manuel Suárez | QA Automation Engineer",
    description:
      "QA Automation, SDET, software engineering, AI and cybersecurity projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
