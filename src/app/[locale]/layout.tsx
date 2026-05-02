import "../globals.css";
import { Navbar, Footer } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";

const baseUrl = "https://ephostech.id";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isID = locale === "id";

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default: isID
        ? "EphosTech - Solusi IT Infrastructure & Cloud"
        : "EphosTech - IT Infrastructure & Cloud Solutions",
      template: "%s | EphosTech",
    },

    description: isID
      ? "EphosTech menyediakan solusi IT Infrastructure, Cloud, dan Enterprise System untuk bisnis modern."
      : "EphosTech provides IT Infrastructure, Cloud, and Enterprise System solutions for modern businesses.",

    keywords: [
      "IT Infrastructure",
      "Cloud Computing",
      "Enterprise System",
      "IT Consultant Indonesia",
      "DevOps",
      "Networking",
    ],

    openGraph: {
      title: "EphosTech",
      description: isID
        ? "Solusi IT Infrastructure & Cloud untuk bisnis scalable."
        : "IT Infrastructure & Cloud solutions for scalable businesses.",
      url: baseUrl,
      siteName: "EphosTech",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`, // ✅ FIX (FULL URL)
          width: 1200,
          height: 630,
        },
      ],
      locale: isID ? "id_ID" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "EphosTech",
      description: isID
        ? "Solusi IT modern untuk bisnis Anda"
        : "Modern IT solutions for your business",
      images: [`${baseUrl}/og-image.jpg`], // ✅ FIX konsisten
    },

    alternates: {
      canonical: baseUrl,
      languages: {
        id: `${baseUrl}/id`,
        en: `${baseUrl}/en`,
      },
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

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className="overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />

          <main className="pt-16 md:pt-20 overflow-x-hidden">
            {children}
          </main>

          <Footer />
        </NextIntlClientProvider>

      </body>
    </html>
  );
}