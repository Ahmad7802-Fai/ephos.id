import type { Metadata } from "next";
import HomePage from "@/modules/home/pages/HomePage";
import { NextIntlClientProvider } from "next-intl";
import messages from "@/messages/id.json";

const baseUrl = "https://ephostech.id";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "EphosTech - IT Infrastructure & Cloud Solutions",
  description:
    "Solusi IT Infrastructure, Cloud, dan Enterprise System untuk bisnis modern.",

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    title: "EphosTech",
    description: "IT Infrastructure & Cloud Solutions for scalable businesses.",
    url: baseUrl,
    siteName: "EphosTech",
    images: [
      {
        url: `${baseUrl}/og-home.png`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: [`${baseUrl}/og-home.png`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {

  return null;

}