import ServicesPage from "@/modules/services";
import type { Metadata } from "next";

const baseUrl = "https://ephostech.id";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isID = locale === "id";
  const url = `${baseUrl}/${locale}/services`;

  return {
    metadataBase: new URL(baseUrl),

    title: isID
      ? "Layanan IT Infrastructure & Cloud - EphosTech"
      : "IT Infrastructure & Cloud Services - EphosTech",

    description: isID
      ? "EphosTech menyediakan layanan IT Infrastructure, Cloud Services, DevOps, dan Enterprise System untuk meningkatkan efisiensi dan skalabilitas bisnis Anda."
      : "EphosTech provides IT Infrastructure, Cloud Services, DevOps, and Enterprise Systems to improve business efficiency and scalability.",

    keywords: [
      "IT Services Indonesia",
      "Cloud Services",
      "IT Infrastructure",
      "DevOps Indonesia",
      "Enterprise System",
      "Managed Services",
    ],

    openGraph: {
      title: isID
        ? "Layanan EphosTech"
        : "EphosTech Services",

      description: isID
        ? "Solusi IT lengkap untuk bisnis modern."
        : "Complete IT solutions for modern businesses.",

      url,
      siteName: "EphosTech",

      images: [
        {
          url: `${baseUrl}/og-services.jpg`, // wajib ada di public/
          width: 1200,
          height: 630,
        },
      ],

      locale: isID ? "id_ID" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: isID
        ? "Layanan EphosTech"
        : "EphosTech Services",

      description: isID
        ? "Layanan IT modern untuk bisnis Anda."
        : "Modern IT services for your business.",

      images: [`${baseUrl}/og-services.jpg`],
    },

    alternates: {
      canonical: url,
      languages: {
        id: `${baseUrl}/id/services`,
        en: `${baseUrl}/en/services`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page() {
  return <ServicesPage />;
}