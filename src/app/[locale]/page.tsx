import HomePage from "@/modules/home/pages/HomePage";
import type { Metadata } from "next";

const baseUrl = "https://ephostech.id";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isID = locale === "id";
  const url = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default: isID
        ? "EphosTech - IT Infrastructure, Cloud & Enterprise System"
        : "EphosTech - IT Infrastructure, Cloud & Enterprise Systems",
      template: "%s | EphosTech",
    },

    description: isID
      ? "EphosTech menyediakan solusi IT Infrastructure, Cloud Computing, dan Enterprise System untuk bisnis modern."
      : "EphosTech provides IT Infrastructure, Cloud Computing, and Enterprise System solutions.",

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
        ? "Solusi IT modern untuk bisnis scalable."
        : "Modern IT solutions for scalable businesses.",
      url,
      siteName: "EphosTech",
      images: [
        {
          url: `${baseUrl}/og-home.png`, // 🔥 FULL URL (WAJIB)
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
      images: [`${baseUrl}/og-home.png`],
    },

    alternates: {
      canonical: url,
      languages: {
        id: `${baseUrl}/id`,
        en: `${baseUrl}/en`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const url = `${baseUrl}/${locale}`;

  // 🔥 STRUCTURED DATA (OPTIMIZED)
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "EphosTech",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+6285285579492",
          contactType: "customer service",
          areaServed: "ID",
          availableLanguage: ["Indonesian", "English"],
        },
      },
      {
        "@type": "WebSite",
        name: "EphosTech",
        url: baseUrl,
      },
      {
        "@type": "WebPage",
        name: "EphosTech Homepage",
        url,
      },
    ],
  };

  return (
    <>
      {/* 🔥 JSON-LD (NO WARNING) */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <HomePage />
    </>
  );
}