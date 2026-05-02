import "../globals.css";
import { Navbar, Footer } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = "https://ephostech.id";

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default:
        locale === "id"
          ? "EphosTech - Solusi IT Infrastructure & Cloud"
          : "EphosTech - IT Infrastructure & Cloud Solutions",
      template: "%s | EphosTech",
    },

    description:
      locale === "id"
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
      description:
        locale === "id"
          ? "Solusi IT Infrastructure & Cloud untuk bisnis scalable."
          : "IT Infrastructure & Cloud solutions for scalable businesses.",
      url: baseUrl,
      siteName: "EphosTech",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "EphosTech",
      description:
        locale === "id"
          ? "Solusi IT modern untuk bisnis Anda"
          : "Modern IT solutions for your business",
      images: ["/og-image.png"],
    },

    alternates: {
      canonical: baseUrl,
      languages: {
        id: `${baseUrl}/id`,
        en: `${baseUrl}/en`,
      },
    },

    // 🔥 FAVICON FULL SET
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
    <html lang={locale}>
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