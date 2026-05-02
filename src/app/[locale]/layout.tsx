import "../globals.css";
import { Navbar, Footer } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const baseUrl = "https://ephostech.id";

// 🔥 FONT OPTIMIZED
const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// 🔥 GLOBAL METADATA (LEVEL ROOT)
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "EphosTech - IT Infrastructure & Cloud Solutions",
    template: "%s | EphosTech",
  },

  description:
    "EphosTech provides IT Infrastructure, Cloud Computing, and Enterprise System solutions for modern businesses.",

  applicationName: "EphosTech",
  creator: "EphosTech",
  publisher: "EphosTech",
  category: "technology",

  openGraph: {
    title: "EphosTech",
    description:
      "IT Infrastructure & Cloud solutions for scalable businesses.",
    url: baseUrl,
    siteName: "EphosTech",
    images: [
      {
        url: `${baseUrl}/og-home.png`,
        width: 1200,
        height: 630,
        alt: "EphosTech",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EphosTech",
    description:
      "IT Infrastructure & Cloud solutions for scalable businesses.",
    images: [`${baseUrl}/og-home.png`],
  },

  alternates: {
    canonical: baseUrl,
    languages: {
      id: `${baseUrl}/id`,
      en: `${baseUrl}/en`,
      "x-default": `${baseUrl}/id`,
    },
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

// 🔥 ROOT LAYOUT
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // 🔥 SAFE IMPORT (ANTI ERROR)
  const messages = (
    await import(`@/messages/${locale}.json`).catch(() =>
      import(`@/messages/id.json`)
    )
  ).default;

  return (
    <html lang={locale} dir="ltr">
      <body
        className={`${font.className} antialiased overflow-x-hidden bg-[var(--bg)] text-[var(--text)]`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* 🔥 NAVBAR */}
          <Navbar />

          {/* 🔥 CONTENT */}
          <main className="pt-16 md:pt-20 overflow-x-hidden">
            {children}
          </main>

          {/* 🔥 FOOTER */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}