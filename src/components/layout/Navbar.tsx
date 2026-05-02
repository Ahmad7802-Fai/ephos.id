"use client";

import { useState } from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button, Container } from "@/components";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;

  const t = useTranslations("Navbar");

  const menus = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("services"), href: "/services" },
    { name: t("portfolio"), href: "/portfolio" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[999] bg-[var(--bg)] border-b border-[var(--border)] backdrop-blur">
      <Container className="h-16 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <Image
            src="/assets/favicon/logo.png"
            alt="EphosTech"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-semibold text-lg text-[var(--text)]">
            EphosTech
          </span>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {menus.map((item, i) => {
            const fullPath =
              item.href === "/"
                ? `/${locale}`
                : `/${locale}${item.href}`;

            const isActive = pathname === fullPath;

            return (
              <Link
                key={i}
                href={fullPath}
                className={`
                  relative group transition
                  ${
                    isActive
                      ? "text-[var(--text)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }
                `}
              >
                {item.name}

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px]
                    bg-[var(--primary)] transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* ================= RIGHT ================= */}
        <div className="hidden md:flex items-center gap-4">

          {/* 🔥 LANGUAGE */}
          <LanguageSwitcher />

          {/* 🔥 CTA */}
          <Button size="sm">
            {t("cta")}
          </Button>

        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="md:hidden text-[var(--text)]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </Container>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-[500px]" : "max-h-0"}
        `}
      >
        <div className="bg-[var(--bg)] border-t border-[var(--border)] px-6 py-6 space-y-5">

          {menus.map((item, i) => {
            const fullPath =
              item.href === "/"
                ? `/${locale}`
                : `/${locale}${item.href}`;

            return (
              <Link
                key={i}
                href={fullPath}
                onClick={() => setOpen(false)}
                className="block text-[var(--text-muted)] hover:text-[var(--text)] transition"
              >
                {item.name}
              </Link>
            );
          })}

          <LanguageSwitcher />

          <Button fullWidth>
            {t("cta")}
          </Button>

        </div>
      </div>
    </nav>
  );
}


// "use client";

// import { useState } from "react";
// import { usePathname, useRouter, useParams } from "next/navigation";
// import Image from "next/image";
// import { Button, Container } from "@/components";
// import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
// import { Menu, X } from "lucide-react";

// const menus = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Contact", href: "/contact" }
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const params = useParams();

//   const locale = params.locale as string;

//   const handleNavigate = (href: string) => {
//     setOpen(false);

//     const path = href === "/" ? `/${locale}` : `/${locale}${href}`;

//     router.push(path);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <nav
//       className="
//         fixed top-0 left-0 w-full z-[999]
//         bg-[var(--bg)] border-b border-[var(--border)]
//         backdrop-blur
//       "
//     >
//       <Container className="h-16 flex items-center justify-between">

//         {/* ================= LOGO ================= */}
//         <button
//           onClick={() => handleNavigate("/")}
//           className="flex items-center gap-2 hover:opacity-80 transition"
//         >
//           <Image
//             src="/assets/favicon/logo.png"
//             alt="EphosTech"
//             width={40}
//             height={40}
//             className="object-contain"
//           />

//           <span className="font-semibold text-lg tracking-tight text-[var(--text)]">
//             EphosTech
//           </span>
//         </button>

//         {/* ================= DESKTOP MENU ================= */}
//         <div className="hidden md:flex items-center gap-8 text-sm">

//           {menus.map((item, i) => {
//             const isActive =
//               item.href === "/"
//                 ? pathname === `/${locale}`
//                 : pathname.startsWith(`/${locale}${item.href}`);

//             return (
//               <button
//                 key={i}
//                 onClick={() => handleNavigate(item.href)}
//                 className={`
//                   relative group transition
//                   ${
//                     isActive
//                       ? "text-[var(--text)]"
//                       : "text-[var(--text-muted)] hover:text-[var(--text)]"
//                   }
//                 `}
//               >
//                 {item.name}

//                 <span
//                   className={`
//                     absolute left-0 -bottom-1 h-[2px]
//                     bg-[var(--primary)] transition-all duration-300
//                     ${isActive ? "w-full" : "w-0 group-hover:w-full"}
//                   `}
//                 />
//               </button>
//             );
//           })}

//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="hidden md:flex items-center gap-5">

//           <LanguageSwitcher />

//           <Button size="sm">
//             Konsultasi
//           </Button>

//         </div>

//         {/* ================= MOBILE BUTTON ================= */}
//         <button
//           className="md:hidden text-[var(--text)]"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>

//       </Container>

//       {/* ================= MOBILE MENU ================= */}
//       <div
//         className={`
//           md:hidden overflow-hidden transition-all duration-300
//           ${open ? "max-h-[500px]" : "max-h-0"}
//         `}
//       >
//         <div className="bg-[var(--bg)] border-t border-[var(--border)] px-6 py-6 space-y-5">

//           {menus.map((item, i) => (
//             <button
//               key={i}
//               onClick={() => handleNavigate(item.href)}
//               className="block w-full text-left text-[var(--text-muted)] hover:text-[var(--text)] transition"
//             >
//               {item.name}
//             </button>
//           ))}

//           {/* LANGUAGE SWITCHER */}
//           <LanguageSwitcher />

//           <Button fullWidth>
//             Konsultasi Gratis
//           </Button>

//         </div>
//       </div>

//     </nav>
//   );
// }