import PortfolioPage from "@/modules/portfolio";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const isID = locale === "id";
  const baseUrl = "https://ephostech.id";
  const url = `${baseUrl}/${locale}/portfolio`;

  return {
    title: isID
      ? "Portfolio & Case Study - EphosTech"
      : "Portfolio & Case Studies - EphosTech",

    description: isID
      ? "Lihat portfolio dan studi kasus EphosTech dalam membangun IT Infrastructure, Cloud System, dan solusi enterprise yang scalable dan reliable."
      : "Explore EphosTech portfolio and case studies in IT Infrastructure, Cloud Systems, and scalable enterprise solutions.",

    keywords: [
      "IT Portfolio",
      "Case Study IT",
      "Cloud Migration Indonesia",
      "IT Infrastructure Project",
      "Enterprise System Indonesia",
    ],

    openGraph: {
      title: isID
        ? "Portfolio EphosTech"
        : "EphosTech Portfolio",

      description: isID
        ? "Solusi nyata yang telah membantu bisnis berkembang."
        : "Real solutions that help businesses grow.",

      url,
      siteName: "EphosTech",

      images: [
        {
          url: "/og-portfolio.jpg",
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
        ? "Portfolio EphosTech"
        : "EphosTech Portfolio",
      description: isID
        ? "Lihat hasil nyata implementasi solusi IT kami."
        : "See real results from our IT solutions.",
      images: ["/og-portfolio.jpg"],
    },

    alternates: {
      canonical: url,
      languages: {
        id: `${baseUrl}/id/portfolio`,
        en: `${baseUrl}/en/portfolio`,
      },
    },
  };
}

export default function Page() {
  return <PortfolioPage />;
}