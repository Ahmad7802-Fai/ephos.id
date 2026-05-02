import ContactPage from "@/modules/contact/ContactPage";
import type { Metadata } from "next";

const baseUrl = "https://ephostech.id";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>; // ✅ FIX
}): Promise<Metadata> {
  const { locale } = await params; // ✅ WAJIB await

  const isID = locale === "id";
  const url = `${baseUrl}/${locale}/contact`;

  return {
    metadataBase: new URL(baseUrl),

    title: isID
      ? "Kontak Kami - EphosTech"
      : "Contact Us - EphosTech",

    description: isID
      ? "Hubungi tim EphosTech untuk konsultasi IT Infrastructure, Cloud, dan Enterprise System. Respon cepat & profesional."
      : "Contact EphosTech for IT Infrastructure, Cloud, and Enterprise System consultation. Fast & professional response.",

    keywords: [
      "Contact EphosTech",
      "IT Consultant Indonesia",
      "Cloud Services Jakarta",
      "IT Infrastructure Indonesia",
      "Konsultasi IT",
    ],

    openGraph: {
      title: isID ? "Hubungi EphosTech" : "Contact EphosTech",
      description: isID
        ? "Konsultasi IT gratis untuk bisnis Anda."
        : "Free IT consultation for your business.",
      url,
      siteName: "EphosTech",
      images: [
        {
          url: `${baseUrl}/og-contact.jpg`, // ✅ FULL URL (WAJIB)
          width: 1200,
          height: 630,
        },
      ],
      locale: isID ? "id_ID" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: isID ? "Kontak EphosTech" : "Contact EphosTech",
      description: isID
        ? "Konsultasi IT gratis sekarang."
        : "Start your IT consultation today.",
      images: [`${baseUrl}/og-contact.jpg`], // ✅ FIX
    },

    alternates: {
      canonical: url,
      languages: {
        id: `${baseUrl}/id/contact`,
        en: `${baseUrl}/en/contact`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page() {
  return <ContactPage />;
}