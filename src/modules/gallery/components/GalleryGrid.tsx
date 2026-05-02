"use client";

import { useState, useMemo } from "react";
import GalleryItem from "./GalleryItem";
import GalleryFilter from "./GalleryFilter";
import { galleryData } from "../data/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState("all");

  // 🔥 FILTER LOGIC (SIAP SCALE)
  const filtered = useMemo(() => {
    if (active === "all") return galleryData;

    return galleryData.filter((item) => {
      // filter by category
      if (item.category === active) return true;

      // 🔥 future: filter by tags
      if (item.tags?.includes(active)) return true;

      return false;
    });
  }, [active]);

  return (
    <div className="space-y-10">

      {/* FILTER */}
      <GalleryFilter active={active} setActive={setActive} />

      {/* GRID */}
      <div className="
        grid gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      ">
        {filtered.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <p className="text-center text-sm text-[var(--text-muted)]">
          No projects found.
        </p>
      )}

    </div>
  );
}