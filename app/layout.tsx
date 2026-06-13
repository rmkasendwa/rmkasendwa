import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://rmkasendwa.com";
const description =
  "Ronald Kasendwa is a Product Engineer who turns ideas into useful, maintainable products across product thinking, software engineering, cloud infrastructure, and developer experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ronald Kasendwa — Product Engineer",
    template: "%s — Ronald Kasendwa",
  },
  description,
  keywords: [
    "Ronald Kasendwa",
    "Product Engineer",
    "Software Engineer",
    "Product Development",
    "Cloud Infrastructure",
    "Systems Architecture",
  ],
  authors: [{ name: "Ronald Kasendwa", url: siteUrl }],
  creator: "Ronald Kasendwa",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ronald Kasendwa",
    title: "Ronald Kasendwa — Product Engineer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronald Kasendwa — Product Engineer",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
