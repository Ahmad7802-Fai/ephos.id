import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ephostech.id/id",
  },
};

export default function RootPage() {
  redirect("/id");
}