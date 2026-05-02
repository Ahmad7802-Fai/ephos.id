"use client";

import { Container } from "@/components";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";

/* ================= QR COMPONENT ================= */
function WhatsAppQR() {
  const waLink =
    "https://wa.me/6285285579492?text=Halo%20EphosTech,%20saya%20ingin%20konsultasi";

  return (
    <div className="hidden md:flex flex-col items-center gap-3 mt-6">

      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
        <QRCodeSVG
          value={waLink}
          size={100}
          bgColor="#0B0F14"
          fgColor="#22c55e"
        />
      </div>

      <p className="text-[11px] text-white/40 text-center">
        Scan untuk chat WhatsApp
      </p>

    </div>
  );
}

/* ================= SOCIAL ================= */
const socials = [
  {
    icon: "/icons/instagram.svg",
    href: "https://instagram.com/yourbrand",
  },
  {
    icon: "/icons/linkedin.svg",
    href: "https://linkedin.com/company/yourcompany",
  },
];

/* ================= FOOTER ================= */
export default function Footer() {
  const t = useTranslations("Footer");
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const menus = [
    { name: t("menu.home"), href: "/" },
    { name: t("menu.services"), href: "/services" },
    { name: t("menu.portfolio"), href: "/portfolio" },
    { name: t("menu.about"), href: "/about" },
    { name: t("menu.contact"), href: "/contact" },
  ];

  const navigate = (href: string) => {
    const path = href === "/" ? `/${locale}` : `/${locale}${href}`;
    router.push(path);
  };

  return (
    <footer className="relative bg-[#0B0F14] text-white overflow-hidden">

      {/* BG LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]" />

      <Container className="relative z-10 py-20">

        <div className="grid gap-12 md:grid-cols-3">

          {/* ================= BRAND ================= */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              EphosTech
            </h2>

            <p className="mt-1 text-xs text-blue-400 font-medium">
              {t("company")}
            </p>

            <p className="mt-4 text-sm text-white/60 max-w-sm leading-relaxed">
              {t("desc")}
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex gap-3">
              {socials.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group w-10 h-10 rounded-xl
                    bg-white/5 border border-white/10
                    flex items-center justify-center
                    hover:bg-blue-500 hover:border-blue-400
                    transition
                  "
                >
                  <img
                    src={item.icon}
                    className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:invert"
                  />
                </a>
              ))}
            </div>

            {/* TRUST */}
            <div className="mt-6 flex gap-3 text-xs text-white/40">
              <span>✔ 100+ Client</span>
              <span>✔ 99% Uptime</span>
            </div>
          </div>

          {/* ================= MENU ================= */}
          <div>
            <h3 className="font-semibold mb-4">
              {t("navigation")}
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              {menus.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate(item.href)}
                    className="hover:text-white transition"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CTA ================= */}
          <div>
            <h3 className="font-semibold mb-4">
              {t("consult")}
            </h3>

            <p className="text-sm text-white/60">
              {t("consultDesc")}
            </p>

            {/* BUTTON WA */}
            <a
              href="https://wa.me/6285285579492"
              target="_blank"
              className="
                inline-block mt-5 px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-500 to-blue-600
                text-white text-sm
                shadow-lg hover:scale-105 transition
              "
            >
              {t("cta")} →
            </a>

            {/* CONTACT */}
            <div className="mt-6 text-xs text-white/50 space-y-3">

              {/* EMAIL */}
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>info@ephostech.id</span>
              </div>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/6285285579492"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  hover:text-green-400
                  transition
                "
              >
                <img
                  src="/icons/whatsapp.svg"
                  className="w-[14px] h-[14px]"
                  alt="WhatsApp"
                />
                <span>+62 852 8557 9492</span>
              </a>

            </div>

            {/* QR CODE */}
            <WhatsAppQR />

          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} EphosTech
          </p>

          <div className="flex flex-col md:flex-row items-center gap-3 text-xs text-white/40">

            <div className="flex gap-5">
              <a href="#" className="hover:text-white">{t("privacy")}</a>
              <a href="#" className="hover:text-white">{t("terms")}</a>
            </div>

            <p className="text-[11px] text-white/30">
              {t("crafted")}{" "}
              <a
                href="https://ditelaga.digital"
                target="_blank"
                className="hover:text-white underline"
              >
                Ditelaga Creative Digital
              </a>
            </p>

          </div>

        </div>

      </Container>
    </footer>
  );
}