import AboutPage from "@/modules/about/pages/AboutPage";
import type { Metadata } from "next";

const baseUrl = "https://ephostech.id";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>; // ✅ FIX
}): Promise<Metadata> {
  const { locale } = await params; // ✅ WAJIB

  const isID = locale === "id";
  const url = `${baseUrl}/${locale}/about`;

  return {
    metadataBase: new URL(baseUrl),

    title: isID
      ? "Tentang Kami - EphosTech"
      : "About Us - EphosTech",

    description: isID
      ? "Pelajari lebih lanjut tentang EphosTech, visi, misi, dan tim profesional kami dalam menghadirkan solusi IT terbaik."
      : "Learn more about EphosTech, our vision, mission, and professional team delivering IT solutions.",

    openGraph: {
      title: isID ? "Tentang EphosTech" : "About EphosTech",

      description: isID
        ? "Perusahaan IT Infrastructure, Cloud, dan Enterprise System terpercaya."
        : "Trusted IT Infrastructure, Cloud, and Enterprise System company.",

      url,
      siteName: "EphosTech",

      images: [
        {
          url: `${baseUrl}/og-about.jpg`, // ✅ FULL URL (WAJIB)
          width: 1200,
          height: 630,
        },
      ],

      locale: isID ? "id_ID" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: isID ? "Tentang EphosTech" : "About EphosTech",
      description: isID
        ? "Kenali lebih dalam tentang EphosTech."
        : "Get to know EphosTech better.",
      images: [`${baseUrl}/og-about.jpg`],
    },

    alternates: {
      canonical: url,
      languages: {
        id: `${baseUrl}/id/about`,
        en: `${baseUrl}/en/about`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page() {
  return <AboutPage />;
}