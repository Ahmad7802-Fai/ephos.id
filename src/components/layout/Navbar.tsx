"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button, Container } from "@/components";
import { Menu, X } from "lucide-react";

const menus = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHome]);

  // 🔥 HANDLE NAVIGATION (INI KUNCI UTAMA)
  const handleNavigate = (href: string) => {
    setOpen(false);

    if (href.startsWith("/#")) {
      // ke section di homepage
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          const id = href.replace("/#", "");
          document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
          });
        }, 300);
      } else {
        const id = href.replace("/#", "");
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      router.push(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-[999]
        transition-all duration-300
        
        ${
          isHome
            ? scrolled
              ? "bg-[#0B0F14]/80 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent"
            : "bg-white border-b border-gray-200 shadow-sm"
        }
      `}
    >
      <Container className="h-16 flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={() => handleNavigate("/")}
          className={`
            font-semibold text-lg tracking-tight
            ${isHome ? "text-white" : "text-gray-900"}
          `}
        >
          ephostech<span className="text-blue-500">.id</span>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          {menus.map((item, i) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.replace("/#", ""));

            return (
              <button
                key={i}
                onClick={() => handleNavigate(item.href)}
                className={`
                  relative group transition
                  ${
                    isHome
                      ? isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                      : isActive
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }
                `}
              >
                {item.name}

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px]
                    bg-blue-500 transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </button>
            );
          })}

        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button size="sm">
            Konsultasi
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className={`md:hidden ${isHome ? "text-white" : "text-gray-900"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </Container>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-[400px]" : "max-h-0"}
        `}
      >
        <div className="bg-white border-t border-gray-200 px-6 py-6 space-y-5">

          {menus.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavigate(item.href)}
              className="block w-full text-left text-gray-700 hover:text-gray-900 transition"
            >
              {item.name}
            </button>
          ))}

          <Button fullWidth>
            Konsultasi Gratis
          </Button>

        </div>
      </div>
    </nav>
  );
}