import type { Metadata, Viewport } from "next";
import Script from "next/script";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ec" },
    { media: "(prefers-color-scheme: dark)", color: "#111411" },
  ],
};

const themeScript = `
  (() => {
    try {
      const saved = localStorage.getItem("theme");
      const preference = ["light", "dark", "system"].includes(saved) ? saved : "system";
      const resolved = preference === "system"
        ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : preference;
      document.documentElement.dataset.theme = resolved;
      document.documentElement.dataset.themePreference = preference;
      document.documentElement.style.colorScheme = resolved;
    } catch {
      document.documentElement.dataset.theme =
        matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        {children}
      </body>
    </html>
  );
}
