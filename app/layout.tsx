import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import "./globals.css";

const siteUrl = "https://rmkasendwa.com";
const themePreferences = ["light", "system", "dark"] as const;
type ThemePreference = (typeof themePreferences)[number];
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
      const cookie = document.cookie
        .split("; ")
        .find((entry) => entry.startsWith("theme="))
        ?.split("=")[1];
      const preference = ["light", "dark", "system"].includes(cookie)
        ? cookie
        : ["light", "dark", "system"].includes(saved)
          ? saved
          : "system";
      const resolved = preference === "system"
        ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : preference;
      document.documentElement.dataset.theme = resolved;
      document.documentElement.dataset.themePreference = preference;
      document.documentElement.style.colorScheme = resolved;

      if (cookie !== preference) {
        document.cookie = "theme=" + preference + "; Path=/; Max-Age=31536000; SameSite=Lax";
      }
    } catch {
      const resolved =
        matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.dataset.theme = resolved;
      document.documentElement.style.colorScheme = resolved;
    }
  })();
`;

function isThemePreference(value: string | undefined): value is ThemePreference {
  return themePreferences.some((theme) => theme === value);
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get("theme")?.value;
  const preference = isThemePreference(savedTheme) ? savedTheme : "system";
  const resolvedTheme = preference === "system" ? undefined : preference;

  return (
    <html
      lang="en"
      data-theme={resolvedTheme}
      data-theme-preference={preference}
      style={{ colorScheme: resolvedTheme }}
      suppressHydrationWarning
    >
      <head>
        <script
          id="theme-initializer"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
