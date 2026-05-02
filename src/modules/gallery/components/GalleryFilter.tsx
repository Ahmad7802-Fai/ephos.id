"use client";

import { galleryData } from "../data/gallery";

export default function GalleryFilter({ active, setActive }: any) {

  // 🔥 ambil semua kategori unik
  const categories = [
    "all",
    ...new Set(galleryData.map((item) => item.category)),
  ];

  return (
    <div className="flex gap-2 flex-wrap justify-center">

      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`
            px-4 py-1.5 text-xs rounded-full transition capitalize
            ${
              active === item
                ? "bg-[var(--primary)] text-white"
                : "bg-[var(--card)] border border-[var(--border)] text-[var(--text-muted)]"
            }
          `}
        >
          {item}
        </button>
      ))}

    </div>
  );
}