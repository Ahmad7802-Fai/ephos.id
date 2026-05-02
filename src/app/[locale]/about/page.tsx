import AboutPage from "@/modules/about/pages/AboutPage";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const isID = locale === "id";

  return {
    title: isID
      ? "Tentang Kami - EphosTech"
      : "About Us - EphosTech",

    description: isID
      ? "Pelajari lebih lanjut tentang EphosTech, visi, misi, dan tim profesional kami dalam menghadirkan solusi IT terbaik."
      : "Learn more about EphosTech, our vision, mission, and professional team delivering IT solutions.",

    openGraph: {
      title: isID
        ? "Tentang EphosTech"
        : "About EphosTech",

      description: isID
        ? "Perusahaan IT Infrastructure, Cloud, dan Enterprise System terpercaya."
        : "Trusted IT Infrastructure, Cloud, and Enterprise System company.",

      url: `https://ephostech.id/${locale}/about`,

      images: [
        {
          url: "/og-about.jpg", // bikin khusus about (lebih bagus)
          width: 1200,
          height: 630,
        },
      ],
    },

    alternates: {
      canonical: `https://ephostech.id/${locale}/about`,
      languages: {
        id: "https://ephostech.id/id/about",
        en: "https://ephostech.id/en/about",
      },
    },
  };
}

export default function Page() {
  return <AboutPage />;
}