"use client";

import { Container } from "@/components";
import GalleryHero from "../components/GalleryHero";
import GalleryGrid from "../components/GalleryGrid";
import { useTranslations } from "next-intl";

export default function GalleryPage() {

  return (

    <>

      {/* HERO */}

      <GalleryHero />

      {/* GRID */}

      <section className="pb-24 bg-[var(--bg)]">

        <div className="container-custom">

          <GalleryGrid />

        </div>

      </section>

    </>

  );

}