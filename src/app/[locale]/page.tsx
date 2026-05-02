import HomePage from "@/modules/home/pages/HomePage";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params; // ✅ FIX ERROR

  const baseUrl = "https://ephostech.id";
  const url = `${baseUrl}/${locale}`;
  const isID = locale === "id";

  return {
    title: isID
      ? "EphosTech - IT Infrastructure, Cloud & Enterprise System"
      : "EphosTech - IT Infrastructure, Cloud & Enterprise Systems",

    description: isID
      ? "EphosTech menyediakan solusi IT Infrastructure, Cloud Computing, dan Enterprise System untuk bisnis modern."
      : "EphosTech provides IT Infrastructure, Cloud Computing, and Enterprise System solutions.",

    openGraph: {
      title: "EphosTech",
      description: isID
        ? "Solusi IT modern untuk bisnis scalable."
        : "Modern IT solutions for scalable businesses.",
      url,
      siteName: "EphosTech",
      images: [
        {
          url: "/og-home.png",
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
      images: ["/og-home.png"],
    },

    alternates: {
      canonical: url,
      languages: {
        id: `${baseUrl}/id`,
        en: `${baseUrl}/en`,
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const baseUrl = "https://ephostech.id";
  const url = `${baseUrl}/${locale}`;

  // 🔥 STRUCTURED DATA (CLEAN)
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "EphosTech",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+6285285579492",
        contactType: "customer service",
        areaServed: "ID",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "EphosTech",
      url: baseUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "EphosTech Homepage",
      url,
    },
  ];

  return (
    <>
      {/* 🔥 SEO STRUCTURED DATA */}
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