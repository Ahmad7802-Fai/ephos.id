import "../globals.css";
import { Navbar, Footer } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const baseUrl = "https://ephostech.id";

// 🔥 FONT OPTIMIZED (ANTI RENDER BLOCKING)
const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const isID = locale === "id";

  const url = `${baseUrl}/${locale}`;

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
      : "EphosTech provides IT Infrastructure, Cloud, and Enterprise System solutions.",

    openGraph: {
      title: "EphosTech",
      description: isID
        ? "Solusi IT Infrastructure & Cloud untuk bisnis scalable."
        : "IT solutions for scalable businesses.",
      url,
      siteName: "EphosTech",
      images: [
        {
          url: `${baseUrl}/og-home.png`, // ← pakai yang pasti ada
          width: 1200,
          height: 630,
          alt: "EphosTech",
        },
      ],
      locale: isID ? "id_ID" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      images: [`${baseUrl}/og-home.png`],
    },

    alternates: {
      canonical: url,
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
      <body className={`${font.className} overflow-x-hidden bg-[var(--bg)] text-[var(--text)]`}>

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