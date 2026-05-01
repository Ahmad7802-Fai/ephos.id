"use client";

import { usePathname, useRouter, useParams } from "next/navigation";

const locales = ["id", "en"];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const currentLocale = params.locale as string;

  const switchLanguage = (newLocale: string) => {
    if (!pathname) return;

    const segments = pathname.split("/");

    // replace locale di URL
    segments[1] = newLocale;

    const newPath = segments.join("/") || `/${newLocale}`;

    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-[var(--card)] border border-[var(--border)]">

      {locales.map((locale) => {
        const active = currentLocale === locale;

        return (
          <button
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={`
              px-3 py-1.5 text-xs rounded-full transition
              ${
                active
                  ? "bg-[var(--primary)] text-white shadow"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }
            `}
          >
            {locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}