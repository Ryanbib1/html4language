import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.autocoder.cc"),
  title: {
    default: "AutoCoder | ai app builder",
    template: "%s | AutoCoder"
  },
  description:
    "AutoCoder is an ai app builder that turns product ideas into production-ready web applications.",
  openGraph: {
    title: "AutoCoder | ai app builder",
    description:
      "Build production-ready apps from natural language with the AutoCoder ai app builder.",
    url: "https://www.autocoder.cc",
    siteName: "AutoCoder",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
